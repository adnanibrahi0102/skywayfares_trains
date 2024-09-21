import React from "react";
import { phoneNumber } from "../lib/number"; 

const NewBannerBanner = () => {
  return (
    <div
      className="bg-cover bg-center h-[500px] flex items-center justify-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1495313196544-7d1adf4e628f?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      {/* Main Transparent Glass Effect Section */}
      <div
        className="bg-green-600 bg-opacity-20 text-black py-12 px-8 rounded-xl shadow-lg max-w-2xl mx-auto"
        style={{
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
        }}
      >
        <h2 className="text-4xl font-bold mb-4 text-center text-white">
          Amtrak Tickets
        </h2>

        <p className="text-xl text-center text-white mt-2">
          Call Us Now And Avail Discounts, 24x7 Support, No Waiting Time.
        </p>

        <p className="text-xl text-center text-white mt-2">
          Book Train Tickets Over Phone
        </p>

        <p className="text-xl text-center text-white mt-2">
          No Extra Fees Over the Phone
        </p>

        <p className="text-xl text-center text-white mt-2">
          Book Amtrak Train Online
        </p>

        <p className="text-2xl text-center font-bold mt-5 mb-3 text-gray-900">
          Book Amtrak Ticket Over Phone
          <a
            href={`tel:${phoneNumber}`}
            className="text-gray-900 bg-white py-1 ml-2 px-1 rounded-lg mt-2"
          >
            {phoneNumber}
          </a>
        </p>
      </div>
    </div>
  );
};

export default NewBannerBanner;
