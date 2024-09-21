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
import CallToActionBanner from "../components/CallToAction";
import TopBanner from "../components/TopCallBanner";
import NewBannerBanner from "../components/NewBannerComp";
const Home = () => {
  return (
    <>
      <TopBanner />
      <MobileNavbar />
      <div className="hidden md:flex sticky top-0 z-40">
        <Navbar />
      </div>
      <MobileSearchBar />
      <div className="hidden md:flex">
        <TrainSearchForm />
      </div>
      <NewBannerBanner />
      <ImageCarousel />

      <InfoCards />
      <TripPlanningMap />
      <MobileTravelToolsDropdown />
      <Footer />
      <CallToActionBanner />
    </>
  );
};

export default Home;
