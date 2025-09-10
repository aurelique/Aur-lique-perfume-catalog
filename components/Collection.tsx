import React, { useState, useMemo, useEffect } from 'react';
import { PERFUMES } from '../constants';
import { Perfume, FragranceFamily, Usage } from '../types';
import PerfumeCard from './PerfumeCard';

type SortOption = 'price_asc' | 'price_desc' | 'name_asc' | 'name_desc';

const Collection: React.FC = () => {
  const [perfumes, setPerfumes] = useState<Perfume[]>(PERFUMES);
  const [familyFilter, setFamilyFilter] = useState<string>('all');
  const [usageFilter, setUsageFilter] = useState<string>('all');
  const [sortOption, setSortOption] = useState<SortOption>('name_asc');
  
  const [activeCard, setActiveCard] = useState<number | null>(null);

  useEffect(() => {
    let filtered = [...PERFUMES];

    if (familyFilter !== 'all') {
      filtered = filtered.filter(p => p.mainChords.includes(familyFilter as FragranceFamily));
    }
    if (usageFilter !== 'all') {
      filtered = filtered.filter(p => p.usage === usageFilter);
    }
    
    const sorted = filtered.sort((a, b) => {
      switch (sortOption) {
        case 'price_asc': return a.price - b.price;
        case 'price_desc': return b.price - a.price;
        case 'name_desc': return b.name.localeCompare(a.name);
        case 'name_asc':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    setPerfumes(sorted);
  }, [familyFilter, usageFilter, sortOption]);

  const filterStyle = "bg-brand-ivory border border-gray-300 text-brand-black text-sm rounded-md focus:ring-brand-gold focus:border-brand-gold block w-full p-2.5";
  const labelStyle = "block mb-2 text-sm font-medium text-gray-700";

  return (
    <section id="collection" className="pt-32 pb-20 bg-brand-ivory">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-brand-black">Our Collection</h1>
          <p className="font-sans text-lg text-gray-600 mt-4 max-w-2xl mx-auto">Explore our full range of meticulously crafted fragrances.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 p-6 bg-white rounded-lg shadow-sm">
          <div>
            <label htmlFor="family-filter" className={labelStyle}>Fragrance Family</label>
            <select id="family-filter" value={familyFilter} onChange={e => setFamilyFilter(e.target.value)} className={filterStyle}>
              <option value="all">All Families</option>
              {Object.values(FragranceFamily).map(family => (
                <option key={family} value={family}>{family}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="usage-filter" className={labelStyle}>Recommended Usage</label>
            <select id="usage-filter" value={usageFilter} onChange={e => setUsageFilter(e.target.value)} className={filterStyle}>
              <option value="all">All Usages</option>
              {Object.values(Usage).map(use => (
                <option key={use} value={use}>{use}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="sort-by" className={labelStyle}>Sort By</label>
            <select id="sort-by" value={sortOption} onChange={e => setSortOption(e.target.value as SortOption)} className={filterStyle}>
              <option value="name_asc">Name (A-Z)</option>
              <option value="name_desc">Name (Z-A)</option>
              <option value="price_asc">Price (Low to High)</option>
              <option value="price_desc">Price (High to Low)</option>
            </select>
          </div>
        </div>
        
        {perfumes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {perfumes.map(perfume => (
              <PerfumeCard 
                key={perfume.id} 
                perfume={perfume} 
                isExpanded={activeCard === perfume.id}
                onToggle={() => setActiveCard(activeCard === perfume.id ? null : perfume.id)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-xl text-gray-500">No perfumes match your criteria.</p>
          </div>
        )}

      </div>
    </section>
  );
};

export default Collection;