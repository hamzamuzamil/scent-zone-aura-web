
import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import { Compass, Heart, Star, Eye } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface PerfumeCardProps {
  name: string;
  brand: string;
  description: string;
  image: string;
  price: string;
  rating: number;
  notes: string[];
  delay: number;
}

const PerfumeCard: React.FC<PerfumeCardProps> = ({ name, brand, description, image, price, rating, notes, delay }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <AnimatedSection animation="slide-up" delay={delay} className="fancy-card group h-full">
      <div 
        className="relative overflow-hidden h-72"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img 
          src={image} 
          alt={name} 
          className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
        
        <div className="absolute top-4 left-4">
          <span className="bg-primary/90 text-primary-foreground text-xs px-3 py-1 rounded-full">
            {brand}
          </span>
        </div>
        
        <div className="absolute top-4 right-4">
          <div className="flex items-center space-x-1 bg-background/70 backdrop-blur-sm px-2 py-1 rounded-full">
            <Star className="text-primary" size={12} />
            <span className="text-xs text-foreground">{rating.toFixed(1)}</span>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-4 transform transition-transform duration-300">
          <h3 className="text-xl font-semibold text-white">{name}</h3>
          <div className="flex justify-between items-center mt-1">
            <p className="text-primary font-semibold">{price}</p>
            <div className="flex space-x-2">
              <button className="p-2 bg-muted rounded-full hover:bg-primary/20 transition-colors">
                <Heart size={16} className="text-primary" />
              </button>
              <button className="p-2 bg-muted rounded-full hover:bg-primary/20 transition-colors">
                <Eye size={16} className="text-primary" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="p-6">
        <p className="text-foreground/80 mb-4 text-sm">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {notes.map((note, index) => (
            <span 
              key={index} 
              className="text-xs px-3 py-1 rounded-full bg-muted border border-primary/20 text-foreground/70"
            >
              {note}
            </span>
          ))}
        </div>
        <button className="text-sm text-primary font-medium hover:underline flex items-center">
          View Details <Compass size={14} className="ml-1" />
        </button>
      </div>
    </AnimatedSection>
  );
};

const MobileCarousel: React.FC<{perfumes: any[]}> = ({ perfumes }) => {
  return (
    <AnimatedSection animation="fade-in" className="md:hidden mt-8">
      <Carousel className="w-full">
        <CarouselContent>
          {perfumes.map((perfume, index) => (
            <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
              <PerfumeCard 
                key={index}
                name={perfume.name}
                brand={perfume.brand}
                description={perfume.description}
                image={perfume.image}
                price={perfume.price}
                rating={perfume.rating}
                notes={perfume.notes}
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

const FeaturedPerfumes: React.FC = () => {
  const perfumes = [
    {
      name: "Raghba Wood Intense",
      brand: "Lattafa",
      description: "A captivating blend of oriental woods with sweet vanilla and ambery undertones.",
      image: "data:image/jpeg;base64,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&auto=format&fit=crop",
      price: "$55.99",
      rating: 4.8,
      notes: ["Amber", "Vanilla", "Oud", "Praline"]
    },
    {
      name: "Club De Nuit Intense",
      brand: "Armaf",
      description: "A bold, masculine fragrance with fresh fruity notes and smoky undertones.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFvLdJS7AbnK7sTI44oMVKvwnOBgwp9ESJqw&s&auto=format&fit=crop",
      price: "$42.99",
      rating: 4.7,
      notes: ["Lemon", "Blackcurrant", "Birch", "Pineapple"]
    },
    {
      name: "Supremacy Silver",
      brand: "Afnan",
      description: "A refreshing citrus blend with aromatic herbs and woody base notes.",
      image: "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?q=80&w=2070&auto=format&fit=crop",
      price: "$48.99",
      rating: 4.5,
      notes: ["Bergamot", "Grapefruit", "Patchouli", "Vetiver"]
    },
    {
      name: "Royal Mirage",
      brand: "Paris Corner",
      description: "An elegant floral composition with rich amber and vanilla undertones.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQGWZ14m6GDoR5DaQqYGBNSh2EfHFxxmMq2Q&s&auto=format&fit=crop",
      price: "$38.99",
      rating: 4.6,
      notes: ["Rose", "Jasmine", "Amber", "Vanilla"]
    },
    {
      name: "Al Fakhama",
      brand: "Lattafa",
      description: "A luxurious oriental fragrance with spicy cinnamon and sweet honey notes.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCIuHLKRBouq9fhlUbmZTuFs1Avk-PkNQeRQ&s&auto=format&fit=crop",
      price: "$59.99",
      rating: 4.9,
      notes: ["Cinnamon", "Honey", "Amber", "Musk"]
    },
    {
      name: "Tres Jour",
      brand: "Armaf",
      description: "A fresh and elegant scent with delicate florals and citrus accords.",
      image: "https://images.unsplash.com/photo-1600612253971-422e7f7faeb6?q=80&w=2070&auto=format&fit=crop",
      price: "$36.99",
      rating: 4.4,
      notes: ["Orange Blossom", "Jasmine", "Bergamot", "Sandalwood"]
    }
  ];

  return (
    <section id="featured" className="section-padding bg-background relative">
      <div className="absolute inset-0 opacity-5">
        <img 
          src="https://images.unsplash.com/photo-1595341595379-cf1cd0ed7ad1?q=80&w=1974&auto=format&fit=crop" 
          alt="Subtle Pattern" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container-custom relative z-10">
        <AnimatedSection animation="fade-in" className="text-center mb-14">
          <p className="text-primary uppercase tracking-wider mb-3">Our Collection</p>
          <h2 className="text-3xl md:text-4xl font-bold gold-accent">Featured Perfumes</h2>
          <p className="text-foreground/80 max-w-2xl mx-auto mt-4">
            Discover our carefully curated selection of premium fragrances from the world's finest perfume houses.
          </p>
        </AnimatedSection>
        
        <MobileCarousel perfumes={perfumes} />
        
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {perfumes.map((perfume, index) => (
            <PerfumeCard 
              key={index}
              name={perfume.name}
              brand={perfume.brand}
              description={perfume.description}
              image={perfume.image}
              price={perfume.price}
              rating={perfume.rating}
              notes={perfume.notes}
              delay={0.1 * index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPerfumes;
