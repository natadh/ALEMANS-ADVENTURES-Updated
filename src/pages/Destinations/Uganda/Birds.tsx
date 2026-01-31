import { useMemo } from "react";

const ugandaImages = [
  "/images/birds/uganda/1.jpg",
  "/images/birds/uganda/2.jpg",
  "/images/birds/uganda/3.jpg",
  "/images/birds/uganda/4.jpg",
  "/images/birds/uganda/5.jpg",
];

const getRandomImage = (pool: string[]) =>
  pool[Math.floor(Math.random() * pool.length)];
const getNewRandomImage = (pool: string[]) =>
  pool[Math.floor(Math.random() * pool.length)];
export default function Birdwatching() {
  const heroImage = useMemo(() => getRandomImage(ugandaImages), []);
  const introImage = useMemo(() => getNewRandomImage(ugandaImages), []);

  const locations = [
    {
      name: "Mabamba Swamp",
      location: "Near Entebbe, on Lake Victoria",
      species:
        "Shoebill Stork, Blue Swallow, Papyrus Gonolek and over 300 other species.",
      description:
        "A vast wetland system famous worldwide for sightings of the prehistoric-looking Shoebill. Canoe excursions through papyrus channels provide incredible close-range bird encounters.",
    },
    {
      name: "Bwindi Impenetrable Forest",
      location: "Southwestern Uganda",
      species:
        "23 Albertine Rift endemics including the Olive Long-tailed Cuckoo and Bar-tailed Trogon.",
      description:
        "A UNESCO World Heritage rainforest with around 350 bird species. This dense montane forest is one of Africa’s most important birding sites for rare and localized species.",
    },
    {
      name: "Queen Elizabeth National Park",
      location: "Western Uganda near the Rwenzori Mountains",
      species:
        "African Finfoot, Great White Pelican, Shoebill and over 600 recorded species.",
      description:
        "Uganda’s most diverse savannah park, offering boat safaris along the Kazinga Channel where water birds gather in large numbers.",
    },
    {
      name: "Entebbe Botanical Gardens",
      location: "Northern shores of Lake Victoria",
      species:
        "Great Blue Turaco, African Grey Parrot and more than 470 species.",
      description:
        "A peaceful birding spot ideal for a relaxed first or last day of a trip, with forest, lakeshore, and open grassland habitats.",
    },
    {
      name: "Budongo Forest",
      location: "Near Murchison Falls National Park",
      species: "Chocolate-backed Kingfisher and Nahan’s Francolin.",
      description:
        "A pristine mahogany forest known for its rich birdlife and excellent forest birding trails.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto">
      {/* HERO SECTION */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={heroImage}
          alt="Uganda Birdwatching"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#1A0A0B]/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <h1 className="text-5xl uppercase tracking-widest font-light text-white">
            Uganda Bird Watching
          </h1>
        </div>
      </div>

      {/* INTRODUCTION */}
      <div className="bg-white border border-[#1A0A0B]/10 shadow-sm overflow-hidden">
        <div className="relative h-64">
          <img
            src={introImage}
            alt="Uganda bird habitat"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-white/90 to-white/30" />
        </div>
        <div className="p-8">
          <h2 className="text-xl uppercase tracking-wide text-[#1A0A0B] mb-4">
            The Pearl of Africa for Birders
          </h2>
          <p className="text-[#1A0A0B]/85 text-[16px] leading-[1.9] text-justify hyphens-auto">
            Uganda is one of Africa’s premier birdwatching destinations, boasting over
            <strong> 1,060 bird species</strong> across diverse ecosystems ranging from
            wetlands and savannahs to tropical rainforests. Its unique location at the
            meeting point of East African savannah and West African forest species makes
            it a biodiversity hotspot for bird lovers.
          </p>
        </div>
      </div>

      {/* LOCATIONS */}
      <div className="grid md:grid-cols-2 gap-8 mt-10">
        {locations.map((place, i) => {
          const image = ugandaImages[i % ugandaImages.length]; // uses index

          return (
            <div
              key={place.name}
              className="bg-white border border-[#1A0A0B]/10 overflow-hidden shadow-sm"
            >
              <div className="relative h-56">
                <img
                  src={image}
                  alt={place.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg uppercase tracking-wide text-[#1A0A0B] mb-2">
                  {place.name}
                </h3>
                <p className="text-sm uppercase tracking-wide text-[#1A0A0B]/60 mb-3">
                  {place.location}
                </p>
                <p className="text-[#1A0A0B]/85 text-[15px] leading-[1.8] mb-3">
                  {place.description}
                </p>
                <p className="text-[#1A0A0B]/85 text-[15px] leading-[1.8] border-l-2 border-[#1A0A0B]/20 pl-4">
                  <strong>Key Species:</strong> {place.species}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* BEST TIME TO VISIT */}
      <div className="bg-white border border-[#1A0A0B]/10 p-8 shadow-sm mt-10">
        <h2 className="text-xl uppercase tracking-wide text-[#1A0A0B] mb-4">
          Best Time for Birdwatching
        </h2>
        <p className="text-[#1A0A0B]/85 text-[16px] leading-[1.9] text-justify hyphens-auto">
          The best birdwatching months in Uganda are during the dry seasons from
          <strong> December to February</strong> and <strong>June to August</strong>,
          when trails are more accessible and birds are easier to spot. The wet seasons
          also attract migratory species, increasing overall diversity for keen birders.
        </p>
      </div>
    </section>
  );
}
