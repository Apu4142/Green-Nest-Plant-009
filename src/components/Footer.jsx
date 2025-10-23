import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-green-50 to-white border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand / About */}
          <div>
            <h2 className="text-2xl font-bold text-green-700 mb-3">
              🌿 GreenNest
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              GreenNest brings nature closer to your home. We help you grow
              beautiful indoor plants and create a greener, healthier living
              space.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-800 font-semibold text-lg mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/about"
                  className="text-gray-600 hover:text-green-600 transition-colors duration-200"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/shop"
                  className="text-gray-600 hover:text-green-600 transition-colors duration-200"
                >
                  Shop Plants
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-600 hover:text-green-600 transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/privacy-policy"
                  className="text-gray-600 hover:text-green-600 transition-colors duration-200"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-gray-800 font-semibold text-lg mb-4">
              Our Services
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-600 hover:text-green-600 transition-colors duration-200">
                Indoor Plant Care
              </li>
              <li className="text-gray-600 hover:text-green-600 transition-colors duration-200">
                Custom Planters
              </li>
              <li className="text-gray-600 hover:text-green-600 transition-colors duration-200">
                Eco Decor Consultation
              </li>
              <li className="text-gray-600 hover:text-green-600 transition-colors duration-200">
                Sustainable Gardening Tips
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-gray-800 font-semibold text-lg mb-4">
              Follow Us
            </h3>
            <p className="text-gray-600 text-sm mb-3">
              Let’s grow together! Follow us for plant care tips and updates.
            </p>
            <div className="flex space-x-4">
              {[
                { href: "https://facebook.com", icon: "facebook" },
                { href: "https://instagram.com", icon: "instagram" },
                { href: "https://pinterest.com", icon: "pinterest" },
              ].map(({ href, icon }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-green-100 text-green-700 hover:bg-green-600 hover:text-white transition-all duration-200 shadow-sm"
                >
                  <i className={`fa-brands fa-${icon} text-lg`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mt-10 mb-4"></div>

        {/* Bottom Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-green-700">GreenNest</span>. All
            rights reserved.
          </p>
          <p className="mt-2 md:mt-0">
            Designed with 💚 by{" "}
            <span className="font-medium text-green-700">GreenNest Team</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
