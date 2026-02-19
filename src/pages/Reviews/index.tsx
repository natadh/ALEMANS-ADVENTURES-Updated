import { useState } from "react";
import Layout from "../../components/Layout";
import ReviewForm from "../../components/reviews/ReviewForm";
import ReviewCard, { type Review } from "../../components/reviews/ReviewCard";

// MOCK DATA — these are just fake reviews so the page looks populated. I'll add a sample to see if it populates
// Later, when the backend is ready, you'd replace this with a fetch() call...
// to get reviews from the database. For now I think this is fine.
const MOCK_REVIEWS: Review[] = [
  {
    id: 1,
    name: "Sophie Müller",
    age: 38,
    rating: 5,
    destination: "Kenya Safari",
    comment:
      "An absolutely life-changing experience. Our guide knew every animal by name and the lodge was beyond what we imagined. The Maasai Mara at sunrise will stay with me forever. Alemans handled every detail perfectly — zero stress, pure wonder.",
    date: "January 2025",
  },
  {
    id: 2,
    name: "James Okonkwo",
    age: 45,
    rating: 5,
    destination: "Tanzania Safari",
    comment:
      "We came for the Serengeti and left completely in love with East Africa. Witnessing the great migration was humbling. The team at Alemans went above and beyond — from airport pickup to the last goodbye. Already planning our return.",
    date: "December 2024",
  },
  {
    id: 3,
    name: "Clara Fontaine",
    age: 29,
    rating: 4,
    destination: "Zanzibar Beach",
    comment:
      "Stone Town was a highlight I didn't expect — so much history and flavor in every alley. The beach resort was stunning. Only small hiccup was a short delay on day one, but it was sorted quickly and the rest was flawless.",
    date: "November 2024",
  },
  {
    id: 4,
    name: "David Kamau",
    age: 52,
    rating: 5,
    destination: "Rwanda Gorillas",
    comment:
      "Tracking the mountain gorillas in Volcanoes National Park is something words can't fully capture. Alemans prepared us perfectly — fitness tips, what to bring, what to expect. The moment a silverback looked at me directly, I nearly cried.",
    date: "October 2024",
  },
];

// Helper: to calculate average rating from a list of reviews
function averageRating(reviews: Review[]) {
  if (reviews.length === 0) return 0;
  return reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;
}

export default function ReviewsPage() {
  // useState to store ALL reviews (mock + newly submitted ones)
  const [reviews, setReviews] = useState<Review[]>(MOCK_REVIEWS);

  // This function is passed DOWN to ReviewForm as a prop.
  // When the form submits, it calls this, and we ADD the new review to our list.
  function handleNewReview(newReview: Omit<Review, "id" | "date">) {
    const review: Review = {
      ...newReview,         // spread all the fields from the form
      id: Date.now(),       // temporary unique ID using current timestamp
      date: new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" }),
    };
    // use spread [...reviews, review] to add to the array.
    setReviews([review, ...reviews]);
  }

  const avg = averageRating(reviews);
  const totalReviews = reviews.length;

  // Count how many reviews gave each star (for the breakdown bar)
  const starCounts = [5, 4, 3, 2, 1].map((star) => ({
    star,
    count: reviews.filter((r) => r.rating === star).length,
  }));

  return (
    <Layout>
      {/* Page Hero Banner */}
      <section className="relative bg-[#1A0A0B] pt-32 pb-16 px-6 border-b border-[#F5D547]/20">
        <div className="max-w-6xl mx-auto">
          <div className="w-12 h-px bg-[#F5D547] mb-6"></div>
          <h1 className="text-4xl md:text-5xl font-light uppercase tracking-[0.15em] text-white mb-4">
            Traveler Reviews
          </h1>
          <p className="text-gray-400 font-light max-w-xl leading-relaxed">
            Hear from adventurers who have explored East Africa with us. 
            Authentic stories from real journeys.
          </p>
        </div>
      </section>

      {/* Rating Summary Bar */}
      <section className="bg-[#FAFAF8] border-b border-gray-200 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-start md:items-center">

          {/* Big average number */}
          <div className="text-center md:text-left shrink-0">
            <p className="text-6xl font-light text-[#1A0A0B]">{avg.toFixed(1)}</p>
            <div className="flex gap-0.5 justify-center md:justify-start my-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={`text-xl ${star <= Math.round(avg) ? "text-[#F5D547]" : "text-gray-200"}`}
                >
                  ★
                </span>
              ))}
            </div>
            <p className="text-gray-400 text-xs uppercase tracking-widest">
              {totalReviews} {totalReviews === 1 ? "review" : "reviews"}
            </p>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-24 bg-gray-200 mx-4"></div>

          {/* Star breakdown bars — like TripAdvisor */}
          <div className="flex-1 space-y-2 w-full">
            {starCounts.map(({ star, count }) => (
              <div key={star} className="flex items-center gap-3">
                <span className="text-xs text-gray-500 w-6 shrink-0">{star}★</span>
                <div className="flex-1 bg-gray-200 h-2">
                  <div
                    className="bg-[#F5D547] h-2 transition-all duration-500"
                    style={{ width: totalReviews ? `${(count / totalReviews) * 100}%` : "0%" }}
                  ></div>
                </div>
                <span className="text-xs text-gray-400 w-4 shrink-0">{count}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content: Review List + Form */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <div className="grid lg:grid-cols-3 gap-12">

          {/* LEFT: Reviews list (takes 2/3 of the width on large screens) */}
          <div className="lg:col-span-2">
            <div className="w-8 h-px bg-[#F5D547] mb-4"></div>
            <h2 className="text-2xl font-light uppercase tracking-[0.15em] text-[#1A0A0B] mb-8">
              All Reviews
            </h2>

            {reviews.length === 0 ? (
              <p className="text-gray-400 font-light text-sm">No reviews yet. Be the first!</p>
            ) : (
              <div className="space-y-6">
                {reviews.map((review) => (
                  // We pass the full review object as a prop to ReviewCard
                  // The "key" prop is required by React when rendering lists —
                  // it helps React track which item is which.
                  <ReviewCard key={review.id} review={review} />
                ))}
              </div>
            )}
          </div>

          {/* RIGHT: Submission form (takes 1/3 of the width) */}
          <div className="lg:col-span-1">
            {/* Sticky so the form stays visible while scrolling reviews */}
            <div className="sticky top-24">
              <ReviewForm onSubmit={handleNewReview} />
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA — consistent with rest of site */}
      <section className="bg-[#1A0A0B] py-16 px-6 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-px bg-[#F5D547] mx-auto mb-8"></div>
          <h2 className="text-3xl font-light uppercase tracking-[0.15em] text-white mb-4">
            Ready for Your Own Adventure?
          </h2>
          <p className="text-gray-400 font-light mb-8">
            Let us craft your perfect East African journey
          </p>
          <a
            href="/destinations"
            className="inline-block px-12 py-4 bg-[#F5D547] text-[#1A0A0B] font-medium uppercase tracking-widest hover:bg-[#E8C93A] transition-all duration-300 text-sm border-2 border-[#F5D547]"
          >
            Explore Destinations
          </a>
        </div>
      </section>
    </Layout>
  );
}
