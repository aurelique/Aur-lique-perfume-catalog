
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="relative py-32 md:py-48 bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/pw/AP1GczMSEsMpsD2WJe8M5yKrwRpTUZ3LVSsTxSLI8_KgSQL5lEMANSlFm-KFM10EXuQJedNhAaAzm0RK9G2CP8_b18sIKzt1gki8cEC5b28JmBafw_4A3464rb7FjvHfb_WpQeeghNgL05oggBJGLFrQoVY=w780-h1170-s-no-gm?authuser=0')" }}>
      <div className="absolute inset-0 bg-brand-black bg-opacity-70"></div>
      <div className="relative container mx-auto px-6 text-center text-brand-ivory z-10">
        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">The Essence of Inspired Fragrances</h2>
        <p className="font-sans text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          At aurélique, we believe that everyone deserves to experience the allure of iconic scents. We specialize in creating inspired perfumes—capturing the essence of the world’s most renowned fragrances and making them accessible without compromising on quality.

Crafted with care using premium ingredients, our perfumes deliver the sophistication, character, and lasting impression of luxury originals, at a more approachable value. Each bottle is a tribute to the timeless masterpieces that inspire us, reimagined for modern fragrance lovers who seek both elegance and authenticity.
        </p>
      </div>
    </section>
  );
};

export default About;
