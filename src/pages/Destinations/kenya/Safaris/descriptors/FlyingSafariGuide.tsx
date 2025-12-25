import rawData from "./flying-safaris.json";
import type { FlightDescriptorData } from "../types/flightDescriptor";

const flyingSafaris = rawData as FlightDescriptorData;


export default function FlyingSafariGuide() {
  const data = flyingSafaris;

  return (
    <div className="max-w-5xl space-y-12">
      {/* Intro */}
      <section>
        <h2 className="text-3xl font-light tracking-wide">
          {data.title}
        </h2>
        <p className="mt-3 text-gray-600 max-w-3xl">
          {data.intro}
        </p>
      </section>

      {/* Sections */}
      {data.sections.map((section, i) => {
        switch (section.type) {
          case "destinations":
            return (
              <section key={i}>
                <h3 className="text-xl font-medium mb-6">
                  {section.title}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {section.items.map(item => (
                    <div
                      key={item.id}
                      className="border p-6 rounded-lg"
                    >
                      <h4 className="font-medium">
                        {item.title}
                      </h4>

                      {item.flightTime && (
                        <p className="text-sm text-gray-500 mt-1">
                          ✈ {item.flightTime}
                        </p>
                      )}

                      <p className="mt-3 text-gray-600">
                        {item.description}
                      </p>

                      {item.highlights && (
                        <ul className="mt-4 list-disc list-inside text-sm text-gray-600">
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
              <section key={i}>
                <h3 className="text-xl font-medium mb-6">
                  {section.title}
                </h3>

                <div className="space-y-4">
                  {section.items.map(item => (
                    <details
                      key={item.key}
                      className="border rounded-lg p-4"
                    >
                      <summary className="cursor-pointer font-medium">
                        {item.question}
                      </summary>
                      <p className="mt-2 text-gray-600">
                        {item.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </section>
            );

          case "list":
            return (
              <section key={i}>
                <h3 className="text-xl font-medium mb-4">
                  {section.title}
                </h3>

                <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-gray-600">
                  {section.items.map((item, idx) => (
                    <li key={idx}>• {item}</li>
                  ))}
                </ul>
              </section>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
