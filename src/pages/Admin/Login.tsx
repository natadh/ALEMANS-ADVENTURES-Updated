import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const API_BASE = import.meta.env.VITE_API_BASE_URL;

  const handleLogin = async (e: any) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const res = await fetch(`${API_BASE}/auth/login.php`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Login failed");

      navigate("/admin");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        {/* Gold Accent Line */}
        <div className="w-12 h-px bg-[#F5D547] mb-8"></div>

        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-light uppercase tracking-[0.2em] text-[#1A0A0B] mb-10">
          Admin Access
        </h1>

        <form onSubmit={handleLogin} className="space-y-8">
          {/* Username */}
          <div>
            <label className="block text-xs uppercase tracking-[0.25em] text-[#1A0A0B] mb-3">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full border-b border-gray-300 focus:border-[#1A0A0B] outline-none py-2 bg-transparent transition-colors duration-300"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-xs uppercase tracking-[0.25em] text-[#1A0A0B] mb-3">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full border-b border-gray-300 focus:border-[#1A0A0B] outline-none py-2 bg-transparent transition-colors duration-300"
            />
          </div>

          {/* Error */}
          {error && (
            <p className="text-sm text-red-500 font-light">
              {error}
            </p>
          )}

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="border border-[#1A0A0B] text-[#1A0A0B] text-xs uppercase tracking-[0.3em] px-8 py-3 font-light hover:bg-[#1A0A0B] hover:text-white transition-colors duration-300 disabled:opacity-40"
          >
            {loading ? "Verifying..." : "Login"}
          </button>
        </form>
      </motion.div>
    </div>
  );
}