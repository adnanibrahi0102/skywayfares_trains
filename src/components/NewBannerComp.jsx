import React from "react";
import { FaPhoneAlt, FaCheckCircle } from "react-icons/fa"; 
import { phoneNumber } from "../lib/number";

const NewBannerBanner = () => {
  return (
    <div
      className="bg-cover bg-center h-[500px] flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1495313196544-7d1adf4e628f?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      {/* Main Transparent Glass Effect Section */}
      <div
        className="bg-green-600 bg-opacity-20 text-black py-8 px-8 sm:py-12 sm:px-10 rounded-xl shadow-lg max-w-4xl mx-auto"
        style={{
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        }}
      >
        <h2 className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-6 text-center text-white">
          Amtrak Tickets
        </h2>

      
        <div className="space-y-3 sm:space-y-4 text-white">
          <div className="flex items-center justify-center text-center sm:text-left">
            <FaCheckCircle className="text-green-400 mr-2 sm:mr-3" />
            <p className="text-base sm:text-xl">
              Call Us Now And Avail Discounts, <br /> 24x7 Support, No Waiting Time.
            </p>
          </div>

          <div className="flex items-center justify-center text-center sm:text-left">
            <FaCheckCircle className="text-green-400 mr-2 sm:mr-3" />
            <p className="text-base sm:text-xl">Book Train Tickets Over Phone</p>
          </div>

          <div className="flex items-center justify-center text-center sm:text-left">
            <FaCheckCircle className="text-green-400 mr-2 sm:mr-3" />
            <p className="text-base sm:text-xl">No Extra Fees Over the Phone</p>
          </div>

          <div className="flex items-center justify-center text-center sm:text-left">
            <FaCheckCircle className="text-green-400 mr-2 sm:mr-3" />
            <p className="text-base sm:text-xl">Book Amtrak Train Online</p>
          </div>
        </div>

        {/* Phone Call to Action */}
        <div className="flex flex-col items-center mt-6 sm:mt-8">
          <p className="text-lg sm:text-2xl text-center font-bold text-gray-900 mb-3">
            Book Amtrak Ticket Over Phone
          </p>
          <a
            href={`tel:${phoneNumber}`}
            className="text-gray-900 font-bold bg-[#1b7e62] py-2 px-4 flex items-center rounded-lg shadow-md hover:bg-[#0f3a2e] transition-colors hover:text-gray-200"
          >
            <FaPhoneAlt className="mr-2" />
            {phoneNumber}
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewBannerBanner;
