
export enum ModuleKey {
  Medicine = 'Medicine',
  PlantDisease = 'PlantDisease',
  SoilMoisture = 'SoilMoisture',
}

export interface AIResponse {
  result: string;
  confidenceScore: string;
  observations: string;
  recommendations: string;
  warnings?: string;
  is_clear?: boolean;
  unclear_reason?: string;
  // New fields for Soil Moisture watering schedule
  nextWateringDate?: string; // Format: YYYY-MM-DD
  waterAmount?: string;
  wateringNotes?: string;
}