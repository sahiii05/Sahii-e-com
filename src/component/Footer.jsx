import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 border-t border-gray-700 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold text-white">
              Sahiii<span className="text-yellow-400">Street</span>
            </h2>

            <p className="mt-3 text-sm text-gray-400 leading-6">
              Your one-stop destination for premium shopping. Discover the
              latest fashion, electronics, accessories, and more at the best
              prices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-yellow-400 transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-yellow-400 transition">
                  Shop
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-yellow-400 transition">
                  Categories
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-yellow-400 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Customer Support
            </h3>

            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-yellow-400 transition">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-yellow-400 transition">
                  Terms & Conditions
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-yellow-400 transition">
                  Help Center
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-yellow-400 transition">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">

          <p className="text-sm text-gray-400">
            © 2026 <span className="text-white font-semibold">SAhiiiStreet</span>.
            All Rights Reserved.
          </p>

          <div className="flex gap-5 mt-4 md:mt-0 text-xl">

            <a href="#" className="hover:text-yellow-400 transition">
              <i className="fa-brands fa-facebook"></i>
            </a>

            <a href="#" className="hover:text-yellow-400 transition">
              <i className="fa-brands fa-instagram"></i>
            </a>

            <a href="#" className="hover:text-yellow-400 transition">
              <i className="fa-brands fa-x-twitter"></i>
            </a>

            <a href="#" className="hover:text-yellow-400 transition">
              <i className="fa-brands fa-linkedin"></i>
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;