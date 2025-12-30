import { waterSportsData } from "./data"
import { Camera } from "lucide-react";

export default function WaterSports() {
  const data = waterSportsData
return (
    <section className=" max-w-7xl mx-auto ">
      {/* HERO SECTION WITH IMAGE */}
      <div className="relative h-96 overflow-hidden">
        <img
          src="/images/safaris/kenya/extreme/e1.png"
          alt={data.title}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-linear-to-t from-[#1A0A0B]/60 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-8">
          <h1 className="text-5xl uppercase tracking-widest font-light text-white">
            {data.title}
          </h1>
        </div>
      </div>


      {/* MUST HAVES CARD */}
      <div className="bg-white border border-[#1A0A0B]/10 p-8 shadow-sm">
        <h2 className="text-xl uppercase tracking-wide text-[#1A0A0B] mb-4">
          Must Haves
        </h2>
        <p className="text-[#1A0A0B]/85 text-[16px] leading-[1.9] text-justify hyphens-auto">
          {data.mustHaves}
        </p>
      </div>

      {/* TWO COLUMN LAYOUT */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* LEFT COLUMN - MAIN CONTENT */}
        <div className="md:col-span-2 space-y-8">
          {/* PROGRAM OVERVIEW CARD */}
          <div className="bg-white border border-[#1A0A0B]/10 p-8 shadow-sm">
            <h2 className="text-xl uppercase tracking-wide text-[#1A0A0B] mb-6">
              Program Overview
            </h2>
            <div className="space-y-4">
              {data.programOverview.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-[#1A0A0B]/85 text-[16px] leading-[1.9] text-justify hyphens-auto"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* RIVER CARD WITH IMAGE PLACEHOLDER */}
          <div className="bg-white border border-[#1A0A0B]/10 overflow-hidden shadow-sm">
            <div className="relative h-64 bg-[#1A0A0B]/5">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="/images/safaris/kenya/extreme/e2.png"
                  alt={data.river.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

            </div>
            <div className="p-8">
              <h2 className="text-xl uppercase tracking-wide text-[#1A0A0B] mb-2">
                {data.river.name}
              </h2>
              <p className="text-sm uppercase tracking-wide text-[#1A0A0B]/70 mb-4">
                {data.river.location}
              </p>
              <p className="text-[#1A0A0B]/85 text-[16px] leading-[1.9] text-justify hyphens-auto">
                {data.river.description}
              </p>
            </div>
          </div>

          {/* PACKAGES */}
          <div className="space-y-6">
            <h2 className="text-2xl uppercase tracking-wide text-[#1A0A0B]">
              Packages
            </h2>
            {data.packages.map((pkg) => (
              <div
                key={pkg.code}
                className="bg-white border border-[#1A0A0B]/10 p-8 shadow-sm"
              >
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-sm uppercase tracking-wider text-[#1A0A0B]/60 font-medium">
                    {pkg.code}
                  </span>
                  <h3 className="text-lg uppercase tracking-wide text-[#1A0A0B]">
                    {pkg.title}
                  </h3>
                </div>
                {pkg.description && (
                  <p className="text-[#1A0A0B]/85 text-[16px] leading-[1.9] text-justify hyphens-auto mb-6">
                    {pkg.description}
                  </p>
                )}
                {pkg.days && (
                  <div className="space-y-4 border-l-2 border-[#1A0A0B]/20 pl-6">
                    {pkg.days.map((day) => (
                      <div key={day.day}>
                        <p className="text-sm uppercase tracking-wide text-[#1A0A0B] font-medium mb-2">
                          {day.day}
                        </p>
                        <p className="text-[#1A0A0B]/85 text-[16px] leading-[1.9] text-justify hyphens-auto">
                          {day.content}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN - SIDEBAR */}
        <div className="space-y-8">
          {/* OTHER ACTIVITIES CARD */}
          <div className="bg-white border border-[#1A0A0B]/10 p-6 shadow-sm sticky top-6 mt-5">
            <h2 className="text-xl uppercase tracking-wide text-[#1A0A0B] mb-6">
              Other Activities
            </h2>
            <ul className="space-y-3">
              {data.otherActivities.map((activity) => (
                <li
                  key={activity}
                  className="border border-[#1A0A0B]/20 px-4 py-3 text-[#1A0A0B]/85 text-sm uppercase tracking-wide hover:bg-[#1A0A0B]/5 transition-colors"
                >
                  {activity}
                </li>
              ))}
            </ul>
          </div>

          {/* ADDITIONAL IMAGE PLACEHOLDER */}
          <div className="bg-white border border-[#1A0A0B]/10 overflow-hidden shadow-sm">
            <div className="relative h-80 bg-[#1A0A0B]/5">
              <div className="relative h-64 overflow-hidden">
              <img
                src="/images/safaris/kenya/extreme/rafting.jpg"
                alt={data.river.name}
                className="absolute inset-0 w-full h-full object-cover opacity-50"
              />
            </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}