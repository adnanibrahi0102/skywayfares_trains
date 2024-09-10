
import React from "react";

const TripPlanningMap = () => {
  return (
    <div className="hidden md:flex flex-col md:flex-row items-center justify-between p-6 bg-gray-100 rounded-lg shadow-lg">
      {/* Text Content */}
      <div className="md:w-1/2 mb-6 md:mb-0 text-center md:text-left">
        <h2 className="text-3xl font-mono mb-4 md:ml-5">Trip Planning Map</h2>
        <p className="text-lg font-bold mb-4 text-[#17455c] md:ml-5">
          Discover more of America with our trip planning map.
        </p>
        <p className="text-base text-gray-600 mb-6 font-thin md:ml-5">
          See our routes and stations on a map, find trip options between
          stations, and book your next trip.
        </p>
        <button className="md:ml-5 px-8 py-2 bg-[#1a5d7e] text-white font-semibold hover:bg-[#1d6488] transition duration-300">
          Start Planning
        </button>
      </div>

      {/* GIF Image */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src="/globe.gif" 
          alt="Trip Planning Map"
          className="max-w-full max-h-[400px] object-cover"
        />
      </div>
    </div>
  );
};

export default TripPlanningMap;
