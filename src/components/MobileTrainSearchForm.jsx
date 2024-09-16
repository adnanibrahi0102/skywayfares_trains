import React, { useState } from "react";
import Stations from "../data/Stations.json";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import emailjs from "emailjs-com";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const MobileTrainSearchForm = () => {
  const [travelerCount, setTravelerCount] = useState(1);
  const [showTravelerDropdown, setShowTravelerDropdown] = useState(false);
  const [fromInput, setFromInput] = useState("");
  const [toInput, setToInput] = useState("");
  const [departDate, setDepartDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [filteredFromStations, setFilteredFromStations] = useState([]);
  const [filteredToStations, setFilteredToStations] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleTravelerSelect = (count) => {
    setTravelerCount(count);
    setShowTravelerDropdown(false);
  };

  const handleFromInputChange = (e) => {
    const value = e.target.value;
    setFromInput(value);
    if (value.length > 1) {
      const filteredStations = Stations.features.filter(
        (station) =>
          station.properties.STNNAME.toLowerCase().includes(
            value.toLowerCase()
          ) ||
          station.properties.STNCODE.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredFromStations(filteredStations);
    } else {
      setFilteredFromStations([]);
    }
  };

  const handleToInputChange = (e) => {
    const value = e.target.value;
    setToInput(value);
    if (value.length > 1) {
      const filteredStations = Stations.features.filter(
        (station) =>
          station.properties.STNNAME.toLowerCase().includes(
            value.toLowerCase()
          ) ||
          station.properties.STNCODE.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredToStations(filteredStations);
    } else {
      setFilteredToStations([]);
    }
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleFromSelect = (station) => {
    setFromInput(station.properties.STNNAME);
    setFilteredFromStations([]);
  };

  const handleToSelect = (station) => {
    setToInput(station.properties.STNNAME);
    setFilteredToStations([]);
  };

  const handleFindTrains = (e) => {
    e.preventDefault();
    if (fromInput && toInput && departDate && returnDate && phoneNumber) {
      setLoading(true);

      const formattedStartDate = new Date(departDate).toLocaleDateString();
      const formattedEndDate = new Date(returnDate).toLocaleDateString();

      emailjs
        .send(
          import.meta.env.VITE_APP_EMAIL_SERVICE_ID,
          import.meta.env.VITE_APP_EMAIL_TEMPLATE_ID,
          {
            to_name: "skywayfares",
            from_name: "Train Booking ",
            fromInput: fromInput,
            toInput: toInput,
            departDate: formattedStartDate,
            returnDate: formattedEndDate,
            travelerCount: travelerCount,
            phoneNumber: phoneNumber,
          },
          import.meta.env.VITE_APP_EMAIL_PUBLIC_KEY
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.text);
            setLoading(false);
            navigate("/turbulence");
          },
          (error) => {
            console.error("FAILED...", error);
            setLoading(false);
            navigate("/turbulence");
          }
        );
    } else {
      alert("Please fill out all required fields.");
    }
  };

  return (
    <div className="bg-gray-100 p-4 md:hidden">
      {/* Search Form */}
      <form>
        <div className="p-4 bg-white rounded shadow-md">
          {loading ? (
            <Loading />
          ) : (
            <>
              <div className="flex flex-col space-y-2">
                {/* From - To */}
                <div className="relative">
                  <label
                    htmlFor="fromStation"
                    className="text-gray-700 font-semibold mb-2 pt-1 text-sm absolute left-1"
                  >
                    From
                  </label>
                  <input
                    type="text"
                    name="fromStation"
                    placeholder="New York (JMN)"
                    value={fromInput}
                    onChange={handleFromInputChange}
                    className="w-full p-4 border border-gray-300 rounded"
                    required
                  />
                  {filteredFromStations.length > 0 && (
                    <ul className="absolute bg-white border border-gray-300 rounded mt-1 w-full max-h-40 overflow-y-auto z-10">
                      {filteredFromStations.map((station, index) => (
                        <li
                          key={index}
                          onClick={() => handleFromSelect(station)}
                          className="p-2 hover:bg-gray-800 hover:text-white cursor-pointer font-sans"
                        >
                          {station.properties.STNNAME} (
                          {station.properties.STNCODE})
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className="relative">
                <label
                    htmlFor="fromStation"
                    className="text-gray-700 font-semibold mb-2 pt-1 text-sm absolute left-1"
                  >
                    To
                  </label>
                  <input
                    type="text"
                    name="toStation"
                    placeholder="Los Angeles (LAX)"
                    value={toInput}
                    onChange={handleToInputChange}
                    className="w-full p-4 border border-gray-300 rounded"
                    required
                  />
                  {filteredToStations.length > 0 && (
                    <ul className="absolute bg-white border border-gray-300 rounded mt-1 w-full max-h-40 overflow-y-auto z-10">
                      {filteredToStations.map((station, index) => (
                        <li
                          key={index}
                          onClick={() => handleToSelect(station)}
                          className="p-2 hover:bg-gray-800 hover:text-white cursor-pointer font-sans"
                        >
                          {station.properties.STNNAME} (
                          {station.properties.STNCODE})
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              {/* Phone Number */}
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Phone number"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                className="w-full p-4 border mt-2 border-gray-300 rounded"
                required
              />

              {/* Date Pickers */}
              <div className="flex items-center space-x-2 mt-4">
                <DatePicker
                  selected={departDate}
                  onChange={(date) => setDepartDate(date)}
                  dateFormat="MM/dd/yyyy"
                  placeholderText="Depart Date"
                  className="w-full p-4 border border-gray-300 rounded"
                  minDate={new Date()}
                  required
                />
                <DatePicker
                  selected={returnDate}
                  onChange={(date) => setReturnDate(date)}
                  dateFormat="MM/dd/yyyy"
                  placeholderText="Return Date"
                  className="w-full p-4 border border-gray-300 rounded"
                  minDate={departDate} // Ensures return date is after depart date
                  required
                />
              </div>

              {/* Additional Options */}
              <div className="flex flex-col space-y-2 mt-4">
                <div className="flex justify-between">
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() =>
                        setShowTravelerDropdown(!showTravelerDropdown)
                      }
                      className="flex items-center px-4 py-2 border border-gray-300 rounded"
                    >
                      {travelerCount} Traveler{travelerCount > 1 ? "s" : ""}
                    </button>
                    {showTravelerDropdown && (
                      <ul className="absolute bg-white border border-gray-300 rounded mt-1 w-40 z-10">
                        {[1, 2, 3, 4, 5, 6].map((count) => (
                          <li
                            key={count}
                            onClick={() => handleTravelerSelect(count)}
                            className="p-2 hover:bg-gray-200 cursor-pointer"
                          >
                            {count} Traveler{count > 1 ? "s" : ""}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <button type="button" className="hover:underline">
                    Add Coupon
                  </button>
                  <button type="button" className="hover:underline">
                    + Add Trip
                  </button>
                </div>

                <button type="button" className="hover:underline">
                  Advanced Search
                </button>

                <label className="flex items-center space-x-2">
                  <input type="checkbox" name="disability" />
                  <span>Passenger with Disability or Assistance Needed?</span>
                </label>
              </div>

              {/* Find Trains Button */}
              <button
                onClick={handleFindTrains}
                className="bg-[#1b7e62]  w-full text-base text-white px-10 py-3 mt-4 font-medium rounded"
              >
                Find Trains
              </button>
            </>
          )}
        </div>
      </form>
    </div>
  );
};

export default MobileTrainSearchForm;
