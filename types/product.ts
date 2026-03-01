export interface OfflineProduct {
  id: string;
  created_at: string;
  title: string;
  descriptions: string[] | null;
  image_urls: string[] | null;
  slug: string | null;
}

