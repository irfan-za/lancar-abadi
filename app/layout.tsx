import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lancar Abadi - Toko Plafon & Alat Listrik di Solo",
  description:
    "Jual plafon gypsum, GRC, kalsiboard, rangka hollow, alat listrik, dan perlengkapan tukang di Solo, Jawa Tengah. Murah, lengkap, rekomendasi.",
  keywords: [
    "lancar abadi",
    "toko plafon",
    "plafon gypsum",
    "alat listrik",
    "toko listrik colomadu",
    "toko alat tukang",
  ],
  openGraph: {
    images: `${process.env.NEXT_PUBLIC_DOMAIN}/images/meta-image.jpg`,
  }};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main className="min-h-screen flex flex-col bg-background text-foreground">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
