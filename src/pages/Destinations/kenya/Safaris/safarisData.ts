/* ===========================
   SAFARI DATA TYPES
=========================== */

export interface SafariImage {
  src: string;          // URL or local path
  alt?: string;         // Accessibility text
  caption?: string;
}

/* -- Per day detail -- */
export interface SafariDay {
  dayNumber: number;           // 1,2,3...
  title?: string;              // optional heading
  description: string;         // full narrative
  meals?: string[];            // ["Breakfast", "Lunch", "Dinner"]
  accommodation?: string;     // Lodge / Camp name
  activities?: string[];      // ["Game drive", "Birding", "Cultural visit"]
}

/* -- Itinerary object -- */
export interface SafariItinerary {
  durationDays: number;
  days: SafariDay[];
}

/* -- Main safari object -- */
export interface Safari {
  id: string;
  title: string;                  // "3 Days Maasai Mara Safari"
  slug: string;                   // "3-days-maasai-mara"
  
  destination: string;           // "Masai Mara"
  description: string;           // Short intro

  categoryPath: string[];
  // Example:
  // ["Kenya Safaris", "Kenya Popular Safaris", "Maasai Mara"]

  itinerary?: SafariItinerary;   // Optional → For multi-day safaris
  durationLabel?: string;        // "3 Days / 2 Nights"
  highlights?: string[];

  price?: {
    currency: "USD" | "KES";
    amountFrom: number;
    note?: string;               // e.g "Based on twin sharing"
  };

  images: SafariImage[];

  includes?: string[];
  excludes?: string[];

  seasons?: string[];            // ["Jan - Mar", "Jul - Oct"]
  difficulty?: "Easy" | "Moderate" | "Challenging";

  bookingInfo?: {
    minPax?: number;
    departures?: string;         // "Daily", "On request"
  };
}

/* -- Categories tree -- */
export interface SafariCategory {
  id: string;
  title: string;
  description?: string;
  subcategories?: SafariCategory[];
  safaris?: Safari[];
}
