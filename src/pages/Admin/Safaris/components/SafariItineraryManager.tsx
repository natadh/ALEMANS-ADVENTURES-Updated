import { useEffect, useState } from "react";

interface ItineraryDay {
  id?: number;
  safari_id: string;
  day_number: number;
  title: string;
  description: string;
  meals: string;
  activities: string;
}

interface Props {
  safariId: string;
  safariTitle: string;
  onClose: () => void;
}

const API_BASE = import.meta.env.VITE_API_BASE_URL;

export default function SafariItineraryManager({
  safariId,
  safariTitle,
  onClose,
}: Props) {
  const [days, setDays] = useState<ItineraryDay[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchDays = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/safaris/getItinerary.php?safari_id=${safariId}`);
      const json = await res.json();
      if (json.success) setDays(json.data);
      else setDays([]);
    } catch (err) {
      console.error("Failed to fetch itinerary:", err);
      setDays([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchDays();
  }, [safariId]);

  const handleChange = (index: number, field: keyof ItineraryDay, value: string | number) => {
    const updated = [...days];
    updated[index] = { ...updated[index], [field]: value };
    setDays(updated);
  };

  const addDay = () => {
    setDays([
      ...days,
      {
        safari_id: safariId,
        day_number: days.length + 1,
        title: "",
        description: "",
        meals: "",
        activities: "",
      },
    ]);
  };

  const saveDay = async (day: ItineraryDay) => {
    try {
      const form = new FormData();
      if (day.id) form.append("id", String(day.id));
      form.append("safari_id", safariId);
      form.append("day_number", String(day.day_number));
      form.append("title", day.title);
      form.append("description", day.description);
      form.append("meals", day.meals);
      form.append("activities", day.activities);

      await fetch(`${API_BASE}/safaris/itinerary/save_itinerary.php`, { method: "POST", body: form });
      fetchDays();
    } catch (err) {
      console.error("Failed to save day:", err);
    }
  };

  const deleteDay = async (id?: number) => {
    if (!id) return;
    if (!confirm("Delete this day?")) return;

    try {
      const form = new FormData();
      form.append("id", String(id));
      await fetch(`${API_BASE}/safaris/itinerary/delete_itinerary.php`, { method: "POST", body: form });
      fetchDays();
    } catch (err) {
      console.error("Failed to delete day:", err);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-start md:items-center p-4 backdrop-blur-sm bg-black/30 overflow-y-auto">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden">
        {/* Sticky Header */}
        <div className="flex justify-between items-center p-4 border-b sticky top-0 bg-white z-10">
          <h3 className="text-2xl font-light uppercase tracking-widest text-[#1A0A0B]">
            Itinerary — {safariTitle}
          </h3>
          <button
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition-colors"
            onClick={onClose}
          >
            Close
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-4 overflow-y-auto flex-1 space-y-4">
          {loading && <p>Loading itinerary...</p>}

          {!loading &&
            days.map((day, i) => (
              <div key={i} className="border p-4 rounded shadow-sm">
                <h4 className="font-semibold mb-3">Day {day.day_number}</h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#F5D547]"
                    placeholder="Title"
                    value={day.title}
                    onChange={(e) => handleChange(i, "title", e.target.value)}
                  />
                  <input
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#F5D547]"
                    placeholder="Meals"
                    value={day.meals}
                    onChange={(e) => handleChange(i, "meals", e.target.value)}
                  />
                  <textarea
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#F5D547] md:col-span-2"
                    placeholder="Description"
                    value={day.description}
                    onChange={(e) => handleChange(i, "description", e.target.value)}
                  />
                  <textarea
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#F5D547] md:col-span-2"
                    placeholder="Activities"
                    value={day.activities}
                    onChange={(e) => handleChange(i, "activities", e.target.value)}
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-2 mt-3">
                  <button
                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
                    onClick={() => saveDay(day)}
                  >
                    Save
                  </button>

                  {day.id && (
                    <button
                      className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                      onClick={() => deleteDay(day.id)}
                    >
                      Delete
                    </button>
                  )}
                </div>
              </div>
            ))}

          <button
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            onClick={addDay}
          >
            + Add Day
          </button>
        </div>
      </div>
    </div>
  );
}