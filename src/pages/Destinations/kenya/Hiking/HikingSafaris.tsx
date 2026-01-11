// HikingSafaris.tsx
import { useNavigate } from "react-router-dom";
import hikingData from "./data.json";
import type { HikingPageData } from "./types";
import { hikingToSafari } from "./adapters";

import SafariCard from "../Safaris/components/SafariCard";

const data = hikingData[0] as HikingPageData;

export default function HikingSafaris() {
  const navigate = useNavigate();

  return (
    <div className="space-y-16">
      <h1 className="text-3xl font-light uppercase tracking-wide">
        {data.title}
      </h1>

      <section className="grid md:grid-cols-3 gap-6">
        {data.destinations.safaris.map(hike => (
          <SafariCard key={hike.code} safari={hikingToSafari(hike)}
            onClick={() =>
                navigate(`/destinations/kenya/hiking/${hike.code}`)
            }
            />

        ))}
      </section>
    </div>
  );
}
