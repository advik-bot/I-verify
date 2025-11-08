import React, { createContext, useState, useContext, ReactNode, useMemo } from 'react';
import { translations, TranslationStrings, LANGUAGES } from './translations';

interface LanguageContextType {
  language: string;
  setLanguage: (language: string) => void;
  t: TranslationStrings;
  languageName: string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<string>('en');

  const value = useMemo(() => {
    const t = translations[language] || translations['en'];
    const languageName = LANGUAGES[language] || LANGUAGES['en'];
    return {
        language,
        setLanguage,
        t,
        languageName,
    };
  }, [language]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
