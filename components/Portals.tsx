
import React from 'react';
import VendorWidget from './VendorWidget';
import { LOOKER_CONSOLIDATED_URL, MANAGER_APP_URL } from '../constants';
import { useTranslation } from '../context/I18nContext';

const Portals: React.FC = () => {
    const { t } = useTranslation();
    return (
        <section id="portals" className="w-full py-12 md:py-24 lg:py-32 bg-slate-50 dark:bg-slate-900/50">
            <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {/* Manager Portal */}
                    <div className="flex flex-col items-center text-center p-8 bg-card-light dark:bg-card-dark rounded-xl shadow-lg">
                         <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent">
                            <span className="material-symbols-outlined text-4xl">business_center</span>
                        </div>
                        <h3 className="text-2xl font-bold font-display text-text-light dark:text-text-dark mb-2">{t('portals.manager_title')}</h3>
                        <p className="text-slate-600 dark:text-slate-400 mb-6">{t('portals.manager_desc')}</p>
                        <div className="flex w-full max-w-xs flex-col items-center">
                            <a
                                href={LOOKER_CONSOLIDATED_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex h-12 w-full items-center justify-center rounded-xl bg-accent px-8 text-base font-medium text-white shadow-sm transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                            >
                                {t('portals.manager_cta_dashboard')}
                            </a>
                            <a
                                href={MANAGER_APP_URL}
                                className="mt-4 inline-flex h-12 w-full items-center justify-center rounded-xl border border-accent bg-transparent px-8 text-base font-medium text-accent shadow-sm transition-colors hover:bg-accent/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                            >
                                {t('portals.manager_cta_space')}
                            </a>
                        </div>
                    </div>

                    {/* Seller Portal */}
                    <div className="flex flex-col items-center text-center p-8 bg-card-light dark:bg-card-dark rounded-xl shadow-lg">
                        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                            <span className="material-symbols-outlined text-4xl">person</span>
                        </div>
                        <h3 className="text-2xl font-bold font-display text-text-light dark:text-text-dark mb-2">{t('portals.seller_title')}</h3>
                        <p className="text-slate-600 dark:text-slate-400 mb-6">{t('portals.seller_desc')}</p>
                        <VendorWidget />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portals;