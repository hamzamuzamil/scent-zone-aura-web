
import React, { useEffect, useState } from 'react';
import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import FeaturedPerfumes from '@/components/FeaturedPerfumes';
import Testimonials from '@/components/Testimonials';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { ArrowUp, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-3 bg-background/80 backdrop-blur-md shadow-md' : 'py-5 bg-transparent'}`}>
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="https://images.unsplash.com/photo-1628128094081-3b5aa2d61d75?q=80&w=200&auto=format&fit=crop" 
            alt="Scent Zone Logo" 
            className="w-10 h-10 rounded-full object-cover border border-primary/30 mr-3" 
          />
          <h2 className="text-xl font-bold text-foreground">
            <span className="text-primary">SCENT</span> ZONE
          </h2>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
          <button onClick={() => scrollToSection('featured')} className="nav-link">Collection</button>
          <button onClick={() => scrollToSection('testimonials')} className="nav-link">Testimonials</button>
          <button onClick={() => scrollToSection('contact')} className="nav-link">Visit Us</button>
        </nav>
        
        <button 
          className="md:hidden text-foreground p-2 hover:bg-muted/80 rounded-md"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg shadow-lg border-t border-border animate-slide-down p-4">
          <div className="flex flex-col space-y-4 py-2">
            <button onClick={() => scrollToSection('about')} className="p-3 hover:bg-muted/80 rounded-md text-left">About</button>
            <button onClick={() => scrollToSection('featured')} className="p-3 hover:bg-muted/80 rounded-md text-left">Collection</button>
            <button onClick={() => scrollToSection('testimonials')} className="p-3 hover:bg-muted/80 rounded-md text-left">Testimonials</button>
            <button onClick={() => scrollToSection('contact')} className="p-3 hover:bg-muted/80 rounded-md text-left">Visit Us</button>
            <a href="https://wa.me/9747080254" className="primary-button justify-center mt-2">Contact via WhatsApp</a>
          </div>
        </div>
      )}
    </header>
  );
};

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button 
      className={`fixed bottom-6 right-6 p-3 bg-primary rounded-full shadow-lg z-50 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      onClick={scrollToTop}
      style={{ display: isVisible ? 'block' : 'none' }}
    >
      <ArrowUp className="text-primary-foreground" size={20} />
    </button>
  );
};

const Index = () => {
  useEffect(() => {
    // Update page title
    document.title = "SCENT ZONE PERFUMES | Luxury Fragrances";
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <AboutUs />
      <FeaturedPerfumes />
      <div id="testimonials">
        <Testimonials />
      </div>
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
