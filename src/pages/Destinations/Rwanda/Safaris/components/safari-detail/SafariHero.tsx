import type { Safari } from "../../types/safari";

export default function SafariHero({ safari }: { safari: Safari }) {
  const heroImage = safari.images?.[0]?.src ?? "/images/placeholder.jpg";

  // Helper logic moved here to keep main component clean
  const getLowestPrice = (s: Safari) => {
    if (s.price?.amountFrom) return s.price.amountFrom;
    
    if (s.prices) {
      const allPrices: number[] = [];
      if (s.prices.lowSeason) {
        Object.values(s.prices.lowSeason).forEach(p => {
             if(typeof p === 'number') allPrices.push(p);
        });
      }
      if (s.prices.peakSeason) {
        Object.values(s.prices.peakSeason).forEach(p => {
             if(typeof p === 'number') allPrices.push(p);
        });
      }
      return allPrices.length > 0 ? Math.min(...allPrices) : null;
    }
    return null;
  };

  const lowestPrice = getLowestPrice(safari);

  return (
    <div className="relative h-[50vh] md:h-[60vh]">
      <img
        src={heroImage}
        alt={safari.title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />
      
      <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 text-white">
        <div className="max-w-5xl mx-auto">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest uppercase bg-white/20 backdrop-blur-md rounded-full">
             {safari.destination || "Kenya"}
          </span>
          <h1 className="text-3xl md:text-5xl font-light uppercase tracking-wide mb-2">
            {safari.title}
          </h1>
          <p className="text-lg opacity-90">
            {safari.durationLabel}
            {lowestPrice && (
              <span className="font-semibold ml-2">
                  • From USD {lowestPrice}
              </span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}