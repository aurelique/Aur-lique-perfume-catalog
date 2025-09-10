
import React from 'react';
import { PERFUMES } from '../constants';
import { Perfume } from '../types';

const BestSellerCard: React.FC<{ perfume: Perfume }> = ({ perfume }) => {
  return (
    <div className="group relative overflow-hidden rounded-sm cursor-pointer bg-brand-black text-brand-ivory shadow-lg">
      <img src={perfume.image} alt={perfume.name} className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:opacity-75" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
      <div className="absolute top-2 left-2 bg-brand-gold text-brand-black text-xs font-bold uppercase px-3 py-1 tracking-wider">Best Seller</div>
      <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
        <h3 className="font-serif text-2xl font-semibold">{perfume.name}</h3>
        <p className="font-sans text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-0 group-hover:h-auto mt-1">{perfume.tagline}</p>
      </div>
    </div>
  );
};

const BestSellers: React.FC = () => {
  const bestSellers = PERFUMES.filter(p => p.isBestSeller);

  return (
    <section id="bestsellers" className="py-20 md:py-32 bg-brand-ivory">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-black mb-4">Our Best Sellers</h2>
        <p className="font-sans text-lg text-gray-700 max-w-2xl mx-auto mb-12">Adored by many, these are the signature scents that define Aurélìque.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {bestSellers.map(perfume => (
            <BestSellerCard key={perfume.id} perfume={perfume} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
