const testimonials = [
  {
    text: "The level of care I received at SmartHospital was exceptional. The cardiologists are truly world-class, and the staff is friendly and attentive.",
    author: "Robert Davidson",
    role: "Cardiology Patient",
    rating: 5,
  },
  {
    text: "Choosing SmartHospital for my daughter's treatment was the best decision. The pediatric wing is so child-friendly and the doctors are patient.",
    author: "Amanda Miller",
    role: "Parent",
    rating: 5,
  },
  {
    text: "Efficient, professional, and very clean. Booking an appointment was seamless through their portal. Highly recommend for neurology checkups.",
    author: "Samuel Jackson",
    role: "Neurology Patient",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <div className="py-16 md:py-20 bg-gray-900 rounded-t-[100px] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Patients Say
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Real stories from people who trusted us with their health journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t,id) => (
            <div key={id} className="bg-gray-800/70 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-indigo-500/50 transition-all duration-300">
              <div className="flex mb-5 text-yellow-400">
                {"★".repeat(t.rating)}
              </div>
              <p className="text-gray-200 leading-relaxed mb-6 italic">
                "{t.text}"
              </p>
              <div>
                <p className="font-semibold">{t.author}</p>
                <p className="text-sm text-gray-400">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
