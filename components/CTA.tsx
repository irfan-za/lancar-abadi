import { Phone } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section id="contact" className="bg-primary py-16 sm:py-24">
      <div className="container mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
          Butuh Konsultasi atau Pemesanan?
        </h2>
        <p className="mt-4 text-lg text-primary-foreground/90">
          Tim kami siap membantu kebutuhan material bangunan Anda. Hubungi kami
          sekarang untuk informasi produk, harga, dan ketersediaan stok.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="https://wa.me/6281329226469"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-background px-6 py-3 text-base font-semibold text-foreground shadow-sm transition-all hover:bg-background/90 hover:shadow-md"
          >
            <Phone className="h-5 w-5" />
            Hubungi via WhatsApp
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-primary-foreground bg-transparent px-6 py-3 text-base font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary-foreground/10"
          >
            Lihat Katalog Produk
          </Link>
        </div>
      </div>
    </section>
  );
}
