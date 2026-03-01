
import { createClient } from "@/lib/supabase/server";

export const revalidate = 86400; // 1 day

export default async function sitemap() {
  const supabase = await createClient();

  const { data: products, error: productsError } = await supabase
    .from("offline_products")
    .select("slug");
  if (productsError || !products) return [];
  const productUrls = products.map((product) => {
    return {
      url: `${process.env.NEXT_PUBLIC_DOMAIN}/products/${product.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    };
  });
  return [
    {
      url: `${process.env.NEXT_PUBLIC_DOMAIN}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_DOMAIN}/products`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...productUrls,
  ];
}
