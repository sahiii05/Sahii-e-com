import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FaShoppingCart,
  FaHeart,
  FaSearch,
  FaBars,
  FaTimes,
  FaArrowRight,
  FaTrash,
  FaShoppingBag,
} from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartLoading, setCartLoading] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Categories", path: "/all-categories" },
    { name: "New Arrivals", path: "/featuredproducts" },
    { name: "Deals", path: "/featuredproducts" },
    { name: "Contact", path: "/product/1" },
  ];

  const fetchCartItems = async () => {
    try {
      setCartLoading(true);
      const response = await fetch("http://localhost:5000/api/cart");
      const data = await response.json();
      setCartItems(data);
      setCartLoading(false);
    } catch (err) {
      console.error("Error fetching cart:", err);
      setCartLoading(false);
    }
  };

  useEffect(() => {
    window.refreshCart = fetchCartItems;
    fetchCartItems();
  }, []);

  useEffect(() => {
    if (isCartOpen) {
      fetchCartItems();
    }
  }, [isCartOpen]);

  const removeCartItem = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/cart/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setCartItems(cartItems.filter((item) => item._id !== id));
      }
    } catch (err) {
      console.error("Error deleting item:", err);
    }
  };

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

            <button
              onClick={() => setIsCartOpen(true)}
              className="p-2 text-zinc-300 hover:text-yellow-400 transition-colors relative cursor-pointer"
              aria-label="Cart"
            >
              <FaShoppingCart className="text-lg" />
              <span className="absolute top-0 right-0 bg-yellow-400 text-black font-extrabold text-[9px] w-4 h-4 rounded-full flex items-center justify-center shadow">
                {cartItems.length || 0}
              </span>
            </button>

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

      {isCartOpen && (
        <div className="fixed inset-0 z-[100] flex justify-end">
          <div 
            className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity" 
            onClick={() => setIsCartOpen(false)}
          ></div>
          
          <div className="relative w-full max-w-md bg-[#0f0f13] border-l border-zinc-800 text-white h-full shadow-2xl p-6 flex flex-col justify-between z-10">
            
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
                <h3 className="text-lg font-black uppercase tracking-wider flex items-center gap-2">
                  <FaShoppingBag className="text-yellow-400" /> Your Shopping Bag
                </h3>
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="p-2 text-zinc-400 hover:text-white rounded-full bg-zinc-900 border border-zinc-800 transition-colors cursor-pointer"
                >
                  <FaTimes size={14} />
                </button>
              </div>

              <div className="mt-6 space-y-4 max-h-[calc(100vh-200px)] overflow-y-auto pr-1">
                {cartLoading ? (
                  <p className="text-center text-zinc-500 py-10 text-xs">Loading items...</p>
                ) : cartItems.length === 0 ? (
                  <div className="text-center py-20 text-zinc-500 text-sm">
                    Your cart is empty.
                  </div>
                ) : (
                  cartItems.map((item) => (
                    <div
                      key={item._id}
                      className="flex items-center justify-between bg-zinc-900/50 border border-zinc-800 p-4 rounded-2xl"
                    >
                      <div>
                        <h4 className="text-sm font-bold text-white">{item.name || "Product Item"}</h4>
                        <p className="text-yellow-400 font-black text-xs mt-0.5">{item.price || "£0"}</p>
                        <div className="flex gap-3 mt-2 text-[10px] text-zinc-400 uppercase tracking-wider">
                          <span>Size: <strong className="text-white">{item.size || "Standard"}</strong></span>
                          <span>Qty: <strong className="text-white">{item.quantity}</strong></span>
                        </div>
                      </div>

                      <button
                        onClick={() => removeCartItem(item._id)}
                        className="p-2.5 bg-red-500/10 hover:bg-red-600 text-red-400 hover:text-white rounded-xl transition-all cursor-pointer"
                        title="Remove"
                      >
                        <FaTrash size={12} />
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-800">
              <button
                onClick={() => setIsCartOpen(false)}
                className="w-full py-3.5 bg-yellow-400 hover:bg-yellow-300 text-black text-xs font-black uppercase tracking-[2px] rounded-xl transition-all shadow-lg cursor-pointer text-center block"
              >
                Proceed to Checkout
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;