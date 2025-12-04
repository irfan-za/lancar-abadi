import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Phone, Package } from "lucide-react";
import { products } from "@/constants";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

// Generate metadata for each product
export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return {
      title: "Produk Tidak Ditemukan - Lancar Abadi",
    };
  }

  return {
    title: `${product.title} - Lancar Abadi`,
    description: product.description,
    keywords: [product.title, "lancar abadi", "toko listrik", "alat tukang"],
    openGraph: {
      images: [product.image],
    },
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const whatsappMessage = encodeURIComponent(
    `Halo, saya tertarik dengan produk: ${product.title}\n\nBisa info lebih lanjut mengenai stok dan harganya?`
  );
  const whatsappUrl = `https://wa.me/6281329226469?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen bg-background py-8 sm:py-12">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/products"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Kembali ke Katalog
        </Link>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="relative aspect-square overflow-hidden rounded-lg border border-border bg-muted shadow-lg">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="flex flex-col space-y-6">
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {product.title}
            </h1>
            <div className="space-y-2">
              <h2 className="text-lg font-semibold text-foreground">
                Deskripsi Produk
              </h2>
              <p className="text-base leading-7 text-muted-foreground">
                {product.description}
              </p>
            </div>

            <div className="flex flex-col gap-3 pt-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md"
              >
                <Phone className="h-5 w-5" />
                Pesan via WhatsApp
              </a>
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-background px-6 py-3 text-base font-semibold text-foreground shadow-sm transition-all hover:bg-accent hover:shadow-md"
              >
                <Package className="h-5 w-5" />
                Lihat Produk Lainnya
              </Link>
            </div>

            <div className="rounded-lg border border-border bg-muted/40 p-4 text-sm text-muted-foreground">
              <p className="font-medium text-foreground">
                📦 Informasi Tambahan:
              </p>
              <ul className="mt-2 space-y-1">
                <li>✓ Stok tersedia dan siap kirim</li>
                <li>✓ Harga dapat berubah sewaktu-waktu</li>
                <li>✓ Untuk pemesanan dalam jumlah besar, hubungi kami</li>
                <li>✓ Gratis konsultasi untuk proyek Anda</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
