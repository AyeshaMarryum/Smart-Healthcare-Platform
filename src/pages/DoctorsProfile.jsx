import { useState } from "react";
import { Star, Award, Clock, MapPin, Phone } from "lucide-react";
import { doctors } from "../assets/asset";
import DoctorCard from "../components/Home/DoctorCards";
import Booking from "../components/DoctorsProfile/Booking";

const DoctorsProfile = () => {
  const [search, setSearch] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [bookingDoctor, setBookingDoctor] = useState(null);

  const filteredDoctors = doctors.filter(
    (doc) =>
      doc.name.toLowerCase().includes(search.toLowerCase()) ||
      doc.speciality.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-gray-50 min-h-screen py-12 flex justify-center">
      <div className="w-[95%] max-w-5xl">
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-5 text-center md:text-left">
            Find Doctors
          </h1>

          <input
            type="text"
            placeholder="Search by name or specialty..."
            className="w-full max-w-xl px-5 py-4 rounded-xl border border-indigo-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
          {filteredDoctors.map((doc, i) => (
            <DoctorCard
              key={i}
              doctor={doc}
              variant="detailed"
              onView={setSelectedDoctor}
              onBook={setBookingDoctor}
            />
          ))}
        </div>

        {filteredDoctors.length === 0 && (
          <p className="text-center text-gray-500 mt-12 text-xl font-medium">
            No doctors found.
          </p>
        )}
      </div>

      {selectedDoctor && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8 md:p-10 space-y-10">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-3">
                      <Award size={22} className="text-indigo-600" />
                      Qualifications & Certifications
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-indigo-500 mt-1">•</span>
                        MBBS, MD (Internal Medicine)
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-indigo-500 mt-1">•</span>
                        Fellowship in Cardiology - AIIMS
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-indigo-500 mt-1">•</span>
                        Certified in Advanced Cardiac Life Support
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-3">
                      <Clock size={22} className="text-indigo-600" />
                      Availability
                    </h3>
                    <p className="text-gray-700">
                      {selectedDoctor.availability}
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-3">
                      <MapPin size={22} className="text-indigo-600" />
                      Location
                    </h3>
                    <p className="text-gray-700">
                      SmartHospital Main Campus
                      <br />
                      123 Healthcare Plaza, Medical District
                      <br />
                      New York, NY 10001
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-3">
                      <Phone size={22} className="text-indigo-600" />
                      Contact
                    </h3>
                    <div className="space-y-2 text-gray-700">
                      <p className="flex items-center gap-3">
                        <Phone size={18} className="text-gray-500" />
                        +1 (555) 123-4567
                      </p>
                      <p className="flex items-center gap-3">
                        <Phone size={18} className="text-gray-500" />
                        {selectedDoctor.name
                          .toLowerCase()
                          .replace(/\s+/g, ".")}
                        @smarthospital.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-5">
                  About {selectedDoctor.name}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {selectedDoctor.name} is a highly experienced{" "}
                  {selectedDoctor.speciality.toLowerCase()} with over{" "}
                  {selectedDoctor.experience} of clinical practice. Specializing in complex cases and patient-centered care, {selectedDoctor.name} has helped thousands of patients achieve better health outcomes.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Passionate about preventive medicine and latest treatment protocols. Regularly participates in national and international medical conferences.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <button
                  onClick={() => setBookingDoctor(selectedDoctor)}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-4 rounded-xl font-semibold text-lg transition shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
                >
                  Book Appointment
                </button>

                <button
                  onClick={() => setSelectedDoctor(null)}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-10 py-4 rounded-xl font-semibold text-lg transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {bookingDoctor && (
        <Booking doctor={bookingDoctor} onClose={() => setBookingDoctor(null)} />
      )}
    </div>
  );
};

export default DoctorsProfile;