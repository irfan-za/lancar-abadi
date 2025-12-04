"use client";

import { useState, useMemo } from "react";
import SearchBar from "../../components/SearchBar";
import ProductGrid from "../../components/ProductGrid";
import { products } from "@/constants";

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter products based on search query
  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) {
      return products;
    }

    const query = searchQuery.toLowerCase();
    return products.filter((product) => {
      const searchableText = [product.title, product.description]
        .join(" ")
        .toLowerCase();

      return searchableText.includes(query);
    });
  }, [searchQuery]);

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

        <ProductGrid products={filteredProducts} />
      </div>
    </div>
  );
}
