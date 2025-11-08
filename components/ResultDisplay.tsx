import React from 'react';
import { AIResponse, ModuleKey } from '../types';
import { useLanguage } from '../LanguageContext';

interface ResultDisplayProps {
  response: AIResponse;
  onReset: () => void;
  moduleTitle: string;
  moduleKey: ModuleKey;
}

const ResultSection: React.FC<{ title: string; icon: React.ReactNode; children: React.ReactNode }> = ({ title, icon, children }) => (
  <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4">
    <div className="flex items-center mb-2">
      {icon}
      <h3 className="font-bold text-slate-700 dark:text-slate-200 ml-2">{title}</h3>
    </div>
    <div className="text-slate-600 dark:text-slate-300 text-sm whitespace-pre-wrap">{children}</div>
  </div>
);

const WateringScheduler: React.FC<{ response: AIResponse }> = ({ response }) => {
    const { t } = useLanguage();

    const createCalendarLink = () => {
        const date = response.nextWateringDate?.replace(/-/g, '');
        if (!date) return '#';

        const startDate = date;
        const endDate = date; 

        const title = encodeURIComponent(t.calendarEventTitle);
        
        const detailsText = t.calendarEventDetails
            .replace('{amount}', response.waterAmount || 'N/A')
            .replace('{notes}', response.wateringNotes || t.none);
        const details = encodeURIComponent(detailsText);

        return `https://www.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDate}/${endDate}&details=${details}&allDay=true`;
    };

    return (
        <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-4 mt-4 border border-blue-200 dark:border-blue-700">
            <div className="flex items-center mb-3">
                <span className="text-xl">📅</span>
                <h3 className="font-bold text-lg text-blue-800 dark:text-blue-200 ml-2">{t.wateringScheduleTitle}</h3>
            </div>
            <div className="space-y-3 text-sm">
                <div className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-300 font-semibold w-28 flex-shrink-0">{t.nextWatering}:</span>
                    <span className="text-slate-700 dark:text-slate-200">{response.nextWateringDate}</span>
                </div>
                <div className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-300 font-semibold w-28 flex-shrink-0">{t.waterAmount}:</span>
                    <span className="text-slate-700 dark:text-slate-200">{response.waterAmount}</span>
                </div>
                {response.wateringNotes && (
                    <div className="flex items-start">
                        <span className="text-blue-600 dark:text-blue-300 font-semibold w-28 flex-shrink-0">{t.wateringNotes}:</span>
                        <span className="text-slate-700 dark:text-slate-200">{response.wateringNotes}</span>
                    </div>
                )}
            </div>
            <a
                href={createCalendarLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 w-full flex items-center justify-center py-2 px-4 rounded-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-all duration-300 ease-in-out"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                {t.addToCalendar}
            </a>
        </div>
    );
};

const ResultDisplay: React.FC<ResultDisplayProps> = ({ response, onReset, moduleTitle, moduleKey }) => {
  const { t } = useLanguage();

  const formatText = (text: string) => {
    return text.replace(/\\n/g, '\n');
  };

  return (
    <div className="p-2 animate-fade-in">
        <h2 className="text-2xl font-bold text-center mb-1 text-slate-800 dark:text-slate-100">{response.result}</h2>
        <p className="text-center text-slate-500 dark:text-slate-400 mb-4 text-sm">{t.analysisFor}: {moduleTitle}</p>
      
        <div className="space-y-4">
            <ResultSection title={t.confidenceScore} icon={<span className="text-xl">📊</span>}>
                {response.confidenceScore}
            </ResultSection>

            <ResultSection title={t.observations} icon={<span className="text-xl">🔍</span>}>
                {formatText(response.observations)}
            </ResultSection>

            <ResultSection title={t.recommendations} icon={<span className="text-xl">🛠️</span>}>
                {formatText(response.recommendations)}
            </ResultSection>

            {response.warnings && response.warnings.length > 0 && (
                 <div className="bg-red-100 dark:bg-red-900/50 border-l-4 border-red-500 dark:border-red-400 text-red-700 dark:text-red-300 p-4 rounded-lg">
                    <div className="flex items-center">
                        <span className="text-xl mr-2">⚠️</span>
                        <h3 className="font-bold">{t.warnings}</h3>
                    </div>
                    <p className="text-sm mt-1 whitespace-pre-wrap">{formatText(response.warnings)}</p>
                </div>
            )}
        </div>
        
        {moduleKey === ModuleKey.SoilMoisture && response.nextWateringDate && response.nextWateringDate.length > 0 && (
            <WateringScheduler response={response} />
        )}

        <button
            onClick={onReset}
            className="w-full mt-6 py-3 px-4 rounded-lg font-semibold text-white bg-gradient-to-br from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 dark:from-slate-500 dark:to-slate-600 dark:hover:from-slate-600 dark:hover:to-slate-700 transition-all duration-300 ease-in-out transform hover:scale-105"
        >
            {t.startNewVerification}
        </button>
    </div>
  );
};

export default ResultDisplay;