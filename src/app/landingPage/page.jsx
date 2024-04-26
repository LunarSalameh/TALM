import React from "react";
import HomeSection from "./homeSection";
import Navbar from "../components/Navbar";
import OfferSection from "./offerSection";
import PlacesSection from "./placesSection";

function LandingPage() {
  return (
    <div className="w-full">
      <Navbar />
      <HomeSection />
      <OfferSection />
      <PlacesSection />
    </div>
  );
}

export default LandingPage;
