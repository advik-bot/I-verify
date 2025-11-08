import React from 'react';
import { ModuleKey } from '../types';
import { getLocalizedModules } from '../constants';
import { useLanguage } from '../LanguageContext';

interface ModuleSelectorProps {
  onSelectModule: (module: ModuleKey) => void;
}

const ModuleSelector: React.FC<ModuleSelectorProps> = ({ onSelectModule }) => {
  const { t } = useLanguage();
  const MODULES = getLocalizedModules(t);

  return (
    <div className="p-6 md:p-10 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100 mb-2">{t.welcome}</h2>
      <p className="text-slate-600 dark:text-slate-400 mb-8">{t.toolSelection}</p>
      <div className="space-y-4">
        {Object.values(MODULES).map((module) => (
          <button
            key={module.key}
            onClick={() => onSelectModule(module.key)}
            className={`w-full text-left p-4 rounded-xl flex items-center space-x-4 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-opacity-50 ${module.color} bg-gradient-to-br`}
          >
            <div className="flex-shrink-0 bg-white bg-opacity-20 p-3 rounded-full">
                {module.icon}
            </div>
            <div>
              <h3 className="font-bold text-lg text-white">{module.title}</h3>
              <p className="text-sm text-white opacity-90">{module.description}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ModuleSelector;
