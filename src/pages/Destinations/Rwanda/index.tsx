import Layout from "../../../components/Layout";
import { Routes, Route, Navigate } from "react-router-dom";
import DestinationsHeader from "../../../components/DestinationsHeader/index";
import Safaris from "./Safaris/Safaris";
import ScrollToTopFAB from "../../../components/ScrollToTopFAB";
import RwandaParks from "./NationalParks";
import RwandaTravelInfo from "./TravelInfo";


export default function Rwanda() {
  return (
    <Layout showHero={false}>
      <DestinationsHeader currentCountry="Rwanda" />

      <div className="mx-auto mt-16">
        <Routes>
          <Route index element={<Navigate to="safaris/" replace />} />
          <Route path="safaris/*" element={<Safaris />} />
          <Route path="national-parks" element={<RwandaParks/>}/>
          <Route path="travel-info" element={<RwandaTravelInfo />} />
        </Routes>
      </div>

      <ScrollToTopFAB />
    </Layout>
  );
}
