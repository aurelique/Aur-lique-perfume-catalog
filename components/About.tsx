
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="relative py-32 md:py-48 bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/seed/aboutbg/1920/1080')" }}>
      <div className="absolute inset-0 bg-brand-black bg-opacity-70"></div>
      <div className="relative container mx-auto px-6 text-center text-brand-ivory z-10">
        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">The Art of Perfumery</h2>
        <p className="font-sans text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          At Aurélìque, we believe that fragrance is an art form. It is a silent language that speaks volumes, a memory captured in a bottle. Our master perfumers travel the world to source the rarest and most exquisite ingredients, blending tradition with modern innovation to create scents that are both timeless and contemporary. Each creation is a testament to our dedication to craftsmanship, quality, and the evocative power of scent.
        </p>
      </div>
    </section>
  );
};

export default About;
