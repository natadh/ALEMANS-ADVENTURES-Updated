import { useEffect } from "react";
import type { Safari } from "./types/safari";
import SafariDescription from "./components/SafariDescription";
import SafariHero from "./components/safari-detail/SafariHero";
import SafariPricing from "./components/safari-detail/SafariPricing";
import SafariItinerary from "./components/safari-detail/SafariItinerary";
import SafariInclusions from "./components/safari-detail/SafariInclusions";

interface SafariDetailProps {
  safari: Safari;
  onBack: () => void;
}

export default function SafariDetail({ safari, onBack }: SafariDetailProps) {

  // 🔽 Scroll to top when a safari/card is opened
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [safari]);
  const handleBack = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    onBack();
  };

  return (
    <div className="pb-20 bg-white animate-fade-in">
      {/* 2. HERO SECTION */}
      <SafariHero safari={safari} />

      {/* 3. MAIN CONTENT GRID */}
      <div className="max-w-5xl mx-auto px-6 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* LEFT COLUMN */}
        <div className="lg:col-span-2 space-y-12">
          {safari.description && (
            <SafariDescription description={safari.description} />
          )}

          {safari.highlights && (
            <section>
              <h3 className="text-xl font-medium mb-6">Highlights</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {safari.highlights.map((h, i) => (
                  <li key={i} className="flex items-start text-gray-700">
                    <span className="mr-2 text-green-600">✓</span> {h}
                  </li>
                ))}
              </ul>
            </section>
          )}

          <SafariItinerary itinerary={safari.itinerary} />
        </div>

        {/* RIGHT COLUMN */}
        <aside className="space-y-8">
          <div className="sticky top-36 space-y-8">
            <SafariPricing safari={safari} />
            <SafariInclusions 
              includes={safari.includes} 
              excludes={safari.excludes} 
            />
          </div>
        </aside>
      </div>
      {/* Back to Safaris (bottom link) */}
      <div className="max-w-5xl mx-auto px-6 mt-20">
        <button
          onClick={handleBack}
          className="
            inline-flex items-center gap-2
            text-sm font-medium tracking-wide
            text-gray-600
            hover:text-gray-900
            transition-colors
          "
        >
          <span className="text-base">←</span>
          Back to Safaris
        </button>
      </div>

    </div>
  );
}
