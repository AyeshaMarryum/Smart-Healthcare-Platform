const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 ">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 border-t pt-8 border-gray-800">
          <div>
            <h3 className="text-white text-xl font-bold mb-4">SmartHospital</h3>
            <p className="text-sm leading-relaxed">
              Providing world-class healthcare with a human touch. Our mission
              is to enhance the quality of life through the advancement of
              medicine.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-5">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Our Doctors
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-5">Our Services</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  Emergency
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Cardiology
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Pediatrics
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Neurology
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-5">Contact Info</h4>
            <ul className="space-y-4 text-sm">
              <li>123 Medical Plaza, Health City 23001</li>
              <li>📞 +1 (555) 889-7234</li>
              <li>✉️ contact@smarthospital.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex justify-between pt-8 border-t border-gray-800 text-center text-sm">
          <p>© 2024 SmartHospital. All rights reserved.</p>
          <div className=" flex  justify-center gap-6">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
