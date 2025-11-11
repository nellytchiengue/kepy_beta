
import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: 'phone_iphone',
      title: '1. Saisissez une vente',
      description: 'Saisissez une vente depuis votre téléphone.',
    },
    {
      icon: 'cloud_sync',
      title: '2. Consolidation auto',
      description: 'Vos données se consolident automatiquement dans Google Sheets.',
    },
    {
      icon: 'monitoring',
      title: '3. Visualisez vos résultats',
      description: 'Visualisez vos résultats dans un tableau de bord clair (Looker).',
    },
  ];

  return (
    <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold font-display tracking-tight text-text-light dark:text-text-dark sm:text-4xl">
            Comment KEPY fonctionne ?
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            Suivez vos ventes en 3 étapes simples.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3 md:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <span className="material-symbols-outlined text-4xl">{step.icon}</span>
              </div>
              <h3 className="text-xl font-bold font-display text-text-light dark:text-text-dark">{step.title}</h3>
              <p className="mt-2 text-base text-slate-600 dark:text-slate-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
