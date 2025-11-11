
import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#how-it-works', label: 'Comment ça marche ?' },
    { href: '#benefits', label: 'Bénéfices' },
    { href: '#portals', label: 'Portails' },
    { href: '#faq', label: 'FAQ' },
  ];

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      // Update URL hash for better user experience and accessibility
      history.pushState(null, null, href);
    }
    
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  const scrollToTop = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Clear hash from URL, using a space to prevent jumping
    history.pushState(null, null, ' '); 
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm border-b border-border-light dark:border-border-dark">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <a className="flex items-center gap-2" href="#" onClick={scrollToTop}>
          <svg className="h-8 w-8 text-primary" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
            <path d="M2 17l10 5 10-5"></path>
            <path d="M2 12l10 5 10-5"></path>
          </svg>
          <span className="text-2xl font-bold font-display text-text-light dark:text-text-dark">KEPY</span>
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} className="font-medium text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-primary transition-colors" href={link.href} onClick={(e) => handleNavClick(e, link.href)}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-4 md:flex">
          <a className="font-medium text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-primary transition-colors" href="#">Connexion</a>
          <a className="inline-flex h-10 items-center justify-center rounded-lg bg-primary px-5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-primary/90" href="#">Essai gratuit</a>
        </div>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Ouvrir le menu">
          <span className="material-symbols-outlined text-3xl text-text-light dark:text-text-dark">
            {isMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-background-light dark:bg-background-dark pb-4 px-4">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a key={link.href} className="font-medium text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-primary transition-colors" href={link.href} onClick={(e) => handleNavClick(e, link.href)}>
                {link.label}
              </a>
            ))}
             <a className="font-medium text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-primary" href="#">Connexion</a>
            <a className="inline-flex h-10 items-center justify-center rounded-lg bg-primary px-5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-primary/90" href="#">Essai gratuit</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
