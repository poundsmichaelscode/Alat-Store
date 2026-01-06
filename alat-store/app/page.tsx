import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ProductsPreview from "@/components/ProductsPreview";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <ProductsPreview />
      <CallToAction />
      <Footer />
    </main>
  );
}
