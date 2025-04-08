
import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-background pt-16 pb-8 border-t border-primary/10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div>
            <h3 className="text-xl font-playfair font-semibold mb-6 text-primary">Scent Zone</h3>
            <p className="text-foreground/70 mb-4">
              Your destination for authentic and premium fragrances from around the world.
            </p>
            <p className="text-foreground/70">
              Founded by Hassan Al-Mansouri
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-foreground/70 hover:text-primary transition-colors">About Us</a>
              </li>
              <li>
                <a href="#featured" className="text-foreground/70 hover:text-primary transition-colors">Featured Perfumes</a>
              </li>
              <li>
                <a href="#contact" className="text-foreground/70 hover:text-primary transition-colors">Location</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-6">Featured Brands</h3>
            <ul className="space-y-3">
              <li className="text-foreground/70">Lattafa Perfumes</li>
              <li className="text-foreground/70">Armaf Collection</li>
              <li className="text-foreground/70">Afnan Perfumes</li>
              <li className="text-foreground/70">Paris Corner</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-6">Contact</h3>
            <ul className="space-y-3">
              <li className="text-foreground/70">
                LULU HYPER BIN MAHMOUD
              </li>
              <li className="text-foreground/70">
                Phone: +974 7080 2543
              </li>
              <li>
                <a href="https://wa.me/9747080254" className="text-primary hover:underline">
                  WhatsApp: +974 7080 2543
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-muted flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/60 text-sm">
            &copy; {new Date().getFullYear()} Scent Zone Perfumes. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="mt-4 md:mt-0 bg-muted p-3 rounded-full border border-primary/20 text-primary hover:bg-primary/10 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
