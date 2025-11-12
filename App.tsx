
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import Portals from './components/Portals';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import Footer from './components/Footer';
import Login from './components/Login';
import ManagerPortal from './components/ManagerPortal';

const LandingPage: React.FC = () => {
  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-black">
        Aller au contenu
      </a>
      <Header />
      <main id="main-content" className="flex-1">
        <Hero />
        <HowItWorks />
        <Benefits />
        <Portals />
        <Testimonials />
        <Faq />
      </main>
      <Footer />
    </>
  );
};

const App: React.FC = () => {
  const [route, setRoute] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash);
      if (['#login', '#manager', '', '#'].includes(window.location.hash)) {
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    
    // Initial scroll
    if (['#login', '#manager', '', '#'].includes(window.location.hash)) {
      window.scrollTo(0, 0);
    }
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const renderPage = () => {
    switch (route) {
      case '#login':
        return <Login />;
      case '#manager':
        return <ManagerPortal />;
      default:
        return <LandingPage />;
    }
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col font-body">
      {renderPage()}
    </div>
  );
};

export default App;
