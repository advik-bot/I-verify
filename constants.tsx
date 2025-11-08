import React from 'react';
import { ModuleKey } from './types';
import { TranslationStrings } from './translations';

const MedicineIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h8a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.707 4.293l.01.01M16.293 4.293l.01.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const PlantDiseaseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8m-4 8a1 1 0 01-1-1V9a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1H9z" />
    </svg>
);

const SoilMoistureIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
    </svg>
);

export const getLocalizedModules = (t: TranslationStrings) => ({
  [ModuleKey.Medicine]: {
    key: ModuleKey.Medicine,
    title: t.moduleMedicineTitle,
    description: t.moduleMedicineDescription,
    icon: <MedicineIcon />,
    color: 'from-blue-500 to-blue-600',
    prompt: (languageName: string) => `You are an AI assistant for the I-Verify app. Your task is to analyze the provided image of a medicine (strip, tablet, bottle, or packaging) and assess its authenticity. Identify if it looks real or fake based on packaging quality, print clarity, batch number formatting, blister pack structure, logo placement, color differences, and common counterfeiting patterns. Do not claim 100% certainty. Provide a confidence-based analysis. If the image is unclear or not a medicine, state that clearly in the result. Please provide the entire response in ${languageName}.`,
  },
  [ModuleKey.PlantDisease]: {
    key: ModuleKey.PlantDisease,
    title: t.modulePlantTitle,
    description: t.modulePlantDescription,
    icon: <PlantDiseaseIcon />,
    color: 'from-green-500 to-green-600',
    prompt: (languageName: string) => `You are an AI assistant for the I-Verify app. Your task is to analyze the provided image of a plant (leaf, stem, fruit, or entire plant) to detect diseases. Identify conditions like blight, rust, mildew, yellowing patterns, fungus spots, or pest damage. Describe the disease name (if confident), symptoms visible, severity level (Low, Medium, High), recommended actions, and preventive measures. If confidence is low, suggest multiple possibilities. This is for agricultural guidance, not medical claims. If the image is unclear or not a plant, state that clearly in the result. Please provide the entire response in ${languageName}.`,
  },
  [ModuleKey.SoilMoisture]: {
    key: ModuleKey.SoilMoisture,
    title: t.moduleSoilTitle,
    description: t.moduleSoilDescription,
    icon: <SoilMoistureIcon />,
    color: 'from-yellow-500 to-orange-500',
    prompt: (languageName: string) => `You are an AI assistant for the I-Verify app. Your task is to analyze the provided image of plant soil or a plant pot to visually detect soil moisture. Look at soil color, texture, cracks, and wet/dry patches. Determine the water requirement (Water now / Wait / Normal), estimate the moisture level (Dry / Slightly Dry / Moist / Wet), and provide tips on watering amount, frequency, and other care suggestions like drainage and sunlight. In addition to this analysis, you MUST generate a watering schedule. Provide the next watering date in strict YYYY-MM-DD format (in the 'nextWateringDate' field), the recommended amount of water (in the 'waterAmount' field), and any extra care notes (in the 'wateringNotes' field). If you cannot confidently determine a schedule, leave these three schedule-related fields as empty strings. If the image is unclear or not soil/a plant pot, state that clearly in the result. Please provide the entire response in ${languageName}.`,
  },
});