import "server-only";
import { createClient } from "@/lib/supabase/server";

export type AjecchRole = "super_admin" | "publisher";
export type AjecchAdmin = {
  id: string;
  user_id: string;
  display_name: string;
  email: string;
  role: AjecchRole;
  seat: number;
  is_active: boolean;
};

export async function getAjecchAdmin() {
  const supabase = await createClient();
  const { data: claimsData, error: claimsError } = await supabase.auth.getClaims();
  const claims = claimsData?.claims;
  const userId = typeof claims?.sub === "string" ? claims.sub : null;
  if (claimsError || !userId) return { supabase, claims: null, admin: null as AjecchAdmin | null };

  const { data } = await supabase
    .from("ajecch_admins")
    .select("id,user_id,display_name,email,role,seat,is_active")
    .eq("user_id", userId)
    .eq("is_active", true)
    .maybeSingle();

  return { supabase, claims, admin: (data as AjecchAdmin | null) ?? null };
}
