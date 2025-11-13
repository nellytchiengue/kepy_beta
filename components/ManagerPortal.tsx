
import React from 'react';
import { LOOKER_CONSOLIDATED_URL, GOOGLE_SHEET_URL } from '../constants';
import { useTranslation } from '../context/I18nContext';

const ManagerPortal: React.FC = () => {
    const { t } = useTranslation();

    const statCards = [
        { title: t('manager.stat_revenue'), value: "$12,480", change: "+5.2%", changeColor: 'text-primary' },
        { title: t('manager.stat_performance'), value: "85%", change: "-1.5%", changeColor: 'text-red-500' },
        { title: t('manager.stat_tasks'), value: "3", change: "+1", changeColor: 'text-primary' },
    ];

    const quickActions = [
        { icon: 'bar_chart', title: t('manager.qa_perf_title'), description: t('manager.qa_perf_desc'), href: LOOKER_CONSOLIDATED_URL },
        { icon: 'groups', title: t('manager.qa_reps_title'), description: t('manager.qa_reps_desc'), href: '#' },
        { icon: 'analytics', title: t('manager.qa_reports_title'), description: t('manager.qa_reports_desc'), href: GOOGLE_SHEET_URL },
        { icon: 'target', title: t('manager.qa_goals_title'), description: t('manager.qa_goals_desc'), href: '#' },
        { icon: 'approval', title: t('manager.qa_commissions_title'), description: t('manager.qa_commissions_desc'), href: '#' },
        { icon: 'campaign', title: t('manager.qa_announce_title'), description: t('manager.qa_announce_desc'), href: '#' },
    ];
    
    const navItems = [
        { icon: 'dashboard', label: t('manager.nav_dashboard'), active: true },
        { icon: 'badge', label: t('manager.nav_team'), active: false },
        { icon: 'summarize', label: t('manager.nav_reports'), active: false },
        { icon: 'settings', label: t('manager.nav_settings'), active: false },
    ];

    return (
        <div className="relative flex min-h-screen w-full flex-col lg:flex-row bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark">
            {/* Sidebar / Bottom Nav */}
            <nav className="fixed bottom-0 left-0 right-0 z-30 flex justify-around border-t border-border-light bg-card-light/90 py-2 backdrop-blur-sm dark:border-border-dark dark:bg-card-dark/90 lg:static lg:h-screen lg:w-64 lg:flex-col lg:justify-start lg:border-r lg:border-t-0 lg:p-6 lg:backdrop-blur-none">
                <div className="hidden lg:flex lg:items-center lg:gap-3 lg:pb-8">
                    <a href="#" className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                       <svg className="h-6 w-6 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                         <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                         <path d="M2 17l10 5 10-5"></path>
                         <path d="M2 12l10 5 10-5"></path>
                       </svg>
                    </a>
                    <h1 className="font-display text-xl font-semibold text-dark dark:text-text-dark">KEPY</h1>
                </div>
                 {navItems.map(item => (
                    <a key={item.label} className={`flex flex-col items-center gap-1 lg:w-full lg:flex-row lg:rounded-lg lg:p-3 transition-colors ${item.active ? 'text-primary lg:bg-primary/10' : 'text-slate-500 hover:text-dark dark:text-slate-400 dark:hover:white'}`} href="#">
                        <span className="material-symbols-outlined">{item.icon}</span>
                        <span className="text-xs font-medium lg:text-base">{item.label}</span>
                    </a>
                ))}
            </nav>

            {/* Main Content */}
            <div className="flex-1 pb-24 lg:pb-0">
                <header className="sticky top-0 z-20 flex items-center justify-between border-b border-border-light bg-background-light/80 p-4 backdrop-blur-sm dark:border-border-dark dark:bg-background-dark/80">
                    <h1 className="text-lg font-bold font-display tracking-tight lg:hidden">{t('manager.portal_title')}</h1>
                     <div className="hidden flex-1 lg:block">
                        <h2 className="text-3xl font-bold font-display tracking-tight text-text-light dark:text-text-dark">{t('manager.greeting', {name: 'Alex'})}</h2>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="hidden items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-bold text-white shadow-sm transition-colors hover:bg-primary/90 lg:flex">
                            <span className="material-symbols-outlined text-xl">add</span>
                            <span>{t('manager.new_action')}</span>
                        </button>
                        <img className="size-10 rounded-full" alt={t('manager.profile_pic_alt')} src="https://i.pravatar.cc/40?u=alexmanager" />
                    </div>
                </header>

                <main className="flex-grow p-4 lg:p-6 xl:p-8">
                    <h2 className="text-3xl font-bold font-display tracking-tight text-text-light dark:text-text-dark lg:hidden mb-6">{t('manager.greeting', {name: 'Alex'})}</h2>
                    
                    {/* Stat Cards */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {statCards.map(card => (
                             <div key={card.title} className="flex flex-col gap-2 rounded-xl border border-border-light bg-card-light p-4 dark:border-border-dark dark:bg-card-dark">
                                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{card.title}</p>
                                <p className="text-3xl font-bold tracking-tight text-text-light dark:text-text-dark">{card.value}</p>
                                <p className={`text-sm font-medium ${card.changeColor}`}>{card.change}</p>
                            </div>
                        ))}
                    </div>

                    {/* Quick Actions */}
                    <h3 className="pt-8 pb-4 text-2xl font-bold font-display text-text-light dark:text-text-dark">{t('manager.quick_actions_title')}</h3>
                    <div className="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-4">
                       {quickActions.map(action => (
                            <a href={action.href} key={action.title} target={action.href.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer" className="flex h-40 flex-col justify-between gap-3 rounded-xl border border-border-light bg-card-light p-4 transition-all hover:border-primary/50 hover:shadow-lg dark:border-border-dark dark:bg-card-dark dark:hover:border-primary/50">
                                <span className="material-symbols-outlined text-2xl text-primary">{action.icon}</span>
                                <div className="flex flex-col gap-1">
                                    <h4 className="text-base font-bold text-text-light dark:text-text-dark">{action.title}</h4>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">{action.description}</p>
                                </div>
                            </a>
                       ))}
                    </div>
                </main>
            </div>
             <button className="fixed bottom-24 right-4 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg lg:hidden">
                <span className="material-symbols-outlined text-3xl">add</span>
            </button>
        </div>
    );
};

export default ManagerPortal;