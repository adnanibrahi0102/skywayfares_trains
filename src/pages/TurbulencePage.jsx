import React, { useEffect } from "react";
import { phoneNumber } from "../lib/number";
import { useNavigate } from "react-router-dom";
const TurbulencePage = () => {
  // Scroll to top when navigating to this page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
const navigate = useNavigate()
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-[#17455c] via-[#1e5b6e] via-[#267f99] to-[#3b8191] text-gray-950">
      <div className="bg-white bg-opacity-30 p-10 rounded-xl shadow-2xl backdrop-blur-md text-center max-w-md">
        <h1 className="text-4xl font-extrabold mb-6 text-shadow animate-pulse">
          Digital Turbulence!
        </h1>
        <p className="text-lg font-medium mb-8">
          Our phone lines are clear skies. Call us for quick help with your
          Train search and the latest airline deals.
        </p>
        <a
          href={`tel:${phoneNumber.replace(/[^0-9]/g, "")}`}
          className="inline-flex items-center justify-center px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition duration-300 ease-in-out transform hover:-translate-y-1 animate-bounce"
        >
          {phoneNumber}
        </a>
        <button
          onClick={() =>navigate("/")}
          className="mt-8 px-8 py-3 bg-purple-900 hover:bg-purple-700 text-white rounded-md shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1"
        >
          Back to Search
        </button>
      </div>
    </div>
  );
};

export default TurbulencePage;
