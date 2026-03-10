import { useState } from "react";
import type { Safari, Subcategory } from "./useSafaris";

interface Props {
  safari?: Safari;
  subcategories: Subcategory[];
  onClose: () => void;
  onSaved: () => void;
}

export default function SafariCreatorModal({
  safari,
  subcategories,
  onClose,
  onSaved,
}: Props) {
  const API = import.meta.env.VITE_API_BASE_URL;

  const [title, setTitle] = useState(safari?.title || "");
  const [destination, setDestination] = useState(safari?.destination || "");
  const [description, setDescription] = useState(safari?.description || "");
  const [duration, setDuration] = useState(safari?.duration_label || "");
  const [currency, setCurrency] = useState(safari?.currency || "USD");
  const [price, setPrice] = useState<number | "">(safari?.price_from || "");
  const [priceNote, setPriceNote] = useState(safari?.price_note || "");
  const [subcategoryId, setSubcategoryId] = useState<number | "">(
    safari?.subcategory_id || ""
  );

  const [saving, setSaving] = useState(false);

  const handleSave = async () => {
    if (!title || !subcategoryId) {
      alert("Title and subcategory required");
      return;
    }

    setSaving(true);

    const form = new FormData();
    form.append("title", title);
    form.append("destination", destination);
    form.append("description", description);
    form.append("duration_label", duration);
    form.append("currency", currency);
    form.append("price_from", String(price));
    form.append("price_note", priceNote);
    form.append("subcategory_id", String(subcategoryId));

    await fetch(`${API}/safaris/safaris/create_safari.php`, {
      method: "POST",
      body: form,
    });

    setSaving(false);
    onSaved();
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-start md:items-center p-4 backdrop-blur-sm bg-black/30 overflow-y-auto">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden">

        {/* Sticky Header */}
        <div className="flex justify-between items-center p-4 border-b sticky top-0 bg-white z-10">
          <h2 className="text-xl font-light uppercase tracking-[0.05em] text-[#1A0A0B]">
            {safari ? "Edit Safari" : "Create Safari"}
          </h2>
          <button
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition-colors"
            onClick={onClose}
          >
            Close
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-4 overflow-y-auto flex-1 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#F5D547]"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <input
              className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#F5D547]"
              placeholder="Destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />

            <input
              className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#F5D547]"
              placeholder="Duration (3 Days / 2 Nights)"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />

            <select
              className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#F5D547]"
              value={subcategoryId}
              onChange={(e) => setSubcategoryId(Number(e.target.value))}
            >
              <option value="">Select Subcategory</option>
              {subcategories.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.title}
                </option>
              ))}
            </select>

            <input
              className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#F5D547] md:col-span-2"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              className="border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#F5D547]"
              placeholder="Currency"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            />
            <input
              type="number"
              className="border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#F5D547]"
              placeholder="Price From"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
            />
          </div>

          <input
            className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#F5D547]"
            placeholder="Price Note"
            value={priceNote}
            onChange={(e) => setPriceNote(e.target.value)}
          />
        </div>

        {/* Sticky Footer */}
        <div className="flex justify-end gap-2 p-4 border-t sticky bottom-0 bg-white z-10">
          <button
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition-colors"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
            onClick={handleSave}
            disabled={saving}
          >
            {saving ? "Saving..." : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
}