"use client";

import { useState, useEffect, useCallback } from "react";
import SearchBar from "../../components/SearchBar";
import ProductGrid from "../../components/ProductGrid";
import { OfflineProduct } from "@/types/product";
import { AlertCircle } from "lucide-react";

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState<OfflineProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = useCallback(async (query: string) => {
    setLoading(true);
    setError(null);
    try {
      const url = query.trim()
        ? `/api/products?search=${encodeURIComponent(query.trim())}`
        : "/api/products";
      const res = await fetch(url);
      const data = await res.json();
      
      if (!res.ok) {
        setError(data.error || "Terjadi kesalahan saat memuat produk.");
        setProducts([]);
      } else {
        setProducts(data);
      }
    } catch (error) {
      console.error("Failed to fetch products:", error);
      setError("Gagal terhubung ke server.");
    } finally {
      setLoading(false);
    }
  }, []);

  
  useEffect(() => {
    fetchProducts("");
  }, [fetchProducts]);

  
  useEffect(() => {
    const timer = setTimeout(() => {
      fetchProducts(searchQuery);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchQuery, fetchProducts]);

  return (
    <div className="min-h-screen bg-background py-12 sm:py-16">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Katalog Produk
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Temukan berbagai produk plafon, rangka, dan alat listrik berkualitas
          </p>
        </div>

        <div className="mb-8 flex justify-center">
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Cari produk (gypsum, plafon, rangka, lampu, dll)..."
          />
        </div>

        {error && (
          <div className="mx-auto mb-8 flex max-w-2xl items-center gap-3 rounded-lg border border-destructive/50 bg-destructive/10 p-4 text-destructive">
            <AlertCircle className="h-5 w-5 shrink-0" />
            <p className="text-sm font-medium">{error}</p>
          </div>
        )}

        {loading ? (
          <div className="flex min-h-[400px] items-center justify-center">
            <div className="text-center">
              <div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
              <p className="text-sm text-muted-foreground">Memuat produk...</p>
            </div>
          </div>
        ) : (
          <ProductGrid products={products} />
        )}
      </div>
    </div>
  );
}
