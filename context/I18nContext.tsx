
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { translations } from '../i18n';

type Language = 'en' | 'fr';

interface I18nContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string, options?: { [key: string]: string | number, defaultValue?: string }) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

// Helper function to get nested values from an object
const getNestedTranslation = (obj: any, key: string): string | undefined => {
  return key.split('.').reduce((o, i) => (o ? o[i] : undefined), obj);
};

export const I18nProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLang = localStorage.getItem('kepy_lang');
    return (savedLang === 'en' || savedLang === 'fr') ? savedLang : 'fr';
  });

  useEffect(() => {
    localStorage.setItem('kepy_lang', language);
  }, [language]);

  const t = (key: string, options?: { [key: string]: string | number, defaultValue?: string }): string => {
    let translation = getNestedTranslation(translations[language], key);

    if (translation === undefined) {
      // Fallback to English if translation is missing in the current language
      translation = getNestedTranslation(translations['en'], key);
    }
    
    if (translation === undefined) {
      return options?.defaultValue || key; // Return default value or the key itself if not found
    }

    // Replace placeholders like {name}
    if (options) {
      Object.keys(options).forEach(placeholder => {
         if (placeholder !== 'defaultValue') {
            translation = translation!.replace(`{${placeholder}}`, String(options[placeholder]));
         }
      });
    }

    return translation;
  };
  
  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useTranslation = (): I18nContextType => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useTranslation must be used within an I18nProvider');
  }
  return context;
};
