import type { SafariRichDescription } from "../types/safari";

type Props = {
  description: string | SafariRichDescription;
};

export default function SafariDescription({ description }: Props) {
  // SIMPLE TEXT DESCRIPTION
  if (typeof description === "string") {
    return (
      <div className="prose max-w-none text-gray-700 leading-relaxed">
        <p className="text-lg whitespace-pre-line">
          {description}
        </p>
      </div>
    );
  }

  // RICH / STRUCTURED DESCRIPTION
  return (
    <div className="prose max-w-none text-gray-700 leading-relaxed space-y-6">
      <p className="text-lg whitespace-pre-line">
        {description.intro}
      </p>

      {description.sections?.map((section, i) => (
        <section key={i}>
          <h3 className="text-xl font-medium mt-8 mb-4">
            {section.title}
          </h3>

          <ul className="space-y-3">
            {section.items.map((item, j) => (
              <li key={j}>
                <strong>{item.title}</strong> – {item.content}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
