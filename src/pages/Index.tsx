import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedCollections from "@/components/FeaturedCollections";
import ProductSpotlight from "@/components/ProductSpotlight";
import ProductGrid from "@/components/ProductGrid";
import BrandStory from "@/components/BrandStory";
import Testimonials from "@/components/Testimonials";
import VirtualTryOn from "@/components/VirtualTryOn";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <Navbar />
    <main>
      <Hero />
      <FeaturedCollections />
      <ProductSpotlight />
      <ProductGrid />
      <BrandStory />
      <Testimonials />
      <VirtualTryOn />
      <Newsletter />
    </main>
    <Footer />
  </>
);

export default Index;
