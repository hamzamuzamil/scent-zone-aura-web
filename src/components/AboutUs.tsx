
import React from 'react';
import AnimatedSection from './AnimatedSection';
import { Award, Star, Check, Diamond } from 'lucide-react';

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-muted arabesque-pattern">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="slide-right">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 border border-primary/30 bg-primary/5"></div>
              <div className="rounded-md overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1621905252151-76b2c64abacf?q=80&w=1974&auto=format&fit=crop" 
                  alt="Elegant Fragrance Display" 
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end p-6">
                  <p className="text-lg text-white font-light italic">
                    "Excellence in every bottle"
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-primary/30 bg-primary/5"></div>
              
              <div className="absolute -top-8 -right-8 p-4 bg-background border border-primary/20 rounded-md shadow-lg transform rotate-6 w-40">
                <img 
                  src="https://images.unsplash.com/photo-1595425964071-2c95adbe69f8?q=80&w=400&auto=format&fit=crop" 
                  alt="Perfume Detail" 
                  className="w-full h-auto rounded"
                />
              </div>
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
            
            <AnimatedSection animation="zoom-in" delay={0.4}>
              <div className="mt-8 p-6 bg-background rounded-md border border-primary/20 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                  <img 
                    src="https://images.unsplash.com/photo-1632332224158-383d5d59a5c8?q=80&w=1000&auto=format&fit=crop" 
                    alt="Pattern" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xl md:text-2xl font-kufi text-primary text-center mb-2 leading-relaxed relative z-10">
                  "العطر هو بصمتك التي لا تُنسى"
                </p>
                <p className="text-center text-foreground/70 italic relative z-10">
                  "Fragrance is your unforgettable signature"
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="slide-up" delay={0.5}>
              <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 border border-primary/30 rounded-md text-center glass-effect group transition-all hover:border-primary">
                  <div className="p-2 bg-primary/10 rounded-full mx-auto w-12 h-12 flex items-center justify-center mb-2 group-hover:bg-primary/20 transition-all">
                    <Award className="text-primary" size={20} />
                  </div>
                  <p className="text-sm text-foreground/80">Luxury Brands</p>
                </div>
                
                <div className="p-4 border border-primary/30 rounded-md text-center glass-effect group transition-all hover:border-primary">
                  <div className="p-2 bg-primary/10 rounded-full mx-auto w-12 h-12 flex items-center justify-center mb-2 group-hover:bg-primary/20 transition-all">
                    <Check className="text-primary" size={20} />
                  </div>
                  <p className="text-sm text-foreground/80">100% Authentic</p>
                </div>
                
                <div className="p-4 border border-primary/30 rounded-md text-center glass-effect group transition-all hover:border-primary">
                  <div className="p-2 bg-primary/10 rounded-full mx-auto w-12 h-12 flex items-center justify-center mb-2 group-hover:bg-primary/20 transition-all">
                    <Star className="text-primary" size={20} />
                  </div>
                  <p className="text-sm text-foreground/80">Expert Guidance</p>
                </div>
                
                <div className="p-4 border border-primary/30 rounded-md text-center glass-effect group transition-all hover:border-primary">
                  <div className="p-2 bg-primary/10 rounded-full mx-auto w-12 h-12 flex items-center justify-center mb-2 group-hover:bg-primary/20 transition-all">
                    <Diamond className="text-primary" size={20} />
                  </div>
                  <p className="text-sm text-foreground/80">Exclusive Collection</p>
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
