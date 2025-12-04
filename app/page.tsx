import Link from "next/link";
import { Phone } from "lucide-react";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import FeaturedProduct from "../components/FeaturedProduct";
import CTA from "../components/CTA";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <FeaturedProduct />
      <CTA />
    </>
  );
}
