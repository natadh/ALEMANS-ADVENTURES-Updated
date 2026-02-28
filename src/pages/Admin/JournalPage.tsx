import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Trash2, X } from "lucide-react";
import AdminHeader from "./components/adminHeader";

interface JournalEntry {
  id: number;
  title: string;
  content: string;
  date: string;
  labels: string[];
  images: string[];
}

export default function AdminJournalPage() {
  const [journals, setJournals] = useState<JournalEntry[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");
  const [labels, setLabels] = useState("");
  const [images, setImages] = useState<FileList | null>(null);
  const API_BASE = import.meta.env.VITE_API_BASE_URL;

  const fetchJournals = async () => {
    try {
      const res = await fetch(`${API_BASE}/journals/getJournals.php`, {
        credentials: "include",
      });
      const data = await res.json();
      setJournals(data.journals || []);
    } catch {
      setError("Failed to load journals");
    }
  };

  useEffect(() => {
    fetchJournals();
  }, []);

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("date", date);
    formData.append("labels", labels);
    if (images) {
      Array.from(images).forEach((file) => formData.append("images[]", file));
    }

    try {
      const res = await fetch(`${API_BASE}/journals/createJournal.php`, {
        method: "POST",
        body: formData,
        credentials: "include",
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Create failed");

      setShowModal(false);
      setTitle("");
      setContent("");
      setDate("");
      setLabels("");
      fetchJournals();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Delete this journal entry?")) return;
    await fetch(`${API_BASE}/journals/deleteJournal.php`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
      credentials: "include",
    });
    fetchJournals();
  };

  const inputClass =
    "w-full border border-gray-200 bg-[#FAFAF8] px-4 py-2.5 text-sm font-light text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#1A0A0B] transition-colors duration-200";

  const labelClass =
    "block text-xs uppercase tracking-[0.15em] font-medium text-[#1A0A0B] mb-2";

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <AdminHeader />

      <div className="max-w-6xl mx-auto py-20 px-6 space-y-10">

        {/* Page header */}
        <div className="flex items-end justify-between">
          <div>
            <div className="w-12 h-px bg-[#F5D547] mb-6"></div>
            <h1 className="text-3xl md:text-4xl font-light uppercase tracking-[0.15em] text-[#1A0A0B]">
              Journal Management
            </h1>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 border border-[#1A0A0B] text-[#1A0A0B] text-xs uppercase tracking-[0.2em] px-6 py-3 font-light hover:bg-[#1A0A0B] hover:text-white transition-colors duration-300"
          >
            <Plus className="w-4 h-4" strokeWidth={1.5} />
            Add Entry
          </button>
        </div>

        {error && (
          <p className="text-xs text-red-500 font-light tracking-wide border border-red-200 bg-red-50 px-4 py-2">
            {error}
          </p>
        )}

        {/* Journal grid */}
        {journals.length === 0 ? (
          <p className="text-xs uppercase tracking-[0.15em] font-light text-gray-400 py-6">
            No journal entries yet.
          </p>
        ) : (
          <div className="grid md:grid-cols-2 gap-px bg-gray-200 border border-gray-200">
            {journals.map((journal) => (
              <div
                key={journal.id}
                className="bg-white hover:bg-[#FAFAF8] transition-colors duration-200 p-8 flex flex-col gap-4"
              >
                <div>
                  <p className="text-xs font-light text-gray-400 tracking-widest uppercase mb-2">
                    {journal.date}
                  </p>
                  <h2 className="font-medium text-base uppercase tracking-wider text-[#1A0A0B] mb-3">
                    {journal.title}
                  </h2>
                  <p className="text-sm font-light text-gray-600 leading-relaxed line-clamp-3">
                    {journal.content}
                  </p>
                </div>

                {journal.labels?.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {journal.labels.map((label, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-light tracking-widest uppercase border border-gray-200 px-3 py-1 text-gray-500"
                      >
                        {label}
                      </span>
                    ))}
                  </div>
                )}

                <button
                  onClick={() => handleDelete(journal.id)}
                  className="flex items-center gap-2 w-fit text-xs uppercase tracking-[0.15em] font-light text-red-400 hover:text-red-600 transition-colors duration-200"
                >
                  <Trash2 className="w-3.5 h-3.5" strokeWidth={1.5} />
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white w-full max-w-lg border border-gray-200"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.2 }}
            >
              {/* Modal header */}
              <div className="flex items-center justify-between px-8 py-6 border-b border-gray-200">
                <div>
                  <div className="w-8 h-px bg-[#F5D547] mb-3"></div>
                  <h2 className="text-base font-light uppercase tracking-[0.15em] text-[#1A0A0B]">
                    Create Journal Entry
                  </h2>
                </div>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-400 hover:text-[#1A0A0B] transition-colors duration-200"
                >
                  <X className="w-5 h-5" strokeWidth={1.5} />
                </button>
              </div>

              {/* Modal form */}
              <form onSubmit={handleCreate} className="px-8 py-6 space-y-5">
                <div>
                  <label className={labelClass}>Title *</label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className={inputClass}
                    required
                  />
                </div>

                <div>
                  <label className={labelClass}>Date</label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className={labelClass}>Content *</label>
                  <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className={`${inputClass} h-32 resize-none`}
                    required
                  />
                </div>

                <div>
                  <label className={labelClass}>Labels (comma separated)</label>
                  <input
                    type="text"
                    value={labels}
                    onChange={(e) => setLabels(e.target.value)}
                    placeholder="e.g. Kenya, Safari, Wildlife"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className={labelClass}>Images</label>
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={(e) => setImages(e.target.files)}
                    className={`${inputClass} file:mr-4 file:border-0 file:bg-transparent file:text-xs file:uppercase file:tracking-widest file:font-medium file:text-[#1A0A0B] file:cursor-pointer cursor-pointer`}
                  />
                </div>

                {error && (
                  <p className="text-xs text-red-500 font-light tracking-wide border border-red-200 bg-red-50 px-4 py-2">
                    {error}
                  </p>
                )}

                <div className="flex justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="border border-gray-200 text-gray-500 text-xs uppercase tracking-[0.2em] px-6 py-2.5 font-light hover:border-[#1A0A0B] hover:text-[#1A0A0B] transition-colors duration-300"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="border border-[#1A0A0B] text-[#1A0A0B] text-xs uppercase tracking-[0.2em] px-6 py-2.5 font-light hover:bg-[#1A0A0B] hover:text-white transition-colors duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    {loading ? "Saving..." : "Save Entry"}
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}