import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPinterestP,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Top Bar */}
      <div className="bg-[#19457e] py-6 px-4 md:px-8 flex flex-col md:flex-row gap-2 items-start justify-between">
        <h2 className="text-xl font-bold text-gray-950 md:ml-8">Skywayfares</h2>
        <p className="md:text-lg text-sm font-thin mr-6">
          Every ride counts as an Skywayfares Guest Rewards member. <br /> Earn
          points toward reward travel, upgrades, and more.
        </p>

        <button className="px-6 py-3 bg-transparent border border-black text-[#d7dcdf] font-semibold rounded-lg shadow-md hover:bg-[#2260b1] first-letter:transition duration-300">
          Join Now
        </button>
      </div>

      {/* Bottom Navigation */}
      <div className="py-10 px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Column 1 */}
          <div className="hidden md:block">
            <h3 className="font-bold mb-4">About Skywayfares</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  About Skywayfares
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  A New Era of Rail
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  News & Media
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  FOIA
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Office of Inspector General
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                Skywayfares Customer Service Commitments
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="hidden md:block">
            <h3 className="font-bold mb-4">Traveling with Us</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Baggage Policy & Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Changing Your Reservation
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Unique Skywayfares Experience
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Trip Insurance, Reserve Parking...
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Accessible Travel Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                Skywayfares Vacations
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Travel Green
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Gift Cards
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="hidden md:block">
            <h3 className="font-bold mb-4">Site Tools</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Service Alerts & Notices
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Sign Up for Delay Alerts
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Web Notices & Terms of Use
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Skywayfares Store
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Cookie Policy & Preferences
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Social Media */}
          <div className=" text-left">
            <h3 className="font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="Facebook"
                className="text-white hover:text-gray-400 transition duration-300"
              >
                <FaFacebookF size={24} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-white hover:text-gray-400 transition duration-300"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-white hover:text-gray-400 transition duration-300"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-white hover:text-gray-400 transition duration-300"
              >
                <FaLinkedinIn size={24} />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="text-white hover:text-gray-400 transition duration-300"
              >
                <FaYoutube size={24} />
              </a>
              <a
                href="#"
                aria-label="Pinterest"
                className="text-white hover:text-gray-400 transition duration-300"
              >
                <FaPinterestP size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center text-sm text-gray-400">
          <p>©2024 National Railroad Passenger Corporation</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
