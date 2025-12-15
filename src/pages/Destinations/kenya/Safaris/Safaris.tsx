// src/pages/Safaris/Safaris.tsx
import { useState } from "react";
import safarisInfo from "./safarisinfo.json";
import CategoryCard from "./components/CategoryCard";
import SafariCard from "./components/SafariCard"; // Adjusted path based on your structure
import SafariDetail from "./SafariDetail"; // Import the refactored detail component
import type { Category, Safari } from "./types/safari";

export default function Safaris() {
  const categories = safarisInfo.categories as Category[];
  
  // State 1: Which Category is selected?
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);
  
  // State 2: Which Safari is selected?
  const [activeSafari, setActiveSafari] = useState<Safari | null>(null);

  const activeCategory = categories.find(c => c.id === activeCategoryId);

  // ----------------------------------------------------
  // VIEW 1: THE DETAIL PAGE
  // ----------------------------------------------------
  if (activeSafari) {
    return (
      <SafariDetail 
        safari={activeSafari} 
        onBack={() => setActiveSafari(null)} 
      />
    );
  }

  // ----------------------------------------------------
  // VIEW 2: CATEGORIES & LISTS
  // ----------------------------------------------------
  return (
    <div className="min-h-screen px-4 md:px-10 pb-20">
      <header className="py-10">
        <h1 className="text-3xl md:text-4xl uppercase tracking-wider font-light text-[#1A0A0B]">
          Tours & Safaris
        </h1>
        <p className="text-gray-600 mt-2 max-w-2xl">
          Explore our curated safari experiences across Kenya and East Africa.
        </p>
      </header>

      {/* 1. Show Categories if no category selected */}
      {!activeCategory && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map(category => (
            <CategoryCard
              key={category.id}
              category={category}
              onSelect={setActiveCategoryId}
            />
          ))}
        </div>
      )}

      {/* 2. Show Safari Lists if category is selected */}
      {activeCategory && (
        <>
          <button
            onClick={() => setActiveCategoryId(null)}
            className="mb-6 text-sm underline tracking-wide"
          >
            ← Back to Categories
          </button>

          {activeCategory.subcategories.map(sub => (
            <section key={sub.id} className="mb-12">
              <h3 className="text-xl font-medium mb-4">
                {sub.title}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {sub.safaris.map(safari => (
                  <SafariCard
                    key={safari.id}
                    safari={safari}
                    onClick={setActiveSafari} 
                  />
                ))}
              </div>
            </section>
          ))}
        </>
      )}
    </div>
  );
}