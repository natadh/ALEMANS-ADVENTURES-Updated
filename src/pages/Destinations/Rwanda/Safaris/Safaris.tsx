import { Routes, Route, useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import safarisInfo from "./safarisinfo.json";
import CategoryCard from "./components/CategoryCard";
import SafariCard from "./components/SafariCard";
import SafariDetail from "./SafariDetail";
import CategoryDescriptor from "./descriptors/CategoryDescriptor";
import type { Category, Safari } from "./types/safari";
import React from "react";
import type { Variants } from "framer-motion";

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
  const categories = safarisInfo.categories as Category[];
  const navigate = useNavigate();

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

  const categories = safarisInfo.categories as Category[];
  const activeCategory = categories.find((c) => c.id === categoryId);
  const [categoryView, setCategoryView] = React.useState<"safaris" | "info">("safaris");

  if (!activeCategory) return <div>Category not found</div>;

  return (
    <div className="min-h-screen px-4 md:px-10 pb-20">
      <button
        onClick={() => navigate("/destinations/rwanda/safaris")}
        className="mb-6 text-sm underline tracking-wide"
      >
        ← Back to Categories
      </button>

      {activeCategory.descriptor && (
        <div className="flex gap-8 mb-10 border-b pb-3 text-sm uppercase tracking-wide">
          <button
            onClick={() => setCategoryView("safaris")}
            className={
              categoryView === "safaris"
                ? "border-b-2 border-black font-medium"
                : "text-gray-500 hover:text-black"
            }
          >
            Safaris
          </button>

          <button
            onClick={() => setCategoryView("info")}
            className={
              categoryView === "info"
                ? "border-b-2 border-black font-medium"
                : "text-gray-500 hover:text-black"
            }
          >
            More Info
          </button>
        </div>
      )}

      <AnimatePresence mode="wait">
        {categoryView === "info" && activeCategory.descriptor && (
          <motion.div
            key="info"
            variants={contentVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <CategoryDescriptor type={activeCategory.descriptor.type} />
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
                      onClick={() => {
                        window.scrollTo({ top: 0, behavior: "instant" });
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

function SafariDetailRoute() {
  const { categoryId, safariId } = useParams();
  const navigate = useNavigate();

  const categories = safarisInfo.categories as Category[];
  const activeCategory = categories.find((c) => c.id === categoryId);

  if (!activeCategory) return <div>Category not found</div>;

  let activeSafari: Safari | undefined;
  for (const sub of activeCategory.subcategories) {
    activeSafari = sub.safaris.find((s) => s.id === safariId);
    if (activeSafari) break;
  }

  if (!activeSafari) return <div>Safari not found</div>;

  return (
    <SafariDetail
      safari={activeSafari}
      onBack={() => navigate(-1)}
    />
  );
}
