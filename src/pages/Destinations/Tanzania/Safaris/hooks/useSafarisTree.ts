import { useEffect, useState } from "react";
import type { Category, Safari } from "../types/safari";

const API = import.meta.env.VITE_API_BASE_URL;

export function useSafarisTree(countryId = 3) {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`${API}/client/getSafarisTree.php?country_id=${countryId}`);
        const json = await res.json();

        if (!json.success) throw new Error("Failed to fetch safaris tree");

        const treeWithFullImagePaths: Category[] = json.data.map((category: Category) => ({
          ...category,
          subcategories: category.subcategories.map(sub => ({
            ...sub,
            safaris: sub.safaris.map((safari: Safari) => ({
              ...safari,
              images: safari.images.map(img => ({
                ...img,
                src: img.src.startsWith("http")
                  ? img.src
                  : `${API}${img.src}` // prepend API base if not already absolute
              }))
            }))
          }))
        }));

        setCategories(treeWithFullImagePaths);
      } catch (err) {
        console.error("Failed loading safaris", err);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, [countryId]);

  return { categories, loading };
}