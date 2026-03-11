import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <div className="bg-linear-to-r from-indigo-600 to-blue-700 py-16 md:py-20 text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Ready to Prioritize Your Health?
        </h2>
        <p className="text-xl md:text-2xl mb-10 opacity-90 max-w-3xl mx-auto">
          Book your consultation today with one of our specialists and take the
          first step towards a healthier life.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <Link to="/doctorsprofile">
            <button className="px-10 py-5 bg-white text-indigo-700 font-bold text-lg rounded-full shadow-lg hover:bg-gray-100 transition transform hover:-translate-y-1">
              Book Now
            </button>
          </Link>
          <Link to="/contact">
            <button className="px-10 py-5 border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white/10 transition">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
