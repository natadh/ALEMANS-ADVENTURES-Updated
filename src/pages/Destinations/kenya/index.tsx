import Layout from "../../../components/Layout";
import DestinationsHeader from "../../../components/DestinationsHeader";
import KenyaHero from "../../../components/destinations/kenya/KenyaHero";
import KenyaSections from "../../../components/destinations/kenya/KenyaSections";
import { useState } from "react";

export default function Kenya() {
  const [country, setCountry] = useState("Kenya");

  return (
    <Layout showHero={false}>
      <DestinationsHeader
        currentCountry={country}
        onCountryChange={(newCountry) => {
          // redirect to correct page if user switches
          window.location.href = `/destinations/${newCountry.toLowerCase().replace(" & ", "-")}`;
        }}
      />

      <KenyaHero />

      <main className="bg-white">
        <KenyaSections />
      </main>
    </Layout>
  );
}
