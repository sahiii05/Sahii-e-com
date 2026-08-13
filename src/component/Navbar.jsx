import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FaShoppingCart,
  FaHeart,
  FaUser,
  FaSearch,
  FaBars,
  FaTimes,
  FaArrowRight,
} from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Categories", path: "/all-categories" },
    { name: "New Arrivals", path: "/featuredproducts" },
    { name: "Deals", path: "/featuredproducts" },
    { name: "Contact", path: "/product/1" },
  ];

  return (
    <>
      <div className="bg-yellow-400 text-black text-[10px] font-black tracking-[4px] uppercase py-2 px-4 text-center select-none overflow-hidden whitespace-nowrap shadow-sm">
        <span>⚡ LIMITED DROP • FREE EXPRESS SHIPPING WORLDWIDE • CODE: SAHIII2026 ⚡</span>
      </div>

      <header className="sticky top-0 left-0 w-full z-50 font-sans bg-zinc-950/95 border-b border-zinc-800/80 backdrop-blur-md transition-all duration-300 shadow-2xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-zinc-300 hover:text-yellow-400 focus:outline-none p-1 transition-colors cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
            </button>

            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative overflow-hidden rounded-xl border border-yellow-400/30 p-1 bg-black group-hover:border-yellow-400 transition-colors shadow-[0_0_15px_rgba(250,204,21,0.15)]">
                <img
                  src="Sahiii-logo.png"
                  alt="Logo"
                  className="w-8 h-8 object-contain transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tighter text-white group-hover:text-yellow-400 transition-colors">
                  SAHIII<span className="text-yellow-400">.</span>
                </span>
                <span className="text-[8px] uppercase tracking-[5px] text-zinc-400 font-bold -mt-1">
                  Streetwear
                </span>
              </div>
            </Link>
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, idx) => (
              <NavLink
                key={idx}
                to={link.path}
                className={({ isActive }) =>
                  `text-xs font-bold uppercase tracking-[2px] transition-all relative py-2 ${
                    isActive
                      ? "text-yellow-400 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-yellow-400"
                      : "text-zinc-400 hover:text-white"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-5">
            
            <div className="relative flex items-center">
              {isSearchOpen ? (
                <div className="absolute right-0 flex items-center bg-zinc-900 border border-zinc-700 rounded-full overflow-hidden w-64 sm:w-72 shadow-2xl animate-fadeIn">
                  <input
                    type="text"
                    placeholder="Search drops..."
                    autoFocus
                    className="w-full bg-transparent px-4 py-2 text-xs text-white outline-none placeholder:text-zinc-500"
                  />
                  <button 
                    onClick={() => setIsSearchOpen(false)}
                    className="pr-3 text-zinc-400 hover:text-white text-xs font-bold cursor-pointer"
                  >
                    ✕
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="p-2 text-zinc-300 hover:text-yellow-400 transition-colors cursor-pointer"
                  aria-label="Open Search"
                >
                  <FaSearch className="text-lg" />
                </button>
              )}
            </div>

            <Link
              to="/featuredproducts"
              className="p-2 text-zinc-300 hover:text-yellow-400 transition-colors relative hidden sm:block"
              aria-label="Wishlist"
            >
              <FaHeart className="text-lg" />
            </Link>

            <Link
              to="/product/1"
              className="p-2 text-zinc-300 hover:text-yellow-400 transition-colors relative"
              aria-label="Cart"
            >
              <FaShoppingCart className="text-lg" />
              <span className="absolute top-0 right-0 bg-yellow-400 text-black font-extrabold text-[9px] w-4 h-4 rounded-full flex items-center justify-center shadow">
                2
              </span>
            </Link>

            <Link
              to="/login"
              className="hidden md:flex items-center gap-2 bg-yellow-400 text-black px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-[2px] hover:bg-yellow-300 hover:shadow-[0_0_20px_rgba(250,204,21,0.4)] transition-all duration-300 group"
            >
              <span>Login</span>
              <FaArrowRight className="text-[10px] transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>

        <div
          className={`lg:hidden absolute top-full left-0 w-full bg-zinc-950 border-b border-zinc-800 shadow-2xl transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-[450px] opacity-100 py-6" : "max-h-0 opacity-0 py-0"
          }`}
        >
          <div className="px-6 flex flex-col gap-5">
            <div className="flex items-center bg-zinc-900 border border-zinc-800 rounded-full overflow-hidden">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full bg-transparent px-4 py-2.5 text-xs text-white outline-none placeholder:text-zinc-500"
              />
              <button className="bg-yellow-400 text-black px-4 py-2.5">
                <FaSearch className="text-xs" />
              </button>
            </div>

            <ul className="flex flex-col gap-3 font-semibold text-xs uppercase tracking-[2px] text-zinc-300">
              {navLinks.map((link, idx) => (
                <li key={idx}>
                  <NavLink
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `block py-2 transition-colors ${
                        isActive ? "text-yellow-400 font-bold pl-2 border-l-2 border-yellow-400" : "hover:text-white"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>

            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="w-full py-3 bg-yellow-400 text-black text-center text-xs font-black uppercase tracking-[2px] rounded-xl shadow-md"
            >
              Login / Register
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;