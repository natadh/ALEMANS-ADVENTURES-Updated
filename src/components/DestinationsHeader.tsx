import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function DestinationsHeader({
  currentCountry = "Kenya",
  onSectionChange,
}: {
  currentCountry?: string;
  onSectionChange?: (section: string) => void;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
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
    Tanzania: [
      "Travel Info",
      "National Parks",
      "Safaris",
      "Luxury Safaris",
    ],
    Uganda: ["Travel Info", "National Parks", "Safaris"],
    Rwanda: ["Travel Info", "National Parks", "Safaris"],
    Zanzibar: ["Travel Info", "National Parks", "Safaris"],
  };

  const currentSections = sections[currentCountry] || [];

  const handleCountryChange = (country: string) => {
    navigate(countryRoutes[country] || "/destinations/kenya");
  };

return (
    <div className="bg-[#0F0809] border-b border-[#F5D547]/30 text-[#F5D547]/90 sticky top-16 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Country Selector */}
        <div className="flex items-center gap-3">
          <label className="text-xs uppercase tracking-widest text-[#F5D547]/60 font-medium">
            Country:
          </label>
          <select
            className="bg-[#0F0809] border border-[#F5D547]/40 text-[#F5D547] text-sm px-4 py-2 rounded-md focus:outline-none focus:border-[#F5D547] hover:border-[#F5D547] transition cursor-pointer"
            value={currentCountry}
            onChange={(e) => handleCountryChange(e.target.value)}
          >
            {countries.map((country) => (
              <option
                key={country}
                value={country}
                className="bg-[#0F0809] text-[#F5D547] py-2"
              >
                {country}
              </option>
            ))}
          </select>
        </div>

        {/* Section Buttons */}
        <div className="hidden md:flex gap-8 text-xs uppercase tracking-widest">
          {currentSections.map((section) => (
            <button
              key={section}
              onClick={() => onSectionChange?.(section)}
              className="relative hover:text-white transition-colors duration-200 pb-1 group"
            >
              {section}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#F5D547] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </button>
          ))}
        </div>

        {/* Mobile Dropdown Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-[#F5D547] text-sm uppercase tracking-widest hover:text-white transition-colors"
        >
          Sections {menuOpen ? "▴" : "▾"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="md:hidden border-t border-[#F5D547]/20 bg-[#120809]/95"
        >
          {currentSections.map((section) => (
            <button
              key={section}
              onClick={() => {
                onSectionChange?.(section);
                setMenuOpen(false);
              }}
              className="block w-full text-left py-3 px-6 text-xs text-[#F5D547]/80 hover:text-white hover:bg-[#F5D547]/10 uppercase tracking-widest border-l-2 border-transparent hover:border-[#F5D547] transition-all"
            >
              {section}
            </button>
          ))}
        </motion.div>
      )}
    </div>
  );
}