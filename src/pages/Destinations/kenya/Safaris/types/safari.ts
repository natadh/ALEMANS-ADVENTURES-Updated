// src/types/safari.ts

export type SafariImage = {
  src: string;
  alt?: string;
  caption?: string; // Added caption as seen in your JSON
};

export type SeasonalPriceMap = Record<string, number>;

// Structure for JSON key "price"
export type SafariSimplePrice = {
  amountFrom: number;
  currency: string;
  note?: string; // Added note field
};

// Structure for JSON key "prices"
export type SafariComplexPrice = {
  lowSeason?: SeasonalPriceMap;
  peakSeason?: SeasonalPriceMap;
};

export type SafariItineraryDay = {
  dayNumber: number;
  title: string;
  description: string;
  meals?: string[];
  activities?: string[];
};

export type SafariItinerary = {
  durationDays: number;
  days: SafariItineraryDay[];
};

export type Safari = {
  id: string;
  slug: string;
  title: string;
  durationLabel: string;
  destination?: string;
  
  // MATCHING JSON: Two separate optional fields
  price?: SafariSimplePrice;      // Used for "amountFrom" style
  prices?: SafariComplexPrice | null; // Used for "season table" style
  
  highlights?: string[];
  images: SafariImage[];
  description?: string | SafariRichDescription;
  itinerary?: SafariItinerary;
  includes?: string[];
  excludes?: string[];
  seasons?: string[]; 
};

export type SubCategory = {
  id: string;
  title: string;
  safaris: Safari[];
};

export type Category = {
  id: string;
  title: string;
  description?: string;
  subcategories: SubCategory[];
  descriptor?: CategoryDescriptor;
};

export type CategoryDescriptor = {
  type: string;   // e.g. "flyingSafariGuide"
  source: string; // e.g. "flying-safaris"
};

export type SafariDescriptionSectionItem = {
  title: string;
  content: string;
};

export type SafariDescriptionSection = {
  title: string;
  items: SafariDescriptionSectionItem[];
};

export type SafariRichDescription = {
  intro: string;
  sections?: SafariDescriptionSection[];
};