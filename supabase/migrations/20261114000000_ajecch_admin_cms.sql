create schema if not exists private;
revoke all on schema private from public, anon, authenticated;
grant usage on schema private to authenticated;

create table if not exists public.ajecch_admins (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null unique references auth.users(id) on delete cascade,
  display_name text not null,
  email text not null default '',
  role text not null check (role in ('super_admin', 'publisher')),
  seat smallint not null default 1,
  is_active boolean not null default true,
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint ajecch_admins_role_seat_check check (
    (role = 'super_admin' and seat in (1, 2))
    or (role = 'publisher' and seat = 1)
  )
);
create unique index if not exists ajecch_admins_active_seat_unique
  on public.ajecch_admins(role, seat) where is_active = true;
create index if not exists ajecch_admins_created_by_idx on public.ajecch_admins(created_by);

create table if not exists public.ajecch_media (
  id uuid primary key default gen_random_uuid(),
  slot text not null unique,
  label text not null,
  alt_text text not null default '',
  caption text,
  source_url text,
  storage_path text,
  is_visible boolean not null default true,
  created_by uuid references auth.users(id) on delete set null,
  updated_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint ajecch_media_has_source_check check (
    source_url is not null or storage_path is not null or is_visible = false
  )
);
create index if not exists ajecch_media_created_by_idx on public.ajecch_media(created_by);
create index if not exists ajecch_media_updated_by_idx on public.ajecch_media(updated_by);

