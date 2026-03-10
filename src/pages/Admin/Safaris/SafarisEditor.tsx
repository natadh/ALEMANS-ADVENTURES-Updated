import { useState } from "react";
import SafarisTable from "./components/SafarisTable";
import SafariModal from "./components/SafariModal";
import SafariCreatorModal from "./components/SafariCreatorModal";
import SafariExtraModal from "./components/SafariExtraModal";
import { useSafaris } from "./components/useSafaris";
import SafariItineraryManager from "./components/SafariItineraryManager";

import type { Safari } from "./components/useSafaris";

interface Props {
  countryId: number | null;
}

export default function SafarisEditor({ countryId }: Props) {
  const { safaris, subcategories, loading, error, fetchSafaris } =
    useSafaris(countryId);

  const API = import.meta.env.VITE_API_BASE_URL;

  const [itinerarySafari, setItinerarySafari] = useState<Safari | null>(null);
  const [editingSafari, setEditingSafari] = useState<Safari | undefined>();
  const [extraSafari, setExtraSafari] = useState<Safari | null>(null); // NEW
  const [showCreator, setShowCreator] = useState(false);
  const [showEditor, setShowEditor] = useState(false);
  const [showExtra, setShowExtra] = useState(false); // NEW

  const handleDelete = async (id: string) => {
    if (!confirm("Delete safari?")) return;

    const form = new FormData();
    form.append("id", id);

    await fetch(`${API}/safaris/safaris/delete_safari.php`, {
      method: "POST",
      body: form,
    });

    fetchSafaris();
  };

  // NEW: save Extra (highlights, includes, excludes)
  const saveExtraDetails = async (
    safariId: string,
    data: { highlights: string[]; includes: string[]; excludes: string[] }
  ) => {
    const form = new FormData();
    form.append("safari_id", safariId);
    form.append("highlights", JSON.stringify(data.highlights));
    form.append("includes", JSON.stringify(data.includes));
    form.append("excludes", JSON.stringify(data.excludes));

    await fetch(`${API}/safaris/details/addDetails.php`, {
      method: "POST",
      body: form,
    });

    fetchSafaris();
  };

  return (
    <div>
      <div className="flex justify-between mb-4">
        <h2 className="text-xl font-semibold">Safaris</h2>

        <button
          className="px-3 py-1 bg-green-500 text-white rounded"
          onClick={() => setShowCreator(true)}
        >
          + Add Safari
        </button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <SafarisTable
        safaris={safaris}
        subcategories={subcategories}
        onEdit={(s) => {
          setEditingSafari(s);
          setShowEditor(true);
        }}
        onDelete={handleDelete}
        onManageItinerary={(s) => setItinerarySafari(s)}
        onManageExtra={(s) => { // NEW
          setExtraSafari(s);
          setShowExtra(true);
        }}
      />

      {/* CREATE MODAL */}
      {showCreator && (
        <SafariCreatorModal
          subcategories={subcategories}
          onClose={() => setShowCreator(false)}
          onSaved={() => {
            setShowCreator(false);
            fetchSafaris();
          }}
        />
      )}

      {/* EDIT MODAL */}
      {showEditor && editingSafari && (
        <SafariModal
          safari={editingSafari}
          subcategories={subcategories}
          onClose={() => setShowEditor(false)}
          onSave={() => {
            setShowEditor(false);
            fetchSafaris();
          }}
        />
      )}

      {/* EXTRA MODAL */}
      {showExtra && extraSafari && (
        <SafariExtraModal
          safari={extraSafari}
          isOpen={showExtra}
          onClose={() => setShowExtra(false)}
          onSave={(data) => saveExtraDetails(extraSafari.id, data)}
        />
      )}

      {/* ITINERARY MODAL */}
      {itinerarySafari && (
        <SafariItineraryManager
          safariId={itinerarySafari.id}
          safariTitle={itinerarySafari.title}
          onClose={() => setItinerarySafari(null)}
        />
      )}
    </div>
  );
}