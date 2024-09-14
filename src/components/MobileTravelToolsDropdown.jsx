import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { phoneNumber } from "../lib/number";
const MobileTravelToolsDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sm:block md:hidden ">
      {/* Dropdown Toggle */}
      <button
        className="w-full text-left bg-[#1c7c61]  text-white px-4 py-3 flex items-center justify-between rounded-t-lg shadow-md focus:outline-none"
        onClick={toggleDropdown}
      >
        <span className="font-semibold text-lg">Travel Tools</span>
        {isOpen ? (
          <FaChevronUp className="ml-2" />
        ) : (
          <FaChevronDown className="ml-2" />
        )}
      </button>

      {/* Dropdown Content */}
      {isOpen && (
        <div className="bg-gray-50 p-6 space-y-6 rounded-b-lg shadow-lg border-t border-gray-200">
          {/* Trip Planning Map */}
          <div className="text-center">
            <h3 className="font-bold text-xl mb-2 text-[#17455c]">
              Trip Planning Map
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Discover more of America with our trip planning map. See our
              routes and stations on a map, find trip options between stations,
              and book your next trip.
            </p>
            <a
              href={`tel:${phoneNumber.replace(/[^0-9]/g, "")}`}
              className="px-6 py-2 bg-[#104e3c]  text-white rounded-full font-semibold hover:bg-[#17455c] transition duration-300"
            >
              Start Planning
            </a>
          </div>

          {/* Track Your Train */}
          <div className="text-center">
            <h3 className="font-bold text-xl mb-2 text-[#17455c]">
              Track Your Train
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Check train status and track your train's location.
            </p>
            <a
              href={`tel:${phoneNumber.replace(/[^0-9]/g, "")}`}
              className="px-6 py-2 bg-[#104e3c]  text-white rounded-full font-semibold hover:bg-[#17455c] transition duration-300"
            >
              Track Now
            </a>
          </div>

          {/* Make Travel Easier */}
          <div className="text-center">
            <h3 className="font-bold text-xl mb-2 text-[#17455c]">
              Make Travel a Little Easier
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Download the Amtrak app to check train status, get gate and track
              information at select stations, travel with contact-free eTicket
              scanning, and access helpful information at your fingertips.
            </p>
            <button className="px-6 py-2 bg-[#104e3c]  text-white rounded-full font-semibold hover:bg-[#17455c] transition duration-300">
              Learn More
            </button>
          </div>

          {/* Accessible Travel Services */}
          <div className="text-center">
            <h3 className="font-bold text-xl mb-2 text-[#17455c]">
              Accessible Travel Services
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Our goal is to provide safe, efficient, and comfortable service.
              We are pleased to provide additional services to passengers with
              disabilities and have worked to make our facilities more
              accessible to passengers with disabilities.
            </p>
            <button className="px-6 py-2 bg-[#104e3c]  text-white rounded-full font-semibold hover:bg-[#17455c] transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileTravelToolsDropdown;
