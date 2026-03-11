import  { useState } from "react";
import { Star} from "lucide-react";
import {doctors} from "../assets/asset"


const DoctorsProfile = () => {
  const [search, setSearch] = useState("");

  const filteredDoctors = doctors.filter(
    (doc) =>
      doc.name.toLowerCase().includes(search.toLowerCase()) ||
      doc.speciality.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="bg-gray-50 min-h-screen py-12 flex justify-center">
      <div className="w-[95%] max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Find Doctors
          </h1>
          <input
            type="text"
            placeholder="Search by name or specialty..."
            className="w-full px-4 py-3 rounded-xl shadow-md border border-indigo-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-6">
          {filteredDoctors.map((doc, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border-t border-indigo-300 shadow-md hover:shadow-xl transition flex flex-col sm:flex-row items-center sm:items-start p-6 gap-4"
            >
              <img
                src={doc.img}
                alt={doc.name}
                className="w-24 h-24 rounded-xl object-cover border-2 border-blue-100"
              />

              <div className="flex-1 w-full">
                <div className="flex justify-between items-start sm:items-center">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {doc.name}
                    </h3>
                    <p className="text-blue-600 font-medium">
                      {doc.speciality}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 bg-yellow-100 px-3 py-1 rounded-full text-sm font-semibold">
                    <Star size={16} className="text-yellow-500" />
                    {doc.rating}
                  </div>
                </div>

                <div className="flex flex-wrap gap-6 mt-3 text-gray-500 text-sm">
                  <div className="flex items-center gap-1">
                     {doc.experience}
                  </div>
                  <div className="flex items-center gap-1">
                     {doc.fee}
                  </div>
                  <div className="mt-2 sm:mt-0">
                    <p className="text-xs text-gray-400">NEXT AVAILABLE</p>
                    <p className="text-sm text-gray-700">{doc.availability}</p>
                  </div>
                </div>
              </div>

              {/* Book Button */}
              <button className="mt-4 sm:mt-0 bg-blue-600 text-white px-6 py-2 rounded-xl font-semibold hover:bg-blue-700 transition">
                Book
              </button>
            </div>
          ))}

          {filteredDoctors.length === 0 && (
            <p className="text-center text-gray-400 mt-6 text-lg">
              No doctors found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DoctorsProfile;
