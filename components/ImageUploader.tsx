import React, { useState, useRef, useCallback } from 'react';
import { ModuleKey } from '../types';
import CameraView from './CameraView';
import { useLanguage } from '../LanguageContext';
import { TranslationStrings } from '../translations';


interface LocalizedModule {
  key: ModuleKey;
  title: string;
  description: string;
  // Fix: Changed JSX.Element to React.ReactNode to resolve namespace error.
  icon: React.ReactNode;
  color: string;
  prompt: (languageName: string) => string;
}

interface ImageUploaderProps {
  module: LocalizedModule;
  onImageReady: (base64: string, mimeType: string) => void;
  onSubmit: () => void;
  onBack: () => void;
  isProcessing: boolean;
}

const fileToBase64 = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        resolve(reader.result.split(',')[1]);
      } else {
        reject(new Error('Failed to read file as base64 string.'));
      }
    };
    reader.onerror = (error) => reject(error);
  });

const ImageUploader: React.FC<ImageUploaderProps> = ({ module, onImageReady, onSubmit, onBack, isProcessing }) => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>('');
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { t } = useLanguage();

  const handleFileChange = useCallback(async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
      setImagePreview(URL.createObjectURL(file));
      const base64 = await fileToBase64(file);
      onImageReady(base64, file.type);
    }
  }, [onImageReady]);
  
  const handlePhotoTaken = useCallback((base64: string, mimeType: string) => {
    setImagePreview(`data:${mimeType};base64,${base64}`);
    setFileName('camera_photo.jpg');
    onImageReady(base64, mimeType);
    setIsCameraOpen(false);
  }, [onImageReady]);

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const clearImage = () => {
      setImagePreview(null);
      setFileName('');
      onImageReady('', '');
  }

  return (
    <>
      {isCameraOpen && <CameraView onCapture={handlePhotoTaken} onClose={() => setIsCameraOpen(false)} />}
      <div className="text-center">
        <div className="flex items-center justify-center mb-6 relative">
          <button onClick={onBack} className="absolute left-0 text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-100 transition-colors">&larr; {t.changeTool}</button>
          <h2 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-100">{module.title}</h2>
        </div>

        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
          accept="image/*"
        />

        {imagePreview ? (
            <div className="mt-4 border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-lg p-4 flex flex-col items-center justify-center relative">
                 <button onClick={clearImage} className="absolute top-2 right-2 bg-white dark:bg-slate-700 bg-opacity-75 rounded-full p-1 text-slate-600 dark:text-slate-300 hover:text-red-500 dark:hover:text-red-400 transition-colors z-10" aria-label={t.clearImage}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                 </button>
                <img src={imagePreview} alt={t.imagePreview} className="max-h-48 rounded-lg object-contain" />
                {fileName && <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">{fileName}</p>}
            </div>
        ) : (
          <div className="mt-4 space-y-3">
              <button onClick={handleUploadClick} className="w-full flex items-center justify-center py-3 px-4 rounded-lg font-semibold text-slate-700 dark:text-slate-200 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
                  {t.uploadFromDevice}
              </button>
              <button onClick={() => setIsCameraOpen(true)} className="w-full flex items-center justify-center py-3 px-4 rounded-lg font-semibold text-slate-700 dark:text-slate-200 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 transition-all">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2-2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  {t.useCamera}
              </button>
          </div>
        )}
        
        <button
          onClick={onSubmit}
          disabled={!imagePreview || isProcessing}
          className={`w-full mt-6 py-3 px-4 rounded-lg font-semibold text-white transition-all duration-300 ease-in-out transform hover:scale-105 ${module.color} bg-gradient-to-br disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100`}
        >
          {isProcessing ? t.verifying : t.verifyImage}
        </button>
      </div>
    </>
  );
};

export default ImageUploader;