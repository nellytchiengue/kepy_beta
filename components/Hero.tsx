
import React from 'react';
import { LOOKER_CONSOLIDATED_URL, GOOGLE_FORM_URL_BASE, DEMO_CONTACT_FORM_URL } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="w-full py-20 md:py-28 lg:py-36">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8 text-center">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl font-bold font-display tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Suivi des ventes simple et instantané.
            </h1>
            <p className="mx-auto max-w-[700px] text-lg text-slate-600 dark:text-slate-300 md:text-xl">
              Saisissez, consolidez et visualisez vos ventes en temps réel avec KEPY (MVP).
            </p>
          </div>
          <div className="flex w-full max-w-sm flex-col items-center gap-4 sm:max-w-md">
            <div className="flex w-full flex-col gap-4 md:flex-row md:justify-center">
              <a 
                className="inline-flex h-12 w-full items-center justify-center rounded-xl bg-primary px-8 text-base font-medium text-white shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 md:w-auto" 
                href={GOOGLE_FORM_URL_BASE} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Saisir une vente
              </a>
              <a 
                className="inline-flex h-12 w-full items-center justify-center rounded-xl border border-border-light bg-transparent px-8 text-base font-medium text-text-light shadow-sm transition-colors hover:bg-slate-100 dark:border-border-dark dark:text-text-dark dark:hover:bg-slate-800 md:w-auto" 
                href={LOOKER_CONSOLIDATED_URL} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Ouvrir le tableau de bord
              </a>
            </div>
            <a 
              className="text-sm font-medium text-slate-600 underline-offset-4 hover:underline dark:text-slate-300" 
              href={DEMO_CONTACT_FORM_URL} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Demander une démo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
