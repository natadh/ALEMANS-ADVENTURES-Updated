export async function trackClick(safariId: string, timeSpent: number = 0) {
  try {
    const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/trackers/track_click.php`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ safariId, timeSpent }),
    });

    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Failed to track click:", err);
  }
}