import { useEffect, useState } from "react";

export interface JournalEntry {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  destination: string;
  date: string;
  imageUrl: string;
  author: string;
  readTime: string;
}

export function useJournals(API_BASE: string) {
  const [journals, setJournals] = useState<JournalEntry[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchJournals = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await fetch(`${API_BASE}/journals/getJournals.php`, {
        credentials: "include",
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Failed");

      // Prepend API_BASE to imageUrl if it starts with a slash
      const journalsWithFullUrl = (data.journals || []).map((j: JournalEntry) => {
        let fullImageUrl = j.imageUrl;
        if (j.imageUrl && j.imageUrl.startsWith("/")) {
          fullImageUrl = `${API_BASE}${j.imageUrl}`;
        }
        return { ...j, imageUrl: fullImageUrl };
      });

      setJournals(journalsWithFullUrl);
    } catch {
      setError("Failed to load journals");
    } finally {
      setLoading(false);
    }
  };

  const deleteJournal = async (id: number) => {
    await fetch(`${API_BASE}/journals/deleteJournal.php`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
      credentials: "include",
    });

    fetchJournals();
  };

  useEffect(() => {
    fetchJournals();
  }, []);

  return {
    journals,
    loading,
    error,
    setError,
    fetchJournals,
    deleteJournal,
  };
}