
import React from 'react';
import { MapPin, Phone, Clock, ArrowRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="section-padding bg-muted ornament">
      <div className="container-custom">
        <AnimatedSection animation="fade-in" className="text-center mb-14">
          <p className="text-primary uppercase tracking-wider mb-3">Get In Touch</p>
          <h2 className="text-3xl md:text-4xl font-bold gold-accent">Visit Our Store</h2>
          <p className="text-foreground/80 max-w-2xl mx-auto mt-4">
            Experience our exclusive collection of premium fragrances in person at our luxurious boutique.
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <AnimatedSection animation="slide-right">
            <div className="bg-background rounded-lg overflow-hidden h-full">
              <div className="aspect-w-16 aspect-h-9">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.3040091264856!2d51.53269937613215!3d25.28397477736554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45da78dcb71ebd%3A0x29e95c8e67f82fbb!2sLuLu%20Hypermarket%20Al%20Messila!5e0!3m2!1sen!2sus!4v1712607387271!5m2!1sen!2sus" 
                  width="100%" 
                  height="450" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Scent Zone Perfumes Location"
                ></iframe>
              </div>
            </div>
          </AnimatedSection>
          
          <div className="space-y-8">
            <AnimatedSection animation="fade-in" delay={0.2}>
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-md">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Our Location</h3>
                  <p className="text-foreground/80">
                    LULU HYPER BIN MAHMOUD — LATTAFA PERFUMES,<br />
                    FRENCH AVENUE, ARMAF, AFNAN, PARIS CORNER
                  </p>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in" delay={0.3}>
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-md">
                  <Phone className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Contact Number</h3>
                  <p className="text-foreground/80">+974 7080 2543</p>
                  <a href="https://wa.me/9747080254" className="inline-flex items-center text-primary mt-2 hover:underline">
                    Contact via WhatsApp <ArrowRight size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in" delay={0.4}>
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-md">
                  <Clock className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Opening Hours</h3>
                  <p className="text-foreground/80">
                    Monday - Saturday: 10:00 AM - 10:00 PM<br />
                    Friday: 2:00 PM - 10:00 PM
                  </p>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="slide-up" delay={0.5}>
              <div className="mt-8">
                <a 
                  href="https://wa.me/9747080254" 
                  className="primary-button w-full justify-center py-4"
                >
                  Contact via WhatsApp
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
