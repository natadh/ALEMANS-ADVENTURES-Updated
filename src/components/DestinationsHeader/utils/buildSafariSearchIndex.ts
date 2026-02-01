import type { Safari } from "../../../pages/Destinations/kenya/Safaris/types/safari";

export interface IndexedSafari {
  safari: Safari;
  country: string;
  categoryId: string;
}

export function buildSafariIndex(data: any, country: string): IndexedSafari[] {
  const results: IndexedSafari[] = [];

  data.categories?.forEach((cat: any) => {
    const topCategoryId = cat.id;

    cat.subcategories?.forEach((sub: any) => {
      sub.safaris?.forEach((safari: Safari) => {
        results.push({
          safari,
          country,
          categoryId: topCategoryId,
        });
      });
    });
  });

  return results;
}
