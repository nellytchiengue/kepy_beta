
import React, { useState } from 'react';
import { LOOKER_CONSOLIDATED_URL, GOOGLE_FORM_URL_BASE } from '../constants';
import { useTranslation } from '../context/I18nContext';
import DemoRequestModal from './DemoRequestModal';

const AnimatedBackground = () => (
  <div aria-hidden="true" className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
    <div className="animate-subtle-move absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(34,197,94,0.1),rgba(255,255,255,0))]"></div>
    <div className="animate-subtle-move absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(14,165,233,0.1),rgba(255,255,255,0))]" style={{animationDelay: '-12s'}}></div>
  </div>
);


const Hero: React.FC = () => {
  const { t } = useTranslation();
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <>
      <section className="relative w-full overflow-hidden bg-slate-900 py-20 md:py-28 lg:py-36">
        <AnimatedBackground />
        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center space-y-8 text-center">
            <div className="max-w-3xl space-y-4">
              <h1 className="text-4xl font-bold font-display tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl">
                {t('hero.title')}
              </h1>
              <p className="mx-auto max-w-[700px] text-lg text-slate-300 md:text-xl">
                {t('hero.subtitle')}
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
                  {t('hero.cta_enter_sale')}
                </a>
                <a
                  className="inline-flex h-12 w-full items-center justify-center rounded-xl border border-slate-700 bg-transparent px-8 text-base font-medium text-white shadow-sm transition-colors hover:bg-slate-800/50 dark:border-border-dark dark:text-text-dark dark:hover:bg-slate-800 md:w-auto"
                  href={LOOKER_CONSOLIDATED_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('hero.cta_open_dashboard')}
                </a>
              </div>
              <button
                className="text-sm font-medium text-slate-400 underline-offset-4 hover:underline hover:text-slate-200 cursor-pointer"
                onClick={() => setIsDemoModalOpen(true)}
              >
                {t('hero.cta_request_demo')}
              </button>
            </div>
          </div>
        </div>
      </section>

      <DemoRequestModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />
    </>
  );
};

export default Hero;