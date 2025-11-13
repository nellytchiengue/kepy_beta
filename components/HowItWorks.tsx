
import React from 'react';
import { useTranslation } from '../context/I18nContext';

const HowItWorks: React.FC = () => {
  const { t } = useTranslation();

  const steps = [
    {
      icon: 'phone_iphone',
      title: t('howitworks.step1_title'),
      description: t('howitworks.step1_desc'),
    },
    {
      icon: 'cloud_sync',
      title: t('howitworks.step2_title'),
      description: t('howitworks.step2_desc'),
    },
    {
      icon: 'monitoring',
      title: t('howitworks.step3_title'),
      description: t('howitworks.step3_desc'),
    },
  ];

  return (
    <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold font-display tracking-tight text-text-light dark:text-text-dark sm:text-4xl">
            {t('howitworks.section_title')}
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            {t('howitworks.section_subtitle')}
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