import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Toko Plafon & Alat Listrik{" "}
            <span className="text-primary">Terlengkap</span> di Colomadu
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl">
            Lancar Abadi menyediakan plafon gypsum, GRC, kalsiboard, rangka
            hollow, metal stud, dan berbagai alat listrik berkualitas dengan
            harga terjangkau. Solusi lengkap untuk kebutuhan material bangunan
            Anda.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/products"
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md"
            >
              Lihat Katalog Produk
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href={`${process.env.NEXT_PUBLIC_WHATSAPP_URL}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-background px-6 py-3 text-base font-semibold text-foreground shadow-sm transition-all hover:bg-accent hover:shadow-md"
            >
              <Phone className="h-5 w-5" />
              Hubungi Kami
            </Link>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-3">
            <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
              <div className="mb-2 text-3xl font-bold text-primary">500+</div>
              <div className="text-sm font-medium text-muted-foreground">
                Produk Tersedia
              </div>
            </div>
            <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
              <div className="mb-2 text-3xl font-bold text-primary">
                {new Date().getFullYear() - 2013}+
              </div>
              <div className="text-sm font-medium text-muted-foreground">
                Tahun Pengalaman
              </div>
            </div>
            <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
              <div className="mb-2 text-3xl font-bold text-primary">88%</div>
              <div className="text-sm font-medium text-muted-foreground">
                Kepuasan Pelanggan
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
