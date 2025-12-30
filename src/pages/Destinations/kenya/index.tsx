import Layout from "../../../components/Layout";
import DestinationsHeader from "../../../components/DestinationsHeader/index";
import WaterSports from "./WaterSports/WaterSports";
import TravelInfo from "./TravelInfo"
import NationalParks from "./NationalParks/NationalParks";
import Safaris from "./Safaris/Safaris";
import ScrollToTopFAB from "../../../components/ScrollToTopFAB";


import { Routes, Route, Navigate } from "react-router-dom";

export default function Kenya() {
  return (
    <Layout showHero={false}>
      <DestinationsHeader currentCountry="Kenya" />

      <div className="mx-auto mt-16">
        <Routes>
          <Route index element={<Navigate to="safaris/" replace />} />
          <Route path="water-sports" element={<WaterSports/>}/>
          <Route path="national-parks" element={<NationalParks />} />
          <Route path="travel-info" element={<TravelInfo />} />
          <Route path="safaris/*" element={<Safaris />} />
        </Routes>
      </div>

      <ScrollToTopFAB />
    </Layout>
  );
}
