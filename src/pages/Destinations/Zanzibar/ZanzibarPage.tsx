import { useMemo, useState } from "react";
import { zanzibarSections } from "./zanzibarContent";

const zanzibarImages = [
  "/images/safaris/zanzibar/excursions/prison_island.jpg",
  "/images/safaris/zanzibar/excursions/prison_island_beach.jpg",
  "/images/safaris/zanzibar/excursions/mnemba_dolphins.jpg",
  "/images/safaris/zanzibar/excursions/mikumi_wildlife.jpg",
  "/images/safaris/zanzibar/excursions/slave_market.jpg",
];

const getRandomImage = (pool: string[]) =>
  pool[Math.floor(Math.random() * pool.length)];

export default function ZanzibarPage() {
  const [activeId, setActiveId] = useState("overview");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const activeSection = zanzibarSections.find((s) => s.id === activeId);
  const heroImage = useMemo(() => getRandomImage(zanzibarImages), []);
  const introImage = useMemo(() => getRandomImage(zanzibarImages), []);

  return (
    <section className="max-w-7xl mx-auto relative">
      {/* MOBILE SIDEBAR TOGGLE TAB */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden fixed top-1/2 left-0 -translate-y-1/2 z-40 bg-[#1A0A0B] text-white px-3 py-2 rounded-r-md shadow-lg"
      >
        ☰
      </button>

      {/* BACKDROP OVERLAY (MOBILE) */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* HERO */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={heroImage}
          alt="Zanzibar Beach"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#1A0A0B]/70 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <h1 className="text-5xl uppercase tracking-widest font-light text-white">
            Discover Zanzibar
          </h1>
        </div>
      </div>

      {/* INTRO CARD */}
      <div className="bg-white border border-[#1A0A0B]/10 shadow-sm overflow-hidden">
        <div className="relative h-64">
          <img
            src={introImage}
            alt="Zanzibar Coastline"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/80" />
        </div>
        <div className="p-8">
          <h2 className="text-xl uppercase tracking-wide text-[#1A0A0B] mb-4">
            The Spice Island Experience
          </h2>
          <p className="text-[#1A0A0B]/85 text-[16px] leading-[1.9] text-justify hyphens-auto">
            Zanzibar is a tropical paradise where turquoise waters meet centuries
            of Swahili culture. From the historic alleys of Stone Town to the
            palm-lined beaches of the Indian Ocean, the island offers a perfect
            blend of relaxation, adventure, and heritage.
          </p>
        </div>
      </div>

      {/* CONTENT + SIDEBAR LAYOUT */}
      <div className="mt-12 grid md:grid-cols-4 gap-12 relative">
        {/* SIDEBAR */}
        <aside
          className={`
            fixed md:static top-0 left-0 h-full md:h-auto w-72 md:w-auto
            bg-white md:bg-transparent border-r border-[#1A0A0B]/10 md:border-none
            z-40 transform transition-transform duration-300
            ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}
            md:translate-x-0
          `}
        >
          <div className="p-6 md:p-0 md:sticky md:top-28 space-y-2">
            {zanzibarSections.map((section) => {
              const active = activeId === section.id;
              return (
                <button
                  key={section.id}
                  onClick={() => {
                    setActiveId(section.id);
                    setIsMenuOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 text-sm transition-all duration-200 border ${
                    active
                      ? "bg-[#1A0A0B] text-white border-[#1A0A0B]"
                      : "bg-white text-[#1A0A0B]/70 border-[#1A0A0B]/10 hover:bg-[#1A0A0B]/5"
                  }`}
                >
                  {section.title}
                </button>
              );
            })}
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main
          className={`md:col-span-3 space-y-6 transition-all duration-300 ${
            isMenuOpen ? "blur-sm md:blur-0" : ""
          }`}
        >
          <div className="bg-white border border-[#1A0A0B]/10 p-8 shadow-sm">
            <h2 className="text-2xl uppercase tracking-wide text-[#1A0A0B] mb-6">
              {activeSection?.title}
            </h2>

            <div className="space-y-5 text-[#1A0A0B]/85 leading-[1.9] text-[16px] text-justify hyphens-auto">
              {activeSection?.content.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}
