import { useState } from "react";
import { doctors } from "../../assets/asset";
import DoctorCard from "../Home/DoctorCards";

const TopDoctors = () => {
  const [showAll, setShowAll] = useState(false);

  const showDoctors = showAll ? doctors : doctors.slice(0, 4);

  return (
    <section className="py-20 bg-linear-to-b from-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Meet Our Top Doctors
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-lg">
            Experienced specialists dedicated to providing exceptional
            healthcare services.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {showDoctors.map((doctor, id) => (
            <div className="transform hover:-translate-y-2 transition duration-300">
              <DoctorCard key={id} doctor={doctor} variant="simple" />
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-14">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-3 rounded-full bg-indigo-600 text-white font-medium shadow-md hover:bg-indigo-700 hover:shadow-lg transition-all duration-300"
          >
            {showAll ? "Show Less" : "View All Doctors"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopDoctors;
