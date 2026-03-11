import React from "react";
import { Link } from "react-router-dom";
import {
  HeartPulse,
  Stethoscope,
  Brain,
  Baby,
  Activity,
  Syringe,
  ShieldCheck,
  Clock,
  Users,
} from "lucide-react";

const services = [
  {
    icon: <Stethoscope className="w-8 h-8 text-blue-600" />,
    title: "General Consultation",
    text: "Comprehensive medical consultations for diagnosis and treatment planning.",
  },
  {
    icon: <HeartPulse className="w-8 h-8 text-red-500" />,
    title: "Cardiology",
    text: "Advanced heart care services including diagnosis, treatment, and monitoring.",
  },
  {
    icon: <Brain className="w-8 h-8 text-purple-600" />,
    title: "Neurology",
    text: "Expert care for neurological disorders and brain health management.",
  },
  {
    icon: <Baby className="w-8 h-8 text-pink-500" />,
    title: "Pediatrics",
    text: "Specialized healthcare services for infants, children, and adolescents.",
  },
  {
    icon: <Activity className="w-8 h-8 text-green-600" />,
    title: "Diagnostics",
    text: "Modern diagnostic facilities including imaging and laboratory testing.",
  },
  {
    icon: <Syringe className="w-8 h-8 text-teal-600" />,
    title: "Vaccination",
    text: "Safe and effective immunization services for all age groups.",
  },
];

const features = [
  {
    icon: <Users className="w-8 h-8 text-blue-600" />,
    title: "Expert Doctors",
    text: "Highly qualified specialists dedicated to patient wellbeing.",
  },
  {
    icon: <Clock className="w-8 h-8 text-blue-600" />,
    title: "24/7 Support",
    text: "Emergency and healthcare support available anytime.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
    title: "Trusted Care",
    text: "Advanced treatments delivered with safety and compassion.",
  },
];

const Services = () => {
  return (
    <div className="bg-gray-50">
      <div className="bg-linear-to-r from-blue-600 to-teal-500 py-20 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Our Healthcare Services
        </h1>
        <p className="max-w-2xl mx-auto text-lg opacity-90">
          Providing world-class healthcare solutions through advanced technology
          and compassionate care.
        </p>
      </div>

      <div className="py-16 flex justify-center">
        <div className="w-[92%] max-w-6xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <div
                key={i}
                className="bg-white p-7 rounded-2xl shadow-sm hover:shadow-lg transition flex flex-col gap-4 border border-gray-100 hover:-translate-y-1"
              >
                <div className="bg-blue-50 w-fit p-3 rounded-xl">
                  {service.icon}
                </div>

                <h3 className="text-xl font-semibold text-gray-800">
                  {service.title}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed">
                  {service.text}
                </p>

                <button className="text-blue-600 font-medium mt-2 hover:underline">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white py-20 flex justify-center">
        <div className="w-[92%] max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Why Choose Our Hospital
            </h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              Our commitment is to deliver exceptional healthcare services using
              modern technology and experienced professionals.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {features.map((item, i) => (
              <div
                key={i}
                className="text-center p-6 bg-gray-50 rounded-2xl shadow-sm"
              >
                <div className="flex justify-center mb-4">{item.icon}</div>

                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-linear-to-r from-blue-600 to-teal-500 py-16 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Need Medical Assistance?
        </h2>
        <p className="mb-6 opacity-90">
          Book an appointment with our experienced doctors today.
        </p>
        <Link to="/doctorsprofile">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition">
            Book Appointment
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Services;
