import { useNavigate, useParams } from "react-router-dom";
import safarisInfo from "./safarisinfo.json";
import SafariDetail from "./SafariDetail";
import type { Category, Safari } from "./types/safari";
import React from "react";

export function SafariDetailRoute() {
  const { categoryId, safariId } = useParams();
  const navigate = useNavigate();

  const categories = safarisInfo.categories as Category[];
  const activeCategory = categories.find((c) => c.id === categoryId);

  let activeSafari: Safari | undefined;
  if (activeCategory) {
    for (const sub of activeCategory.subcategories) {
      activeSafari = sub.safaris.find((s) => s.id === safariId);
      if (activeSafari) break;
    }
  }

  /* ================= ENGAGEMENT TIMER ================= */
  React.useEffect(() => {
    if (!safariId) return; // guard INSIDE hook, not outside

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

  // returns AFTER hooks
  if (!activeCategory) return <div>Category not found</div>;
  if (!activeSafari) return <div>Safari not found</div>;

  return (
    <SafariDetail
      safari={activeSafari}
      onBack={() => navigate(-1)}
    />
  );
}

function trackEngagement(safariId: string, timeSpent: number) {
  const url = `${import.meta.env.VITE_API_BASE_URL}/trackers/track-engagement.php`;

  const payload = JSON.stringify({
    safariId,
    timeSpent,
  });

  // sendBeacon = BEST for analytics (works on tab close)
  if (navigator.sendBeacon) {
    navigator.sendBeacon(url, payload);
    return;
  }

  // fallback
  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: payload,
    keepalive: true,
  }).catch(() => {});
}