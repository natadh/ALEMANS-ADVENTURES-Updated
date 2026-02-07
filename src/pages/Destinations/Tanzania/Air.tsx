import { useState, useMemo } from "react";

const balloonImages = [
  "/images/safaris/balloon/kenya-tanzania/img1.jpg",
  "/images/safaris/balloon/kenya-tanzania/img2.jpg",
  "/images/safaris/balloon/kenya-tanzania/img3.jpg",
];

const airSafariImages = [
  "/images/safaris/air/kenya-tanzania/img1.jpg",
  "/images/safaris/air/kenya-tanzania/img2.jpg",
  "/images/safaris/air/kenya-tanzania/img3.jpg",
];

const getRandomImage = (pool: string[]) =>
  pool[Math.floor(Math.random() * pool.length)];

export default function AirAndBalloonSafaris() {
  const [activeTab, setActiveTab] = useState<"balloon" | "air">("balloon");

  const heroImage = useMemo(
    () =>
      activeTab === "balloon"
        ? getRandomImage(balloonImages)
        : getRandomImage(airSafariImages),
    [activeTab]
  );

  return (
    <section className="max-w-7xl mx-auto">
      {/* HERO */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={heroImage}
          alt="Safari Adventure"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#1A0A0B]/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <h1 className="text-5xl uppercase tracking-widest font-light text-white">
            {activeTab === "balloon"
              ? "Balloon Safaris Kenya/Tanzania"
              : "Kenya & Tanzania Flying Safaris"}
          </h1>
        </div>
      </div>

      {/* TAB SWITCH */}
      <div className="flex justify-center mt-8 space-x-4">
        <button
          className={`px-6 py-3 font-medium uppercase tracking-wide ${
            activeTab === "balloon"
              ? "bg-[#1A0A0B] text-white"
              : "bg-white border border-[#1A0A0B]/10 text-[#1A0A0B]"
          } rounded-md shadow-sm transition-colors`}
          onClick={() => setActiveTab("balloon")}
        >
          Balloon Safari
        </button>
        <button
          className={`px-6 py-3 font-medium uppercase tracking-wide ${
            activeTab === "air"
              ? "bg-[#1A0A0B] text-white"
              : "bg-white border border-[#1A0A0B]/10 text-[#1A0A0B]"
          } rounded-md shadow-sm transition-colors`}
          onClick={() => setActiveTab("air")}
        >
          Flying Safari
        </button>
      </div>

      {/* CONTENT */}
      <div className="mt-8 space-y-8 md:grid md:grid-cols-3 md:gap-8">
        <div className="md:col-span-2 space-y-8">
          {activeTab === "balloon" && (
            <>
              <div className="bg-white border border-[#1A0A0B]/10 p-8 shadow-sm">
                <h2 className="text-xl uppercase tracking-wide text-[#1A0A0B] mb-4">
                  Balloon Safaris – Serengeti, Masai Mara & Amboseli
                </h2>
                <p className="text-[#1A0A0B]/85 text-[16px] leading-[1.9] text-justify hyphens-auto mb-4">
                  Balloon safaris are offered from all major lodges and camps in the
                  Masai Mara and Serengeti. Just before dawn, balloons are prepared for flight,
                  slowly lifting above the plains with the gentle morning air current.
                </p>
                <p className="text-[#1A0A0B]/85 text-[16px] leading-[1.9] text-justify hyphens-auto">
                  Drifting silently a few hundred feet above the ground reveals a new perspective
                  of the landscape. See herds of wildebeest grazing, elephants and buffalo navigating
                  the riveline forests, and lions surveying their territory. After about an hour,
                  descend for an assisted landing and enjoy a sumptuous al-fresco breakfast.
                </p>
              </div>
            </>
          )}

          {activeTab === "air" && (
            <>
              <div className="bg-white border border-[#1A0A0B]/10 p-8 shadow-sm space-y-4">
                <h2 className="text-xl uppercase tracking-wide text-[#1A0A0B] mb-4">
                  Kenya & Tanzania Flying Safaris
                </h2>

                <p className="text-[#1A0A0B]/85 text-[16px] leading-[1.9] text-justify hyphens-auto">
                  Flying safaris are a seamless way to explore multiple parks quickly and comfortably.
                  Depart from Nairobi, Mombasa, Kilimanjaro, or Dar es Salaam, board a small charter
                  plane, and land right in the heart of the wildlife.
                </p>

                <h3 className="text-lg uppercase tracking-wide text-[#1A0A0B] mt-4 mb-2">
                  Kenya Highlights
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-[#1A0A0B]/85 text-[16px]">
                  <li><strong>Masai Mara:</strong> Big Five, Great Migration (July–Oct), hot air balloon rides, Maasai cultural visits.</li>
                  <li><strong>Amboseli:</strong> Elephants with Kilimanjaro backdrop, birdwatching, balloon safari.</li>
                  <li><strong>Samburu & Northern Kenya:</strong> Rare species, cultural encounters, dramatic landscapes.</li>
                  <li><strong>Tsavo East & West:</strong> Red elephants, Mzima Springs, vast wilderness.</li>
                  <li><strong>Laikipia & Mt. Kenya Conservancies:</strong> Private luxury camps, rhino sightings, walking & horseback safaris.</li>
                </ul>

                <h3 className="text-lg uppercase tracking-wide text-[#1A0A0B] mt-4 mb-2">
                  Tanzania Highlights
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-[#1A0A0B]/85 text-[16px]">
                  <li><strong>Serengeti National Park:</strong> Great Migration, vast wildlife.</li>
                  <li><strong>Ngorongoro Crater:</strong> Unique landscapes and wildlife.</li>
                  <li><strong>Tarangire:</strong> Dry-season wildlife gatherings, birdwatching.</li>
                </ul>

                <h3 className="text-lg uppercase tracking-wide text-[#1A0A0B] mt-4 mb-2">
                  Flying Safari Tips
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-[#1A0A0B]/85 text-[16px]">
                  <li>Light, neutral-colored clothing and soft-sided luggage (15kg max).</li>
                  <li>Warm layers for mornings and evenings.</li>
                  <li>Binoculars and a camera for wildlife.</li>
                  <li>Combine with beach holidays for relaxation.</li>
                  <li>Great for families with child-friendly lodges.</li>
                </ul>
              </div>
            </>
          )}
        </div>

        {/* SIDEBAR */}
        <div className="space-y-8">
          <div className="bg-white border border-[#1A0A0B]/10 p-6 shadow-sm sticky top-6 mt-5">
            <h2 className="text-xl uppercase tracking-wide text-[#1A0A0B] mb-6">
              Related Safari Experiences
            </h2>
            <ul className="space-y-3">
              {[
                "Hot Air Balloon Rides",
                "Flying Safaris",
                "Big Five Safaris",
                "Photography Tours",
                "Luxury Lodges",
                "Wildlife Tracking",
                "Family Safaris",
                "Cultural Encounters",
              ].map((activity) => (
                <li
                  key={activity}
                  className="border border-[#1A0A0B]/20 px-4 py-3 text-[#1A0A0B]/85 text-sm uppercase tracking-wide hover:bg-[#1A0A0B]/5 transition-colors"
                >
                  {activity}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white border border-[#1A0A0B]/10 overflow-hidden shadow-sm">
            <div className="relative h-80">
              <img
                src={activeTab === "balloon" ? getRandomImage(balloonImages) : getRandomImage(airSafariImages)}
                alt="Safari Adventure"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
