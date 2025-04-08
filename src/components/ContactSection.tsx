
import React from 'react';
import { MapPin, Phone, Clock, ArrowRight, Mail, Instagram, Facebook, User } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { Card, CardContent } from "@/components/ui/card";

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
            <div className="bg-background rounded-lg overflow-hidden h-full shadow-lg border border-primary/10">
              <div className="aspect-w-16 aspect-h-9 relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.3040091264856!2d51.53269937613215!3d25.28397477736554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45da78dcb71ebd%3A0x29e95c8e67f82fbb!2sLuLu%20Hypermarket%20Al%20Messila!5e0!3m2!1sen!2sus!4v1712607387271!5m2!1sen!2sus" 
                  width="100%" 
                  height="450" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Scent Zone Perfumes Location"
                  className="rounded-t-lg"
                ></iframe>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background to-transparent">
                  <p className="text-primary text-sm">Scent Zone Perfumes</p>
                  <p className="text-white text-xs">Lulu Hypermarket, Bin Mahmoud</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
          
          <div className="space-y-6">
            <AnimatedSection animation="slide-up" delay={0.2}>
              <Card className="bg-background/50 backdrop-blur-sm border-primary/20 overflow-hidden group hover:border-primary/30 transition-all">
                <CardContent className="p-6 relative">
                  <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/5 rounded-full"></div>
                  <div className="flex items-start space-x-4 relative z-10">
                    <div className="bg-primary/10 p-3 rounded-md group-hover:bg-primary/20 transition-colors">
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
                </CardContent>
              </Card>
            </AnimatedSection>
            
            <AnimatedSection animation="slide-up" delay={0.3}>
              <Card className="bg-background/50 backdrop-blur-sm border-primary/20 overflow-hidden group hover:border-primary/30 transition-all">
                <CardContent className="p-6 relative">
                  <div className="absolute -left-10 -top-10 w-32 h-32 bg-primary/5 rounded-full"></div>
                  <div className="flex items-start space-x-4 relative z-10">
                    <div className="bg-primary/10 p-3 rounded-md group-hover:bg-primary/20 transition-colors">
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
                </CardContent>
              </Card>
            </AnimatedSection>
            
            <AnimatedSection animation="slide-up" delay={0.4}>
              <Card className="bg-background/50 backdrop-blur-sm border-primary/20 overflow-hidden group hover:border-primary/30 transition-all">
                <CardContent className="p-6 relative">
                  <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-primary/5 rounded-full"></div>
                  <div className="flex items-start space-x-4 relative z-10">
                    <div className="bg-primary/10 p-3 rounded-md group-hover:bg-primary/20 transition-colors">
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
                </CardContent>
              </Card>
            </AnimatedSection>
            
            <AnimatedSection animation="zoom-in" delay={0.5}>
              <Card className="backdrop-blur-sm border-primary overflow-hidden golden-shadow bg-gradient-to-br from-primary/20 to-background">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center justify-center text-center p-4">
                    <div className="w-16 h-16 rounded-full border-2 border-primary/40 mb-4 overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop" 
                        alt="Hassan Al-Mansouri" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-medium">Hassan Al-Mansouri</h3>
                    <p className="text-primary/80 text-sm mb-4">Owner & Perfume Specialist</p>
                    
                    <div className="flex space-x-3 mt-2">
                      <a href="tel:+9747080254" className="p-2 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors">
                        <Phone size={18} className="text-primary" />
                      </a>
                      <a href="mailto:info@scentzone.com" className="p-2 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors">
                        <Mail size={18} className="text-primary" />
                      </a>
                      <a href="#" className="p-2 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors">
                        <Instagram size={18} className="text-primary" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
            
            <AnimatedSection animation="slide-up" delay={0.6}>
              <div className="mt-6">
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
