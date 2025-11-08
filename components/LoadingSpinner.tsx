import React from 'react';
import { useLanguage } from '../LanguageContext';

const LoadingSpinner: React.FC = () => {
  const { t } = useLanguage();
  return (
    <div className="flex flex-col items-center justify-center p-10">
      <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent dark:border-blue-400 dark:border-t-transparent rounded-full animate-spin"></div>
      <p className="mt-4 text-slate-600 dark:text-slate-300 font-semibold">{t.loading}</p>
      <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{t.loadingSubtitle}</p>
    </div>
  );
};

export default LoadingSpinner;
