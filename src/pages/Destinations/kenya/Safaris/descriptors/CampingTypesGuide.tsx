import rawData from "./camping-types.json";
import type { CampingTypesDescriptorData } from "../types/campingDescriptor";

const campingData = rawData as CampingTypesDescriptorData;

export default function CampingTypesGuide() {
  return (
    <div className="max-w-5xl space-y-14">
      {/* ================= HEADER ================= */}
      <header>
        <h2 className="text-3xl font-light tracking-wide">
          {campingData.title}
        </h2>

        {campingData.intro && (
          <p className="mt-4 text-gray-600 max-w-3xl">
            {campingData.intro}
          </p>
        )}
      </header>

      {/* ================= SECTIONS ================= */}
      {campingData.sections.map((section, index) => (
        <section key={index} className="space-y-6">
          <h3 className="text-2xl font-medium">
            {section.title}
          </h3>

          {/* Paragraph content */}
          <div className="space-y-4 text-gray-700 leading-relaxed">
            {section.items.map((item, idx) => (
              <p key={idx}>
                {item.paragraph}
              </p>
            ))}
          </div>

          {/* Highlights */}
          {section.highlights && (
            <div className="mt-6">
              <h4 className="text-sm uppercase tracking-wide text-gray-500 mb-3">
                Highlights
              </h4>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-600">
                {section.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="mt-1">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>
      ))}
    </div>
  );
}
