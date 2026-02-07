import { useMemo } from "react";

const tribeImages = [
  "/images/tribes/1.jpg",
  "/images/tribes/2.jpg",
  "/images/tribes/3.jpg",
  "/images/tribes/4.jpg",
  "/images/tribes/5.jpg",
];

const getRandomImage = (pool: string[]) =>
  pool[Math.floor(Math.random() * pool.length)];

export default function TanzaniaTribesSafari() {
  const heroImage = useMemo(() => getRandomImage(tribeImages), []);
  const villageImage = useMemo(() => getRandomImage(tribeImages), []);

  return (
    <section className="max-w-7xl mx-auto">
      {/* HERO */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={heroImage}
          alt="Tanzania Cultural Tribes Safari"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#1A0A0B]/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <h1 className="text-5xl uppercase tracking-widest font-light text-white">
            Tanzania Cultural Tribes Safari
          </h1>
        </div>
      </div>

      {/* INTRO */}
      <div className="bg-white border border-[#1A0A0B]/10 p-8 shadow-sm space-y-4 mt-8">
        <h2 className="text-xl uppercase tracking-wide text-[#1A0A0B] mb-4">
          Masaai & Hadzabe Tribes
        </h2>
        <p className="text-[#1A0A0B]/85 text-[16px] leading-[1.9] text-justify hyphens-auto">
          One of the most enriching aspects of your Tanzania adventure is the chance
          to immerse yourself in the local culture. From visiting local villages and
          tribes to learning traditional Tanzanian crafts and cuisine, there are
          plenty of opportunities to connect with the heart and soul of this vibrant country.
        </p>
        <p className="text-[#1A0A0B]/85 text-[16px] leading-[1.9] text-justify hyphens-auto">
          Any Tanzania adventure would not be complete without a visit to the local villages
          and tribes. This experience gives you a unique insight into the daily lives of the
          people who call Tanzania home. You’ll have the chance to interact with locals,
          learn about their traditions, customs, and even participate in traditional ceremonies.
          It’s a truly eye-opening experience that will stay with you long after your trip is over.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-8">
        {/* MAIN CONTENT */}
        <div className="md:col-span-2 space-y-8">
          {/* VILLAGE EXPERIENCE CARD */}
          <div className="bg-white border border-[#1A0A0B]/10 overflow-hidden shadow-sm">
            <div className="relative h-64">
              <img
                src={villageImage}
                alt="Tanzania Village Visit"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <h2 className="text-xl uppercase tracking-wide text-[#1A0A0B] mb-2">
                Village Life & Traditions
              </h2>
              <p className="text-sm uppercase tracking-wide text-[#1A0A0B]/70 mb-4">
                Engage with Local Communities
              </p>
              <p className="text-[#1A0A0B]/85 text-[16px] leading-[1.9] text-justify hyphens-auto">
                Spend a day exploring the villages of the Masaai and Hadzabe tribes,
                learning their daily routines, crafts, and traditional practices.
                Witness and participate in ceremonies, storytelling, and cultural dances,
                gaining a deeper appreciation for Tanzania’s rich heritage.
              </p>
            </div>
          </div>

          {/* PACKAGES */}
          <div className="space-y-6">
            <h2 className="text-2xl uppercase tracking-wide text-[#1A0A0B]">
              Cultural Safari Packages
            </h2>

            {/* PACKAGE 1 — HALF DAY VISIT */}
            <div className="bg-white border border-[#1A0A0B]/10 p-8 shadow-sm">
              <div className="flex gap-3 mb-4">
                <span className="text-sm uppercase tracking-wider text-[#1A0A0B]/60 font-medium">
                  TAA 30
                </span>
                <h3 className="text-lg uppercase tracking-wide text-[#1A0A0B]">
                  Half-Day Village Visit
                </h3>
              </div>
              <p className="text-[#1A0A0B]/85 text-[16px] leading-[1.9] text-justify hyphens-auto">
                A short but immersive visit to a local tribe village. Observe daily life,
                participate in small workshops, and enjoy cultural demonstrations.
              </p>
            </div>

            {/* PACKAGE 2 — FULL DAY IMMERSION */}
            <div className="bg-white border border-[#1A0A0B]/10 p-8 shadow-sm">
              <div className="flex gap-3 mb-4">
                <span className="text-sm uppercase tracking-wider text-[#1A0A0B]/60 font-medium">
                  TAA 31
                </span>
                <h3 className="text-lg uppercase tracking-wide text-[#1A0A0B]">
                  Full-Day Cultural Immersion
                </h3>
              </div>
              <p className="text-[#1A0A0B]/85 text-[16px] leading-[1.9] text-justify hyphens-auto">
                Spend a full day with the Masaai and Hadzabe tribes. Learn traditional crafts,
                cooking, dances, and ceremonies while enjoying an authentic cultural experience.
              </p>
            </div>

            {/* PACKAGE 3 — MULTI-DAY EXPERIENCE */}
            <div className="bg-white border border-[#1A0A0B]/10 p-8 shadow-sm">
              <div className="flex gap-3 mb-4">
                <span className="text-sm uppercase tracking-wider text-[#1A0A0B]/60 font-medium">
                  TAA 32
                </span>
                <h3 className="text-lg uppercase tracking-wide text-[#1A0A0B]">
                  Multi-Day Tribal Experience
                </h3>
              </div>
              <p className="text-[#1A0A0B]/85 text-[16px] leading-[1.9] text-justify hyphens-auto">
                Explore multiple villages over several days. Participate in ceremonies,
                craft workshops, cooking, and storytelling while gaining a deep understanding
                of the tribes’ culture and way of life.
              </p>
            </div>
          </div>
        </div>

        {/* SIDEBAR */}
        <div className="space-y-8">
          <div className="bg-white border border-[#1A0A0B]/10 p-6 shadow-sm sticky top-6 mt-5">
            <h2 className="text-xl uppercase tracking-wide text-[#1A0A0B] mb-6">
              Other Tanzania Experiences
            </h2>
            <ul className="space-y-3">
              {[
                "Wildlife Safaris",
                "Village Visits",
                "Cultural Workshops",
                "Craft Lessons",
                "Cooking Classes",
                "Traditional Ceremonies",
                "Hiking & Nature Walks",
                "Photography Tours",
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
                src={getRandomImage(tribeImages)}
                alt="Tanzania Cultural Experience"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
