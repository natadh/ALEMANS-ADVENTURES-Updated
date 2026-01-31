import { useMemo } from "react";

const raftingImages = [
  "/images/watersports/1.jpg",
  "/images/watersports/2.jpg",
  "/images/watersports/3.jpg",
  "/images/watersports/4.jpg",
  "/images/watersports/5.jpg",
];

const getRandomImage = (pool: string[]) =>
  pool[Math.floor(Math.random() * pool.length)];

export default function WaterSports() {
  const heroImage = useMemo(() => getRandomImage(raftingImages), []);
  const riverImage = useMemo(() => getRandomImage(raftingImages), []);

  return (
    <section className="max-w-7xl mx-auto">
      {/* HERO */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={heroImage}
          alt="White Water Rafting on the Nile"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#1A0A0B]/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <h1 className="text-5xl uppercase tracking-widest font-light text-white">
            Uganda Water Rafting
          </h1>
        </div>
      </div>

      {/* MUST HAVES */}
      <div className="bg-white border border-[#1A0A0B]/10 p-8 shadow-sm">
        <h2 className="text-xl uppercase tracking-wide text-[#1A0A0B] mb-4">
          Must Haves
        </h2>
        <p className="text-[#1A0A0B]/85 text-[16px] leading-[1.9] text-justify hyphens-auto">
          Bring an everyday T-shirt, shorts, and closed shoes — items you don’t
          mind getting wet because water is your playground. For white water
          rafting, you need more than the right outfit — you need audacity.
          Tons of audacity.
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
                The adventure begins at 9:00am at the rafting camp meeting point.
                After a 30-minute safety briefing, you drive 15 minutes to the
                starting point.
              </p>
              <p>
                Rafting lasts about two and a half hours. The full experience runs
                around 3 hours covering 14km in high water or 8.5km in low water.
              </p>
              <p>
                At the finish point you’ll enjoy a buffet lunch and drinks.
              </p>
            </div>
          </div>

          {/* THE NILE CARD */}
          <div className="bg-white border border-[#1A0A0B]/10 overflow-hidden shadow-sm">
            <div className="relative h-64">
              <img
                src={riverImage}
                alt="River Nile Rafting"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <h2 className="text-xl uppercase tracking-wide text-[#1A0A0B] mb-2">
                Rafting the Nile
              </h2>
              <p className="text-sm uppercase tracking-wide text-[#1A0A0B]/70 mb-4">
                Source of the White Nile – Jinja, Uganda
              </p>
              <p className="text-[#1A0A0B]/85 text-[16px] leading-[1.9] text-justify hyphens-auto">
                Warm water, massive waves and stunning scenery make the Nile one
                of the world’s greatest rafting rivers. Paddle through legendary
                Grade 5 rapids, then drift into calm pools surrounded by lush
                islands, fishermen in wooden canoes, and incredible birdlife.
              </p>
            </div>
          </div>

          {/* PACKAGES */}
          <div className="space-y-6">
            <h2 className="text-2xl uppercase tracking-wide text-[#1A0A0B]">
              Rafting Packages
            </h2>

            {/* UAA 21 */}
            <div className="bg-white border border-[#1A0A0B]/10 p-8 shadow-sm">
              <div className="flex gap-3 mb-4">
                <span className="text-sm uppercase tracking-wider text-[#1A0A0B]/60 font-medium">
                  UAA 21
                </span>
                <h3 className="text-lg uppercase tracking-wide text-[#1A0A0B]">
                  The Big One Day – 25km
                </h3>
              </div>
              <p className="text-[#1A0A0B]/85 text-[16px] leading-[1.9] text-justify hyphens-auto">
                Raft 25km of world-class whitewater over 5–6 hours on the river.
                Tackle legendary rapids like “The Big Four,” “Total Gunga,” and
                “Overtime.” Includes island lunch and return to Kampala by evening.
              </p>
            </div>

            {/* UAA 22 */}
            <div className="bg-white border border-[#1A0A0B]/10 p-8 shadow-sm">
              <div className="flex gap-3 mb-4">
                <span className="text-sm uppercase tracking-wider text-[#1A0A0B]/60 font-medium">
                  UAA 22
                </span>
                <h3 className="text-lg uppercase tracking-wide text-[#1A0A0B]">
                  Half Day Rafting
                </h3>
              </div>
              <p className="text-[#1A0A0B]/85 text-[16px] leading-[1.9] text-justify hyphens-auto">
                Perfect for travelers short on time. Raft to Lunch Island and
                return to Kampala by 3:00pm. Lunch included.
              </p>
            </div>

            {/* UAA 23 */}
            <div className="bg-white border border-[#1A0A0B]/10 p-8 shadow-sm">
              <div className="flex gap-3 mb-4">
                <span className="text-sm uppercase tracking-wider text-[#1A0A0B]/60 font-medium">
                  UAA 23
                </span>
                <h3 className="text-lg uppercase tracking-wide text-[#1A0A0B]">
                  The Overnighter – 45km
                </h3>
              </div>
              <p className="text-[#1A0A0B]/85 text-[16px] leading-[1.9] text-justify hyphens-auto">
                Camp on a secluded Nile island and raft 45km over two days.
                Combine thrilling rapids with relaxed drifting past forested
                islands, wildlife, and local fishing communities. Meals, drinks
                and tents provided.
              </p>
            </div>
          </div>
        </div>

        {/* SIDEBAR */}
        <div className="space-y-8">
          <div className="bg-white border border-[#1A0A0B]/10 p-6 shadow-sm sticky top-6 mt-5">
            <h2 className="text-xl uppercase tracking-wide text-[#1A0A0B] mb-6">
              Other Activities
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
                src={getRandomImage(raftingImages)}
                alt="Rafting Adventure"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
