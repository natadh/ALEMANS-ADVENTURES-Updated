import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function DestinationsHeader({
  currentCountry = "Kenya",
}: {
  currentCountry?: string;
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

  // ---------------------------------
  // SECTION → ROUTE MAPPING
  // ---------------------------------
  const sectionRoutes: Record<string, string> = {
    "National Parks": "national-parks",
    Safaris: "safaris",
    "Travel Info": "travel-info",
    "Trekking & Hiking": "trekking-hiking",
    "Cultural & Sports": "cultural-sports",
    "Beach & Water Sports": "beach-water-sports",
  };

  const sections: Record<string, string[]> = {
    Kenya: Object.keys(sectionRoutes),
    Tanzania: ["Travel Info", "National Parks", "Safaris"],
    Uganda: ["Travel Info", "National Parks", "Safaris"],
    Rwanda: ["Travel Info", "National Parks", "Safaris"],
    Zanzibar: ["Travel Info", "National Parks", "Safaris"],
  };

  const submenus: Record<string, string[]> = {
    Safaris: [
      "Flying Safaris",
      "Budget Safaris",
      "Luxury Safaris",
      "Cultural & Sports Safaris",
      "Hiking & Trekking Safaris",
      "Beach & Water Sports Safaris",
    ],
  };

  const currentSections = sections[currentCountry] || [];

  const handleCountryChange = (country: string) => {
    navigate(countryRoutes[country] || "/destinations/kenya");
  };

  const goToSection = (section: string) => {
    const slug = sectionRoutes[section];
    if (!slug) return;

    navigate(`/destinations/${currentCountry.toLowerCase()}/${slug}`);
    setMenuOpen(false);
    setOpenMobileSubmenu(null);
  };

  const goToSafariSubsection = (item: string) => {
    const slug = item.toLowerCase().replace(/\s+/g, "-");
    navigate(
      `/destinations/${currentCountry.toLowerCase()}/safaris/${slug}`
    );
    setMenuOpen(false);
    setOpenMobileSubmenu(null);
  };

  return (
    <div className="bg-[#0F0809] border-b border-[#F5D547]/30 text-[#F5D547]/90 sticky top-16 z-40">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">

        {/* Country Selector */}
        <div className="flex items-center gap-3">
          <label className="text-xs uppercase tracking-widest text-[#F5D547]/60">
            Country:
          </label>
          <select
            value={currentCountry}
            onChange={(e) => handleCountryChange(e.target.value)}
            className="bg-[#0F0809] border border-[#F5D547]/40 text-[#F5D547] text-sm px-4 py-2 rounded-md"
          >
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex gap-8 text-xs uppercase tracking-widest">
          {currentSections.map((section) => {
            const hasSubmenu = submenus[section];

            return (
              <div key={section} className="relative group">
                <button
                  onClick={() => !hasSubmenu && goToSection(section)}
                  className="hover:text-white transition-colors pb-1"
                >
                  {section}
                </button>

                {hasSubmenu && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute left-0 top-full mt-2 bg-[#1a0d0e] border border-[#F5D547]/20 rounded-md shadow-xl min-w-[240px]"
                  >
                    {submenus[section].map((item) => (
                      <button
                        key={item}
                        onClick={() => goToSafariSubsection(item)}
                        className="block w-full text-left px-4 py-2 text-[11px] hover:bg-[#F5D547]/10"
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

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden uppercase tracking-widest"
        >
          Sections {menuOpen ? "▴" : "▾"}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="md:hidden bg-[#120809]/95"
          >
            {currentSections.map((section) => {
              const hasSubmenu = submenus[section];

              return (
                <div key={section}>
                  <button
                    onClick={() =>
                      hasSubmenu
                        ? setOpenMobileSubmenu(
                            openMobileSubmenu === section ? null : section
                          )
                        : goToSection(section)
                    }
                    className="w-full text-left px-6 py-3 uppercase tracking-widest"
                  >
                    {section}
                  </button>

                  {hasSubmenu && openMobileSubmenu === section && (
                    <div className="pl-8">
                      {submenus[section].map((item) => (
                        <button
                          key={item}
                          onClick={() => goToSafariSubsection(item)}
                          className="block w-full text-left py-2 text-xs"
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
