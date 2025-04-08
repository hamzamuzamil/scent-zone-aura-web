
import React from 'react';
import AnimatedSection from './AnimatedSection';

interface PerfumeCardProps {
  name: string;
  brand: string;
  description: string;
  image: string;
  notes: string[];
  delay: number;
}

const PerfumeCard: React.FC<PerfumeCardProps> = ({ name, brand, description, image, notes, delay }) => {
  return (
    <AnimatedSection animation="slide-up" delay={delay} className="fancy-card group">
      <div className="relative overflow-hidden h-64">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <span className="text-primary text-sm">{brand}</span>
          <h3 className="text-xl font-semibold text-white">{name}</h3>
        </div>
      </div>
      <div className="p-6">
        <p className="text-foreground/80 mb-4">{description}</p>
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
        <button className="text-sm text-primary font-medium hover:underline">
          View Details
        </button>
      </div>
    </AnimatedSection>
  );
};

const FeaturedPerfumes: React.FC = () => {
  const perfumes = [
    {
      name: "Raghba Wood Intense",
      brand: "Lattafa",
      description: "A captivating blend of oriental woods with sweet vanilla and ambery undertones.",
      image: "https://images.unsplash.com/photo-1610901126853-f273ffb6d54a",
      notes: ["Amber", "Vanilla", "Oud", "Praline"]
    },
    {
      name: "Club De Nuit Intense",
      brand: "Armaf",
      description: "A bold, masculine fragrance with fresh fruity notes and smoky undertones.",
      image: "https://images.unsplash.com/photo-1628128094081-3b5aa2d61d75",
      notes: ["Lemon", "Blackcurrant", "Birch", "Pineapple"]
    },
    {
      name: "Supremacy Silver",
      brand: "Afnan",
      description: "A refreshing citrus blend with aromatic herbs and woody base notes.",
      image: "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?q=80&w=2070",
      notes: ["Bergamot", "Grapefruit", "Patchouli", "Vetiver"]
    },
    {
      name: "Royal Mirage",
      brand: "Paris Corner",
      description: "An elegant floral composition with rich amber and vanilla undertones.",
      image: "https://images.unsplash.com/photo-1615134545898-214f6e1b2cf6?q=80&w=2070",
      notes: ["Rose", "Jasmine", "Amber", "Vanilla"]
    },
    {
      name: "Al Fakhama",
      brand: "Lattafa",
      description: "A luxurious oriental fragrance with spicy cinnamon and sweet honey notes.",
      image: "https://images.unsplash.com/photo-1595425964071-2c95adbe69f8?q=80&w=2127",
      notes: ["Cinnamon", "Honey", "Amber", "Musk"]
    },
    {
      name: "Tres Jour",
      brand: "Armaf",
      description: "A fresh and elegant scent with delicate florals and citrus accords.",
      image: "https://images.unsplash.com/photo-1600612253971-422e7f7faeb6?q=80&w=2070",
      notes: ["Orange Blossom", "Jasmine", "Bergamot", "Sandalwood"]
    }
  ];

  return (
    <section id="featured" className="section-padding">
      <div className="container-custom">
        <AnimatedSection animation="fade-in" className="text-center mb-14">
          <p className="text-primary uppercase tracking-wider mb-3">Our Collection</p>
          <h2 className="text-3xl md:text-4xl font-bold gold-accent">Featured Perfumes</h2>
          <p className="text-foreground/80 max-w-2xl mx-auto mt-4">
            Discover our carefully curated selection of premium fragrances from the world's finest perfume houses.
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {perfumes.map((perfume, index) => (
            <PerfumeCard 
              key={index}
              name={perfume.name}
              brand={perfume.brand}
              description={perfume.description}
              image={perfume.image}
              notes={perfume.notes}
              delay={0.2 * index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPerfumes;
