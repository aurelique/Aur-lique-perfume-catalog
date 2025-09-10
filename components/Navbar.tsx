
import React, { useState, useEffect } from 'react';
import { MenuIcon } from './icons/MenuIcon';
import { CloseIcon } from './icons/CloseIcon';

interface NavbarProps {
  setView: (view: 'home' | 'collection' | 'about' | 'contact') => void;
  currentView: 'home' | 'collection';
}

const Navbar: React.FC<NavbarProps> = ({ setView, currentView }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navItems = [
    { name: 'Home', view: 'home' },
    { name: 'Collection', view: 'collection' },
    { name: 'About', view: 'about' },
    { name: 'Contact', view: 'contact' },
  ];

  const handleNavClick = (view: 'home' | 'collection' | 'about' | 'contact') => {
    if (view === 'about' || view === 'contact') {
        // Find the section and scroll to it
        const element = document.getElementById(view);
        if (element) {
            setView('home'); // Ensure we are on the home page layout
            setTimeout(() => { // Wait for home page to render
                element.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
    } else {
        setView(view);
    }
    setIsMenuOpen(false);
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${isScrolled ? 'bg-brand-black shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" onClick={() => handleNavClick('home')} className={`font-serif text-3xl font-bold tracking-wider transition-colors ${isScrolled || isMenuOpen ? 'text-brand-ivory' : 'text-brand-ivory'}`}>
          Aurélique
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {navItems.map(item => (
            <a key={item.name} href={`#${item.view}`} onClick={() => handleNavClick(item.view as any)} 
               className={`font-sans text-sm uppercase tracking-widest transition-colors duration-300 ${isScrolled ? 'text-brand-ivory hover:text-brand-gold' : 'text-brand-ivory hover:text-brand-gold-light'}`}>
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={isScrolled ? 'text-brand-ivory' : 'text-brand-ivory'}>
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-brand-black transition-all duration-500 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
         <div className="flex flex-col items-center py-8 space-y-6">
            {navItems.map(item => (
                <a key={item.name} href={`#${item.view}`} onClick={() => handleNavClick(item.view as any)}
                className="font-sans text-lg uppercase tracking-widest text-brand-ivory hover:text-brand-gold transition-colors duration-300">
                {item.name}
                </a>
            ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
