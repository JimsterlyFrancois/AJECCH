import { createClient } from "@supabase/supabase-js";

const DEFAULT_MEDIA: Record<string, { url: string; alt: string }> = {
  "brand.logo": { url: "", alt: "Logo officiel de l’AJECCH" },
  "home.hero": { url: "https://images.pexels.com/photos/8868160/pexels-photo-8868160.jpeg?auto=compress&cs=tinysrgb&w=2600", alt: "Littoral de Labadie, Nord d’Haïti — photo d’ambiance" },
  "home.actions": { url: "https://images.pexels.com/photos/17772875/pexels-photo-17772875.jpeg?auto=compress&cs=tinysrgb&w=1800", alt: "Lumière naturelle traversant une végétation tropicale dense" },
  "home.gallery": { url: "https://images.pexels.com/photos/8868160/pexels-photo-8868160.jpeg?auto=compress&cs=tinysrgb&w=1400", alt: "Littoral de Labadie — photo d’ambiance" },
  "home.contact": { url: "https://images.pexels.com/photos/8868160/pexels-photo-8868160.jpeg?auto=compress&cs=tinysrgb&w=2200", alt: "Littoral de Labadie — photo d’ambiance" }
};

type MediaRecord = {
  slot: string;
  source_url: string | null;
  storage_path: string | null;
  is_visible: boolean;
  alt_text: string | null;
};

function publicClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
  if (!url || !key) return null;
  return createClient(url, key, { auth: { persistSession: false, autoRefreshToken: false } });
}

export async function getSiteMedia() {
  const client = publicClient();
  if (!client) {
    return Object.fromEntries(Object.entries(DEFAULT_MEDIA).map(([slot, item]) => [slot, item.url || null])) as Record<string, string | null>;
  }

  const { data, error } = await client
    .from("ajecch_media")
    .select("slot,source_url,storage_path,is_visible,alt_text");

  if (error) {
    return Object.fromEntries(Object.entries(DEFAULT_MEDIA).map(([slot, item]) => [slot, item.url || null])) as Record<string, string | null>;
  }

  const result: Record<string, string | null> = {};
  for (const row of (data ?? []) as MediaRecord[]) {
    if (!row.is_visible) {
      result[row.slot] = null;
      continue;
    }
    if (row.storage_path) {
      result[row.slot] = client.storage.from("ajecch-public-media").getPublicUrl(row.storage_path).data.publicUrl;
    } else {
      result[row.slot] = row.source_url;
    }
  }
  return result;
}

export type PublicPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  category: "news" | "announcement" | "event";
  published_at: string | null;
  event_starts_at: string | null;
  event_ends_at: string | null;
  event_location: string | null;
  cover_media_id: string | null;
  cover_url?: string | null;
};

export async function getPublishedPosts() {
  const client = publicClient();
  if (!client) return [] as PublicPost[];

  const { data, error } = await client
    .from("ajecch_posts")
    .select("id,slug,title,excerpt,body,category,published_at,event_starts_at,event_ends_at,event_location,cover_media_id,cover_media:ajecch_media!ajecch_posts_cover_media_id_fkey(storage_path,source_url,is_visible)")
    .eq("status", "published")
    .order("published_at", { ascending: false });

  if (error || !data) return [] as PublicPost[];

  return data.map((row) => {
    const post = row as PublicPost & {
      cover_media?: { storage_path: string | null; source_url: string | null; is_visible: boolean } | null;
    };
    const cover = post.cover_media;
    const coverUrl = !cover || !cover.is_visible
      ? null
      : cover.storage_path
        ? client.storage.from("ajecch-public-media").getPublicUrl(cover.storage_path).data.publicUrl
        : cover.source_url;
    return { ...post, cover_url: coverUrl };
  });
}
