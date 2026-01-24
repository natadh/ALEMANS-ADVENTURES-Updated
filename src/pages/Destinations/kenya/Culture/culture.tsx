import { useState } from "react"
import rawData from "./data/data.json"
import type { Safari, GeneralInfo } from "./data/types"

export default function Culture() {

  // ✅ properly type data
  const { safaris, generalInfo } = rawData as {
    safaris: Safari[]
    generalInfo: GeneralInfo[]
  }

  // ✅ strongly type tab
  const [activeTab, setActiveTab] =
    useState<"safaris" | "generalInfo">("safaris")

  const [selectedIndex, setSelectedIndex] = useState(0)

  // ✅ split selections (NO union types)
  const selectedSafari = safaris[selectedIndex]
  const selectedInfo = generalInfo[selectedIndex]
    const heroImage =
    activeTab === "safaris"
        ? selectedSafari.images?.[0] ?? "/images/safaris/default.jpg"
        : "/images/safaris/general/culture.jpg"
  return (
    <section className="max-w-7xl mx-auto">

    {/* ================= HERO ================= */}
    <div className="relative h-96 overflow-hidden">
    <img
        src={heroImage}
        alt={
        activeTab === "safaris"
            ? selectedSafari.title
            : selectedInfo.title
        }
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
    />

    <div className="absolute inset-0 bg-linear-to-t from-[#1A0A0B]/60 to-transparent" />

    <div className="absolute bottom-0 left-0 right-0 p-8">
        <h1 className="text-5xl uppercase tracking-widest font-light text-white">
        {activeTab === "safaris"
            ? selectedSafari.title
            : selectedInfo.title}
        </h1>
    </div>
    </div>



      {/* ================= TABS ================= */}
      <div className="flex border-b border-[#1A0A0B]/20">
        {(["safaris", "generalInfo"] as const).map(tab => (
          <button
            key={tab}
            onClick={() => {
              setActiveTab(tab)
              setSelectedIndex(0)
            }}
            className={`px-8 py-4 uppercase tracking-wide text-sm transition
              ${activeTab === tab
                ? "border-b-2 border-[#1A0A0B] font-medium"
                : "text-[#1A0A0B]/60 hover:text-[#1A0A0B]"
              }`}
          >
            {tab === "safaris" ? "Safaris" : "General Information"}
          </button>
        ))}
      </div>


      {/* ================= MAIN GRID ================= */}
      <div className="grid md:grid-cols-3 gap-8 mt-8">

        {/* ============ LEFT CONTENT ============ */}
        <div className="md:col-span-2">

          <div className="bg-white border border-[#1A0A0B]/10 p-10 shadow-sm space-y-6">

            {/* ✅ SAFARI META ONLY */}
            {activeTab === "safaris" && selectedSafari && (
              <div className="flex gap-6 text-sm uppercase tracking-wider text-[#1A0A0B]/60">
                {selectedSafari.code && <span>{selectedSafari.code}</span>}
                {selectedSafari.duration && <span>{selectedSafari.duration}</span>}
              </div>
            )}

            {/* ✅ DESCRIPTION */}
            <p className="text-[#1A0A0B]/85 text-[16px] leading-[1.9] text-justify hyphens-auto">
              {activeTab === "safaris"
                ? selectedSafari.description
                : selectedInfo.description}
            </p>

            {/* ✅ IMAGES ONLY FOR SAFARIS */}
            {activeTab === "safaris" &&
              selectedSafari.images?.length > 0 && (
                <div className="grid md:grid-cols-2 gap-4 pt-6">
                  {selectedSafari.images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={selectedSafari.title}
                      className="h-60 w-full object-cover"
                    />
                  ))}
                </div>
              )}
          </div>
        </div>


        {/* ============ SIDEBAR ============ */}
        <div className="space-y-8">

          <div className="bg-white border border-[#1A0A0B]/10 p-6 shadow-sm sticky top-6">

            <h2 className="text-xl uppercase tracking-wide text-[#1A0A0B] mb-6">
              {activeTab === "safaris" ? "All Safaris" : "Information"}
            </h2>

            <ul className="space-y-3">
              {(activeTab === "safaris" ? safaris : generalInfo).map((item, i) => (
                <li key={item.title}>
                  <button
                    onClick={() => setSelectedIndex(i)}
                    className={`
                      w-full text-left px-4 py-3 text-sm uppercase tracking-wide
                      border transition-colors
                      ${selectedIndex === i
                        ? "bg-[#1A0A0B] text-white border-[#1A0A0B]"
                        : "border-[#1A0A0B]/20 text-[#1A0A0B]/85 hover:bg-[#1A0A0B]/5"
                      }
                    `}
                  >
                    {item.title}
                  </button>
                </li>
              ))}
            </ul>

          </div>
        </div>
      </div>
    </section>
  )
}