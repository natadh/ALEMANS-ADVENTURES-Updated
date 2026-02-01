export interface SearchableSafari {
  id: string;
  slug: string;
  title: string;
  description: string;
  destination: string;
  country: string;
  categoryId: string;
}

export function flattenSafaris(data: any, country: string): SearchableSafari[] {
  const results: SearchableSafari[] = [];

  data.categories?.forEach((cat: any) => {
    const topCategoryId = cat.id; // ✅ THIS matches your route structure

    cat.subcategories?.forEach((sub: any) => {
      sub.safaris?.forEach((safari: any) => {
        results.push({
          id: safari.id,
          slug: safari.slug,
          title: safari.title,
          description: safari.description,
          destination: safari.destination,
          country,
          categoryId: topCategoryId, // ✅ FIXED
        });
      });
    });
  });

  return results;
}
