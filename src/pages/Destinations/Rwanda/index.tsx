import Layout from "../../../components/Layout";
import DestinationsHeader from "../../../components/DestinationsHeader/index";
// import TravelInfo from "./TravelInfo"
import { Routes, Route } from "react-router-dom";
import Safaris from "./Safaris/Safaris";
import ScrollToTopFAB from "../../../components/ScrollToTopFAB";




export default function Rwanda() {
  return (
    <Layout showHero={false}>
      <DestinationsHeader currentCountry="Rwanda" />

      <div className="mx-auto mt-16">
        <Routes>
          {/* <Route path="travel-info" element={<TravelInfo />} /> */}
          <Route path="safaris/*" element={<Safaris />} />
        </Routes>
      </div>

      <ScrollToTopFAB />
    </Layout>
  );
}
