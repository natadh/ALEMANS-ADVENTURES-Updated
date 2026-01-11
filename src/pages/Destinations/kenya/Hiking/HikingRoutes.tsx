import { Routes, Route } from "react-router-dom";
import HikingSafaris from "./HikingSafaris";
import HikingDetail from "./HikingDetail";

export default function HikingRoutes() {
  return (
    <Routes>
      <Route index element={<HikingSafaris />} />
      <Route path=":code" element={<HikingDetail />} />
    </Routes>
  );
}
