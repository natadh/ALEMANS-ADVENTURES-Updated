import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Trash2, X } from "lucide-react";
import AdminHeader from "./components/adminHeader";

interface Review {
  id: number;
  name: string;
  review: string;
  rating: number;
  link: string;
}

export default function AdminReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [name, setName] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState<number>(5);
  const [link, setLink] = useState("");

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

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (rating < 0 || rating > 5) {
      setError("Rating must be between 0 and 5");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(`${API_BASE}/reviews/createReview.php`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, review: reviewText, rating, link }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Create failed");

      setShowModal(false);
      setName("");
      setReviewText("");
      setRating(5);
      setLink("");
      fetchReviews();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Delete this review?")) return;
    await fetch(`${API_BASE}/reviews/deleteReview.php`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    fetchReviews();
  };

  const renderStars = (value: number) => {
    const full = Math.floor(value);
    const half = value % 1 >= 0.5;
    return (
      <span className="text-[#F5D547] tracking-wider text-sm">
        {"★".repeat(full)}
        {half ? "½" : ""}
        <span className="text-gray-300">{"★".repeat(5 - full - (half ? 1 : 0))}</span>
        <span className="text-xs text-gray-400 font-light ml-2">{value}/5</span>
      </span>
    );
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
              Review Management
            </h1>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 border border-[#1A0A0B] text-[#1A0A0B] text-xs uppercase tracking-[0.2em] px-6 py-3 font-light hover:bg-[#1A0A0B] hover:text-white transition-colors duration-300"
          >
            <Plus className="w-4 h-4" strokeWidth={1.5} />
            Add Review
          </button>
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
                    {r.name}
                  </h2>
                  {renderStars(r.rating)}
                </div>

                <p className="text-sm font-light text-gray-600 leading-relaxed whitespace-pre-line line-clamp-4">
                  {r.review}
                </p>

                <div className="flex items-center gap-6 mt-auto pt-2">
                  {r.link && (
                    <a
                      href={r.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs uppercase tracking-[0.15em] font-light text-gray-400 hover:text-[#1A0A0B] underline underline-offset-4 transition-colors duration-200"
                    >
                      View Original
                    </a>
                  )}
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

              {/* Modal form */}
              <form onSubmit={handleCreate} className="px-8 py-6 space-y-5">
                <div>
                  <label className={labelClass}>Client Name *</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={inputClass}
                    required
                  />
                </div>

                <div>
                  <label className={labelClass}>Review *</label>
                  <textarea
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    className={`${inputClass} h-32 resize-none`}
                    required
                  />
                </div>

                <div>
                  <label className={labelClass}>Rating (0 – 5)</label>
                  <input
                    type="number"
                    step="0.5"
                    min="0"
                    max="5"
                    value={rating}
                    onChange={(e) => setRating(parseFloat(e.target.value))}
                    className={inputClass}
                    required
                  />
                </div>

                <div>
                  <label className={labelClass}>TripAdvisor Link</label>
                  <input
                    type="url"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                    placeholder="https://tripadvisor.com/..."
                    className={inputClass}
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
                    {loading ? "Saving..." : "Save Review"}
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