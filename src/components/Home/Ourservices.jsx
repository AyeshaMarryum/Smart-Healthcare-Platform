import { Siren, HeartPulse, Baby, Brain } from "lucide-react";

const ourservices = [
  {
    title: "Emergency Care",
    description:
      "24/7 urgent medical assistance for critical and life-threatening conditions.",
    icon: <Siren className="w-10 h-10 text-red-600" />,
  },
  {
    title: "Cardiology",
    description:
      "Specialized heart care, diagnostics, and surgical interventions.",
    icon: <HeartPulse className="w-10 h-10 text-red-600" />,
  },
  {
    title: "Pediatrics",
    description:
      "Comprehensive medical care for infants, children, and adolescents.",
    icon: <Baby className="w-10 h-10 text-yellow-600" />,
  },
  {
    title: "Neurology",
    description:
      "Treating disorders of the nervous system with precision and care.",
    icon: <Brain className="w-10 h-10 text-pink-600" />,
  },
];

const Ourservices = () => {
  return (
    <div className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 lg:mt-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Specialized Medical Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide a comprehensive range of healthcare services using
            advanced diagnostics and patient-centric treatment plans.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {ourservices.map((service, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl shadow-md hover:shadow-lg hover:scale-[1.03] transition-all duration-300 border border-gray-300 group cursor-pointer"
            >
              <div className="mb-5">{service.icon}</div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-5 leading-relaxed text-lg">
                {service.description}
              </p>

              <a
                href="#"
                className="text-md font-semibold text-indigo-600 group-hover:text-indigo-800 transition-colors inline-flex items-center"
              >
                Learn more
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ourservices;
