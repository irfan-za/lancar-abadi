# Lancar Abadi - Toko Plafon & Alat Listrik

Website toko material bangunan Lancar Abadi. Dikembangkan dengan Next.js 16, TypeScript, Tailwind CSS, dan shadcn/ui.

## 🚀 Fitur

- ✅ **Landing Page** dengan Hero, About, Featured Products, dan CTA sections
- ✅ **SEO Optimized** dengan meta tags, Open Graph dan semantic HTML.
- ✅ **Responsive Design** untuk mobile dan desktop
- ✅ **Halaman Produk** dengan search bar dan grid layout
- ✅ **Detail Produk** dengan gambar, deskripsi, harga, dan WhatsApp CTA
- ✅ **Static Site Generation (SSG)** untuk performa optimal
- ✅ **Server Side Rendering (SSR)** by default dengan Next.js App Router

## 📦 Struktur Proyek

```
lancar-abadi/
├── components/          # Shared UI components
├── app/
│   ├── products/
│   │   ├── page.tsx         # /products - Searchable product grid
│   │   └── [id]/            # /products/[id] - Product detail page
│   ├── layout.tsx           # Root layout with Navbar & Footer
│   ├── page.tsx             # Landing page (/)
│   └── globals.css          # Global styles with Tailwind
├── public/
└── lib/
    └── utils.ts             # Utility functions (cn helper)
```

## 🛠️ Setup & Installation

### Prerequisites

- Node.js 20+
- pnpm (recommended) or npm

### Installation

1. **Install dependencies:**

   ```bash
   pnpm install
   ```

2. **Run development server:**

   ```bash
   pnpm dev
   ```

3. **Open browser:**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
pnpm build
pnpm start
```