create table if not exists public.ajecch_posts (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  excerpt text not null default '',
  body text not null default '',
  category text not null default 'news' check (category in ('news', 'announcement', 'event')),
  status text not null default 'draft' check (status in ('draft', 'published')),
  cover_media_id uuid references public.ajecch_media(id) on delete set null,
  published_at timestamptz,
  event_starts_at timestamptz,
  event_ends_at timestamptz,
  event_location text,
  created_by uuid references auth.users(id) on delete set null,
  updated_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists ajecch_posts_publication_idx on public.ajecch_posts(status, published_at desc);
create index if not exists ajecch_posts_cover_media_id_idx on public.ajecch_posts(cover_media_id);
create index if not exists ajecch_posts_created_by_idx on public.ajecch_posts(created_by);
create index if not exists ajecch_posts_updated_by_idx on public.ajecch_posts(updated_by);

create or replace function private.ajecch_has_role(p_roles text[])
returns boolean language sql stable security definer set search_path = ''
as $function$
  select exists (
    select 1 from public.ajecch_admins as admin
    where admin.user_id = (select auth.uid())
      and admin.is_active = true and admin.role = any (p_roles)
  );
$function$;
revoke all on function private.ajecch_has_role(text[]) from public, anon;
grant execute on function private.ajecch_has_role(text[]) to authenticated;

create or replace function private.ajecch_guard_active_super_admin()
returns trigger language plpgsql security definer set search_path = ''
as $function$
declare remaining_super_admins integer;
begin
  if old.role = 'super_admin' and old.is_active = true then
    if tg_op = 'DELETE' or new.role <> 'super_admin' or new.is_active = false then
      select count(*) into remaining_super_admins
      from public.ajecch_admins as admin
      where admin.role = 'super_admin' and admin.is_active = true
        and admin.user_id <> old.user_id;
      if remaining_super_admins < 1 then
        raise exception 'Au moins un compte Super Admin actif doit être conservé.';
      end if;
    end if;
  end if;
  if tg_op = 'DELETE' then return old; end if;
  return new;
end;
$function$;
drop trigger if exists ajecch_guard_active_super_admin on public.ajecch_admins;
create trigger ajecch_guard_active_super_admin before update or delete on public.ajecch_admins
for each row execute function private.ajecch_guard_active_super_admin();

create or replace function private.ajecch_set_updated_at()
returns trigger language plpgsql set search_path = ''
as $function$
begin new.updated_at = now(); return new; end;
$function$;
drop trigger if exists ajecch_admins_set_updated_at on public.ajecch_admins;
create trigger ajecch_admins_set_updated_at before update on public.ajecch_admins
for each row execute function private.ajecch_set_updated_at();
drop trigger if exists ajecch_media_set_updated_at on public.ajecch_media;
create trigger ajecch_media_set_updated_at before update on public.ajecch_media
for each row execute function private.ajecch_set_updated_at();
drop trigger if exists ajecch_posts_set_updated_at on public.ajecch_posts;
create trigger ajecch_posts_set_updated_at before update on public.ajecch_posts
for each row execute function private.ajecch_set_updated_at();

create table if not exists private.ajecch_bootstrap_tokens (
  token text primary key,
  used_at timestamptz,
  created_at timestamptz not null default now()
);
revoke all on table private.ajecch_bootstrap_tokens from public, anon, authenticated;

create or replace function public.ajecch_setup_available()
returns boolean language sql stable security definer set search_path = ''
as $function$
  select not exists (select 1 from public.ajecch_admins where is_active = true);
$function$;
revoke all on function public.ajecch_setup_available() from public, anon;
grant execute on function public.ajecch_setup_available() to authenticated;

create or replace function public.ajecch_bootstrap_super_admin(p_token text, p_display_name text)
returns void language plpgsql security definer set search_path = ''
as $function$
declare
  supplied_token text;
  current_user_id uuid := (select auth.uid());
  current_email text := coalesce((select auth.jwt()->>'email'), '');
begin
  if current_user_id is null then raise exception 'Connexion requise.'; end if;
  if p_display_name is null or length(trim(p_display_name)) < 2 or length(trim(p_display_name)) > 120 then
    raise exception 'Indiquez un nom valide (2 à 120 caractères).';
  end if;
  perform pg_advisory_xact_lock(hashtext('ajecch-admin-bootstrap'));
  select token into supplied_token from private.ajecch_bootstrap_tokens
    where token = p_token and used_at is null for update;
  if supplied_token is null then raise exception 'Code d’initialisation invalide ou déjà utilisé.'; end if;
  if exists (select 1 from public.ajecch_admins where is_active = true) then
    raise exception 'La configuration initiale est déjà terminée.';
  end if;
  insert into public.ajecch_admins(user_id, display_name, email, role, seat, is_active, created_by)
  values(current_user_id, trim(p_display_name), current_email, 'super_admin', 1, true, current_user_id);
  update private.ajecch_bootstrap_tokens set used_at = now()
    where token = supplied_token and used_at is null;
end;
$function$;
revoke all on function public.ajecch_bootstrap_super_admin(text, text) from public, anon;
grant execute on function public.ajecch_bootstrap_super_admin(text, text) to authenticated;

alter table public.ajecch_admins enable row level security;
alter table public.ajecch_media enable row level security;
alter table public.ajecch_posts enable row level security;

drop policy if exists "AJECCH admins can read their own record or all as super admin" on public.ajecch_admins;
create policy "AJECCH admins can read their own record or all as super admin"
on public.ajecch_admins for select to authenticated
using (user_id = (select auth.uid()) or (select private.ajecch_has_role(array['super_admin'])));
drop policy if exists "AJECCH super admins can add admins" on public.ajecch_admins;
create policy "AJECCH super admins can add admins" on public.ajecch_admins for insert to authenticated
with check ((select private.ajecch_has_role(array['super_admin'])));
drop policy if exists "AJECCH super admins can update admins" on public.ajecch_admins;
create policy "AJECCH super admins can update admins" on public.ajecch_admins for update to authenticated
using ((select private.ajecch_has_role(array['super_admin'])))
with check ((select private.ajecch_has_role(array['super_admin'])));
drop policy if exists "AJECCH super admins can delete admin access" on public.ajecch_admins;
create policy "AJECCH super admins can delete admin access" on public.ajecch_admins for delete to authenticated
using ((select private.ajecch_has_role(array['super_admin'])));

drop policy if exists "AJECCH public can read media configuration" on public.ajecch_media;
create policy "AJECCH public can read media configuration" on public.ajecch_media for select to anon, authenticated using (true);
drop policy if exists "AJECCH editors can add media" on public.ajecch_media;
create policy "AJECCH editors can add media" on public.ajecch_media for insert to authenticated
with check ((select private.ajecch_has_role(array['super_admin', 'publisher'])));
drop policy if exists "AJECCH editors can update media" on public.ajecch_media;
create policy "AJECCH editors can update media" on public.ajecch_media for update to authenticated
using ((select private.ajecch_has_role(array['super_admin', 'publisher'])))
with check ((select private.ajecch_has_role(array['super_admin', 'publisher'])));
drop policy if exists "AJECCH editors can delete media" on public.ajecch_media;
create policy "AJECCH editors can delete media" on public.ajecch_media for delete to authenticated
using ((select private.ajecch_has_role(array['super_admin', 'publisher'])));

drop policy if exists "AJECCH public can read published posts" on public.ajecch_posts;
create policy "AJECCH public can read published posts" on public.ajecch_posts for select to anon, authenticated
using (status = 'published' or (select private.ajecch_has_role(array['super_admin', 'publisher'])));
drop policy if exists "AJECCH editors can add posts" on public.ajecch_posts;
create policy "AJECCH editors can add posts" on public.ajecch_posts for insert to authenticated
with check ((select private.ajecch_has_role(array['super_admin', 'publisher'])));
drop policy if exists "AJECCH editors can update posts" on public.ajecch_posts;
create policy "AJECCH editors can update posts" on public.ajecch_posts for update to authenticated
using ((select private.ajecch_has_role(array['super_admin', 'publisher'])))
with check ((select private.ajecch_has_role(array['super_admin', 'publisher'])));
drop policy if exists "AJECCH editors can delete posts" on public.ajecch_posts;
create policy "AJECCH editors can delete posts" on public.ajecch_posts for delete to authenticated
using ((select private.ajecch_has_role(array['super_admin', 'publisher'])));

grant usage on schema public to anon, authenticated;
grant select on public.ajecch_media, public.ajecch_posts to anon, authenticated;
grant select, insert, update, delete on public.ajecch_admins to authenticated;
grant insert, update, delete on public.ajecch_media, public.ajecch_posts to authenticated;

insert into storage.buckets(id, name, public, file_size_limit, allowed_mime_types)
values('ajecch-public-media', 'ajecch-public-media', true, 8388608,
  array['image/jpeg', 'image/png', 'image/webp', 'image/avif'])
on conflict (id) do update set public = excluded.public,
  file_size_limit = excluded.file_size_limit, allowed_mime_types = excluded.allowed_mime_types;
drop policy if exists "AJECCH public image delivery" on storage.objects;
create policy "AJECCH public image delivery" on storage.objects for select to public
using (bucket_id = 'ajecch-public-media');
drop policy if exists "AJECCH editors can upload images" on storage.objects;
create policy "AJECCH editors can upload images" on storage.objects for insert to authenticated
with check (bucket_id = 'ajecch-public-media' and (select private.ajecch_has_role(array['super_admin', 'publisher'])));
drop policy if exists "AJECCH editors can replace images" on storage.objects;
create policy "AJECCH editors can replace images" on storage.objects for update to authenticated
using (bucket_id = 'ajecch-public-media' and (select private.ajecch_has_role(array['super_admin', 'publisher'])))
with check (bucket_id = 'ajecch-public-media' and (select private.ajecch_has_role(array['super_admin', 'publisher'])));
drop policy if exists "AJECCH editors can delete images" on storage.objects;
create policy "AJECCH editors can delete images" on storage.objects for delete to authenticated
using (bucket_id = 'ajecch-public-media' and (select private.ajecch_has_role(array['super_admin', 'publisher'])));

insert into public.ajecch_media(slot, label, alt_text, source_url, is_visible) values
('brand.logo', 'Logo AJECCH', 'Logo officiel de l’AJECCH', 'https://scontent.fpap4-1.fna.fbcdn.net/v/t39.30808-6/764661311_122134184751148120_413651985315372038_n.jpg?stp=c0.169.1536.1536a_dst-jpg_tt6&cstp=mx1536x1536&ctp=s206x206&_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=50ad20&_nc_eui2=AeHETjiahjbkRYeddHrcEwLHV4av5SRKKtdXhq_lJEoq19H7ZI3RQAqrN3Ey-ZE_sFzWqboPlMltoL8hFy7wCfWQ&_nc_ohc=XCPsP9COi9gQ7kNvwFZVwVw&_nc_oc=Adpgl3kebf_oC_ZZTe_dMAgNxF8HTKao4NIu-VcJ1kML3mqnoghC_Pk-aMYMF_XBDcg&_nc_zt=23&_nc_ht=scontent.fpap4-1.fna&_nc_gid=VN9LKD53F7yH1QPdVCVNrw&_nc_ss=7b2a8&oh=00_AQTqDuJPU-XFBQk7bxejgT4G1CH76sbJM_Tonf35MT4BMw&oe=6AFDAD91', true),
('home.hero', 'Bannière principale', 'Littoral de Labadie, Nord d’Haïti', 'https://images.pexels.com/photos/8868160/pexels-photo-8868160.jpeg?auto=compress&cs=tinysrgb&w=2600', true),
('home.actions', 'Image des actions', 'Lumière naturelle traversant une végétation tropicale dense', 'https://images.pexels.com/photos/17772875/pexels-photo-17772875.jpeg?auto=compress&cs=tinysrgb&w=1800', true),
('home.gallery', 'Aperçu de la galerie', 'Littoral de Labadie, image d’ambiance', 'https://images.pexels.com/photos/8868160/pexels-photo-8868160.jpeg?auto=compress&cs=tinysrgb&w=1400', true),
('home.contact', 'Fond de contact', 'Littoral de Labadie, image d’ambiance', 'https://images.pexels.com/photos/8868160/pexels-photo-8868160.jpeg?auto=compress&cs=tinysrgb&w=2200', true)
on conflict (slot) do nothing;

insert into public.ajecch_posts(slug, title, excerpt, body, category, status,
  event_starts_at, event_ends_at, event_location, published_at)
values('reflexe-genie-premiere-edition', '#REFLEXE GÉNIE',
  '1ère édition · 05–14 février 2027 · Cap-Haïtien',
  'Les horaires, le lieu précis et les modalités de participation seront communiqués par l’association.',
  'event', 'published', '2027-02-05 00:00:00-05', '2027-02-14 23:59:00-05', 'Cap-Haïtien', now())
on conflict (slug) do nothing;
