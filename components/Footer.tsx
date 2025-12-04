import Link from "next/link";
import { MapPin, Phone, Clock } from "lucide-react";
import { socialMedia } from "@/constants";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-muted/40">
      <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              Lancar Abadi
            </h3>
            <p className="text-sm text-muted-foreground">
              Toko plafon dan alat listrik terpercaya di Colomadu, Karanganyar.
              Menyediakan berbagai kebutuhan material bangunan dan perlengkapan
              tukang dengan harga terjangkau.
            </p>
            <div className="flex flex-col space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span className="text-muted-foreground">
                  Colomadu, Karanganyar, Jawa Tengah
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <a
                  href="https://wa.me/6281329226469"
                  className="text-muted-foreground hover:text-foreground"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +62 813-2922-6469
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 shrink-0 text-primary" />
                <span className="text-muted-foreground">
                  Senin - Sabtu: 08.00 - 16.00 WIB
                </span>
              </div>
              <p className="text-lg font-semibold text-slate-800 dark:text-white">
                Media Sosial :
              </p>
              <div className="flex flex-row gap-2">
                {socialMedia &&
                  socialMedia.map((item) => (
                    <Link href={item.link} key={item.link}>
                      <Image
                        src={item.image}
                        alt={item.alt}
                        className="dark:invert"
                        width={36}
                        height={36}
                      />
                    </Link>
                  ))}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              Tautan Cepat
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  href="/#about"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Katalog Produk
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Kontak
                </Link>
              </li>
              <li>
                <Link
                  href="https://sumbergriyaabadi.com"
                  target="_blank"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Sumber Griya Abadi
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Lokasi</h3>
            <div className="overflow-hidden rounded-lg border border-border">
              <iframe
                className="w-full h-48 sm:h-64"
                src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=lancar abadi colomadu&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                allowFullScreen
                loading="lazy"
                title="Lokasi Lancar Abadi"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2013 - {new Date().getFullYear()} Lancar Abadi. Semua hak
            dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}
