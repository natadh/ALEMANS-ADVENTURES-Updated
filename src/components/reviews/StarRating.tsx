import { useState } from "react";

// This component is ONLY the star input used inside the form.
// Props explanation:
//   value        = the currently selected rating (a number 0–5)
//   onChange     = a function that gets called when the user clicks a star,
//                  passing back the new number. The parent (ReviewForm) stores it.

interface StarRatingProps {
  value: number;
  onChange: (rating: number) => void;
}

export default function StarRating({ value, onChange }: StarRatingProps) {
  // hover tracks which star the mouse is currently over
  const [hover, setHover] = useState(0);

  return (
    <div className="flex gap-1">
      {/* We map over [1,2,3,4,5] to create 5 star buttons */}
      {[1, 2, 3, 4, 5].map((star) => {
        // A star is "filled" if it's below the hover position OR the selected value
        const filled = star <= (hover || value);
        return (
          <button
            key={star}
            type="button"                          // prevents form submit on click
            onClick={() => onChange(star)}          // tell parent: user picked this star
            onMouseEnter={() => setHover(star)}     // highlight up to this star on hover
            onMouseLeave={() => setHover(0)}        // remove highlight when mouse leaves
            className="text-3xl transition-transform duration-100 hover:scale-110 focus:outline-none"
            aria-label={`Rate ${star} out of 5`}
          >
            <span className={filled ? "text-[#F5D547]" : "text-gray-300"}>★</span>
          </button>
        );
      })}
    </div>
  );
}
