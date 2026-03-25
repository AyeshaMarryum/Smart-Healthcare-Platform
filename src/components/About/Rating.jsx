import React from "react";
import { Users, Stethoscope, Heart } from "lucide-react";
const stats = [
  { value: "10k+", label: "PATIENTS" },
  { value: "4.8/5", label: "RATING" },
  { value: "500+", label: "DOCTORS" },
];

const cards = [
  {
    icon: <Users className="text-blue-500 w-6 h-6" />,
    title: "Our Doctors",
    text: "Specialists from around the world dedicated to your well-being.",
  },
  {
    icon: <Stethoscope className="text-blue-500 w-6 h-6" />,
    title: "Advanced Facilities",
    text: "State-of-the-art diagnostic and surgical equipment.",
  },
  {
    icon: <Heart className="text-blue-500 w-6 h-6" />,
    title: "Patient Care First",
    text: "Compassionate treatment focused on patient comfort and recovery.",
  },
];

const Rating = () => {
  return (
    <div className="bg-gray-100 py-16 flex justify-center">
      <div className="w-[92%] max-w-6xl">
        <div className="grid grid-cols-3 gap-4 sm:gap-6 mb-14 ">
          {stats.map((item, i) => (
            <div
              key={i}
              className="bg-gray-100  shadow-sm py-6 sm:py-8 text-center border border-gray-300 rounded-2xl p-6 hover:shadow-md transition  "
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-500">
                {item.value}
              </h2>
              <p className="text-gray-500 text-xs sm:text-sm mt-2">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-gray-100 shadow-sm flex flex-col gap-4 border border-gray-300 rounded-2xl p-6 hover:shadow-md transition "
            >
              <div className="bg-blue-100 w-fit p-3 rounded-xl">
                {card.icon}
              </div>

              <h3 className="text-lg font-semibold text-gray-800">
                {card.title}
              </h3>

              <p className="text-gray-500 text-sm leading-relaxed">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rating;
