import { useState } from "react";
import StarRating from "./StarRating";
import type { Review } from "./ReviewCard";

// This component is the submission form.
// Props explanation:
//   onSubmit = a function the PARENT (ReviewsPage) gives us.
//              When the form is submitted, we call this function
//              and pass the new review UP to the parent.
//              The parent then adds it to its list.
//              This pattern is called "lifting state up" — the data lives
//              in the parent, not the form.

interface ReviewFormProps {
  onSubmit: (review: Omit<Review, "id" | "date">) => void;
}

const DESTINATIONS = [
  "Kenya Safari",
  "Tanzania Safari",
  "Uganda Adventure",
  "Rwanda Gorillas",
  "Zanzibar Beach",
  "Multi-Country Tour",
];

export default function ReviewForm({ onSubmit }: ReviewFormProps) {
  // useState here holds all the form field values.
  // Every time a user types in a field, we update the state.
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    rating: 0,
    destination: "",
    comment: "",
  });

  // Tracks whether the form was just submitted (to show a thank you message)
  const [submitted, setSubmitted] = useState(false);
  // Tracks validation errors
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Validates the form before submission
  function validate() {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.age || Number(formData.age) < 1 || Number(formData.age) > 120)
      newErrors.age = "Please enter a valid age";
    if (formData.rating === 0) newErrors.rating = "Please select a star rating";
    if (!formData.destination) newErrors.destination = "Please select a destination";
    if (!formData.comment.trim() || formData.comment.length < 10)
      newErrors.comment = "Please write at least 10 characters";
    return newErrors;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault(); // prevents the page from reloading on submit

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Call the parent's onSubmit function with the review data
    onSubmit({
      name: formData.name,
      age: Number(formData.age),
      rating: formData.rating,
      destination: formData.destination,
      comment: formData.comment,
    });

    // Reset the form
    setFormData({ name: "", age: "", rating: 0, destination: "", comment: "" });
    setErrors({});
    setSubmitted(true);

    // Hide the thank you message after 4 seconds
    setTimeout(() => setSubmitted(false), 4000);
  }

  return (
    <div className="bg-[#FAFAF8] border border-gray-200 p-8">
      {/* Section header — same style as rest of the site */}
      <div className="w-8 h-px bg-[#F5D547] mb-4"></div>
      <h3 className="text-xl font-light uppercase tracking-[0.15em] text-[#1A0A0B] mb-6">
        Share Your Experience
      </h3>

      {/* Thank you message shown after successful submit */}
      {submitted && (
        <div className="mb-6 p-4 border border-[#F5D547] bg-[#F5D547]/10 text-[#1A0A0B] text-sm uppercase tracking-wider">
          ✓ Thank you! Your review has been submitted.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name + Age row */}
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
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name}</p>
            )}
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
            {errors.age && (
              <p className="text-red-500 text-xs mt-1">{errors.age}</p>
            )}
          </div>
        </div>

        {/* Destination dropdown */}
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
          {errors.destination && (
            <p className="text-red-500 text-xs mt-1">{errors.destination}</p>
          )}
        </div>

        {/* Star rating */}
        <div>
          <label className="block text-xs uppercase tracking-widest text-[#1A0A0B] mb-2">
            Your Rating
          </label>
          {/* StarRating updates formData.rating via the onChange callback */}
          <StarRating
            value={formData.rating}
            onChange={(rating) => setFormData({ ...formData, rating })}
          />
          {errors.rating && (
            <p className="text-red-500 text-xs mt-1">{errors.rating}</p>
          )}
        </div>

        {/* Comment textarea */}
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
          {errors.comment && (
            <p className="text-red-500 text-xs mt-1">{errors.comment}</p>
          )}
        </div>

        {/* Submit button — same gold style as the rest of the site */}
        <button
          type="submit"
          className="px-10 py-3 bg-[#F5D547] text-[#1A0A0B] font-medium uppercase tracking-widest hover:bg-[#E8C93A] transition-all duration-300 text-sm border-2 border-[#F5D547] hover:border-[#E8C93A]"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
}
