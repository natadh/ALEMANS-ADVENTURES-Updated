const API_BASE = import.meta.env.VITE_API_BASE_URL;

export const checkAuth = async () => {
  const res = await fetch(`${API_BASE}/auth/checkAuth.php`, {
    credentials: "include",
  });

  if (!res.ok) return false;

  const data = await res.json();
  return data.authenticated;
};
