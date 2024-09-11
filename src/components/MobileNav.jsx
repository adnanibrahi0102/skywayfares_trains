import React, { useState } from "react";
import { FaBars, FaUser, FaSearch } from "react-icons/fa";
import { phoneNumber } from "../lib/number";
const MobileNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="md:hidden sticky top-0 z-40">
      {/* Top Bar with Logo and Icons */}
      <div className="bg-white shadow-md">
        <nav className=" py-4 px-6 flex items-center justify-between">
          {/* Logo */}
          <span className="text-2xl font-semibold text-gray-700">
            Skywayfares
          </span>

          {/* Right Aligned Icons */}
          <div className="flex items-center space-x-4 text-gray-700">
            <FaSearch className="hover:text-sky-600 cursor-pointer" />
            <FaUser className="hover:text-sky-600 cursor-pointer" />

            {/* Hamburger Icon */}
            <FaBars
              className="hover:text-sky-600 cursor-pointer"
              onClick={toggleMobileMenu}
            />
          </div>
        </nav>
        <div className="flex justify-center gap-4">
          <a
            href={`tel:${phoneNumber.replace(/[^0-9]/g, "")}`}
            className="text-xl text-gray-700 hover:text-sky-600 hover:underline hover:underline-offset-4"
          >
            BOOK
          </a>
          <a
            href="#"
            className="text-xl text-gray-700 hover:text-sky-600 hover:underline hover:underline-offset-4"
          >
            TRAIN STATUS
          </a>
          <a
            href="#"
            className="text-xl text-gray-700 hover:text-sky-600 hover:underline hover:underline-offset-4"
          >
            MY TRIP
          </a>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white bg-opacity-95 z-50 h-screen flex flex-col items-center justify-center space-y-6">
          <a
            href="#"
            className="text-xl text-gray-700 hover:text-sky-600 hover:underline hover:underline-offset-4"
          >
            BOOK
          </a>
          <a
            href="#"
            className="text-xl text-gray-700 hover:text-sky-600 hover:underline hover:underline-offset-4"
          >
            TRAIN STATUS
          </a>
          <a
            href="#"
            className="text-xl text-gray-700 hover:text-sky-600 hover:underline hover:underline-offset-4"
          >
            MY TRIP
          </a>
          <a
            href="#"
            className="text-xl text-gray-700 hover:text-sky-600 hover:underline hover:underline-offset-4"
          >
            PLAN
          </a>
          <a
            href="#"
            className="text-xl text-gray-700 hover:text-sky-600 hover:underline hover:underline-offset-4"
          >
            SCHEDULES
          </a>
          <a
            href="#"
            className="text-xl text-gray-700 hover:text-sky-600 hover:underline hover:underline-offset-4"
          >
            DEALS
          </a>
          <a
            href="#"
            className="text-xl text-gray-700 hover:text-sky-600 hover:underline hover:underline-offset-4"
          >
            Guest Rewards
          </a>
          <a
            href="#"
            className="text-xl text-gray-700 hover:text-sky-600 hover:underline hover:underline-offset-4"
          >
            English
          </a>
          <a
            href="#"
            className="text-xl text-gray-700 hover:text-sky-600 hover:underline hover:underline-offset-4"
          >
            Need help?
          </a>

          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-gray-700 hover:text-sky-600 text-2xl"
            onClick={toggleMobileMenu}
          >
            &times;
          </button>
        </div>
      )}
    </div>
  );
};

export default MobileNavbar;
