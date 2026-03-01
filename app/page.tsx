import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import FeaturedProduct from "../components/FeaturedProduct";
import CTA from "../components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProduct />
      <AboutSection />
      <CTA />
    </>
  );
}
