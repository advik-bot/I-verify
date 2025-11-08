import React, { useState, useCallback, useEffect } from 'react';
import { ModuleKey, AIResponse } from './types';
import { getLocalizedModules } from './constants';
import { generateAnalysis } from './services/geminiService';
import Header from './components/Header';
import ModuleSelector from './components/ModuleSelector';
import ImageUploader from './components/ImageUploader';
import LoadingSpinner from './components/LoadingSpinner';
import ResultDisplay from './components/ResultDisplay';
import Disclaimer from './components/Disclaimer';
import { useLanguage } from './LanguageContext';

const App: React.FC = () => {
  const [selectedModule, setSelectedModule] = useState<ModuleKey | null>(null);
  const [imageBase64, setImageBase64] = useState<string | null>(null);
  const [mimeType, setMimeType] = useState<string | null>(null);
  const [aiResponse, setAiResponse] = useState<AIResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const { language, t, languageName } = useLanguage();
  const MODULES = getLocalizedModules(t);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  }, []);

  const handleReset = useCallback(() => {
    setSelectedModule(null);
    setImageBase64(null);
    setMimeType(null);
    setAiResponse(null);
    setIsLoading(false);
    setError(null);
  }, []);

  const handleAnalysis = useCallback(async () => {
    if (!selectedModule || !imageBase64 || !mimeType) {
      setError(t.errorModuleImage);
      return;
    }

    setIsLoading(true);
    setError(null);
    setAiResponse(null);

    try {
      const response = await generateAnalysis(selectedModule, imageBase64, mimeType, language, languageName);
      if (response) {
        setAiResponse(response);
      } else {
        setError(t.errorAIResponse);
      }
    } catch (e: any) {
      console.error(e);
      setError(e.message || t.errorUnexpected);
    } finally {
      setIsLoading(false);
    }
  }, [selectedModule, imageBase64, mimeType, t, language, languageName]);
  
  const selectedModuleData = selectedModule ? MODULES[selectedModule] : null;

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-900 font-sans text-slate-800 dark:text-slate-200 flex flex-col transition-colors duration-300">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main className="flex-grow flex flex-col items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-2xl bg-white dark:bg-slate-800 rounded-2xl shadow-xl transition-all duration-500 ease-in-out">
          {!selectedModule ? (
            <ModuleSelector onSelectModule={setSelectedModule} />
          ) : (
            <div className="p-6 md:p-8">
              {isLoading && <LoadingSpinner />}
              {error && <div className="text-center text-red-500 bg-red-100 dark:bg-red-900/50 dark:text-red-400 p-4 rounded-lg mb-4">{error}</div>}
              {aiResponse ? (
                <ResultDisplay response={aiResponse} onReset={handleReset} moduleTitle={selectedModuleData?.title || ''} moduleKey={selectedModule!}/>
              ) : !isLoading && (
                 <ImageUploader
                    module={selectedModuleData!}
                    onImageReady={(base64, type) => {
                      setImageBase64(base64);
                      setMimeType(type);
                    }}
                    onSubmit={handleAnalysis}
                    onBack={handleReset}
                    isProcessing={isLoading}
                  />
              )}
            </div>
          )}
        </div>
      </main>
      <Disclaimer />
    </div>
  );
};

export default App;