import Layout from "../../../components/Layout";
import DestinationsHeader from "../../../components/DestinationsHeader/index";
import TravelInfo from "./TravelInfo"
import { Routes, Route, Navigate } from "react-router-dom";
import Safaris from "./Safaris/Safaris";
import ScrollToTopFAB from "../../../components/ScrollToTopFAB";
import NationalParks from "./NationalParks";
import TanzaniaWaterSports from "./Rafting";
import TanzaniaTribesSafari from "./Culture";
import AirAndBalloonSafaris from "./Air";
export default function Tanzania() {
  

  return (
    <Layout showHero={false}>
      <DestinationsHeader currentCountry="Tanzania" />

      <div className="mx-auto mt-16">
        <Routes>
          <Route index element={<Navigate to="safaris/" replace />} />
          <Route path="travel-info" element={<TravelInfo />} />
          <Route path="safaris/*" element={<Safaris />} />
          <Route path="national-parks" element={<NationalParks/>}/>
          <Route path="rafting" element={<TanzaniaWaterSports />} />
          <Route path="culture" element={<TanzaniaTribesSafari />} />
          <Route path="air-safaris" element={<AirAndBalloonSafaris />} />
        </Routes>
      </div>

      <ScrollToTopFAB />
    </Layout>
  );
}
