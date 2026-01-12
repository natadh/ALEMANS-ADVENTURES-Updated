import type { Safari } from "../types/safari";
import { getSafariStartingPrice } from "../utils/pricing";

interface SafariCardProps {
  safari: Safari;
  onClick: (safari: Safari) => void; // New prop
}

export default function SafariCard({ safari, onClick }: SafariCardProps) {
  const startingPrice = getSafariStartingPrice(safari);
  const imageSrc = safari.images?.[0]?.src ?? "/images/placeholder.jpg";

  return (
    <div 
      onClick={() => onClick(safari)}
      className="block bg-white shadow-sm hover:shadow-lg transition overflow-hidden group cursor-pointer"
    >
      <div className="h-48 overflow-hidden">
        <img
          src={imageSrc}
          alt={safari.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <div className="p-4 space-y-2">
        <h3 className="text-lg font-medium">{safari.title}</h3>

        <p className="text-sm text-gray-600">{safari.durationLabel}</p>

        {startingPrice && (
          <p className="text-sm font-semibold text-[#1A0A0B]">
            From {startingPrice.currency} {startingPrice.amount}
            <span className="block text-xs text-gray-500">
              Price varies by season & group size
            </span>
          </p>
        )}

        {safari.highlights && (
          <ul className="text-xs text-gray-500 list-disc pl-4">
            {safari.highlights.slice(0, 2).map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
        )}

        <span className="text-sm underline tracking-wide text-[#1A0A0B]">
          View Details →
        </span>
      </div>
    </div>
  );
}