import { CheckCircle2 } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="bg-background py-16 sm:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Tentang Lancar Abadi
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Toko plafon dan alat listrik terpercaya di Colomadu, Karanganyar
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-6">
            <p className="text-base leading-7 text-muted-foreground">
              <strong className="font-semibold text-foreground">
                Lancar Abadi
              </strong>{" "}
              adalah toko material bangunan yang berlokasi di Colomadu,
              Karanganyar, Jawa Tengah. Kami berkomitmen menyediakan berbagai
              produk berkualitas untuk kebutuhan plafon, rangka, dan alat
              listrik dengan harga yang kompetitif.
            </p>
            <p className="text-base leading-7 text-muted-foreground">
              Dengan pengalaman bertahun-tahun dalam industri material bangunan,
              kami memahami kebutuhan kontraktor, tukang, dan pemilik rumah.
              Kami menawarkan produk-produk pilihan dari brand terpercaya dengan
              stok yang selalu tersedia.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">
              Mengapa Memilih Kami?
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <h4 className="font-semibold text-foreground">
                    Produk Berkualitas
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Menjual produk dari brand ternama dengan standar kualitas
                    terjamin dan bergaransi.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <h4 className="font-semibold text-foreground">
                    Harga Kompetitif
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Kami menawarkan harga terbaik dan terjangkau untuk semua
                    kalangan, dari retail hingga proyek besar.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <h4 className="font-semibold text-foreground">
                    Stok Lengkap
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Berbagai jenis plafon gypsum, GRC, kalsiboard, rangka, alat
                    listrik, dan perlengkapan tukang selalu ready stock.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <h4 className="font-semibold text-foreground">
                    Pelayanan Ramah
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Tim kami siap membantu dan memberikan konsultasi untuk
                    kebutuhan proyek Anda.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <h4 className="font-semibold text-foreground">
                    Lokasi Strategis
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Berada di Colomadu, Karanganyar, mudah dijangkau dan dekat
                    dengan akses utama.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
