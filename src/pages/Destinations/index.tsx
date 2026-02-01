import Layout from "../../components/Layout"
import Hero from "../../components/destinations/Hero"
export default function Destinations() {
  const destinations = [
    {
      name: "Kenya",
      slug: "kenya",
      tagline: "Where Safari Dreams Come Alive",
      description: "Experience the birthplace of safari with the Great Migration, iconic Maasai culture, and diverse landscapes from savannas to coastal paradises.",
      highlights: [
        "Maasai Mara - Witness the Great Wildebeest Migration",
        "Amboseli National Park - Elephants with Kilimanjaro views",
        "Diani Beach - Pristine white sand coastline",
        "Nairobi National Park - Wildlife at the city's edge"
      ],
      image: "/images/safaris/kenya/excursions/aberdares.jpg"
    },
    {
      name: "Tanzania",
      slug: "tanzania",
      tagline: "Africa's Wild Heart",
      description: "Home to the Serengeti, Ngorongoro Crater, and Mount Kilimanjaro, Tanzania offers unparalleled wildlife encounters and Africa's highest peak.",
      highlights: [
        "Serengeti National Park - Endless plains teeming with wildlife",
        "Ngorongoro Crater - UNESCO World Heritage site",
        "Mount Kilimanjaro - Conquer Africa's highest mountain",
        "Tarangire - Land of giants and ancient baobabs"
      ],
      image: "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=800&fit=crop"
    },
    {
      name: "Uganda",
      slug: "uganda",
      tagline: "The Pearl of Africa",
      description: "Encounter mountain gorillas in their natural habitat, explore lush rainforests, and discover the source of the Nile in this biodiverse gem.",
      highlights: [
        "Bwindi Impenetrable Forest - Mountain gorilla trekking",
        "Queen Elizabeth National Park - Tree-climbing lions",
        "Murchison Falls - The Nile's most powerful waterfall",
        "Kibale Forest - Chimpanzee tracking paradise"
      ],
      image: "/images/safaris/uganda/semuliki/2.jpg"
    },
    {
      name: "Rwanda",
      slug: "rwanda",
      tagline: "Land of a Thousand Hills",
      description: "Experience intimate gorilla encounters in misty mountains, vibrant culture in Kigali, and pristine lakes in Africa's cleanest country.",
      highlights: [
        "Volcanoes National Park - Mountain gorilla trekking",
        "Kigali - Modern, clean capital with rich history",
        "Lake Kivu - Scenic beaches and water activities",
        "Nyungwe Forest - Canopy walks and primate tracking"
      ],
      image: "/images/rwanda/akagera.jpg"
    },
    {
      name: "Zanzibar",
      slug: "zanzibar",
      tagline: "Island Paradise of Spice and Sand",
      description: "Unwind on turquoise waters and powder-white beaches, explore Stone Town's ancient streets, and immerse yourself in Swahili culture.",
      highlights: [
        "Nungwi & Kendwa - Stunning beaches and sunsets",
        "Stone Town - UNESCO World Heritage site",
        "Spice Tours - Discover the island's aromatic heritage",
        "Snorkeling & Diving - Pristine coral reefs"
      ],
      image: "/images/safaris/zanzibar/budget/spice_tour.jpg"
    }
  ];

  return (
    <Layout showHero={true} HeroComponent={<Hero/>}>
    <main className="bg-white">
      {/* Destinations Grid */}
      <section className="max-w-7xl mx-auto py-20 px-6">
        <div className="space-y-px border-t border-gray-200">
          {destinations.map((destination, index) => (
            <a
              key={destination.slug}
              href={`/destinations/${destination.slug}`}
              className="block group"
            >
              <div className={`grid lg:grid-cols-2 gap-0 border-b border-gray-200 hover:bg-[#FAFAF8] transition-colors duration-300 ${
                index % 2 === 0 ? '' : 'lg:direction-rtl'
              }`}>
                {/* Image Side */}
                <div className={`relative h-[400px] lg:h-[500px] overflow-hidden ${
                  index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'
                }`}>
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#1A0A0B] opacity-30 group-hover:opacity-20 transition-opacity duration-300"></div>
                  
                  {/* Overlay Label */}
                  <div className="absolute top-8 left-8 bg-[#F5D547] px-6 py-2">
                    <span className="text-[#1A0A0B] font-medium uppercase tracking-[0.2em] text-sm">
                      {destination.name}
                    </span>
                  </div>
                </div>

                {/* Content Side */}
                <div className={`p-12 lg:p-16 flex flex-col justify-center ${
                  index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'
                }`}>
                  <div className="w-12 h-px bg-[#F5D547] mb-6"></div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-[0.15em] text-[#1A0A0B] mb-3">
                    {destination.name}
                  </h2>
                  
                  <p className="text-[#F5D547] uppercase tracking-wider text-sm font-medium mb-6">
                    {destination.tagline}
                  </p>
                  
                  <p className="text-gray-700 font-light leading-relaxed mb-8">
                    {destination.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-3 mb-8">
                    {destination.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-1 h-1 bg-[#F5D547] mt-2 shrink-0"></div>
                        <p className="text-gray-600 text-sm font-light">
                          {highlight}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="inline-block">
                    <span className="text-[#1A0A0B] uppercase tracking-[0.15em] text-sm font-medium group-hover:text-[#F5D547] transition-colors duration-300">
                      Explore {destination.name}
                      <span className="inline-block ml-2 group-hover:ml-4 transition-all duration-300">→</span>
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
    </Layout>
  );
}