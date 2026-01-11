// hiking/adapters.ts
import type { HikingSafari } from "./types";
import type { Safari } from "../Safaris/types/safari";
export function hikingToSafari(hike: HikingSafari): Safari {
  return {
    id: hike.code,
    slug: hike.code, // ← IMPORTANT

    title: hike.title,
    durationLabel: hike.duration,
    destination: "Kenya",

    images: [{ src: "/images/hero.kenya.jpeg" }],

    itinerary: {
      durationDays: hike.itinerary.length,
      days: hike.itinerary.map((d, i) => ({
        dayNumber: i + 1,
        title: d.title,
        description: d.description
      }))
    },

    price: hike.pricing?.note
      ? { currency: "USD", amountFrom: 0, note: hike.pricing.note }
      : undefined,

    includes: [
      "Professional mountain guide",
      "Park fees",
      "Meals on trek",
      "Accommodation on mountain"
    ],

    excludes: [
      "International flights",
      "Tips",
      "Personal hiking gear"
    ],
  };
}

