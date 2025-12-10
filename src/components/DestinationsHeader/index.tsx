import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

import CountrySelector from "./CountrySelector";
import DesktopSections from "./DesktopSections";
import MobileSections from "./MobileSections";

export default function DestinationsHeader({
  currentCountry = "Kenya",
  onSectionChange,
}: {
  currentCountry?: string;
  onSectionChange?: (section: string) => void;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null);

  const navigate = useNavigate();

  const countries = ["Kenya", "Tanzania", "Uganda", "Rwanda", "Zanzibar"];

  const countryRoutes: Record<string, string> = {
    Kenya: "/destinations/kenya",
    Tanzania: "/destinations/tanzania",
    Uganda: "/destinations/uganda",
    Rwanda: "/destinations/rwanda",
    Zanzibar: "/destinations/zanzibar",
  };

  const sections: Record<string, string[]> = {
    Kenya: [
      "National Parks",
      "Safaris",
      "Trekking & Hiking",
      "Cultural & Sports",
      "Beach & Water Sports",
      "Travel Info",
    ],
    Tanzania: ["Travel Info", "National Parks", "Safaris", "Luxury Safaris"],
    Uganda: ["Travel Info", "National Parks", "Safaris"],
    Rwanda: ["Travel Info", "National Parks", "Safaris"],
    Zanzibar: ["Travel Info", "National Parks", "Safaris"],
  };

  const currentSections = sections[currentCountry] || [];

  const handleCountryChange = (country: string) => {
    navigate(countryRoutes[country]);
  };

  return (
    <div className="bg-[#0F0809] border-b border-[#F5D547]/30 text-[#F5D547]/90 sticky top-16 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">

        {/* Country Selector */}
        <CountrySelector
          countries={countries}
          currentCountry={currentCountry}
          onChange={handleCountryChange}
        />

        {/* Desktop Sections */}
        <DesktopSections
          sections={currentSections}
          onSectionChange={onSectionChange}
        />

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-[#F5D547] text-sm uppercase tracking-widest hover:text-white transition-colors"
        >
          Sections {menuOpen ? "▴" : "▾"}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <MobileSections
            sections={currentSections}
            openMobileSubmenu={openMobileSubmenu}
            setOpenMobileSubmenu={setOpenMobileSubmenu}
            setMenuOpen={setMenuOpen}
            onSectionChange={onSectionChange}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
