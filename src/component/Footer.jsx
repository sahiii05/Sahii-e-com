import React from "react";
import { Link } from "react-router-dom";
import { 
  FaFacebookF, 
  FaInstagram, 
  FaTwitter, 
  FaLinkedinIn, 
  FaYoutube, 
  FaPinterestP,
  FaPaperPlane, 
  FaLock, 
  FaShippingFast, 
  FaHeadset, 
  FaRedoAlt,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaCreditCard
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-zinc-950 text-gray-300 border-t border-zinc-800 mt-16 font-sans">
      
      {/* 1. Perks / Trust Badges Bar */}
      <div className="border-b border-zinc-800/80 bg-zinc-900/50 py-8">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center md:text-left">
          
          <div className="flex items-center justify-center md:justify-start gap-4">
            <div className="w-12 h-12 rounded-full bg-yellow-400/10 flex items-center justify-center text-yellow-400 text-xl shrink-0">
              <FaShippingFast />
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm">Free Express Shipping</h4>
              <p className="text-xs text-gray-400">On orders over ₹999</p>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-4">
            <div className="w-12 h-12 rounded-full bg-yellow-400/10 flex items-center justify-center text-yellow-400 text-xl shrink-0">
              <FaRedoAlt />
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm">Easy 30-Day Returns</h4>
              <p className="text-xs text-gray-400">Hassle-free exchange policy</p>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-4">
            <div className="w-12 h-12 rounded-full bg-yellow-400/10 flex items-center justify-center text-yellow-400 text-xl shrink-0">
              <FaLock />
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm">100% Secure Checkout</h4>
              <p className="text-xs text-gray-400">Protected by advanced encryption</p>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-4">
            <div className="w-12 h-12 rounded-full bg-yellow-400/10 flex items-center justify-center text-yellow-400 text-xl shrink-0">
              <FaHeadset />
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm">24/7 Dedicated Support</h4>
              <p className="text-xs text-gray-400">Always here to help you out</p>
            </div>
          </div>

        </div>
      </div>

      {/* 2. Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand & Newsletter Column */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-3xl font-extrabold text-white tracking-wider">
              Sahiii<span className="text-yellow-400">Street</span>
            </h2>

            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              Your ultimate destination for curated modern fashion, electronics, and lifestyle essentials. Built for those who dare to stand out.
            </p>

            {/* Newsletter Subscription Box */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-widest text-white">
                Subscribe to our Newsletter
              </h4>
              <form onSubmit={(e) => e.preventDefault()} className="flex items-center max-w-md">
                <input 
                  type="email" 
                  placeholder="Enter your email address..." 
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-l-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-yellow-400 transition"
                />
                <button 
                  type="submit" 
                  className="bg-yellow-400 text-zinc-950 px-5 py-3 rounded-r-xl font-bold hover:bg-yellow-500 transition flex items-center justify-center cursor-pointer"
                >
                  <FaPaperPlane />
                </button>
              </form>
              <p className="text-[11px] text-gray-500">By subscribing you agree to our Terms & Privacy Policy.</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-5 border-l-2 border-yellow-400 pl-3">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-yellow-400 transition">Home</Link></li>
              <li><Link to="/featuredproducts" className="hover:text-yellow-400 transition">Shop / New Arrivals</Link></li>
              <li><Link to="/all-categories" className="hover:text-yellow-400 transition">Categories</Link></li>
              <li><Link to="/men" className="hover:text-yellow-400 transition">Men's Fashion</Link></li>
              <li><Link to="/women" className="hover:text-yellow-400 transition">Women's Fashion</Link></li>
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-5 border-l-2 border-yellow-400 pl-3">
              Customer Support
            </h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="#" className="hover:text-yellow-400 transition">Privacy Policy</Link></li>
              <li><Link to="#" className="hover:text-yellow-400 transition">Terms & Conditions</Link></li>
              <li><Link to="#" className="hover:text-yellow-400 transition">Help Center & FAQ</Link></li>
              <li><Link to="#" className="hover:text-yellow-400 transition">Shipping & Returns</Link></li>
              <li><Link to="/login" className="hover:text-yellow-400 transition">My Account</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-5 border-l-2 border-yellow-400 pl-3">
              Get in Touch
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><strong className="text-white">Location:</strong> Fashion Street, Mumbai, India</li>
              <li><strong className="text-white">Email:</strong> support@sahiistreet.com</li>
              <li><strong className="text-white">Phone:</strong> +91 (800) 123-4567</li>
              <li className="pt-2 text-xs text-yellow-400 font-medium">Mon - Sat: 9:00 AM - 8:00 PM</li>
            </ul>
          </div>

        </div>

        {/* 3. Bottom Bar */}
        <div className="border-t border-zinc-800 mt-12 pt-8 flex flex-col lg:flex-row justify-between items-center gap-6">

          <p className="text-xs text-gray-500 text-center lg:text-left">
            © 2026 <span className="text-white font-semibold">SahiiiStreet</span>. All Rights Reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-gray-300 hover:bg-yellow-400 hover:text-zinc-950 hover:border-yellow-400 transition duration-300">
              <FaFacebookF size={15} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-gray-300 hover:bg-yellow-400 hover:text-zinc-950 hover:border-yellow-400 transition duration-300">
              <FaInstagram size={15} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-gray-300 hover:bg-yellow-400 hover:text-zinc-950 hover:border-yellow-400 transition duration-300">
              <FaTwitter size={15} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-gray-300 hover:bg-yellow-400 hover:text-zinc-950 hover:border-yellow-400 transition duration-300">
              <FaLinkedinIn size={15} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-gray-300 hover:bg-yellow-400 hover:text-zinc-950 hover:border-yellow-400 transition duration-300">
              <FaYoutube size={15} />
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-gray-300 hover:bg-yellow-400 hover:text-zinc-950 hover:border-yellow-400 transition duration-300">
              <FaPinterestP size={15} />
            </a>
          </div>

          {/* Payment Badges (Using FontAwesome) */}
          <div className="flex items-center gap-3 text-2xl text-gray-400">
            <span title="Visa"><FaCcVisa className="hover:text-white transition" /></span>
            <span title="Mastercard"><FaCcMastercard className="hover:text-white transition" /></span>
            <span title="PayPal"><FaCcPaypal className="hover:text-white transition" /></span>
            <span title="Secure Payment"><FaCreditCard className="hover:text-white transition" /></span>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;