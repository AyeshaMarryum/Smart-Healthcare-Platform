import React from "react";
import { assets } from "../assets/asset.js";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="py-4 bg-indigo-600 shadow-sm w-full">
      <div className="mx-auto px-4 sm:px-6 lg:px-10 max-w-7xl">
        <div className="flex items-center justify-between rounded-full bg-white px-4 sm:px-6 lg:px-8 py-3 shadow-md">
          <div className="flex items-center gap-2">
            <img
              src={assets.logo}
              alt="HealAI Logo"
              className="h-10 sm:h-11 lg:h-12 w-auto"
            />
            <span className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              SmartHospital
            </span>
          </div>

          <ul className="hidden md:flex items-center gap-6 lg:gap-10 font-medium text-sm lg:text-base">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `transition-colors duration-200 hover:text-indigo-600 ${
                  isActive ? "text-indigo-600 font-semibold" : ""
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `transition-colors duration-200 hover:text-indigo-600 ${
                  isActive ? "text-indigo-600 font-semibold" : ""
                }`
              }
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `transition-colors duration-200 hover:text-indigo-600 ${
                  isActive ? "text-indigo-600 font-semibold" : ""
                }`
              }
            >
              Contact
            </NavLink>

            <NavLink
              to="/services"
              className={({ isActive }) =>
                `transition-colors duration-200 hover:text-indigo-600 ${
                  isActive ? "text-indigo-600 font-semibold" : ""
                }`
              }
            >
              Services
            </NavLink>

            <NavLink
              to="/doctorsprofile"
              className={({ isActive }) =>
                `transition-colors duration-200 hover:text-indigo-600 ${
                  isActive ? "text-indigo-600 font-semibold" : ""
                }`
              }
            >
              Doctors
            </NavLink>
          </ul>

          <div className="flex items-center">
            <Link to="/doctorsprofile">
              <button className="bg-indigo-600 text-white px-5 lg:px-7 py-2 lg:py-2.5 rounded-full font-semibold hover:brightness-105 transition-all shadow-lg duration-200">
                Book Appointment
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
