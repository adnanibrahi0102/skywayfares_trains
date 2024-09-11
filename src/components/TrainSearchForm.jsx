import React, { useState } from "react";
import Stations from "../data/Stations.json";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
const TrainSearchForm = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [fromSuggestions, setFromSuggestions] = useState([]);
  const [toSuggestions, setToSuggestions] = useState([]);
  const [travelerCount, setTravelerCount] = useState(1); // State for traveler count
  const [showTravelerDropdown, setShowTravelerDropdown] = useState(false); // State to toggle dropdown
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // Filter suggestions for "From" input
  const handleFromChange = (e) => {
    const value = e.target.value;
    setFrom(value);

    if (value.length > 1) {
      const filtered = Stations.features.filter(
        (station) =>
          station.properties.STNCODE.toLowerCase().includes(
            value.toLowerCase()
          ) ||
          station.properties.STNNAME.toLowerCase().includes(value.toLowerCase())
      );
      setFromSuggestions(filtered);
    } else {
      setFromSuggestions([]);
    }
  };

  // Filter suggestions for "To" input
  const handleToChange = (e) => {
    const value = e.target.value;
    setTo(value);

    if (value.length > 1) {
      const filtered = Stations.features.filter(
        (station) =>
          station.properties.STNCODE.toLowerCase().includes(
            value.toLowerCase()
          ) ||
          station.properties.STNNAME.toLowerCase().includes(value.toLowerCase())
      );
      setToSuggestions(filtered);
    } else {
      setToSuggestions([]);
    }
  };

  // Handle selection of a suggestion
  const handleFromSelect = (station) => {
    setFrom(station.properties.STNNAME);
    setFromSuggestions([]);
  };

  const handleToSelect = (station) => {
    setTo(station.properties.STNNAME);
    setToSuggestions([]);
  };

  // Handle traveler count selection
  const handleTravelerSelect = (count) => {
    setTravelerCount(count);
    setShowTravelerDropdown(false);
  };
  const handleFindTrains = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false); 
      navigate("/turbulence"); 
    }, 3000); 
  };
 
  if (loading) {
    return(
     <div className="flex justify-center items-center h-screen w-screen">
       <Loading/>
     </div>
    )
  }

  return (
    <div className="bg-gray-100 p-8">
      {/* Top Navigation Bar */}
      <div className="hidden md:flex justify-start items-center space-x-4 bg-[#002436] p-2 text-white">
        <div className="bg-blue-400 px-6 py-3 rounded h-full">One-Way</div>
        <button className="hover:bg-blue-400 px-6 py-3 rounded h-full">
          Rail Passes
        </button>
        <button className="hover:bg-blue-400 px-6 py-3 rounded h-full">
          Auto Train
        </button>
      </div>

      {/* Search Form */}
      <div className="p-6 mt-4 rounded">
        <div className="flex items-center space-x-2">
          {/* From - To */}
          <div className="relative w-1/3">
            <input
              type="text"
              value={from}
              onChange={handleFromChange}
              placeholder="From"
              className="w-full p-4 border border-gray-300 rounded"
            />
            {fromSuggestions.length > 0 && (
              <ul className="absolute z-40 bg-white border border-gray-300 w-full max-h-48 overflow-y-auto">
                {fromSuggestions.map((station) => (
                  <li
                    key={station.properties.OBJECTID}
                    className="p-2 hover:bg-gray-800 cursor-pointer hover:text-white"
                    onClick={() => handleFromSelect(station)}
                  >
                    {station.properties.STNNAME} ({station.properties.STNCODE})
                  </li>
                ))}
              </ul>
            )}
          </div>

          <button className="p-4 border border-gray-300 rounded">⇄</button>

          <div className="relative w-1/3">
            <input
              type="text"
              value={to}
              onChange={handleToChange}
              placeholder="To"
              className="w-full p-4 border border-gray-300 rounded"
            />
            {toSuggestions.length > 0 && (
              <ul className="absolute z-40 bg-white border border-gray-300 w-full max-h-48 overflow-y-auto">
                {toSuggestions.map((station) => (
                  <li
                    key={station.properties.OBJECTID}
                    className="p-2 hover:bg-gray-800 cursor-pointer hover:text-white"
                    onClick={() => handleToSelect(station)}
                  >
                    {station.properties.STNNAME} ({station.properties.STNCODE})
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Date Pickers */}
          <input
            type="text"
            placeholder="Depart Date"
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => (e.target.type = "text")}
            className="w-1/4 p-4 border border-gray-300 rounded"
          />
          <input
            type="text"
            placeholder="Return Date"
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => (e.target.type = "text")}
            className="w-1/4 p-4 border border-gray-300 rounded"
          />

          {/* Find Trains Button */}
          <button
            onClick={handleFindTrains}
            className="bg-green-500 text-base text-white px-10 py-2 rounded"
          >
            FIND TRAINS
          </button>
        </div>

        {/* Additional Options */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center space-x-2">
            {/* Traveler Dropdown */}
            <div className="relative">
              <button
                className="flex items-center px-4 py-2 border border-gray-300 rounded"
                onClick={() => setShowTravelerDropdown(!showTravelerDropdown)}
              >
                <span>{travelerCount}</span>
                <span className="ml-2">
                  Traveler{travelerCount > 1 ? "s" : ""}
                </span>
              </button>
              {showTravelerDropdown && (
                <ul className="absolute z-40 bg-transparent border border-gray-300 mt-2 w-full">
                  {[1, 2, 3, 4, 5].map((count) => (
                    <li
                      key={count}
                      className="p-2 hover:bg-gray-200 cursor-pointer"
                      onClick={() => handleTravelerSelect(count)}
                    >
                      {count} Traveler{count > 1 ? "s" : ""}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Passenger with Disability */}
            <label className="flex items-center space-x-2">
              <input type="checkbox" />
              <span>Passenger with Disability or Assistance Needed?</span>
            </label>
          </div>

          {/* Additional Actions */}
          <div className="flex items-center space-x-4">
            <button className="hover:underline">Add Coupon</button>
            <button className="hover:underline">+ Add Trip</button>
            <button className="hover:underline">Advanced Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainSearchForm;
