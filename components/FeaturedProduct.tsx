import ProductGrid from "./ProductGrid";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { products } from "@/constants";

export default function FeaturedProduct() {
  const featuredProducts = products.slice(0, 8);

  return (
    <section className="bg-muted/40 py-16 sm:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Produk Pilihan Kami
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Berbagai produk berkualitas untuk kebutuhan plafon dan alat listrik
            Anda
          </p>
        </div>

        <ProductGrid products={featuredProducts} limit={8} />

        <div className="mt-12 text-center">
          <Link
            href="/products"
            className="group inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md"
          >
            Lihat Semua Produk
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
