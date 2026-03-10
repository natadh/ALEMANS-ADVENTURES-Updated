import React, { useState, useEffect } from "react";

interface Props {
  safari: { id: string; title: string };
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: {
    highlights: string[];
    includes: string[];
    excludes: string[];
  }) => void;
}

export default function SafariExtraModal({ safari, isOpen, onClose, onSave }: Props) {
  const [highlights, setHighlights] = useState<string[]>([]);
  const [includes, setIncludes] = useState<string[]>([]);
  const [excludes, setExcludes] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const API = import.meta.env.VITE_API_BASE_URL;

  // Fetch details from the backend when modal opens
  useEffect(() => {
    if (!isOpen || !safari) return;

    setLoading(true);
    setError(null);

    fetch(`${API}/safaris/getDetails.php?safari_id=${safari.id}`)
      .then(res => res.json())
      .then(data => {
        if (data.success && data.data) {
          setHighlights(data.data.highlights || []);
          setIncludes(data.data.includes || []);
          setExcludes(data.data.excludes || []);
        } else {
          setHighlights([]);
          setIncludes([]);
          setExcludes([]);
        }
      })
      .catch(err => {
        console.error(err);
        setError("Failed to load extra details.");
      })
      .finally(() => setLoading(false));
  }, [isOpen, safari]);

  const handleAdd = (setter: React.Dispatch<React.SetStateAction<string[]>>) =>
    setter(prev => [...prev, ""]);

  const handleChange = (
    setter: React.Dispatch<React.SetStateAction<string[]>>,
    index: number,
    value: string
  ) => setter(prev => prev.map((item, i) => (i === index ? value : item)));

  const handleRemove = (
    setter: React.Dispatch<React.SetStateAction<string[]>>,
    index: number
  ) => setter(prev => prev.filter((_, i) => i !== index));

  const handleSave = () => {
    onSave({ highlights, includes, excludes });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-start md:items-center p-4 backdrop-blur-sm bg-black/30 overflow-y-auto">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden">
        
        {/* Sticky Header */}
        <div className="flex justify-between items-center p-4 border-b sticky top-0 bg-white z-10">
          <h2 className="text-xl font-bold">
            Extra Details for {safari.title}
          </h2>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition-colors"
          >
            Close
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-4 overflow-y-auto flex-1 space-y-6">
          {loading && <p>Loading details...</p>}
          {error && <p className="text-red-500">{error}</p>}

          {!loading && !error && (
            <>
              {/* Highlights */}
              <section>
                <h3 className="font-medium mb-2">Highlights</h3>
                {highlights.map((h, i) => (
                  <div key={i} className="flex items-center mb-2 gap-2">
                    <input
                      type="text"
                      value={h}
                      onChange={(e) => handleChange(setHighlights, i, e.target.value)}
                      className="border p-2 rounded flex-1 focus:outline-none focus:ring-2 focus:ring-[#F5D547]"
                    />
                    <button
                      onClick={() => handleRemove(setHighlights, i)}
                      className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <button
                  onClick={() => handleAdd(setHighlights)}
                  className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
                >
                  Add Highlight
                </button>
              </section>

              {/* Includes */}
              <section>
                <h3 className="font-medium mb-2">Includes</h3>
                {includes.map((i, idx) => (
                  <div key={idx} className="flex items-center mb-2 gap-2">
                    <input
                      type="text"
                      value={i}
                      onChange={(e) => handleChange(setIncludes, idx, e.target.value)}
                      className="border p-2 rounded flex-1 focus:outline-none focus:ring-2 focus:ring-[#F5D547]"
                    />
                    <button
                      onClick={() => handleRemove(setIncludes, idx)}
                      className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <button
                  onClick={() => handleAdd(setIncludes)}
                  className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
                >
                  Add Include
                </button>
              </section>

              {/* Excludes */}
              <section>
                <h3 className="font-medium mb-2">Excludes</h3>
                {excludes.map((e, idx) => (
                  <div key={idx} className="flex items-center mb-2 gap-2">
                    <input
                      type="text"
                      value={e}
                      onChange={(ev) => handleChange(setExcludes, idx, ev.target.value)}
                      className="border p-2 rounded flex-1 focus:outline-none focus:ring-2 focus:ring-[#F5D547]"
                    />
                    <button
                      onClick={() => handleRemove(setExcludes, idx)}
                      className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <button
                  onClick={() => handleAdd(setExcludes)}
                  className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
                >
                  Add Exclude
                </button>
              </section>
            </>
          )}
        </div>

        {/* Sticky Footer Buttons */}
        <div className="flex justify-end gap-2 p-4 border-t sticky bottom-0 bg-white z-10">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            disabled={loading}
          >
            Save
          </button>
        </div>

      </div>
    </div>
  );
}