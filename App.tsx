
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
import { useTranslation } from './context/I18nContext';

const LandingPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-black">
        {t('skip_to_content')}
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
  const { t } = useTranslation();

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

  // Update document title and meta description based on language and route
  useEffect(() => {
    const descriptionElement = document.querySelector('meta[name="description"]');
    switch (route) {
      case '#login':
        document.title = t('login.meta_title');
        if (descriptionElement) descriptionElement.setAttribute('content', t('login.meta_description'));
        break;
      case '#manager':
         document.title = t('manager.meta_title');
        if (descriptionElement) descriptionElement.setAttribute('content', t('manager.meta_description'));
        break;
      default:
        document.title = t('home.meta_title');
        if (descriptionElement) descriptionElement.setAttribute('content', t('home.meta_description'));
    }
  }, [route, t]);

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