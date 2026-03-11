import { assets } from "../assets/asset.js";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between text-center lg:text-left gap-10 lg:gap-16  max-w-7xl mx-auto px-6 lg:px-10">
      <div className="flex flex-col items-center lg:items-start gap-6 lg:gap-8 w-full lg:w-1/2 mt-16 lg:mb-4">
        <span className="inline-flex items-center gap-3 text-primary font-bold text-sm tracking-widest uppercase">
          <hr className="border-2 border-indigo-600 w-12 rounded-full" />
          <span className="text-indigo-600 text-lg lg:text-xl">
            Next Gen Healthcare
          </span>
          <hr className="border-2 border-indigo-600 w-12 rounded-full" />
        </span>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-black text-slate-900 uppercase leading-[1.1] tracking-tight">
          Advanced Healthcare
          <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-500 to-indigo-700">
            for a Better Life.
          </span>
        </h1>

        <p className="text-base md:text-lg lg:text-xl text-slate-600 max-w-xl leading-relaxed">
          Experience world-class medical services with our team of expert
          doctors and state-of-the-art technology. Your health is our top
          priority.
        </p>

        <div className="w-full mt-2 lg:mt-1">
          <div className="relative flex flex-col md:flex-row items-center  gap-15 rounded-3xl overflow-hidden p-2">
            <Link to="/doctorsprofile">
              <button className="w-full md:w-auto bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold text-base md:text-lg flex items-center justify-center gap-3 hover:brightness-110 transition-all mt-3 md:mt-0">
                Book Appointment
              </button>
            </Link>
            <Link to="/services">
              <button className="w-full md:w-auto border border-gray-300 bg-white  text-black px-8 py-4 rounded-2xl font-bold text-base md:text-lg flex items-center justify-center gap-3 hover:brightness-110 transition-all mt-3 md:mt-0">
                Our Services
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex justify-center mt-10 lg:mt-0">
        <img
          src={assets.heroImage}
          alt="Hero image"
          className="w-70 sm:w-87.5 md:w-105 lg:w-120 xl:w-130 object-contain"
        />
      </div>
    </div>
  );
};

export default HeroSection;
