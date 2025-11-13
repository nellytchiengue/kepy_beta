
import React from 'react';
import { useTranslation } from '../context/I18nContext';

interface FaqItemProps {
  question: string;
  children: React.ReactNode;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, children }) => (
  <div className="flex flex-col bg-slate-50 dark:bg-card-dark rounded-xl shadow-sm">
    <details className="flex flex-col p-4 group">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-2">
        <p className="text-base font-medium text-text-light dark:text-text-dark">{question}</p>
        <div className="text-slate-500 transition-transform duration-300 group-open:rotate-180">
          <span className="material-symbols-outlined">expand_more</span>
        </div>
      </summary>
      <div className="text-base text-slate-600 dark:text-slate-400 pt-2 pr-6">
        {children}
      </div>
    </details>
  </div>
);


const Faq: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-slate-100 dark:bg-background-dark">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 lg:mb-16">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-display">{t('faq.section_title')}</h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-300">
                    {t('faq.section_subtitle')}
                </p>
            </div>
            <div className="grid lg:grid-cols-1 gap-4">
                <FaqItem question={t('faq.q1_question')}>
                    <p>{t('faq.q1_answer')}</p>
                </FaqItem>
                <FaqItem question={t('faq.q2_question')}>
                   <p>{t('faq.q2_answer')}</p>
                </FaqItem>
                 <FaqItem question={t('faq.q3_question')}>
                   <p>{t('faq.q3_answer_p1')} <a href={`mailto:${t('faq.support_email')}`} className="text-primary hover:underline">{t('faq.support_email')}</a> {t('faq.q3_answer_p2')}</p>
                </FaqItem>
            </div>
        </div>
    </section>
  );
};

export default Faq;