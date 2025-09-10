
import React, { useState, useCallback, useLayoutEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BestSellers from './components/BestSellers';
import About from './components/About';
import Collection from './components/Collection';
import Footer from './components/Footer';

type View = 'home' | 'collection';

const App: React.FC = () => {
  const [view, setView] = useState<View>('home');

  const navigateTo = useCallback((newView: View) => {
    setView(newView);
    window.scrollTo(0, 0);
  }, []);
  
  // A simple fade-in effect for view changes
  const [visible, setVisible] = useState(true);
  const handleNavigation = (newView: View) => {
    if (view !== newView) {
      setVisible(false);
      setTimeout(() => {
        navigateTo(newView);
        setVisible(true);
      }, 300); // matches transition duration
    } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };


  return (
    <div className="bg-brand-ivory min-h-screen font-sans">
      <Navbar setView={handleNavigation} currentView={view} />
      <main className={`transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0'}`}>
        {view === 'home' ? (
          <>
            <Hero setView={() => handleNavigation('collection')} />
            <BestSellers />
            <About />
          </>
        ) : (
          <Collection />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;
