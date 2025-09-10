
import React from 'react';
import { Perfume } from '../types';

interface PerfumeCardProps {
  perfume: Perfume;
  isExpanded: boolean;
  onToggle: () => void;
}

const PerfumeCard: React.FC<PerfumeCardProps> = ({ perfume, isExpanded, onToggle }) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const NoteSection: React.FC<{ title: string; notes: string[] }> = ({ title, notes }) => (
    <div>
      <h4 className="font-bold text-sm uppercase tracking-wider text-gray-500">{title}</h4>
      <p className="text-sm text-gray-700">{notes.join(', ')}</p>
    </div>
  );

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 flex flex-col overflow-hidden">
      <div className="relative cursor-pointer" onClick={onToggle}>
        <img src={perfume.image} alt={perfume.name} className="w-full h-80 object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-10 hover:bg-opacity-0 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="font-serif text-2xl font-semibold text-brand-black">{perfume.name}</h3>
        <p className="text-sm text-gray-500 mb-3">{perfume.mainChords.join(' • ')}</p>
        <p className="font-sans text-xl font-bold text-brand-gold mb-4">{formatPrice(perfume.price)}</p>

        <div 
          className={`transition-all duration-500 ease-in-out grid gap-4 overflow-hidden ${isExpanded ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}
        >
          <NoteSection title="Top Notes" notes={perfume.topNotes} />
          <NoteSection title="Heart Notes" notes={perfume.heartNotes} />
          <NoteSection title="Base Notes" notes={perfume.baseNotes} />
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-gray-500">Usage</h4>
            <p className="text-sm text-gray-700">{perfume.usage}</p>
          </div>
        </div>
        
        <div className="mt-auto pt-4">
          <button
            onClick={onToggle}
            className="w-full text-center text-brand-gold font-bold py-2 rounded-md hover:bg-brand-gold hover:text-brand-black border-2 border-brand-gold transition-colors duration-300"
          >
            {isExpanded ? 'Show Less' : 'Details'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PerfumeCard;
