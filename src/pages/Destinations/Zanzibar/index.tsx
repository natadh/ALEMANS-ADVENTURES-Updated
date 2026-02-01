import Layout from "../../../components/Layout";
import DestinationsHeader from "../../../components/DestinationsHeader/index";
import TravelInfo from "./TravelInfo"
import { Routes, Route, Navigate } from "react-router-dom";
import Safaris from "./Safaris/Safaris";
import ScrollToTopFAB from "../../../components/ScrollToTopFAB";
import ZanzibarPage from "./ZanzibarPage";
export default function Zanzibar() {
  

  return (
    <Layout showHero={false}>
      <DestinationsHeader currentCountry="Zanzibar" />

      <div className="mx-auto mt-16">
        <Routes>
            <Route index element={<Navigate to="safaris/" replace />} />
            <Route path="travel-info" element={<TravelInfo />} />
            <Route path="safaris/*" element={<Safaris />} />
            <Route path="overview" element={<ZanzibarPage />} />
        </Routes>
      </div>

      <ScrollToTopFAB />
    </Layout>
  );
}
