
import React from 'react';

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
  return (
    <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-slate-100 dark:bg-background-dark">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 lg:mb-16">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-display">Questions Fréquemment Posées</h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-300">
                    Vous avez des questions ? Nous avons les réponses.
                </p>
            </div>
            <div className="grid lg:grid-cols-1 gap-4">
                <FaqItem question="Comment KEPY aide-t-il mes ventes ?">
                    <p>KEPY fournit un suivi des ventes, des analyses et des outils de reporting en temps réel pour vous aider à identifier les opportunités, à rationaliser votre flux de travail et, finalement, à conclure plus de ventes avec une plus grande efficacité.</p>
                </FaqItem>
                <FaqItem question="Est-il difficile de démarrer ?">
                   <p>Pas du tout ! KEPY est conçu avec une interface conviviale. Vous pouvez configurer votre compte et commencer à suivre les ventes en quelques minutes. Nous fournissons également un guide complet pour vous aider à démarrer.</p>
                </FaqItem>
                 <FaqItem question="Comment puis-je contacter le support ?">
                   <p>Notre équipe de support est disponible pour vous aider. Vous pouvez nous joindre par e-mail à support@kepy.com pour toute question.</p>
                </FaqItem>
            </div>
        </div>
    </section>
  );
};

export default Faq;
