import { useState } from "react";
import { doctors } from "../assets/asset";

const TopDoctors = () => {
  const [showAll, setShowAll] = useState(false);

  const showDoctors = showAll ? doctors : doctors.slice(0, 4);

  return (
    <div className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Top Doctors
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our specialists are leaders in their fields, dedicated to providing
            exceptional care and medical expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {showDoctors.map((doctor, id) => (
            <div
              key={id}
              className="group border relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 bg-white border-gray-300"
            >
              <div className="h-64 flex items-center justify-center">
                <img
                  src={doctor.img}
                  alt={doctor.name}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-indigo-700 transition-colors">
                  {doctor.name}
                </h3>
                <p className="text-gray-600 mb-3">{doctor.speciality}</p>
                <div className="flex items-center justify-center text-sm text-yellow-500">
                  <span className="text-lg font-bold text-gray-800 mr-1">
                    {doctor.rating}
                  </span>
                  <span>★</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-4 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition shadow-md hover:shadow-lg"
          >
            {showAll ? "Show Less" : "View All Doctors"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopDoctors;