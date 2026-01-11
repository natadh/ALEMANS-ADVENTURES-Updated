import { useParams } from "react-router-dom";

import hikingData from "./data.json";
import type { HikingPageData } from "./types";
import { hikingToSafari } from "./adapters";

import SafariHero from "../Safaris/components/safari-detail/SafariHero";
import SafariItinerary from "../Safaris/components/safari-detail/SafariItinerary";
import SafariPricing from "../Safaris/components/safari-detail/SafariPricing";
import SafariInclusions from "../Safaris/components/safari-detail/SafariInclusions";

const data = hikingData[0] as HikingPageData;

export default function HikingDetail() {
    const { code } = useParams<{ code: string }>();
    const hike = data.destinations.safaris.find(
        s => s.code === code
    );


  if (!hike) {
    return (
      <div className="p-10 text-center text-gray-500">
        Hiking safari not found
      </div>
    );
  }

  const safari = hikingToSafari(hike);

  return (
    <div className="space-y-16">
      <SafariHero safari={safari} />

      <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-10 px-6">
        <div className="lg:col-span-2">
          <SafariItinerary itinerary={safari.itinerary} />
        </div>

        <div className="space-y-8">
          <SafariPricing safari={safari} />
          <SafariInclusions
            includes={safari.includes}
            excludes={safari.excludes}
          />
        </div>
      </div>
    </div>
  );
}
