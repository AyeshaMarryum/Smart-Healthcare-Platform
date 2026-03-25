import { Star, Briefcase, Calendar } from "lucide-react";

const DoctorCard = ({ doctor, variant = "simple", onView, onBook }) => {
  return (
    <div
      className={`group border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 bg-white overflow-hidden
      ${variant === "detailed" ? "flex flex-col sm:flex-row p-6 gap-6" : "p-4"}`}
    >
      <div
        className={
          variant === "simple" ? "h-56 overflow-hidden rounded-xl" : ""
        }
      >
        <img
          src={doctor.img}
          alt={doctor.name}
          className={`w-full object-cover transition-transform duration-300 group-hover:scale-105
          ${variant === "simple" ? "h-56 rounded-xl" : "w-32 h-32 rounded-2xl border-4 border-indigo-100"}`}
        />
      </div>

      <div
        className={`${
          variant === "simple"
            ? "p-4 text-center space-y-2"
            : "flex-1 flex flex-col justify-between"
        }`}
      >
        <div className={variant === "simple" ? "mt-3" : ""}>
          <h3 className="text-xl font-bold text-gray-900 leading-snug">
            {doctor.name}
          </h3>
          <p className="text-gray-600 mt-1">{doctor.speciality}</p>
        </div>

        {variant === "detailed" && (
          <>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              {/* <div className="flex items-center gap-1 mt-2 text-yellow-500 justify-start sm:justify-start">
                <span className="text-lg font-bold text-gray-800">
                  {doctor.rating}
                </span>
                <Star className="w-4 h-4 fill-yellow-500" />
              </div> */}
              <div className="flex items-center gap-3 bg-indigo-50 border border-indigo-100 px-4 py-3 rounded-xl">
                <Briefcase size={18} className="text-indigo-600" />
                <div>
                  <p className="text-xs text-gray-500">Experience</p>
                  <p className="font-semibold text-gray-800">
                    {doctor.experience}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-emerald-50 border border-emerald-100 px-4 py-3 rounded-xl">
                <Calendar size={18} className="text-emerald-600" />
                <div>
                  <p className="text-xs text-gray-500">Fee</p>
                  <p className="font-semibold text-gray-800">{doctor.fee}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-amber-50 border border-amber-100 px-4 py-3 rounded-xl">
                <div>
                  <p className="text-xs text-gray-500">Next Available</p>
                  <p className="font-semibold text-gray-800">
                    {doctor.availability}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-3  mt-6">
              <button
                onClick={() => onView(doctor)}
                className="flex bg-white border border-indigo-200 text-indigo-700 px-5 py-3 rounded-xl font-semibold hover:bg-indigo-50 hover:shadow-md transition"
              >
                View Profile
              </button>

              <button
                onClick={() => onBook(doctor)}
                className="flex bg-indigo-600 text-white px-5 py-3 rounded-xl font-semibold hover:bg-indigo-700 hover:shadow-lg transition"
              >
                Book Now
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default DoctorCard;
