import { useMemo } from "react";

const tanzaniaImages = [
  "/images/watersports/1.jpg",
  "/images/watersports/2.jpg",
  "/images/watersports/3.jpg",
  "/images/watersports/4.jpg",
  "/images/watersports/5.jpg",
];

const getRandomImage = (pool: string[]) =>
  pool[Math.floor(Math.random() * pool.length)];

export default function TanzaniaWaterSports() {
  const heroImage = useMemo(() => getRandomImage(tanzaniaImages), []);
  const riverImage = useMemo(() => getRandomImage(tanzaniaImages), []);

  return (
    <section className="max-w-7xl mx-auto">
      {/* HERO */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={heroImage}
          alt="Tanzania White Water Rafting and Kayaking"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#1A0A0B]/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <h1 className="text-5xl uppercase tracking-widest font-light text-white">
            Tanzania White Water Rafting & Kayaking
          </h1>
        </div>
      </div>

      {/* MUST HAVES */}
      <div className="bg-white border border-[#1A0A0B]/10 p-8 shadow-sm">
        <h2 className="text-xl uppercase tracking-wide text-[#1A0A0B] mb-4">
          Must Haves
        </h2>
        <p className="text-[#1A0A0B]/85 text-[16px] leading-[1.9] text-justify hyphens-auto">
          Bring an everyday T-shirt, shorts, and secure closed shoes — items you don’t
          mind getting wet because water is your playground. Whether you’re rafting
          powerful rapids or gliding through calm lakes, you need more than the right
          outfit — you need a sense of adventure. Tons of adventure.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* MAIN CONTENT */}
        <div className="md:col-span-2 space-y-8">
          {/* PROGRAM OVERVIEW */}
          <div className="bg-white border border-[#1A0A0B]/10 p-8 shadow-sm">
            <h2 className="text-xl uppercase tracking-wide text-[#1A0A0B] mb-6">
              Program Overview
            </h2>
            <div className="space-y-4 text-[#1A0A0B]/85 text-[16px] leading-[1.9] text-justify hyphens-auto">
              <p>
                Your adventure begins in the morning at the rafting or kayaking meeting point,
                where professional guides provide a full safety briefing and equipment fitting.
              </p>
              <p>
                Depending on water levels and location, your river experience can range from
                high-energy whitewater rapids to scenic stretches perfect for soaking in
                Tanzania’s incredible landscapes.
              </p>
              <p>
                After your time on the water, relax and enjoy refreshments or lunch while
                sharing stories of the day’s adventure.
              </p>
            </div>
          </div>

          {/* TANZANIA WATER ADVENTURES CARD */}
          <div className="bg-white border border-[#1A0A0B]/10 overflow-hidden shadow-sm">
            <div className="relative h-64">
              <img
                src={riverImage}
                alt="Tanzania Rivers and Lakes"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <h2 className="text-xl uppercase tracking-wide text-[#1A0A0B] mb-2">
                Tanzania Water Adventures
              </h2>
              <p className="text-sm uppercase tracking-wide text-[#1A0A0B]/70 mb-4">
                Rivers, Lakes & Coastlines of Tanzania
              </p>
              <p className="text-[#1A0A0B]/85 text-[16px] leading-[1.9] text-justify hyphens-auto">
                From roaring river rapids to calm freshwater lakes and stretches of the Indian
                Ocean coastline, Tanzania offers diverse water adventures for every thrill level.
                Paddle through dramatic scenery, spot wildlife along riverbanks, and experience
                nature from a completely different perspective.
              </p>
            </div>
          </div>

          {/* PACKAGES */}
          <div className="space-y-6">
            <h2 className="text-2xl uppercase tracking-wide text-[#1A0A0B]">
              Rafting & Kayaking Experiences
            </h2>

            {/* PACKAGE 1 — WHITE WATER RAFTING */}
            <div className="bg-white border border-[#1A0A0B]/10 p-8 shadow-sm">
              <div className="flex gap-3 mb-4">
                <span className="text-sm uppercase tracking-wider text-[#1A0A0B]/60 font-medium">
                  TAA 26
                </span>
                <h3 className="text-lg uppercase tracking-wide text-[#1A0A0B]">
                  Tanzania White Water Rafting
                </h3>
              </div>
              <p className="text-[#1A0A0B]/85 text-[16px] leading-[1.9] text-justify hyphens-auto">
                Experience adrenaline-pumping rafting as you navigate the roaring rapids of
                Tanzania’s rivers. The Zambezi River region offers thrilling drops and calmer
                scenic stretches, creating the perfect balance of excitement and natural beauty.
                Expert guides ensure your safety as you conquer each rapid.
              </p>
            </div>

            {/* PACKAGE 2 — KAYAKING RIVERS */}
            <div className="bg-white border border-[#1A0A0B]/10 p-8 shadow-sm">
              <div className="flex gap-3 mb-4">
                <span className="text-sm uppercase tracking-wider text-[#1A0A0B]/60 font-medium">
                  TAA 27
                </span>
                <h3 className="text-lg uppercase tracking-wide text-[#1A0A0B]">
                  Pangani River Kayaking
                </h3>
              </div>
              <p className="text-[#1A0A0B]/85 text-[16px] leading-[1.9] text-justify hyphens-auto">
                Paddle through the winding waterways of the Pangani River, where gentle
                currents mix with exciting rapids. Kayaking here offers a unique view of
                Tanzania’s lush landscapes, birdlife, and riverside communities.
              </p>
            </div>

            {/* PACKAGE 3 — LAKES & OCEAN */}
            <div className="bg-white border border-[#1A0A0B]/10 p-8 shadow-sm">
              <div className="flex gap-3 mb-4">
                <span className="text-sm uppercase tracking-wider text-[#1A0A0B]/60 font-medium">
                  TAA 28
                </span>
                <h3 className="text-lg uppercase tracking-wide text-[#1A0A0B]">
                  Lake & Coastal Kayaking
                </h3>
              </div>
              <p className="text-[#1A0A0B]/85 text-[16px] leading-[1.9] text-justify hyphens-auto">
                Explore the calm waters of Lake Victoria or paddle along Tanzania’s Indian
                Ocean coastline. Perfect for beginners and experienced kayakers alike, these
                routes combine peaceful paddling with breathtaking views and unforgettable
                moments on the water.
              </p>
            </div>
          </div>
        </div>

        {/* SIDEBAR */}
        <div className="space-y-8">
          <div className="bg-white border border-[#1A0A0B]/10 p-6 shadow-sm sticky top-6 mt-5">
            <h2 className="text-xl uppercase tracking-wide text-[#1A0A0B] mb-6">
              Other Tanzania Activities
            </h2>
            <ul className="space-y-3">
              {[
                "Boat Rides",
                "Bungee Jumping",
                "Cycling",
                "Zipline",
                "Stand Up Paddle Board",
                "Rock Climbing",
                "Kayaking",
                "Swimming",
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
                src={getRandomImage(tanzaniaImages)}
                alt="Tanzania Water Adventure"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
