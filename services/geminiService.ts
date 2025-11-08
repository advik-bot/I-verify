import { GoogleGenAI, Type } from "@google/genai";
import { ModuleKey, AIResponse } from '../types';
import { getLocalizedModules } from '../constants';
import { translations } from '../translations';

const API_KEY = process.env.API_KEY;
if (!API_KEY) {
    throw new Error("API_KEY environment variable is not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const responseSchema = {
    type: Type.OBJECT,
    properties: {
        is_clear: {
            type: Type.BOOLEAN,
            description: "Set to false if the image is unclear, blurry, poorly lit, or does not show the subject relevant to the selected module."
        },
        unclear_reason: {
            type: Type.STRING,
            description: "If is_clear is false, explain why the image is not usable (e.g., 'Image is too blurry', 'Subject is out of frame'). Otherwise, this should be an empty string."
        },
        result: {
            type: Type.STRING,
            description: 'A clear, one-sentence summary of the main finding. If the image is unclear, this should state that a new photo is needed.'
        },
        confidenceScore: {
            type: Type.STRING,
            description: 'A percentage value (e.g., "85%") representing the confidence in the result. Never claim above 95%. If image is unclear, this should be "0%".'
        },
        observations: {
            type: Type.STRING,
            description: 'A bulleted list of specific visual details observed in the image that led to the conclusion. Use markdown for bullets (e.g., "- item 1\\n- item 2"). If unclear, list reasons why.'
        },
        recommendations: {
            type: Type.STRING,
            description: 'A bulleted list of actionable advice or next steps for the user. Use markdown for bullets. If unclear, recommend how to take a better photo.'
        },
        warnings: {
            type: Type.STRING,
            description: 'Any critical safety warnings or disclaimers. If none, this can be an empty string. Always include the relevant disclaimer for the module.'
        },
        nextWateringDate: {
            type: Type.STRING,
            description: "The calculated next watering date in strict YYYY-MM-DD format. If not applicable, this should be an empty string."
        },
        waterAmount: {
            type: Type.STRING,
            description: "The recommended amount of water (e.g., '200ml', '1 cup'). If not applicable, this should be an empty string."
        },
        wateringNotes: {
            type: Type.STRING,
            description: "Additional notes or context for the watering schedule. If not applicable, this should be an empty string."
        }
    },
    required: ['is_clear', 'unclear_reason', 'result', 'confidenceScore', 'observations', 'recommendations', 'warnings']
};


export const generateAnalysis = async (moduleKey: ModuleKey, imageBase64: string, mimeType: string, language: string, languageName: string): Promise<AIResponse | null> => {
    const t = translations[language];
    const MODULES = getLocalizedModules(t);
    const moduleInfo = MODULES[moduleKey];
    if (!moduleInfo) {
        throw new Error("Invalid module selected");
    }

    const imagePart = {
        inlineData: {
            data: imageBase64,
            mimeType: mimeType,
        },
    };

    const textPart = {
        text: moduleInfo.prompt(languageName)
    };

    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: { parts: [imagePart, textPart] },
            config: {
                responseMimeType: "application/json",
                responseSchema: responseSchema,
                temperature: 0.2,
            }
        });

        const jsonString = response.text.trim();
        const parsedResponse: AIResponse = JSON.parse(jsonString);

        if (parsedResponse.is_clear === false) {
             // Let's create a more user-friendly response for unclear images
            return {
                result: t.unclearImage,
                confidenceScore: "0%",
                observations: parsedResponse.unclear_reason || t.unclearReasonDefault,
                recommendations: t.unclearRecommendations,
                warnings: t.unclearWarning
            }
        }
        
        return parsedResponse;

    } catch (error) {
        console.error("Error calling Gemini API:", error);
        throw new Error(t.errorGemini);
    }
};