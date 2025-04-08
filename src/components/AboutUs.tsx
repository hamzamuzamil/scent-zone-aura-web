
import React from 'react';
import AnimatedSection from './AnimatedSection';

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-muted ornament">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="slide-right">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 border border-primary/30"></div>
              <img 
                src="https://images.unsplash.com/photo-1621905252151-76b2c64abacf" 
                alt="Elegant Fragrance Display" 
                className="w-full h-[500px] object-cover rounded-md"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-primary/30"></div>
            </div>
          </AnimatedSection>
          
          <div className="space-y-6">
            <AnimatedSection animation="fade-in">
              <h2 className="text-3xl md:text-4xl font-bold gold-accent-left">About Scent Zone</h2>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in" delay={0.2}>
              <p className="text-lg text-foreground/90">
                Founded by <span className="text-primary">Hassan Al-Mansouri</span>, Scent Zone Perfumes is a premium fragrance boutique specializing in authentic Arabian and designer perfumes. Our curated collection brings together the finest scents from the Middle East and around the world.
              </p>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in" delay={0.3}>
              <p className="text-lg text-foreground/80">
                We pride ourselves on offering only genuine products from renowned brands including Lattafa, Armaf, Afnan, and Paris Corner, ensuring that our customers experience the true essence of luxury fragrances.
              </p>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in" delay={0.4}>
              <div className="mt-8 p-6 bg-background rounded-md border border-primary/20">
                <p className="text-xl md:text-2xl font-kufi text-primary text-center mb-2 leading-relaxed">
                  "العطر هو بصمتك التي لا تُنسى"
                </p>
                <p className="text-center text-foreground/70 italic">
                  "Fragrance is your unforgettable signature"
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in" delay={0.5}>
              <div className="mt-6 flex flex-wrap gap-4">
                <div className="px-4 py-2 border border-primary/30 rounded-md text-sm text-foreground/80">
                  Luxury Brands
                </div>
                <div className="px-4 py-2 border border-primary/30 rounded-md text-sm text-foreground/80">
                  100% Authentic
                </div>
                <div className="px-4 py-2 border border-primary/30 rounded-md text-sm text-foreground/80">
                  Expert Guidance
                </div>
                <div className="px-4 py-2 border border-primary/30 rounded-md text-sm text-foreground/80">
                  Exclusive Collection
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
