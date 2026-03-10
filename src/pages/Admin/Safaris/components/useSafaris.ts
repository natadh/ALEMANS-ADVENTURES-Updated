import { useEffect, useState } from "react";

export interface Safari {
  id: string;
  slug: string;
  title: string;
  destination: string;
  description: string;
  duration_label: string;
  currency: string;
  price_from: number;
  price_note: string;
  subcategory_id: number;
  country_id: number;
}

export interface Subcategory {
  id: number;
  title: string;
}

export function useSafaris(countryId: number | null) {
  const [safaris, setSafaris] = useState<Safari[]>([]);
  const [subcategories, setSubcategories] = useState<Subcategory[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_BASE = import.meta.env.VITE_API_BASE_URL;

  const fetchSubcategories = async () => {
    if (!countryId) return;
    try {
      const res = await fetch(`${API_BASE}/safaris/getSubcategories.php?country_id=${countryId}`);
      const data = await res.json();
      setSubcategories(data.data || []);
    } catch {
      setError("Failed to load subcategories");
    }
  };

  const fetchSafaris = async () => {
    if (!countryId) return;
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/safaris/getSafaris.php?country_id=${countryId}`);
      const data = await res.json();
      setSafaris(data.data || []);
    } catch {
      setError("Failed to load safaris");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubcategories();
    fetchSafaris();
  }, [countryId]);

  return { safaris, subcategories, loading, error, fetchSafaris, setError };
}