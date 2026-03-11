import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trash2, X } from "lucide-react";
import AdminHeader from "./components/adminHeader";

interface Review {
  id: number;
  name: string;
  age: number | null;
  rating: number;
  destination: string | null;
  comment: string;
  date: string | null;
  is_active: 0 | 1;
  created_at: string;
}

export default function AdminReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState("");
  const API_BASE = import.meta.env.VITE_API_BASE_URL;

  const fetchReviews = async () => {
    try {
      const res = await fetch(`${API_BASE}/reviews/getReviews.php`);
      const data = await res.json();
      setReviews(data.reviews || []);
    } catch {
      setError("Failed to load reviews");
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const handleDelete = async (id: number) => {
    if (!confirm("Delete this review?")) return;
    await fetch(`${API_BASE}/reviews/deleteReview.php`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    fetchReviews();
  };

  const handleToggleActive = async (id: number, active: boolean) => {
    await fetch(`${API_BASE}/reviews/setActiveReview.php`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, is_active: active ? 1 : 0 }),
    });
    fetchReviews();
  };





  return (
    <div className="min-h-screen bg-white text-gray-800">
      <AdminHeader />

      <div className="max-w-6xl mx-auto py-20 px-6 space-y-10">

        {/* Page header */}
        <div className="flex items-end justify-between">
          <div>
            <div className="w-12 h-px bg-[#F5D547] mb-6"></div>
            <h1 className="text-3xl md:text-4xl font-light uppercase tracking-[0.15em] text-[#1A0A0B]">
              Review Management
            </h1>
          </div>
        </div>

        {error && (
          <p className="text-xs text-red-500 font-light tracking-wide border border-red-200 bg-red-50 px-4 py-2">
            {error}
          </p>
        )}

        {/* Reviews grid */}
        {reviews.length === 0 ? (
          <p className="text-xs uppercase tracking-[0.15em] font-light text-gray-400 py-6">
            No reviews yet.
          </p>
        ) : (
        <div className="grid md:grid-cols-2 gap-px bg-gray-200 border border-gray-200">
          {reviews.map((r) => (
            <div
              key={r.id}
              className="bg-white hover:bg-[#FAFAF8] transition-colors duration-200 p-8 flex flex-col gap-4"
            >
              {/* Name + rating */}
              <div className="flex items-start justify-between gap-4">
                <h2 className="font-medium text-base uppercase tracking-wider text-[#1A0A0B]">
                  {r.name} {r.age ? `, ${r.age}` : ""}
                </h2>
                <span className="text-[#F5D547] text-sm tracking-wider">
                  {"★".repeat(Math.floor(r.rating))}
                  {r.rating % 1 >= 0.5 ? "½" : ""}
                  <span className="text-gray-300">{"★".repeat(5 - Math.floor(r.rating) - (r.rating % 1 >= 0.5 ? 1 : 0))}</span>
                  <span className="text-xs text-gray-400 font-light ml-2">{r.rating}/5</span>
                </span>
              </div>

              {r.destination && <p className="text-xs font-light text-gray-500">{r.destination}</p>}
              {r.date && <p className="text-xs font-light text-gray-400">Visited: {r.date}</p>}

              <p className="text-sm font-light text-gray-600 leading-relaxed whitespace-pre-line line-clamp-4">
                {r.comment}
              </p>

              <div className="flex items-center gap-3 mt-auto pt-2">
                <button
                  onClick={() => handleToggleActive(r.id, !r.is_active)}
                  className={`text-xs uppercase tracking-[0.15em] font-light px-4 py-2 border ${
                    r.is_active
                      ? "border-green-500 text-green-500 hover:bg-green-500 hover:text-white"
                      : "border-gray-300 text-gray-700 hover:bg-gray-200"
                  } transition-colors duration-200`}
                >
                  {r.is_active ? "Active" : "Activate"}
                </button>

                <button
                  onClick={() => handleDelete(r.id)}
                  className="flex items-center gap-1.5 text-xs uppercase tracking-[0.15em] font-light text-red-400 hover:text-red-600 transition-colors duration-200 ml-auto"
                >
                  <Trash2 className="w-3.5 h-3.5" strokeWidth={1.5} />
                  Delete
                </button>
              </div>
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
                    Create Review
                  </h2>
                </div>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-400 hover:text-[#1A0A0B] transition-colors duration-200"
                >
                  <X className="w-5 h-5" strokeWidth={1.5} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}