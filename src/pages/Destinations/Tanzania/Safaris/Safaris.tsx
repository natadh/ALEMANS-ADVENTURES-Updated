import { Routes, Route, useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import type { Variants } from "framer-motion";


import { useSafarisTree } from "./hooks/useSafarisTree";
import CategoryCard from "./components/CategoryCard";
import SafariCard from "./components/SafariCard";
import { SafariDetailRoute } from "./DetailRoute";
import CategoryDescriptor from "./descriptors/CategoryDescriptor";
import { categoryDescriptorMap } from "./descriptors/categoryDescriptorMap";
const contentVariants: Variants = {
  initial: { opacity: 0, y: 12 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: [0.16, 1, 0.3, 1], // ✅ easeOut
    },
  },
  exit: {
    opacity: 0,
    y: -12,
    transition: {
      duration: 0.25,
      ease: [0.4, 0, 1, 1], // ✅ easeIn
    },
  },
};


export default function Safaris() {
  return (
    <Routes>
      <Route index element={<SafariCategories />} />
      <Route path=":categoryId" element={<SafariCategory />} />
      <Route path=":categoryId/:safariId" element={<SafariDetailRoute />} />
    </Routes>
  );
}

function SafariCategories() {
  const navigate = useNavigate();
  const { categories, loading } = useSafarisTree(3);

  if (loading) return <div>Loading safaris...</div>;
  

  return (
    <div className="min-h-screen px-4 md:px-10 pb-20">
      <header className="py-10">
        <h1 className="text-3xl md:text-4xl uppercase tracking-wider font-light text-[#1A0A0B]">
          Tours & Safaris
        </h1>
        <p className="text-gray-600 mt-2 max-w-2xl">
          Explore our curated safari experiences across Rwanda and East Africa.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            category={category}
            onSelect={() => {
              window.scrollTo({ top: 0, behavior: "instant" });
              navigate(category.id);
            }}
          />
        ))}
      </div>
    </div>
  );
}

function SafariCategory() {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const { categories, loading } = useSafarisTree(3);
  const [categoryView, setCategoryView] = React.useState<"safaris" | "info">("safaris");
  // 🔹 Show loading while fetching
  if (loading) return <div>Loading...</div>;

  // 🔹 Find category safely
  const activeCategory = categories.find((c) => String(c.id) === String(categoryId));
  if (!activeCategory) return <div>Category not found</div>;
  const descriptorType = categoryDescriptorMap[String(activeCategory.id)];
  const hasDescriptor = !!descriptorType;


  return (
    <div className="min-h-screen px-4 md:px-10 pb-20">
      <button
        onClick={() => navigate("/destinations/rwanda/safaris")}
        className="mb-6 text-sm underline tracking-wide"
      >
        ← Back to Categories
      </button>

    {hasDescriptor && (
      <div className="flex gap-8 mb-10 border-b pb-3 text-sm uppercase tracking-wide">
        <button
          onClick={() => setCategoryView("safaris")}
          className={categoryView === "safaris" ? "border-b-2 border-black font-medium" : "text-gray-500 hover:text-black"}
        >
          Safaris
        </button>

        <button
          onClick={() => setCategoryView("info")}
          className={categoryView === "info" ? "border-b-2 border-black font-medium" : "text-gray-500 hover:text-black"}
        >
          More Info
        </button>
      </div>
    )}

      <AnimatePresence mode="wait">
        {categoryView === "info" && descriptorType && (
          <motion.div
            key="info"
            variants={contentVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <CategoryDescriptor type={descriptorType} />
          </motion.div>
        )}

        {categoryView === "safaris" && (
          <motion.div
            key="safaris"
            variants={contentVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="space-y-12"
          >
            {activeCategory.subcategories.map((sub) => (
              <section key={sub.id}>
                <h3 className="text-xl font-medium mb-4">{sub.title}</h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {sub.safaris.map((safari) => (
                    <SafariCard
                      key={safari.id}
                      safari={safari}
                      onClick={async () => {
                        window.scrollTo({ top: 0, behavior: "instant" });
                        await trackClick(safari.id);
                        navigate(safari.id);
                      }}
                    />
                  ))}
                </div>
              </section>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

async function trackClick(safariId: string, timeSpent: number = 0) {
  try {
    const res = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/trackers/track_click.php`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ safariId, timeSpent }),
      }
    );

    return await res.json();
  } catch (err) {
    console.error("Failed to track click:", err);
  }
}