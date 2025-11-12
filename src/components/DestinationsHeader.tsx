import { useState } from "react";
import { motion } from "framer-motion";

export default function DestinationsHeader({
  currentCountry = "Kenya",
  onCountryChange,
}: {
  currentCountry?: string;
  onCountryChange?: (country: string) => void;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const countries = ["Kenya", "Tanzania & Zanzibar", "Uganda", "Rwanda"];
  const sections: Record<string, string[]> = {
    Kenya: [
      "Travel Info",
      "National Parks",
      "Safaris",
      "Trekking & Hiking",
      "Water Rafting",
      "Cultural & Sports",
      "Extreme Adventures",
      "Photographic Safaris",
      "Beach & Water Sports",
    ],
    "Tanzania & Zanzibar": [
      "Travel Info",
      "Zanzibar & Pemba",
      "National Parks",
      "Budget Safaris",
      "Luxury Safaris",
      "Mountain Hiking",
    ],
    Uganda: [
      "Travel Info",
      "National Parks",
      "Popular Safaris",
      "Gorilla & Chimpanzee Tracking",
      "Rafting & Hiking",
    ],
    Rwanda: [
      "Travel Info",
      "National Parks",
      "Budget Safaris",
      "Luxury Safaris",
      "Popular Safaris",
    ],
  };

  const currentSections = sections[currentCountry] || [];

  return (
    <div className="bg-[#0F0809] border-b border-[#F5D547]/30 text-[#F5D547]/90 sticky top-16 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        {/* Country Selector */}
        <div className="flex items-center gap-2">
          <label className="text-xs uppercase tracking-widest text-[#F5D547]/60">
            Country:
          </label>
          <select
            className="bg-transparent border border-[#F5D547]/40 text-[#F5D547] text-sm px-3 py-1 rounded-md focus:outline-none focus:border-[#F5D547] hover:border-white transition"
            value={currentCountry}
            onChange={(e) => onCountryChange?.(e.target.value)}
          >
            {countries.map((country) => (
              <option
                key={country}
                value={country}
                className="bg-[#1A0A0B] text-[#F5D547] hover:bg-[#F5D547] hover:text-[#1A0A0B]"
              >
                {country}
              </option>
            ))}
          </select>
        </div>

        {/* Section Links */}
        <div className="hidden md:flex gap-6 text-xs uppercase tracking-widest">
          {currentSections.map((section) => (
            <a
              key={section}
              href={`#${section.replace(/\s+/g, "-").toLowerCase()}`}
              className="relative hover:text-white transition group"
            >
              {section}
              <motion.span
                layoutId="underline"
                className="absolute bottom-0 left-0 w-0 h-px bg-[#F5D547] group-hover:w-full transition-all duration-300"
              />
            </a>
          ))}
        </div>

        {/* Mobile Dropdown Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-[#F5D547] text-sm uppercase tracking-widest"
        >
          Sections ▾
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
            <a
              key={section}
              href={`#${section.replace(/\s+/g, "-").toLowerCase()}`}
              className="block py-3 px-4 text-xs text-[#F5D547]/80 hover:text-white hover:bg-[#F5D547]/10 uppercase tracking-widest border-l-2 border-transparent hover:border-[#F5D547] transition-all"
              onClick={() => setMenuOpen(false)}
            >
              {section}
            </a>
          ))}
        </motion.div>
      )}
    </div>
  );
}
