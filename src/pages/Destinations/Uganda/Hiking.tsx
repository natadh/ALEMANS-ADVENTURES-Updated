import { useMemo } from "react";

const hikingImages = [
  "/images/hiking/1.jpg",
  "/images/hiking/2.jpg",
  "/images/hiking/3.jpg",
  "/images/hiking/4.jpg",
  "/images/hiking/5.jpg",
];

const getRandomImage = (pool: string[]) =>
  pool[Math.floor(Math.random() * pool.length)];

export default function HikingUganda() {
  const heroImage = useMemo(() => getRandomImage(hikingImages), []);
  const introImage = useMemo(() => getRandomImage(hikingImages), []);

  return (
    <section className="max-w-7xl mx-auto">
      {/* HERO */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={heroImage}
          alt="Ruwenzori Mountains Hiking"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#1A0A0B]/70 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <h1 className="text-5xl uppercase tracking-widest font-light text-white">
            Hiking & Trekking Uganda
          </h1>
        </div>
      </div>

      {/* INTRO */}
      <div className="bg-white border border-[#1A0A0B]/10 shadow-sm overflow-hidden">
        <div className="relative h-64">
          <img
            src={introImage}
            alt="Ruwenzori Mountains"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/80" />
        </div>
        <div className="p-8">
          <h2 className="text-xl uppercase tracking-wide text-[#1A0A0B] mb-4">
            Ruwenzori Mountains of the Moon
          </h2>
          <p className="text-[#1A0A0B]/85 text-[16px] leading-[1.9] text-justify hyphens-auto">
            Trek Africa's legendary “Mountains of the Moon” and summit one of the
            continent's most dramatic alpine ranges. The Ruwenzori offers glaciers,
            waterfalls, unique vegetation zones, and remote wilderness unlike any
            other mountain experience in Africa.
          </p>
        </div>
      </div>

      {/* REQUIREMENTS */}
      <div className="bg-white border border-[#1A0A0B]/10 p-8 shadow-sm mt-10 space-y-8">
        <h2 className="text-2xl uppercase tracking-wide text-[#1A0A0B]">
          Trek Requirements Checklist
        </h2>

        {[
          {
            title: "Travel Documents",
            items: [
              "Valid passport and visa",
              "Airline ticket",
              "International health card (Yellow Fever)",
              "Travel & medical insurance",
              "US$ cash / Travelers Cheques / Credit Card",
            ],
          },
          {
            title: "Essential Items",
            items: [
              "Duffel bag (for porters)",
              "Extra bag for hotel storage",
              "Day backpack (20-35L)",
              "Sleeping bag",
              "Walking stick / ski pole",
              "Water bottles",
            ],
          },
          {
            title: "High Altitude Gear",
            items: [
              "Waterproof jacket & pants",
              "Polar fleece layers",
              "Thermal underwear",
              "Warm gloves & liners",
              "Thermal socks",
              "Balaclava & gaiters",
              "Thermal water flask",
            ],
          },
          {
            title: "Footwear",
            items: [
              "Water-resistant hiking boots",
              "Camp shoes",
              "Several pairs of socks",
              "Liner socks to prevent blisters",
            ],
          },
          {
            title: "Medical & First Aid",
            items: [
              "Altitude sickness medication (Diamox)",
              "Painkillers",
              "Bandages & antiseptic cream",
              "Malaria prophylaxis",
              "Water purification tablets",
              "Insect repellent",
            ],
          },
        ].map((group) => (
          <div key={group.title}>
            <h3 className="text-lg uppercase tracking-wide text-[#1A0A0B] mb-3">
              {group.title}
            </h3>
            <ul className="space-y-2 border-l-2 border-[#1A0A0B]/20 pl-4">
              {group.items.map((item) => (
                <li key={item} className="text-[#1A0A0B]/85 text-[15px] leading-[1.8]">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* ITINERARY */}
      <div className="mt-12 space-y-6">
        <h2 className="text-2xl uppercase tracking-wide text-[#1A0A0B]">
          UAA 24 - 10 Days Ruwenzori Trek
        </h2>

        {[
          "Day 1: Nairobi - Kampala. Drive to Kampala for overnight stay.",
          "Day 2: Kampala - Kasese. Scenic drive across the Equator and Rift Valley.",
          "Day 3: Kasese - Nyabitaba Hut. Trek through forest to 2,650m.",
          "Day 4: Nyabitaba - John Matte Hut. Trek through mud and mossy cliffs to 3,650m.",
          "Day 5: John Matte - Bujuku Hut. Trek through bog and valley to 3,977m.",
          "Day 6: Bujuku - Kitandara Hut. Cross Scott-Elliot Pass at 4,370m.",
          "Day 7: Kitandara - Guy Yeomans Hut via Freshfield Pass (4,280m).",
          "Day 8: Guy Yeomans - Nyabitaba Hut. Descend via waterfalls and forest.",
          "Day 9: Nyabitaba - Nyakalengija - Kampala. Trek out and drive back.",
          "Day 10: Kampala - Nairobi. Return journey.",
        ].map((day, i) => (
          <div
            key={i}
            className="bg-white border border-[#1A0A0B]/10 p-6 shadow-sm"
          >
            <p className="text-[#1A0A0B]/85 text-[16px] leading-[1.9]">{day}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
