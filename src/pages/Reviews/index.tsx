import { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import ReviewForm from "../../components/reviews/ReviewForm";
import ReviewCard, { type Review } from "../../components/reviews/ReviewCard";


// Helper: to calculate average rating from a list of reviews
function averageRating(reviews: Review[]) {
  if (reviews.length === 0) return 0;
  return reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;
}

export default function ReviewsPage() {
  // useState to store ALL reviews (mock + newly submitted ones)
  const API_BASE = import.meta.env.VITE_API_BASE_URL;

  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch active reviews on mount
  useEffect(() => {
    async function fetchReviews() {
      setLoading(true);
      try {
        const res = await fetch(`${API_BASE}/reviews/getActiveReviews.php`);
        const data = await res.json();
        if (!res.ok) throw new Error(data.message || "Failed to fetch reviews");
        setReviews(data.reviews || []);
      } catch (err: any) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    }

    fetchReviews();
  }, []);
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

          <div className="lg:col-span-2">
            <div className="w-8 h-px bg-[#F5D547] mb-4"></div>
            <h2 className="text-2xl font-light uppercase tracking-[0.15em] text-[#1A0A0B] mb-8">
              All Reviews
            </h2>

            {loading ? (
              <p className="text-gray-400 font-light text-sm">Loading reviews...</p>
            ) : error ? (
              <p className="text-red-500 font-light text-sm">{error}</p>
            ) : reviews.length === 0 ? (
              <p className="text-gray-400 font-light text-sm">No reviews yet. Be the first!</p>
            ) : (
              <div className="space-y-6">
                {reviews.map((review) => (
                  <ReviewCard key={review.id} review={review} />
                ))}
              </div>
            )}
          </div>

          {/* RIGHT: Submission form (takes 1/3 of the width) */}
          <div className="lg:col-span-1">
            {/* Sticky so the form stays visible while scrolling reviews */}
            <div className="sticky top-24">
              <ReviewForm />
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
