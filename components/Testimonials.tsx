
import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl font-bold font-display tracking-tight sm:text-4xl">Ce que nos utilisateurs disent</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-300">
            Découvrez pourquoi les équipes de vente adorent KEPY.
          </p>
        </div>
        <div className="rounded-xl bg-card-light dark:bg-card-dark p-8 shadow-lg lg:flex lg:items-center lg:gap-12">
          <div className="flex-shrink-0 text-center lg:text-left">
            <img 
              className="w-28 h-28 rounded-full mb-4 object-cover mx-auto lg:mx-0" 
              alt="Portrait of Jane Doe" 
              src="https://picsum.photos/seed/janedoe/112/112"
            />
          </div>
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex items-center text-primary mb-3">
              {[...Array(5)].map((_, i) => (
                 <span key={i} className="material-symbols-outlined !fill-current text-2xl" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
              ))}
            </div>
            <blockquote className="text-xl font-medium text-text-light dark:text-text-dark mb-6 lg:text-2xl">
              <p>"KEPY a transformé notre processus de vente ! Cet outil a changé la donne. L'efficacité de notre équipe a grimpé en flèche."</p>
            </blockquote>
            <cite className="not-italic">
              <p className="text-base font-semibold text-text-light dark:text-text-dark">Jane Doe</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">Sales Manager, Acme Corp</p>
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
