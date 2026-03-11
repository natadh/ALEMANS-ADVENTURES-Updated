import { useNavigate, useParams } from "react-router-dom";
import React from "react";
import { useSafarisTree } from "./hooks/useSafarisTree";
import SafariDetail from "./SafariDetail";
import type { Safari } from "./types/safari";

export function SafariDetailRoute() {
  const { categoryId, safariId } = useParams();
  const navigate = useNavigate();
  const { categories, loading } = useSafarisTree(5); // fetch from API

  const [activeSafari, setActiveSafari] = React.useState<Safari | null>(null);

  // 🔹 Wait for categories to load, then find the safari
  React.useEffect(() => {
    if (loading) return;

    let foundSafari: Safari | undefined;
    for (const c of categories) {
      // if categoryId param exists, filter by it; otherwise search all
      if (categoryId && String(c.id) !== String(categoryId)) continue;

      for (const sub of c.subcategories) {
        foundSafari = sub.safaris.find((s) => String(s.id) === String(safariId));
        if (foundSafari) break;
      }
      if (foundSafari) break;
    }

    setActiveSafari(foundSafari ?? null);
  }, [categories, categoryId, safariId, loading]);

  /* ================= ENGAGEMENT TIMER ================= */
  React.useEffect(() => {
    if (!safariId) return;

    const startTime = Date.now();

    const sendTime = () => {
      const seconds = Math.floor((Date.now() - startTime) / 1000);

      if (seconds > 2) {
        trackEngagement(safariId, seconds);
      }
    };

    window.addEventListener("beforeunload", sendTime);

    return () => {
      sendTime();
      window.removeEventListener("beforeunload", sendTime);
    };
  }, [safariId]);
  /* =================================================== */

  if (loading) return <div>Loading safari...</div>;
  if (!activeSafari) return <div>Safari not found</div>;

  return <SafariDetail safari={activeSafari} onBack={() => navigate(-1)} />;
}

function trackEngagement(safariId: string, timeSpent: number) {
  const url = `${import.meta.env.VITE_API_BASE_URL}/trackers/track-engagement.php`;

  const payload = JSON.stringify({ safariId, timeSpent });

  if (navigator.sendBeacon) {
    navigator.sendBeacon(url, payload);
    return;
  }

  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: payload,
    keepalive: true,
  }).catch(() => {});
}