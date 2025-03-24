import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/sections/HeroSection';
import ArtOriginSection from '@/components/sections/ArtOriginSection';
import BrandSection from '@/components/sections/BrandSection';
import ProductsSection from '@/components/sections/ProductsSection';
import GallerySection from '@/components/sections/GallerySection';
import ContactCTA from '@/components/sections/ContactCTA';
import NewsCarousel from '@/components/sections/NewsCarousel';

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <ArtOriginSection />
      <BrandSection />
      <ProductsSection />
      <NewsCarousel />
      <GallerySection />
      <ContactCTA />
    </Layout>
  );
}
