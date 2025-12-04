"use client";
import Link from "next/link";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex items-center">
            <span className="text-xl font-bold text-primary sm:text-2xl">
              Lancar Abadi
            </span>
          </div>
        </Link>

        <div className="hidden items-center space-x-6 md:flex">
          <Link
            href="/"
            className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
          >
            Beranda
          </Link>
          <Link
            href="/#about"
            className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
          >
            Tentang
          </Link>
          <Link
            href="/products"
            className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
          >
            Produk
          </Link>
          <Link
            href="/#contact"
            className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
          >
            Kontak
          </Link>
          <Link
            href="https://wa.me/6281329226469"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Hubungi Kami
          </Link>
        </div>

        <button
          className="md:hidden"
          aria-label="Toggle menu"
          onClick={() => {
            const menu = document.getElementById("mobile-menu");
            menu?.classList.toggle("hidden");
          }}
        >
          <Menu className="h-6 w-6" />
        </button>
      </nav>

      <div
        id="mobile-menu"
        className="hidden border-t border-border/40 md:hidden"
      >
        <div className="container mx-auto space-y-1 px-4 py-4">
          <Link
            href="/"
            className="block rounded-lg px-3 py-2 text-base font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-foreground"
          >
            Beranda
          </Link>
          <Link
            href="/#about"
            className="block rounded-lg px-3 py-2 text-base font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-foreground"
          >
            Tentang
          </Link>
          <Link
            href="/products"
            className="block rounded-lg px-3 py-2 text-base font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-foreground"
          >
            Produk
          </Link>
          <Link
            href="/#contact"
            className="block rounded-lg px-3 py-2 text-base font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-foreground"
          >
            Kontak
          </Link>
          <Link
            href="https://wa.me/6281329226469"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-lg bg-primary px-3 py-2 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Hubungi Kami
          </Link>
        </div>
      </div>
    </header>
  );
}
