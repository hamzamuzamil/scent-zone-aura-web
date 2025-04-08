
import React from 'react';
import AnimatedSection from './AnimatedSection';

interface TestimonialProps {
  quote: string;
  author: string;
  rating: number;
  delay: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, rating, delay }) => {
  return (
    <AnimatedSection animation="fade-in" delay={delay} className="bg-muted p-6 rounded-md border border-primary/10 hover:border-primary/30 transition-all">
      <div className="flex gap-1 mb-4">
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
      <p className="text-foreground/90 italic mb-4">{quote}</p>
      <p className="text-primary font-medium">{author}</p>
    </AnimatedSection>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "The quality and authenticity of fragrances at Scent Zone are unmatched. Hassan's expertise helped me find exactly the scent I was looking for.",
      author: "Ahmed Al-Thani",
      rating: 5
    },
    {
      quote: "I've been a loyal customer for years. Their collection of Lattafa perfumes is impressive, and the service is always exceptional.",
      author: "Fatima Khalid",
      rating: 5
    },
    {
      quote: "The Armaf Club De Nuit I purchased has become my signature scent. Excellent quality at a reasonable price point.",
      author: "Mohammed Al-Kubaisi",
      rating: 4
    }
  ];

  return (
    <section className="relative py-20">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1631031189074-bc1a93d215a3" 
          alt="Luxury Background" 
          className="w-full h-full object-cover brightness-[0.2]" 
        />
      </div>
      
      <div className="container-custom relative z-10">
        <AnimatedSection animation="fade-in" className="text-center mb-14">
          <p className="text-primary uppercase tracking-wider mb-3">Customer Experiences</p>
          <h2 className="text-3xl md:text-4xl font-bold gold-accent">What Our Clients Say</h2>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Testimonial 
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              rating={testimonial.rating}
              delay={0.2 * index}
            />
          ))}
        </div>
        
        <AnimatedSection animation="slide-up" delay={0.6} className="mt-14 text-center">
          <div className="p-8 bg-muted/80 backdrop-blur-sm rounded-lg border border-primary/20 max-w-2xl mx-auto">
            <p className="text-xl md:text-2xl font-kufi text-primary mb-3 leading-relaxed">
              "عطرك يتحدث عنك قبل أن تتكلم"
            </p>
            <p className="text-foreground/80 italic">
              "Your fragrance speaks about you before you speak"
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Testimonials;
