import { useState } from "react";
import type { Safari } from "../../types/safari";

export default function SafariPricing({ safari }: { safari: Safari }) {
  const [season, setSeason] = useState<"lowSeason" | "peakSeason">("lowSeason");

  // CASE 1: Simple Price
  if (safari.price) {
    return (
      <div className="bg-white border shadow-sm rounded-xl p-6">
        <h3 className="text-lg font-medium mb-4">Pricing & Booking</h3>
        <div>
          <p className="text-lg font-semibold text-gray-900">
            From {safari.price.currency} {safari.price.amountFrom}
          </p>
          {safari.price.note && (
            <p className="text-sm text-gray-500">{safari.price.note}</p>
          )}
        </div>
        <RequestButton />
      </div>
    );
  }

  // CASE 2: Complex Price Table
  const priceMap = safari.prices?.[season];

  return (
    <div className="bg-white border shadow-sm rounded-xl p-6">
      <h3 className="text-lg font-medium mb-4">Pricing & Booking</h3>
      
      {!priceMap ? (
        <p className="text-sm text-gray-600 italic">Pricing available on request.</p>
      ) : (
        <div className="space-y-4">
          {/* Season Toggles */}
          <div className="flex gap-4">
            <SeasonButton 
              label="Low Season" 
              isActive={season === "lowSeason"} 
              onClick={() => setSeason("lowSeason")} 
            />
            <SeasonButton 
              label="Peak Season" 
              isActive={season === "peakSeason"} 
              onClick={() => setSeason("peakSeason")} 
            />
          </div>

          {/* Pricing Table */}
          <div className="overflow-hidden border rounded-lg">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="p-3 text-left font-semibold text-gray-900">Guests</th>
                  <th className="p-3 text-left font-semibold text-gray-900">Price (USD)</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {Object.entries(priceMap).map(([pax, price]) => (
                  <tr key={pax} className="hover:bg-gray-50">
                    <td className="p-3">{pax} persons</td>
                    <td className="p-3 font-medium text-gray-900">{price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500">* Prices are per person based on group size.</p>
        </div>
      )}
      <RequestButton />
    </div>
  );
}

// Small sub-components for internal use
function SeasonButton({ label, isActive, onClick }: { label: string, isActive: boolean, onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 text-sm border transition-colors ${
        isActive ? "bg-black text-white" : "bg-white hover:bg-gray-50"
      }`}
    >
      {label}
    </button>
  );
}

function RequestButton() {
  return (
    <button className="w-full mt-6 bg-black text-white py-3 px-4 rounded hover:bg-gray-800 transition-colors uppercase tracking-wide text-sm font-medium">
      Request Quote
    </button>
  );
}