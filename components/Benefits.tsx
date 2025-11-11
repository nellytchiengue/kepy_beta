
import React from 'react';

const CheckListItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li className="flex items-start gap-3">
    <span className="material-symbols-outlined text-primary mt-1 text-base">check_circle</span>
    <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed flex-1">{children}</p>
  </li>
);

const Benefits: React.FC = () => {
  const managerBenefits = ['Vue consolidée', 'Filtrage par vendeur/période/produit', 'Export facile'];
  const sellerBenefits = ['Saisie en 20 secondes', 'Historique personnel', 'KPIs motivants'];

  return (
    <section id="benefits" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 lg:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight text-text-light dark:text-text-dark">
            Des bénéfices adaptés à chacun
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Que vous soyez manager ou vendeur, KEPY est conçu pour simplifier votre quotidien et booster vos performances.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <div className="flex flex-col rounded-xl shadow-[0_4px_16px_rgba(0,0,0,0.07)] bg-card-light dark:bg-card-dark p-6 lg:p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center justify-center size-12 rounded-full bg-primary/10 text-primary shrink-0">
                <span className="material-symbols-outlined">person_pin</span>
              </div>
              <h3 className="text-xl font-bold font-display text-text-light dark:text-text-dark">Pour le Manager</h3>
            </div>
            <ul className="space-y-4">
              {managerBenefits.map((benefit, index) => (
                <CheckListItem key={index}>{benefit}</CheckListItem>
              ))}
            </ul>
          </div>
          <div className="flex flex-col rounded-xl shadow-[0_4px_16px_rgba(0,0,0,0.07)] bg-card-light dark:bg-card-dark p-6 lg:p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center justify-center size-12 rounded-full bg-primary/10 text-primary shrink-0">
                <span className="material-symbols-outlined">trending_up</span>
              </div>
              <h3 className="text-xl font-bold font-display text-text-light dark:text-text-dark">Pour le Vendeur</h3>
            </div>
            <ul className="space-y-4">
              {sellerBenefits.map((benefit, index) => (
                <CheckListItem key={index}>{benefit}</CheckListItem>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
