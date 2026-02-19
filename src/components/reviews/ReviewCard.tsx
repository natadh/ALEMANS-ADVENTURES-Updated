// ReviewCard displays ONE submitted review.
// It receives a "review" object as a prop and just renders it nicely.
// It is like a recipe card — it just shows data, it doesn't manage any state.

export interface Review {
  id: number;
  name: string;
  age: number;
  rating: number;
  comment: string;
  date: string;        // e.g. "February 2025"
  destination: string; // e.g. "Kenya Safari"
}

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="bg-white border border-gray-200 p-6 hover:border-[#F5D547]/50 transition-colors duration-300">
      {/* Top row: name + date */}
      <div className="flex items-start justify-between mb-3">
        <div>
          {/* Avatar circle with first letter of name */}
          <div className="flex items-center gap-3 mb-1">
            <div className="w-10 h-10 bg-[#1A0A0B] text-[#F5D547] flex items-center justify-center text-sm font-medium uppercase shrink-0">
              {review.name.charAt(0)}
            </div>
            <div>
              <p className="text-[#1A0A0B] font-medium uppercase tracking-wider text-sm">
                {review.name}
              </p>
              <p className="text-gray-400 text-xs uppercase tracking-wider">
                Age {review.age}
              </p>
            </div>
          </div>
        </div>
        <span className="text-gray-400 text-xs uppercase tracking-wider shrink-0">
          {review.date}
        </span>
      </div>

      {/* Stars — filled based on rating number */}
      <div className="flex gap-0.5 mb-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`text-lg ${star <= review.rating ? "text-[#F5D547]" : "text-gray-200"}`}
          >
            ★
          </span>
        ))}
        <span className="text-xs text-gray-400 ml-2 uppercase tracking-wider self-center">
          {review.rating}/5
        </span>
      </div>

      {/* Destination tag */}
      <div className="mb-3">
        <span className="inline-block text-xs uppercase tracking-widest text-[#1A0A0B] border border-[#F5D547] px-2 py-0.5">
          {review.destination}
        </span>
      </div>

      {/* The review text */}
      <p className="text-gray-700 font-light leading-relaxed text-sm">
        {review.comment}
      </p>

      {/* Bottom gold accent line */}
      <div className="w-8 h-px bg-[#F5D547] mt-4"></div>
    </div>
  );
}
