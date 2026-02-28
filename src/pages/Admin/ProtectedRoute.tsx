import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { checkAuth } from "./CheckAuth";

export default function ProtectedRoute({ children }) {
  const [authorized, setAuthorized] = useState(null);

  useEffect(() => {
    checkAuth().then(setAuthorized);
  }, []);

  if (authorized === null) return <div>Loading...</div>;

  if (!authorized) return <Navigate to="/admin/login" />;

  return children;
}
