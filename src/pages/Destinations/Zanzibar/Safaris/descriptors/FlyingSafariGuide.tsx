import rawData from "./flying-safaris.json";
import type { FlightDescriptorData } from "../types/flightDescriptor";

const flyingSafaris = rawData as FlightDescriptorData;

export default function FlyingSafariGuide() {
  const data = flyingSafaris;

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="space-y-16">
        {/* Intro */}
        <section className="text-center">
          <h2 className="text-3xl md:text-4xl font-light tracking-wide">
            {data.title}
          </h2>

          <p className="mt-6 mx-auto max-w-3xl text-lg text-gray-600 leading-relaxed">
            {data.intro}
          </p>
        </section>

        {/* Sections */}
        {data.sections.map((section, i) => {
          switch (section.type) {
            case "destinations":
              return (
                <section key={i} className="space-y-10">
                  <h3 className="text-2xl font-medium text-center">
                    {section.title}
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {section.items.map(item => (
                      <div
                        key={item.id}
                        className="border border-gray-200 rounded-xl p-6 bg-white hover:shadow-sm transition"
                      >
                        <h4 className="text-lg font-medium">
                          {item.title}
                        </h4>

                        {item.flightTime && (
                          <p className="mt-1 text-sm text-gray-500">
                            ✈ {item.flightTime}
                          </p>
                        )}

                        <p className="mt-4 text-gray-600 leading-relaxed">
                          {item.description}
                        </p>

                        {item.highlights && (
                          <ul className="mt-5 space-y-1 text-sm text-gray-600 list-disc list-inside">
                            {item.highlights.map((h, idx) => (
                              <li key={idx}>{h}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </section>
              );

            case "faq":
              return (
                <section key={i} className="space-y-10">
                  <h3 className="text-2xl font-medium text-center">
                    {section.title}
                  </h3>

                  <div className="max-w-4xl mx-auto space-y-4">
                    {section.items.map(item => (
                      <details
                        key={item.key}
                        className="border border-gray-200 rounded-xl p-5 group"
                      >
                        <summary className="cursor-pointer font-medium list-none flex justify-between items-center">
                          <span>{item.question}</span>
                          <span className="text-gray-400 group-open:rotate-180 transition">
                            ▼
                          </span>
                        </summary>

                        <p className="mt-4 text-gray-600 leading-relaxed">
                          {item.answer}
                        </p>
                      </details>
                    ))}
                  </div>
                </section>
              );

            case "list":
              return (
                <section key={i} className="space-y-8">
                  <h3 className="text-2xl font-medium text-center">
                    {section.title}
                  </h3>

                  <ul className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-3 text-gray-600">
                    {section.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="mt-1 text-gray-400">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              );

            default:
              return null;
          }
        })}
      </div>
    </div>
  );
}
