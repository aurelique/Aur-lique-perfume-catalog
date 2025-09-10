
import React from 'react';

interface HeroProps {
  setView: () => void;
}

const Hero: React.FC<HeroProps> = ({ setView }) => {
  return (
    <section id="home" className="h-screen w-full flex items-center justify-center relative bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('https://lh3.googleusercontent.com/pw/AP1GczN_WeYv4w61Y-kHCfTa-U8EIwdLSY2iZcAoLIi3D3mv8PDZ6eE0ZRrJ0Xa1BZ-1e_0tDxiwLxYEcTz9tOKo6Jph7sMxPKEUG_R5_b9_plUcOp1DKGu8P85jCli6omGxQ614ZtGy-yckv9eD3IrCuQw=w1024-h1536-s-no-gm?authuser=0')"}}>
      <div className="absolute inset-0 bg-brand-black bg-opacity-60"></div>
      <div className="relative z-10 text-center text-brand-ivory px-4 animate-fade-in-up">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-wide">
          aurélique
        </h1>
        <p className="font-serif italic text-2xl md:text-3xl lg:text-4xl mb-2">
          The Essence of Iconic Scents
        </p>
        <p className="font-sans text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Experience inspired fragrances that capture the soul of the world’s most beloved perfumes—luxury, made accessible.
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
