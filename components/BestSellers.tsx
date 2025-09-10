
import React, { useState, useEffect, useRef } from 'react';
import { PERFUMES } from '../constants';
import { Perfume } from '../types';

interface BestSellerCardProps {
  perfume: Perfume;
  isExpanded: boolean;
  onToggle: () => void;
}

const BestSellerCard: React.FC<BestSellerCardProps> = ({ perfume, isExpanded, onToggle }) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 flex flex-col overflow-hidden text-left h-full">
      <div className="relative">
        <img src={perfume.image} alt={perfume.name} className="w-full h-80 object-cover" />
        <div className="absolute top-3 left-3 bg-brand-gold text-brand-black text-xs font-bold uppercase px-3 py-1 tracking-wider rounded-sm">Best Seller</div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="font-serif text-2xl font-semibold text-brand-black">{perfume.name}</h3>
        <p className="text-sm text-gray-500 mb-3">{perfume.tagline}</p>
        <p className="font-sans text-xl font-bold text-brand-gold mb-4">{formatPrice(perfume.price)}</p>

        <div 
          className={`transition-all duration-500 ease-in-out grid gap-3 overflow-hidden ${isExpanded ? 'max-h-96 opacity-100 mt-2 mb-4' : 'max-h-0 opacity-0'}`}
        >
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-gray-500">Main Accords</h4>
            <p className="text-sm text-gray-700">{perfume.mainChords.join(', ')}</p>
          </div>
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-gray-500">Usage</h4>
            <p className="text-sm text-gray-700">{perfume.usage}</p>
          </div>
        </div>
        
        <div className="mt-auto pt-4">
          <button
            onClick={onToggle}
            className="w-full text-center text-brand-gold font-bold py-2 px-4 rounded-md hover:bg-brand-gold hover:text-brand-black border-2 border-brand-gold transition-colors duration-300"
          >
            {isExpanded ? 'Show Less' : 'Details'}
          </button>
        </div>
      </div>
    </div>
  );
};

const BestSellers: React.FC = () => {
  const bestSellers = PERFUMES.filter(p => p.isBestSeller);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1, // Animate when 10% of the section is visible
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} id="bestsellers" className="py-20 md:py-32 bg-brand-ivory">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-black mb-4">Our Best Sellers</h2>
        <p className="font-sans text-lg text-gray-700 max-w-2xl mx-auto mb-12">Adored by many, these are the signature scents that define Aurélìque.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {bestSellers.map((perfume, index) => (
            <div
              key={perfume.id}
              className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <BestSellerCard 
                perfume={perfume} 
                isExpanded={activeCard === perfume.id}
                onToggle={() => setActiveCard(activeCard === perfume.id ? null : perfume.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
