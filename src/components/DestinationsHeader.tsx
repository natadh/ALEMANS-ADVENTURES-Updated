import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

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

  // ------------------------------
  // ALL SECTIONS PER COUNTRY
  // ------------------------------
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

  // ------------------------------
  // SUBMENUS
  // ------------------------------
  const submenus: Record<string, string[]> = {
    "National Parks": [
      "Popular Parks",
      "National Parks",
      "Public Conservancy",
      "Private Conservancy",
    ],
    Safaris: [
      "Excursions",
      "Top Request Safaris",
      "Budget Safaris",
      "Luxury Safaris",
      "Popular Safaris",
      "Across East Africa Safaris",
      "Balloon Safaris",
      "Flying Safaris",
      "Cultural and Sports Safaris",
      "Extreme Challenge Safaris",
      "Photographic and Scenery Safaris",
      "Beach and Water Sports Safaris",
      "Bird Watching Safaris",
      "Hiking and Trekking Safaris",
      "Water Rafting and Kayaking Safaris",
    ],
  };

  const currentSections = sections[currentCountry] || [];

  const handleCountryChange = (country: string) => {
    navigate(countryRoutes[country] || "/destinations/kenya");
  };

  // ==============================================================

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

        {/* DESKTOP SECTIONS WITH SUBMENU */}
        <div className="hidden md:flex gap-8 text-xs uppercase tracking-widest relative">
          {currentSections.map((section) => {
            const hasSubmenu = submenus[section];

            return (
              <div key={section} className="relative group">
                <button
                  onClick={() => {
                    if (!hasSubmenu) onSectionChange?.(section);
                  }}
                  className="relative hover:text-white transition-colors duration-200 pb-1"
                >
                  {section}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#F5D547] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </button>

                {/* HOVER SUBMENU */}
                {hasSubmenu && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 top-full mt-2 bg-[#1a0d0e] border border-[#F5D547]/20 rounded-md shadow-xl opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto pointer-events-none z-50 min-w-[240px]"
                  >
                    {submenus[section].map((item) => (
                      <button
                        key={item}
                        onClick={() => onSectionChange?.(item)}
                        className="block w-full text-left px-4 py-2 text-[11px] text-[#F5D547]/80 hover:text-white hover:bg-[#F5D547]/10 tracking-widest border-l-2 border-transparent hover:border-[#F5D547] transition-all"
                      >
                        {item}
                      </button>
                    ))}
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile Dropdown Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-[#F5D547] text-sm uppercase tracking-widest hover:text-white transition-colors"
        >
          Sections {menuOpen ? "▴" : "▾"}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-[#F5D547]/20 bg-[#120809]/95 overflow-hidden"
          >
            {currentSections.map((section) => {
              const hasSubmenu = submenus[section];

              return (
                <div key={section}>
                  <button
                    onClick={() => {
                      if (hasSubmenu) {
                        setOpenMobileSubmenu(
                          openMobileSubmenu === section ? null : section
                        );
                      } else {
                        onSectionChange?.(section);
                        setMenuOpen(false);
                      }
                    }}
                    className="block w-full text-left py-3 px-6 text-xs text-[#F5D547]/80 hover:text-white hover:bg-[#F5D547]/10 uppercase tracking-widest border-l-2 border-transparent hover:border-[#F5D547] transition-all flex justify-between items-center"
                  >
                    {section}
                    {hasSubmenu && (
                      <span className="text-[#F5D547] text-sm">
                        {openMobileSubmenu === section ? "▴" : "▾"}
                      </span>
                    )}
                  </button>

                  {/* MOBILE SUBMENU ACCORDION */}
                  <AnimatePresence>
                    {hasSubmenu && openMobileSubmenu === section && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="bg-[#0F0809] border-t border-[#F5D547]/10"
                      >
                        {submenus[section].map((item) => (
                          <button
                            key={item}
                            onClick={() => {
                              onSectionChange?.(item);
                              setMenuOpen(false);
                            }}
                            className="block w-full text-left px-10 py-3 text-[11px] text-[#F5D547]/70 hover:text-white hover:bg-[#F5D547]/10 tracking-widest border-l-2 border-transparent hover:border-[#F5D547] transition-all"
                          >
                            {item}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
