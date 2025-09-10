
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { PERFUMES } from '../constants';
import { ArrowLeftIcon } from './icons/ArrowLeftIcon';
import { ArrowRightIcon } from './icons/ArrowRightIcon';

interface SignatureScentsProps {
  setView: () => void;
}

const SignatureScents: React.FC<SignatureScentsProps> = ({ setView }) => {
  const signatureScents = PERFUMES.filter(p => p.isSignature);
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const resetTimeout = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex(prevIndex => (prevIndex === signatureScents.length - 1 ? 0 : prevIndex + 1));
  }, [signatureScents.length]);

  const prevSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? signatureScents.length - 1 : prevIndex - 1));
  };
  
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(nextSlide, 6000); // Auto-play every 6 seconds
    return () => {
      resetTimeout();
    };
  }, [currentIndex, nextSlide, resetTimeout]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 75) {
      // Swiped left
      nextSlide();
    }

    if (touchStartX.current - touchEndX.current < -75) {
      // Swiped right
      prevSlide();
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  if (!signatureScents.length) return null;

  return (
    <section id="signature" className="py-20 md:py-32 bg-brand-black text-brand-ivory">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Our Signatures</h2>
        <p className="font-sans text-lg text-gray-300 max-w-2xl mx-auto mb-12">The definitive scents of Aurélìque, encapsulating our core philosophy of elegance and artistry.</p>
      </div>
      <div 
        className="relative container mx-auto h-[600px] overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {signatureScents.map((perfume, index) => (
          <div
            key={perfume.id}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            style={{ transitionDelay: index === currentIndex ? '0s' : '0s' }}
          >
            <div className="flex flex-col md:flex-row items-center justify-center h-full gap-8 px-6">
              <div className={`w-full md:w-1/2 flex justify-center items-center transition-transform transform duration-1000 ${index === currentIndex ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`} style={{ transitionDelay: index === currentIndex ? '200ms' : '0s' }}>
                <img src={perfume.image} alt={perfume.name} className="max-h-[500px] object-contain shadow-2xl shadow-brand-gold/10" />
              </div>
              <div className={`w-full md:w-1/2 text-center md:text-left transition-transform transform duration-1000 ${index === currentIndex ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`} style={{ transitionDelay: index === currentIndex ? '400ms' : '0s' }}>
                <p className="font-sans uppercase tracking-widest text-brand-gold text-sm mb-2">{perfume.mainChords.join(' • ')}</p>
                <h3 className="font-serif text-4xl lg:text-5xl font-bold mb-3">{perfume.name}</h3>
                <p className="font-serif italic text-xl text-gray-300 mb-6">{perfume.tagline}</p>
                 
                 
                <button 
                  onClick={setView}
                  className="bg-brand-gold text-brand-black font-sans uppercase tracking-widest py-3 px-8 hover:bg-brand-gold-light transition-all duration-300 ease-in-out text-base"
                >
                  Discover Now
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button onClick={prevSlide} className="absolute top-1/2 left-0 md:left-4 transform -translate-y-1/2 z-20 p-3 bg-black/30 hover:bg-black/50 rounded-full transition-colors text-brand-gold">
          <ArrowLeftIcon />
        </button>
        <button onClick={nextSlide} className="absolute top-1/2 right-0 md:right-4 transform -translate-y-1/2 z-20 p-3 bg-black/30 hover:bg-black/50 rounded-full transition-colors text-brand-gold">
          <ArrowRightIcon />
        </button>
        
        {/* Dots */}
        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
            {signatureScents.map((_, index) => (
                <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-brand-gold scale-125' : 'bg-gray-500'}`}
                    aria-label={`Go to slide ${index + 1}`}
                ></button>
            ))}
        </div>
      </div>
    </section>
  );
};

export default SignatureScents;
