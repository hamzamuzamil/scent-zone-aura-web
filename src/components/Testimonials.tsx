
import React from 'react';
import AnimatedSection from './AnimatedSection';
import { Quote } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface TestimonialProps {
  quote: string;
  author: string;
  location: string;
  image: string;
  rating: number;
  delay: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, location, image, rating, delay }) => {
  return (
    <AnimatedSection animation="fade-in" delay={delay} className="bg-muted/80 backdrop-blur-md p-6 rounded-md border border-primary/10 hover:border-primary/30 transition-all relative h-full">
      <div className="absolute -top-5 left-6">
        <Quote className="text-primary/20" size={40} />
      </div>
      
      <div className="flex gap-1 mb-4 pt-3">
        {[...Array(5)].map((_, i) => (
          <svg 
            key={i} 
            xmlns="http://www.w3.org/2000/svg" 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill={i < rating ? "#D4AF37" : "none"} 
            stroke="#D4AF37" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="transition-all"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        ))}
      </div>
      
      <p className="text-foreground/90 italic mb-6 relative z-10">{quote}</p>
      
      <div className="flex items-center mt-auto">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-primary/20">
          <img src={image} alt={author} className="w-full h-full object-cover" />
        </div>
        <div>
          <p className="text-primary font-medium">{author}</p>
          <p className="text-foreground/60 text-sm">{location}</p>
        </div>
      </div>
    </AnimatedSection>
  );
};

const MobileCarousel: React.FC<{testimonials: any[]}> = ({ testimonials }) => {
  return (
    <AnimatedSection animation="fade-in" className="md:hidden">
      <Carousel className="w-full">
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index}>
              <Testimonial 
                quote={testimonial.quote}
                author={testimonial.author}
                location={testimonial.location}
                image={testimonial.image}
                rating={testimonial.rating}
                delay={0}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center mt-4">
          <CarouselPrevious className="static translate-y-0 mr-2" />
          <CarouselNext className="static translate-y-0 ml-2" />
        </div>
      </Carousel>
    </AnimatedSection>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "The quality and authenticity of fragrances at Scent Zone are unmatched. Hassan's expertise helped me find exactly the scent I was looking for. I'll be a customer for life!",
      author: "Ahmed Al-Thani",
      location: "Doha, Qatar",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop",
      rating: 5
    },
    {
      quote: "I've been a loyal customer for years. Their collection of Lattafa perfumes is impressive, and the service is always exceptional. They truly understand the art of perfumery.",
      author: "Fatima Khalid",
      location: "Abu Dhabi, UAE",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&auto=format&fit=crop",
      rating: 5
    },
    {
      quote: "The Armaf Club De Nuit I purchased has become my signature scent. Excellent quality at a reasonable price point. I receive compliments everywhere I go.",
      author: "Mohammed Al-Kubaisi",
      location: "Doha, Qatar",
      image: "https://images.unsplash.com/photo-1584999734482-0361aecad844?q=80&w=300&auto=format&fit=crop",
      rating: 4
    }
  ];

  return (
    <section className="relative py-20">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1631031189074-bc1a93d215a3?q=80&w=1974&auto=format&fit=crop" 
          alt="Luxury Background" 
          className="w-full h-full object-cover brightness-[0.15]" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background/60"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <AnimatedSection animation="fade-in" className="text-center mb-14">
          <p className="text-primary uppercase tracking-wider mb-3">Customer Experiences</p>
          <h2 className="text-3xl md:text-4xl font-bold gold-accent">What Our Clients Say</h2>
        </AnimatedSection>
        
        <MobileCarousel testimonials={testimonials} />
        
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Testimonial 
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              location={testimonial.location}
              image={testimonial.image}
              rating={testimonial.rating}
              delay={0.2 * index}
            />
          ))}
        </div>
        
        <AnimatedSection animation="slide-up" delay={0.6} className="mt-14 text-center">
          <div className="p-8 bg-muted/60 backdrop-blur-sm rounded-lg border border-primary/20 max-w-2xl mx-auto relative overflow-hidden">
            <div className="absolute -top-12 -right-12 opacity-10">
              <img 
                src="https://images.unsplash.com/photo-1589570221260-fe5be3680ce7?q=80&w=500&auto=format&fit=crop" 
                alt="Arabic Pattern" 
                className="w-48 h-48 object-cover"
              />
            </div>
            <p className="text-xl md:text-2xl font-kufi text-primary mb-3 leading-relaxed relative z-10">
              "عطرك يتحدث عنك قبل أن تتكلم"
            </p>
            <p className="text-foreground/80 italic relative z-10">
              "Your fragrance speaks about you before you speak"
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Testimonials;
