import React from "react";
import ImageCarousel from "../components/Carasoul";
import InfoCards from "../components/Cards";
import Footer from "../components/Footer";
import MobileNavbar from "../components/MobileNav";
import MobileSearchBar from "../components/MobileTrainSearchForm";
import MobileTravelToolsDropdown from "../components/MobileTravelToolsDropdown";
import Navbar from "../components/Navbar";
import TrainSearchForm from "../components/TrainSearchForm";
import TripPlanningMap from "../components/TripPlanning";
const Home = () => {
  return (
    <>
      <MobileNavbar />
      <div className="hidden md:flex sticky top-0 z-40">
        <Navbar />
      </div>
      <MobileSearchBar />
      <div className="hidden md:flex">
        <TrainSearchForm />
      </div>

      <ImageCarousel />
      <InfoCards />
      <TripPlanningMap />
      <MobileTravelToolsDropdown />
      <Footer />
    </>
  );
};

export default Home;
