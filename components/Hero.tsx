
import React from 'react';

interface HeroProps {
  setView: () => void;
}

const Hero: React.FC<HeroProps> = ({ setView }) => {
  return (
    <section id="home" className="h-screen w-full flex items-center justify-center relative bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('https://picsum.photos/seed/hero/1920/1080')"}}>
      <div className="absolute inset-0 bg-brand-black bg-opacity-60"></div>
      <div className="relative z-10 text-center text-brand-ivory px-4 animate-fade-in-up">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-wide">
          Aurélìque
        </h1>
        <p className="font-serif italic text-2xl md:text-3xl lg:text-4xl mb-2">
          The Essence of Luxury
        </p>
        <p className="font-sans text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Discover timeless fragrances crafted with passion, each bottle a journey to an unforgettable memory.
        </p>
        <button 
          onClick={setView}
          className="bg-transparent border-2 border-brand-gold text-brand-gold font-sans uppercase tracking-widest py-3 px-8 hover:bg-brand-gold hover:text-brand-black transition-all duration-300 ease-in-out text-lg"
        >
          Browse Collection
        </button>
      </div>
       <style>{`
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1.2s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;
