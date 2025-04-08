
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
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr_70CBMIyp9yYHdsmDfWDRaD9IzvTY1h_cw&s&auto=format&fit=crop",
      price: "$55.99",
      rating: 4.8,
      notes: ["Amber", "Vanilla", "Oud", "Praline"]
    },
    {
      name: "Club De Nuit Intense",
      brand: "Armaf",
      description: "A bold, masculine fragrance with fresh fruity notes and smoky undertones.",
      image: "https://www.trendify.pk/cdn/shop/products/armaf-club-de-nuit-intense-men-edt-105ml.jpg?v=1661246380&auto=format&fit=crop",
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
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj10GfzIpxjiDwrOzazGbAWlWR1kk1l9JR5Q&s&auto=format&fit=crop",
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
