import { Product } from "@/constants";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  products: Product[];
  limit?: number;
}

export default function ProductGrid({ products, limit }: ProductGridProps) {
  const displayProducts = limit ? products.slice(0, limit) : products;

  if (displayProducts.length === 0) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <div className="text-center">
          <p className="text-lg font-medium text-muted-foreground">
            Tidak ada produk ditemukan
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Coba ubah kata kunci pencarian Anda
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {displayProducts.map((product) => (
        <ProductCard key={product.slug} {...product} />
      ))}
    </div>
  );
}
