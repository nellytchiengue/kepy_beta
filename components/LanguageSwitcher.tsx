
import React from 'react';
import { useTranslation } from '../context/I18nContext';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useTranslation();

  const buttonClasses = "px-3 py-1 rounded-md text-sm font-semibold transition-colors";
  const activeClasses = "bg-primary/10 text-primary";
  const inactiveClasses = "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700";

  return (
    <div className="flex items-center gap-1 p-1 rounded-lg bg-slate-100 dark:bg-slate-800">
      <button
        onClick={() => setLanguage('fr')}
        className={`${buttonClasses} ${language === 'fr' ? activeClasses : inactiveClasses}`}
        aria-pressed={language === 'fr'}
      >
        FR
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`${buttonClasses} ${language === 'en' ? activeClasses : inactiveClasses}`}
        aria-pressed={language === 'en'}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
