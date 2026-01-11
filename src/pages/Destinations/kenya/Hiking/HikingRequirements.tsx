// src/hiking/HikingRequirements.tsx
import type { HikingRequirements } from "./types";

export default function HikingRequirements({
  requirements
}: {
  requirements: HikingRequirements;
}) {
  return (
    <section className="max-w-5xl space-y-10">
      <header>
        <h2 className="text-2xl font-light uppercase tracking-wide">
          Trekking Requirements
        </h2>
        <p className="text-gray-600 mt-3">{requirements.intro}</p>
      </header>

      {Object.entries(requirements).map(([key, items]) => {
        if (key === "intro" || !Array.isArray(items)) return null;

        return (
          <div key={key}>
            <h3 className="text-lg font-medium capitalize mb-3">
              {key.replace(/([A-Z])/g, " $1")}
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-700 list-disc pl-5">
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        );
      })}
    </section>
  );
}
