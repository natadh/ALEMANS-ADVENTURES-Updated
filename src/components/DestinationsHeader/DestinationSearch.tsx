import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import Fuse from "fuse.js";
import { ALL_SAFARIS } from "./utils/searchSafaris";

export default function DestinationSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const navigate = useNavigate();

  const fuse = useMemo(
    () =>
      new Fuse(ALL_SAFARIS, {
        keys: ["title", "destination", "description"],
        threshold: 0.35,
      }),
    []
  );

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const matches = fuse.search(query).slice(0, 6).map(r => r.item);
    setResults(matches);
  }, [query, fuse]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    setQuery("");
    setResults([]);
  };

  const getSafariUrl = (safari: any) =>
    `/destinations/${safari.country}/safaris/${safari.categoryId}/${safari.id}`;

  return (
    <div className="relative w-full md:w-72">
      <form
        onSubmit={handleSubmit}
        className="flex items-center bg-white border border-[#F5D547]/30 overflow-hidden focus-within:border-[#F5D547] transition"
      >
        <input
          type="text"
          placeholder="Search safaris, parks..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="bg-transparent text-sm text-[#120809] px-3 py-2 w-full focus:outline-none placeholder:text-[#120809]/40"
        />
        <button
          type="submit"
          className="px-3 text-[#120809] hover:text-[#F5D547] transition"
        >
          <FiSearch size={16} />
        </button>
      </form>

      {/* 🔽 LIVE RESULTS DROPDOWN */}
      {results.length > 0 && (
        <div className="absolute top-full mt-2 w-full bg-white border border-[#F5D547]/20 shadow-lg z-50 overflow-hidden">
          {results.map((safari) => (
            <button
              key={safari.id}
              onClick={() => {
                navigate(getSafariUrl(safari));
                setQuery("");
                setResults([]);
              }}
              className="w-full text-left px-4 py-3 hover:bg-[#F5D547]/10 transition"
            >
              <div className="text-sm text-[#120809]">{safari.title}</div>
              <div className="text-xs text-[#F5D547]/60">
                {safari.destination} • {safari.country.toUpperCase()}
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
