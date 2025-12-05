import Hero from '@/components/sections/Hero';
import FeaturedProjects from '@/components/sections/FeaturedProjects';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import ServicesPreview from '@/components/sections/ServicesPreview';
import TestimonialsSection from '@/components/sections/TestimonialsSection';

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <FeaturedProjects />
      <ServicesPreview />
      <TestimonialsSection />
    </>
  );
}

