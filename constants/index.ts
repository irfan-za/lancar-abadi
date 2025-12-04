export interface Product {
  slug: string;
  title: string;
  description: string;
  image: string;
}
const products = [
  {
    slug: "plafon-gypsum-9mm",
    title: "Plafon Gypsum 9mm",
    description:
      "Plafon gypsum berkualitas untuk interior rumah dan bangunan. Permukaan halus, tahan lama, dan mudah diaplikasikan. Cocok untuk ruang tamu, kamar tidur, dan ruangan lainnya.",
    image: "/products/gypsum-board.jpg",
  },
  {
    slug: "plafon-grc",
    title: "Plafon GRC (Glassfiber Reinforced Cement)",
    description:
      "Plafon GRC premium dengan kekuatan tinggi dan tahan air. Ideal untuk area lembab seperti kamar mandi dan dapur. Lebih kuat dari gypsum biasa.",
    image: "/products/grc-board.jpg",
  },
  {
    slug: "kalsiboard",
    title: "Kalsiboard",
    description:
      "Papan semen berbahan kalsium silikat. Anti rayap, tahan api, dan tahan air. Cocok untuk plafon dan partisi dengan ketahanan ekstra.",
    image: "/products/kalsiboard.jpg",
  },
  {
    slug: "rangka-hollow-galvanis",
    title: "Rangka Hollow Galvanis",
    description:
      "Rangka hollow baja ringan dengan lapisan galvanis anti karat. Kuat dan kokoh untuk konstruksi plafon gypsum dan GRC. Tersedia berbagai ukuran.",
    image: "/products/hollow-galvanis.jpg",
  },
  {
    slug: "metal-stud",
    title: "Metal Stud ",
    description:
      "Metal stud untuk rangka plafon dan partisi. Bahan baja ringan berkualitas, presisi dan mudah dipasang. Tersedia ukuran standar.",
    image: "/products/metal-stud.jpg",
  },
  {
    slug: "u-runner",
    title: "U Runner",
    description:
      "U Runner atau track untuk kerangka utama plafon. Profil U berkualitas tinggi dengan ketebalan optimal untuk menopang beban plafon.",
    image: "/products/metal-stud.jpg",
  },
  {
    slug: "wall-angle",
    title: "Wall Angle",
    description:
      "Wall angle untuk list tepi plafon. Profil L yang dipasang pada dinding sebagai penyangga rangka plafon. Finishing rapi dan kuat.",
    image: "/products/wall-angle.jpg",
  },
  {
    slug: "shadow-line",
    title: "Shadow Line / Lis Plafon Minimalis",
    description:
      "Shadow line untuk finishing plafon minimalis modern. Menciptakan efek garis bayangan yang elegan pada sambungan plafon dan dinding.",
    image: "/products/shadowline.jpg",
  },
  {
    slug: "sekrup-gypsum",
    title: "Sekrup Gypsum",
    description:
      "Sekrup khusus untuk pemasangan gypsum. Ujung tajam dan ulir halus memudahkan pemasangan tanpa merusak papan gypsum.",
    image: "/products/sekrup-gypsum.jpg",
  },
  {
    slug: "paku-beton",
    title: "Paku Beton / Concrete Nail",
    description:
      "Paku khusus untuk beton dan tembok keras. Material baja berkualitas tinggi dengan daya tahan extra kuat.",
    image: "/products/paku-beton.jpg",
  },
  {
    slug: "tang-potong",
    title: "Tang Potong",
    description:
      "Tang potong serbaguna untuk memotong kawat, kabel, dan material tipis lainnya. Pegangan ergonomis dan mata tajam.",
    image: "/products/tang-potong.jpg",
  },
  {
    slug: "palu-besi",
    title: "Palu Besi",
    description:
      "Palu dengan kepala besi solid dan gagang kayu yang kuat. Cocok untuk pekerjaan konstruksi umum dan pemasangan paku.",
    image: "/products/palu-besi.jpg",
  },
  {
    slug: "kabel-listrik-nym",
    title: "Kabel Listrik NYM 2x1.5mm",
    description:
      "Kabel listrik standar SNI untuk instalasi rumah dan bangunan. Isolasi ganda, tahan panas dan aman digunakan.",
    image: "/products/kabel-nym.jpg",
  },
  {
    slug: "stop-kontak-broco",
    title: "Stop Kontak Broco",
    description:
      "Stop kontak (colokan) merk Broco standar SNI. Kualitas terjamin, aman dan awet untuk penggunaan jangka panjang.",
    image: "/products/stop-kontak.jpg",
  },
  {
    slug: "saklar-ganda-broco",
    title: "Saklar Ganda Broco",
    description:
      "Saklar ganda merk Broco dengan desain modern. Material berkualitas, kontak bagus, dan tahan lama.",
    image: "/products/saklar-ganda.jpg",
  },
  {
    slug: "lampu-led-downlight",
    title: "Lampu LED Downlight 5 Watt",
    description:
      "Lampu LED downlight hemat energi 5 watt. Cahaya putih terang, cocok untuk plafon gypsum. Tahan lama hingga 25.000 jam.",
    image: "/products/led-downlight.jpg",
  },
  {
    slug: "lampu-led-bulb",
    title: "Lampu LED Bulb 9 Watt",
    description:
      "Lampu LED bulb 9 watt pengganti bohlam pijar. Hemat energi hingga 80%, cahaya terang dan umur panjang.",
    image: "/products/led-bulb.jpg",
  },
  {
    slug: "meteran-5m",
    title: "Meteran 5 Meter",
    description:
      "Meteran gulung 5 meter dengan pengunci otomatis. Tape ukur presisi dengan housing tahan benturan.",
    image: "/products/meteran.jpg",
  },
  {
    slug: "cornice-compound",
    title: "Cornice Compound/kompon",
    description:
      "Lem khusus untuk sambungan dan finishing plafon gypsum. Mudah diaplikasikan, cepat kering, dan hasil halus.",
    image: "/products/compound.jpg",
  },
];

const socialMedia = [
  {
    link: "https://www.instagram.com/sumbergriyaabadi",
    alt: "Instagram Sumber Griya Abadi",
    image: "/ig.svg",
  },
  {
    link: "https://web.facebook.com/sumbergriyaabadi?_rdc=1&_rdr",
    alt: "Facebook Sumber Griya Abadi",
    image: "/fb.svg",
  },
  {
    link: "https://www.tiktok.com/@sumbergriyaabadi",
    alt: "Tiktok Sumber Griya Abadi",
    image: "/tiktok.svg",
  },
  {
    link: "https://www.youtube.com/@sumbergriyaabadi",
    alt: "Youtube Sumber Griya Abadi",
    image: "/yt.svg",
  },
  {
    link: `https://api.whatsapp.com/send?phone=${process.env.NEXT_PUBLIC_PHONE}&text=halo%20pak%2C%20saya%20mau%20konsultasi%20Plafon.`,
    alt: "Whatsapp Sumber Griya Abadi",
    image: "/wa.svg",
  },
];
export { products, socialMedia };
