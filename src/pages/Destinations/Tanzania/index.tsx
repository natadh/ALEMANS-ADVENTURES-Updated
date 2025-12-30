import Layout from "../../../components/Layout";
import DestinationsHeader from "../../../components/DestinationsHeader/index";
import TravelInfo from "./TravelInfo"
import { Routes, Route } from "react-router-dom";
//import TzSections from "../../../components/destinations/Tz/TzSections";

import ScrollToTopFAB from "../../../components/ScrollToTopFAB";
export default function Tanzania() {
  

  return (
    <Layout showHero={false}>
      <DestinationsHeader currentCountry="Tanzania" />

      <div className="mx-auto mt-16">
        <Routes>
          <Route path="travel-info" element={<TravelInfo />} />
        </Routes>
      </div>

      <ScrollToTopFAB />
    </Layout>
  );
}
