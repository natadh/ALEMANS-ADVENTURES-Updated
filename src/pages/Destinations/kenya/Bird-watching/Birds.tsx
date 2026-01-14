import { useState, useMemo } from "react";
import birdsData from "./data/birds.json";
import locationsData from "./data/locations.json";
import imagesData from "./data/images.json";


const getRandomImage = (pool: string[]) =>
pool[Math.floor(Math.random() * pool.length)];


export default function Birdwatching() {
  const [activeTab, setActiveTab] = useState<"locations" | "types">("locations");
  const [activeLocation, setActiveLocation] = useState(locationsData.locations[0]);

  const locationImage = useMemo(
    () => getRandomImage(imagesData.locations),
    [activeLocation]
  );

  return (
    <section className="max-w-7xl mx-auto">
      {/* HERO SECTION */}
      <div className="relative h-96 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1444464666168-49d633b86797?w=1200&auto=format&fit=crop"
          alt="Birdwatching"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#1A0A0B]/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <h1 className="text-5xl uppercase tracking-widest font-light text-white">
            Birdwatching Safari
          </h1>
        </div>
      </div>

      {/* INTRODUCTION CARD */}
      <div className="bg-white border border-[#1A0A0B]/10 p-8 shadow-sm">
        <h2 className="text-xl uppercase tracking-wide text-[#1A0A0B] mb-4">
          Discover Kenya's Avian Wonders
        </h2>
        <p className="text-[#1A0A0B]/85 text-[16px] leading-[1.9] text-justify hyphens-auto">
          Kenya is a premier birdwatching destination with over 1,100 recorded bird species. 
          From the iconic flamingos of the Rift Valley lakes to rare forest endemics, 
          experience diverse habitats and exceptional birding opportunities year-round.
        </p>
      </div>

      {/* TWO COLUMN LAYOUT */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* LEFT COLUMN - MAIN CONTENT */}
        <div className="md:col-span-2 space-y-8">
          {/* TABS */}
          <div className="flex gap-4">
            <button
              onClick={() => setActiveTab("locations")}
              className={`px-6 py-3 uppercase tracking-wide text-sm transition-colors ${
                activeTab === "locations"
                  ? "bg-[#1A0A0B] text-white"
                  : "bg-white border border-[#1A0A0B]/20 text-[#1A0A0B] hover:bg-[#1A0A0B]/5"
              }`}
            >
              Birding Destinations
            </button>
            <button
              onClick={() => setActiveTab("types")}
              className={`px-6 py-3 uppercase tracking-wide text-sm transition-colors ${
                activeTab === "types"
                  ? "bg-[#1A0A0B] text-white"
                  : "bg-white border border-[#1A0A0B]/20 text-[#1A0A0B] hover:bg-[#1A0A0B]/5"
              }`}
            >
              Types of Birds
            </button>
          </div>

          {/* TAB CONTENT - LOCATIONS */}
          {activeTab === "locations" && (
            <div className="space-y-8">
              {/* FEATURED LOCATION WITH IMAGE */}
              <div className="bg-white border border-[#1A0A0B]/10 overflow-hidden shadow-sm">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={locationImage}
                    alt={activeLocation.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <h2 className="text-xl uppercase tracking-wide text-[#1A0A0B] mb-4">
                    {activeLocation.name}
                  </h2>
                  <p className="text-[#1A0A0B]/85 text-[16px] leading-[1.9] text-justify hyphens-auto">
                    {activeLocation.description}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB CONTENT - BIRD TYPES */}
          {activeTab === "types" && (
            <div className="space-y-6">
              {birdsData.types.map((group) => (
                <div
                  key={group.category}
                  className="bg-white border border-[#1A0A0B]/10 p-8 shadow-sm"
                >
                  <h3 className="text-lg uppercase tracking-wide text-[#1A0A0B] mb-4">
                    {group.category}
                  </h3>
                  <ul className="space-y-2">
                    {group.items.map((bird) => (
                      <li
                        key={bird}
                        className="text-[#1A0A0B]/85 text-[16px] leading-[1.9] border-l-2 border-[#1A0A0B]/20 pl-4"
                      >
                        {bird}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* ESSENTIALS */}
              <div className="bg-white border border-[#1A0A0B]/10 p-8 shadow-sm">
                <h2 className="text-xl uppercase tracking-wide text-[#1A0A0B] mb-6">
                  What to Bring
                </h2>
                <div className="space-y-4">
                  {birdsData.essentials.map((entry) => (
                    <div key={entry.item} className="border-l-2 border-[#1A0A0B]/20 pl-4">
                      <p className="text-sm uppercase tracking-wide text-[#1A0A0B] font-medium mb-1">
                        {entry.item}
                      </p>
                      <p className="text-[#1A0A0B]/85 text-[16px] leading-[1.9]">
                        {entry.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* RIGHT COLUMN - SIDEBAR */}
        <div className="space-y-8">
          {/* LOCATIONS SIDEBAR */}
          <div className="bg-white border border-[#1A0A0B]/10 p-6 shadow-sm sticky top-6 mt-5">
            <h2 className="text-xl uppercase tracking-wide text-[#1A0A0B] mb-6">
              Prime Birding Destinations
            </h2>
            <ul className="space-y-3">
              {locationsData.locations.map((loc) => (
                <li key={loc.id}>
                  <button
                    onClick={() => setActiveLocation(loc)}
                    className={`w-full text-left px-4 py-3 text-sm uppercase tracking-wide transition-colors ${
                      activeLocation.id === loc.id
                        ? "bg-[#1A0A0B] text-white"
                        : "border border-[#1A0A0B]/20 text-[#1A0A0B]/85 hover:bg-[#1A0A0B]/5"
                    }`}
                  >
                    {loc.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* ADDITIONAL IMAGE */}
          <div className="bg-white border border-[#1A0A0B]/10 overflow-hidden shadow-sm">
            <div className="relative h-80">
              <img
                src="https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=800&auto=format&fit=crop"
                alt="Birds"
                className="absolute inset-0 w-full h-full object-cover opacity-50"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}