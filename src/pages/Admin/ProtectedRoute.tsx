import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { checkAuth } from "./CheckAuth";

interface ProtectedRouteProps {
  children: ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const [authorized, setAuthorized] = useState<boolean | null>(null);

  useEffect(() => {
    checkAuth().then(setAuthorized);
  }, []);

  // 🔥 Styled Loading State
  if (authorized === null) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Gold Accent Line */}
          <div className="w-12 h-px bg-[#F5D547] mx-auto mb-8"></div>

          {/* Title */}
          <h2 className="text-sm uppercase tracking-[0.3em] text-[#1A0A0B] font-light mb-6">
            Verifying Access
          </h2>

          {/* Animated Loader Bar */}
          <div className="relative w-40 h-px bg-gray-200 overflow-hidden mx-auto">
            <motion.div
              className="absolute top-0 left-0 h-full bg-[#1A0A0B]"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                repeat: Infinity,
                duration: 1.2,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      </div>
    );
  }

  if (!authorized) return <Navigate to="/admin/login" />;

  return <>{children}</>;
}