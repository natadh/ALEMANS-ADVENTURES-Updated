import { useState } from "react";
import StarRating from "./StarRating";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface ReviewFormProps {}

const DESTINATIONS = [
  "Kenya Safari",
  "Tanzania Safari",
  "Uganda Adventure",
  "Rwanda Gorillas",
  "Zanzibar Beach",
  "Multi-Country Tour",
];

export default function ReviewForm({}: ReviewFormProps) {
  const API_BASE = import.meta.env.VITE_API_BASE_URL;

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    rating: 0,
    destination: "",
    comment: "",
    date: null as Date | null,
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");

  // Client-side validation
  function validate() {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.age || Number(formData.age) < 1 || Number(formData.age) > 120)
      newErrors.age = "Please enter a valid age";
    if (formData.rating === 0) newErrors.rating = "Please select a star rating";
    if (!formData.destination) newErrors.destination = "Please select a destination";
    if (!formData.comment.trim() || formData.comment.length < 10)
      newErrors.comment = "Please write at least 10 characters";
    if (!formData.date) newErrors.date = "Please select the month and year";
    return newErrors;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    setServerError("");

    try {
      // Prepare JSON payload
      const payload = {
        ...formData,
        date: formData.date
          ? formData.date.toLocaleString("en-US", { month: "long", year: "numeric" })
          : "",
      };

      const res = await fetch(`${API_BASE}/reviews/createReview.php`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        credentials: "include",
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Submission failed");

      // Reset form & show success
      setFormData({ name: "", age: "", rating: 0, destination: "", comment: "", date: null });
      setErrors({});
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
    } catch (err: any) {
      setServerError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-[#FAFAF8] border border-gray-200 p-8 max-w-3xl mx-auto">
      <div className="w-8 h-px bg-[#F5D547] mb-4"></div>
      <h3 className="text-xl font-light uppercase tracking-[0.15em] text-[#1A0A0B] mb-6">
        Share Your Experience
      </h3>

      {submitted && (
        <div className="mb-6 p-4 border border-[#F5D547] bg-[#F5D547]/10 text-[#1A0A0B] text-sm uppercase tracking-wider">
          ✓ Thank you! Your review has been submitted.
        </div>
      )}

      {serverError && (
        <div className="mb-6 p-4 border border-red-400 bg-red-50 text-red-600 text-sm">
          {serverError}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name + Age */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs uppercase tracking-widest text-[#1A0A0B] mb-2">
              Full Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Jane Doe"
              className="w-full border border-gray-300 bg-white px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-[#F5D547] transition-colors"
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-xs uppercase tracking-widest text-[#1A0A0B] mb-2">
              Age
            </label>
            <input
              type="number"
              value={formData.age}
              onChange={(e) => setFormData({ ...formData, age: e.target.value })}
              placeholder="e.g. 34"
              min={1}
              max={120}
              className="w-full border border-gray-300 bg-white px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-[#F5D547] transition-colors"
            />
            {errors.age && <p className="text-red-500 text-xs mt-1">{errors.age}</p>}
          </div>
        </div>

        {/* Destination */}
        <div>
          <label className="block text-xs uppercase tracking-widest text-[#1A0A0B] mb-2">
            Destination Visited
          </label>
          <select
            value={formData.destination}
            onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
            className="w-full border border-gray-300 bg-white px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-[#F5D547] transition-colors appearance-none"
          >
            <option value="">Select a destination...</option>
            {DESTINATIONS.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
          {errors.destination && <p className="text-red-500 text-xs mt-1">{errors.destination}</p>}
        </div>
        {/* Date of Visit */}
        <div>
          <label className="block text-xs uppercase tracking-widest text-[#1A0A0B] mb-2">
            Month & Year of Visit
          </label>
          <DatePicker
            selected={formData.date}
            onChange={(date: Date | null) => {
              if (date) setFormData({ ...formData, date });
            }}
            dateFormat="MMMM yyyy"
            showMonthYearPicker
            placeholderText="Select month and year"
            className="w-full border border-gray-300 bg-white px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-[#F5D547] transition-colors"
          />
          {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
        </div>

        {/* Star rating */}
        <div>
          <label className="block text-xs uppercase tracking-widest text-[#1A0A0B] mb-2">
            Your Rating
          </label>
          <StarRating
            value={formData.rating}
            onChange={(rating) => setFormData({ ...formData, rating })}
          />
          {errors.rating && <p className="text-red-500 text-xs mt-1">{errors.rating}</p>}
        </div>

        {/* Comment */}
        <div>
          <label className="block text-xs uppercase tracking-widest text-[#1A0A0B] mb-2">
            Your Review
          </label>
          <textarea
            value={formData.comment}
            onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
            placeholder="Tell us about your experience..."
            rows={5}
            className="w-full border border-gray-300 bg-white px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-[#F5D547] transition-colors resize-none"
          />
          {errors.comment && <p className="text-red-500 text-xs mt-1">{errors.comment}</p>}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="px-10 py-3 bg-[#F5D547] text-[#1A0A0B] font-medium uppercase tracking-widest hover:bg-[#E8C93A] transition-all duration-300 text-sm border-2 border-[#F5D547] hover:border-[#E8C93A] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Submitting..." : "Submit Review"}
        </button>
      </form>
    </div>
  );
}