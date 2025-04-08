
import React from 'react';
import { ArrowDown } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1610072625303-8e5a3a9f8e0e" 
          alt="Luxury Perfume" 
          className="w-full h-full object-cover animate-zoom brightness-[0.4]" 
        />
      </div>
      
      <div className="container-custom relative z-10 text-center px-4">
        <AnimatedSection animation="fade-in" delay={0.2}>
          <p className="text-primary uppercase tracking-[0.2em] mb-4">Scent Zone Perfumes</p>
        </AnimatedSection>
        
        <AnimatedSection animation="slide-up" delay={0.4}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-shadow">
            Redefining Fragrance. <br className="hidden md:block" />
            <span className="text-primary">Redefining You.</span>
          </h1>
        </AnimatedSection>
        
        <AnimatedSection animation="slide-up" delay={0.6}>
          <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto text-foreground/80">
            Discover curated collections of premium perfumes including Lattafa, Armaf, Afnan, and Paris Corner.
          </p>
        </AnimatedSection>
        
        <AnimatedSection animation="fade-in" delay={0.8}>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('featured')} 
              className="primary-button"
            >
              Explore Fragrance
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="secondary-button"
            >
              Visit Our Store
            </button>
          </div>
        </AnimatedSection>
      </div>
      
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
        onClick={() => scrollToSection('about')}
      >
        <ArrowDown className="text-primary" size={32} />
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
