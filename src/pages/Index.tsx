
import React, { useEffect } from 'react';
import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import FeaturedPerfumes from '@/components/FeaturedPerfumes';
import Testimonials from '@/components/Testimonials';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Update page title
    document.title = "SCENT ZONE PERFUMES | Luxury Fragrances";
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Hero />
      <AboutUs />
      <FeaturedPerfumes />
      <Testimonials />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
