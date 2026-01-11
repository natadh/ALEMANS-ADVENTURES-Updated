// hiking/types.ts

export interface HikingRequirements {
  intro: string;
  travelDocuments: string[];
  essentialItems: string[];
  highAltitudeGear: string[];
  hikingGear: string[];
  footwear: string[];
  equipment: string[];
  personalItems: string[];
  medicalAndFirstAid: string[];
  optionalItems: string[];
}

export interface HikingItineraryDay {
  day: string;          // "Day 1"
  title: string;
  description: string;
}

export interface HikingSafari {
  code: string;
  title: string;
  duration: string;
  route?: string;
  itinerary: HikingItineraryDay[];
  pricing?: {
    seasons: string[];
    paxCategories: string[];
    note?: string;
  };
}

export interface HikingPageData {
  title: string;
  requirements: HikingRequirements;
  destinations: {
    heading: string;
    safaris: HikingSafari[];
  };
}
