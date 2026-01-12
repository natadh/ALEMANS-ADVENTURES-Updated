import type { Safari } from "../types/safari";

export function getSafariStartingPrice(
  safari: Safari
): { amount: number; currency: string } | null {
  
  // 1. Check for Simple Price structure (e.g. "price": { "amountFrom": ... })
  if (safari.price) {
    return {
      amount: safari.price.amountFrom,
      currency: safari.price.currency
    };
  }

  // 2. Check for Complex Price structure (e.g. "prices": { "lowSeason": ... })
  if (safari.prices) {
    const collectedPrices: number[] = [];
    const { lowSeason, peakSeason } = safari.prices;

    // Helper to push values from a season map into our array
    const collectFromSeason = (seasonMap?: Record<string, number>) => {
      if (!seasonMap) return;
      Object.values(seasonMap).forEach((val) => {
        if (typeof val === "number") collectedPrices.push(val);
      });
    };

    collectFromSeason(lowSeason);
    collectFromSeason(peakSeason);

    if (collectedPrices.length === 0) return null;

    return {
      amount: Math.min(...collectedPrices),
      // The complex object in your new type doesn't store currency explicitly, 
      // so we default to USD as per standard safari pricing.
      currency: "USD" 
    };
  }

  // 3. Fallback if neither exists (e.g., pricing on request)
  return null;
}