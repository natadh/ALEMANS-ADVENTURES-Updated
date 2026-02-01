import { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Fuse from "fuse.js";
import SafariCard from "./Destinations/kenya/Safaris/components/SafariCard";
import type { Safari } from "./Destinations/kenya/Safaris/types/safari";
import { SAFARI_SEARCH_INDEX } from "../components/DestinationsHeader/utils/searchSafariIndex";
import Layout from "../components/Layout";
import DestinationsHeader from "../components/DestinationsHeader";
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function SearchResults() {
  const query = useQuery().get("q") || "";
  const navigate = useNavigate();

  const fuse = useMemo(
    () =>
      new Fuse(SAFARI_SEARCH_INDEX, {
        keys: [
          "safari.title",
          "safari.description",
          "safari.destination",
          "safari.highlights",
        ],
        threshold: 0.35,
      }),
    []
  );

  const results = useMemo(() => {
    if (!query.trim()) return [];
    return fuse.search(query).map(r => r.item);
  }, [query, fuse]);

  return (
    <Layout showHero={false}>
    <DestinationsHeader />
    <div className="min-h-screen px-4 md:px-10 pb-20">
      <header className="py-20">
        <h1 className="text-3xl md:text-4xl font-light tracking-wide">
          Search Results
        </h1>
        <p className="text-gray-600 mt-2">
          {results.length} result{results.length !== 1 && "s"} found for "
          <span className="font-medium">{query}</span>"
        </p>
      </header>

      {results.length === 0 ? (
        <p className="text-gray-500">No safaris match your search.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {results.map(({ safari, country, categoryId }) => (
            <SafariCard
              key={`${country}-${safari.id}`}
              safari={safari as Safari}
              onClick={() => {
                navigate(
                  `/destinations/${country}/safaris/${categoryId}/${safari.id}`
                );
              }}
            />
          ))}
        </div>
      )}
    </div>
    </Layout>
  );
}
