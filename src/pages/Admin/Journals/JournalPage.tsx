import { useState } from "react";
import { useJournals } from "./hooks/useJournals";
import AdminHeader from "../components/adminHeader";
import AdminJournalHeader from "../components/AdminJournalHeader";
import JournalGrid from "./JournalGrid";
import CreateJournalModal from "./CreateJournalModal";
export default function AdminJournalPage() {
  const API_BASE = import.meta.env.VITE_API_BASE_URL;
  const [showModal, setShowModal] = useState(false);

  const {
    journals,
    error,
    deleteJournal,
    fetchJournals,
  } = useJournals(API_BASE);

  return (
    <div className="min-h-screen bg-white">
      <AdminHeader />

      <div className="max-w-6xl mx-auto py-20 px-6 space-y-10">
        <AdminJournalHeader onAdd={() => setShowModal(true)} />

        {error && <p className="text-red-500 text-xs">{error}</p>}

        <JournalGrid
          journals={journals}
          onDelete={deleteJournal}
        />
      </div>

      <CreateJournalModal
        show={showModal}
        onClose={() => setShowModal(false)}
        onSuccess={() => {
          setShowModal(false);
          fetchJournals();
        }}
      />
    </div>
  );
}