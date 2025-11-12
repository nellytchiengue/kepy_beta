
import React, { useState, useEffect, useRef } from 'react';
import { auth } from '../firebaseConfig';
import { onAuthStateChanged, signOut, User } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setIsUserMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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
      history.pushState(null, null, href);
    }
    
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  const scrollToTop = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.location.hash = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const handleSignOut = () => {
    signOut(auth);
    setIsUserMenuOpen(false);
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
          {user ? (
            <div className="relative" ref={userMenuRef}>
              <button onClick={() => setIsUserMenuOpen(!isUserMenuOpen)} aria-label="Ouvrir le menu utilisateur">
                <img src={user.photoURL || `https://i.pravatar.cc/40?u=${user.uid}`} alt="User avatar" className="h-10 w-10 rounded-full" />
              </button>
              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-card-light dark:bg-card-dark ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <div className="px-4 py-2 text-sm text-slate-700 dark:text-slate-200 border-b border-border-light dark:border-border-dark">
                        <p className="font-medium truncate" title={user.displayName || 'Utilisateur'}>{user.displayName || 'Utilisateur'}</p>
                        <p className="text-xs text-slate-500 truncate" title={user.email || ''}>{user.email}</p>
                    </div>
                    <button onClick={handleSignOut} className="w-full text-left block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-700">
                      Déconnexion
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <>
              <a className="font-medium text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-primary transition-colors" href="#login">Connexion</a>
              <a className="inline-flex h-10 items-center justify-center rounded-lg bg-primary px-5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-primary/90" href="#">Essai gratuit</a>
            </>
          )}
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
            <hr className="border-border-light dark:border-border-dark"/>
            {user ? (
                 <div className="flex flex-col gap-2">
                    <div className="px-1 pt-2">
                       <p className="font-medium truncate text-text-light dark:text-text-dark">{user.displayName}</p>
                       <p className="text-sm text-slate-500 truncate">{user.email}</p>
                    </div>
                    <button onClick={handleSignOut} className="text-left font-medium text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-primary px-1">Déconnexion</button>
                 </div>
            ) : (
                <>
                    <a className="font-medium text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-primary" href="#login">Connexion</a>
                    <a className="inline-flex h-10 items-center justify-center rounded-lg bg-primary px-5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-primary/90" href="#">Essai gratuit</a>
                </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;