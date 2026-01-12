import type { Safari } from "../../types/safari";

export default function SafariItinerary({ itinerary }: { itinerary: Safari["itinerary"] }) {
  if (!itinerary) return null;

  return (
    <section>
      <h3 className="text-xl font-medium mb-6">Detailed Itinerary</h3>
      <div className="space-y-4">
        {itinerary.days.map((day) => (
          <div key={day.dayNumber} className="border rounded-lg overflow-hidden">
            <details className="group">
              <summary className="flex items-center justify-between p-4 cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors">
                <span className="font-medium">
                  <span className="text-gray-500 mr-2">Day {day.dayNumber}:</span>
                  {day.title}
                </span>
                <span className="transform group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="p-5 bg-white border-t">
                <p className="text-gray-700 leading-relaxed mb-4">{day.description}</p>
                
                {(day.meals || day.activities) && (
                   <div className="flex flex-wrap gap-3 text-xs text-gray-500">
                      {day.meals?.map(m => <span key={m} className="bg-gray-100 px-2 py-1 rounded">🍽 {m}</span>)}
                      {day.activities?.map(a => <span key={a} className="bg-gray-100 px-2 py-1 rounded">🦁 {a}</span>)}
                   </div>
                )}
              </div>
            </details>
          </div>
        ))}
      </div>
    </section>
  );
}