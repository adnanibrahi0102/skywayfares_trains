import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-6 w-full  ">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-6">
      
          <span className="text-2xl font-semibold text-gray-700">Skywayfares</span>

          {/* Navbar Links */}
          <a
            href="#"
            className="hover:text-sky-600 hover:underline hover:underline-offset-4"
          >
            BOOK
          </a>
          <a
            href="#"
            className="hover:text-sky-600 hover:underline hover:underline-offset-4"
          >
            TRAIN STATUS
          </a>
          <a
            href="#"
            className="hover:text-sky-600 hover:underline hover:underline-offset-4"
          >
            MY TRIP
          </a>
          <a
            href="#"
            className="hover:text-sky-600 hover:underline hover:underline-offset-4"
          >
            PLAN
          </a>
          <a
            href="#"
            className="hover:text-sky-600 hover:underline hover:underline-offset-4"
          >
            SCHEDULES
          </a>
          <a
            href="#"
            className="hover:text-sky-600 hover:underline hover:underline-offset-4"
          >
            DEALS
          </a>
        </div>

        {/* Right Aligned Links */}
        <div className="flex space-x-6 text-gray-700">
          <a
            href="#"
            className="hover:text-sky-600 hover:underline hover:underline-offset-4"
          >
            Guest Rewards
          </a>
          <a
            href="#"
            className="hover:text-sky-600 hover:underline hover:underline-offset-4"
          >
            English
          </a>
          <a
            href="#"
            className="hover:text-sky-600 hover:underline hover:underline-offset-4"
          >
            Need help?
          </a>
        </div>
      </div>
    </nav>

    
  );
};

export default Navbar;