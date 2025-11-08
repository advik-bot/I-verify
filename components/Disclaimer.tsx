import React from 'react';
import { useLanguage } from '../LanguageContext';

const Disclaimer: React.FC = () => {
  const { t } = useLanguage();
  return (
    <footer className="w-full p-4 text-center">
      <div className="max-w-3xl mx-auto text-xs text-slate-500 dark:text-slate-400 bg-slate-200 dark:bg-slate-800/50 p-3 rounded-lg">
        <p className="font-bold mb-1">{t.disclaimerTitle}</p>
        <p>
         {t.disclaimerText}
        </p>
      </div>
    </footer>
  );
};

export default Disclaimer;
