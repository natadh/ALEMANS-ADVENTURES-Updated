import Layout from "../../../components/Layout";
import DestinationsHeader from "../../../components/DestinationsHeader/index";
import KenyaHero from "../../../components/destinations/KenyaHero";
import TravelInfo from "./TravelInfo"
import NationalParks from "./NationalParks/NationalParks";
import Safaris from "./Safaris/Safaris";

import { useState } from "react";

export default function Kenya() {
  const [activeSection, setActiveSection] = useState("National Parks");

  return (
    <Layout showHero={false}>
    <DestinationsHeader
        currentCountry="Kenya"
        onSectionChange={setActiveSection}
      />

      <KenyaHero />

      <div className=" mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-[#1A0A0B] mb-6 mx-auto max-w-5xl">
          Kenya — {activeSection}
        </h1>
        {/* add sections here */}
        {activeSection === "Travel Info" && <TravelInfo />}
        {activeSection === "National Parks" && <NationalParks/> } 
        {activeSection === "Tours and Safaris" && <Safaris />}

        
      </div>
    </Layout>
  );
}
