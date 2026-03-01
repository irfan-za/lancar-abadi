import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Phone } from "lucide-react";
import { marketplaces, socialMedia } from "@/constants";
import { getProductBySlug } from "@/lib/supabase/products";
import ImageCarousel from "@/components/ImageCarousel";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return {
      title: "Produk Tidak Ditemukan - Lancar Abadi",
    };
  }

  return {
    title: `${product.title} - Lancar Abadi`,
    description: product.descriptions?.join(" ") ?? "",
    keywords: [product.title, "lancar abadi", "toko listrik", "alat tukang"],
    openGraph: {
      images: product.image_urls?.[0] ? [product.image_urls[0]] : [],
    },
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const whatsappMessage = encodeURIComponent(
    `Halo, saya tertarik dengan produk: ${product.title}\n\nBisa info lebih lanjut mengenai stok dan harganya?`
  );
  const whatsappUrl = `${process.env.NEXT_PUBLIC_WHATSAPP_URL}?text=${whatsappMessage}`;

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
          <ImageCarousel
            images={product.image_urls ?? []}
            alt={product.title}
          />

          <div className="flex flex-col space-y-6">
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {product.title}
            </h1>
            <div className="space-y-2">
              <h2 className="text-lg font-semibold text-foreground">
                Deskripsi Produk
              </h2>
              {product.descriptions && product.descriptions.length > 0 ? (
                <ul className="space-y-2 text-base leading-7 text-muted-foreground">
                  {product.descriptions.map((desc, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-base leading-7 text-muted-foreground">
                  Tidak ada deskripsi tersedia.
                </p>
              )}
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
      
            </div>

            <div className="pt-6 mt-2 border-t border-border">
              <p className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">
                Bisa dibeli di :
              </p>
              <div className="flex flex-wrap gap-4">
                {marketplaces.map((item) => (
                  <Link
                    key={item.name}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center"
                    title={item.name}
                  >
                    <Image src={item.image} alt={item.alt} width={24} height={24} className="h-full w-full object-contain" />
                  </Link>
                ))}
              </div>
              <p className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider mt-4">
                Sosial media :
              </p>
              <div className="flex flex-wrap gap-4">
                {socialMedia.map((item) => (
                  <Link
                    key={item.name}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background p-2.5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md hover:border-primary/50"
                    title={item.name}
                  >
                    <Image src={item.image} alt={item.alt} width={24} height={24} className="h-full w-full object-contain" />
                  </Link>
                ))}
              </div>
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
