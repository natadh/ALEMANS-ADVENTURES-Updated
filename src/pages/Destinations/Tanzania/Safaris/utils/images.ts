import type { Category } from "../types/safari";

export function collectCategoryImages(category: Category): string[] {
  return category.subcategories
    .flatMap(sub =>
      sub.safaris.flatMap(s =>
        s.images?.map(img => img.src) ?? []
      )
    )
    .filter(Boolean);
}
