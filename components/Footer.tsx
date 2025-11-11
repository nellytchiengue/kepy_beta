
import React from 'react';
import { CONTACT_EMAIL } from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            &copy; {currentYear} KEPY. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4">
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-sm text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors">
              Contact
            </a>
            <a href="#" className="text-sm text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors">
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
