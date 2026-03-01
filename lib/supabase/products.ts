import { createClient } from "@/lib/supabase/server";
import { OfflineProduct } from "@/types/product";


export async function getProducts(): Promise<OfflineProduct[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("offline_products")
    .select("id, created_at, title, descriptions, image_urls, slug")
    .order("created_at", { ascending: true });

  if (error || !data) return [];
  return data;
}

export async function getFeaturedProducts(limit: number = 8): Promise<OfflineProduct[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("offline_products")
    .select("id, created_at, title, descriptions, image_urls, slug")
    .order("created_at", { ascending: true })
    .limit(limit);

  if (error || !data) return [];
  return data;
}

export async function getProductBySlug(slug: string): Promise<OfflineProduct | null> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("offline_products")
    .select("id, created_at, title, descriptions, image_urls, slug")
    .eq("slug", slug)
    .single();

  if (error || !data) return null;
  return data;
}

export async function searchProducts(query: string): Promise<OfflineProduct[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("offline_products")
    .select("id, created_at, title, descriptions, image_urls, slug")
    .ilike("title", `%${query}%`)
    .order("created_at", { ascending: true });

  if (error || !data) return [];
  return data;
}
