import rawData from "./camping-types.json";
import type { CampingTypesDescriptorData } from "../types/campingDescriptor";

const campingData = rawData as CampingTypesDescriptorData;

export default function CampingTypesGuide() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="space-y-16">
        {/* ================= HEADER ================= */}
        <header className="text-center">
          <h2 className="text-3xl md:text-4xl font-light tracking-wide">
            {campingData.title}
          </h2>

          {campingData.intro && (
            <p className="mt-6 mx-auto max-w-3xl text-lg text-gray-600 leading-relaxed">
              {campingData.intro}
            </p>
          )}
        </header>

        {/* ================= SECTIONS ================= */}
        <div className="space-y-20">
          {campingData.sections.map((section, index) => (
            <section
              key={index}
              className="max-w-4xl mx-auto space-y-8"
            >
              <h3 className="text-2xl font-medium text-center">
                {section.title}
              </h3>

              {/* Paragraph content */}
              <div className="space-y-5 text-gray-700 leading-relaxed">
                {section.items.map((item, idx) => (
                  <p key={idx}>{item.paragraph}</p>
                ))}
              </div>

              {/* Highlights */}
              {section.highlights && (
                <div className="pt-6 border-t border-gray-200">
                  <h4 className="text-sm uppercase tracking-wide text-gray-500 mb-4 text-center">
                    Highlights
                  </h4>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-gray-600">
                    {section.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="mt-1 text-gray-400">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
