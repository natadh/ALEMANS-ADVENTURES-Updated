import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";

import CountrySelector from "./CountrySelector";
import DesktopSections from "./DesktopSections";
import MobileSections from "./MobileSections";

export default function DestinationsHeader({
  currentCountry = "Kenya",
}: {
  currentCountry?: string;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const countries = ["Kenya", "Tanzania", "Uganda", "Rwanda", "Zanzibar"];

  const countryRoutes: Record<string, string> = {
    Kenya: "/destinations/kenya",
    Tanzania: "/destinations/tanzania",
    Uganda: "/destinations/uganda",
    Rwanda: "/destinations/rwanda",
    Zanzibar: "/destinations/zanzibar",
  };

  /** Section → route mapping (THIS IS THE IMPORTANT PART) */
  const sectionRoutes: Record<string, Record<string, string>> = {
    Kenya: {
      "Tours and Safaris": "safaris",
      "National Parks": "national-parks",
      "Hiking & Trekking": "hiking",
      "Culture & Sports": "culture",
      "Beach & Water Sports": "water-sports",
      "Bird Watching": "bird-watching",
      "Travel Info": "travel-info",
    },
    Tanzania: {
      "Safaris": "safaris",
      "Rafting and Kayaking": "rafting",
      "Balloon Safaris": "balloon-safaris",
      "Air Safaris": "air-safaris",
      "Culture & Sports": "culture",
      "National Parks": "national-parks",
      "Travel Info": "travel-info",
    },
    Uganda: {
      "Safaris": "safaris",
      "Bird Watching": "bird-watching",
      "Water Rafting": "rafting",
      "Hiking & Trekking": "hiking",
      "National Parks": "national-parks",
      "Travel Info": "travel-info",
    },
    Rwanda: {
      "Safaris": "safaris",
      "National Parks": "national-parks",
      "Travel Info": "travel-info",
    },
    Zanzibar: {
      "Safaris": "safaris",
      "National Parks": "national-parks",
      "Travel Info": "travel-info",
    },
  };

  const sections = Object.keys(sectionRoutes[currentCountry] || {});

  const handleCountryChange = (country: string) => {
    navigate(countryRoutes[country]);
  };

  const handleSectionClick = (section: string) => {
    const slug = sectionRoutes[currentCountry]?.[section];
    if (!slug) return;

    navigate(`${countryRoutes[currentCountry]}/${slug}`);
    setMenuOpen(false);
  };

  return (
    <div className="bg-[#0F0809] border-b border-[#F5D547]/30 text-[#F5D547]/90 sticky top-16 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">

        <CountrySelector
          countries={countries}
          currentCountry={currentCountry}
          onChange={handleCountryChange}
        />

        <DesktopSections
          sections={sections}
          onNavigate={handleSectionClick}
          pathname={location.pathname}
          basePath={countryRoutes[currentCountry]}
        />

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-[#F5D547] text-sm uppercase tracking-widest hover:text-white transition-colors"
        >
          Sections {menuOpen ? "▴" : "▾"}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <MobileSections
            sections={sections}
            onNavigate={handleSectionClick}
            setMenuOpen={setMenuOpen}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
