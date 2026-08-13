import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaHeart, FaStar, FaFilter } from 'react-icons/fa';

const Men = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const mensProducts = [
    {
      id: 1,
      name: "SAHIII Oversized Graphic Tee",
      category: "T-Shirts",
      price: 1499,
      originalPrice: 2499,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=800&auto=format&fit=crop",
      badge: "Best Seller"
    },
    {
      id: 2,
      name: "Heavyweight Vintage Hoodie",
      category: "Hoodies",
      price: 2999,
      originalPrice: 4500,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=800&auto=format&fit=crop",
      badge: "New Drop"
    },
    {
      id: 3,
      name: "Distressed Cargo Street Pants",
      category: "Bottoms",
      price: 2499,
      originalPrice: 3999,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=800&auto=format&fit=crop",
      badge: "Trending"
    },
    {
      id: 4,
      name: "Cyberpunk Techwear Jacket",
      category: "Jackets",
      price: 4999,
      originalPrice: 6999,
      rating: 5.0,
      image: "https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=800&auto=format&fit=crop",
      badge: "Limited"
    },
    {
      id: 5,
      name: "Minimalist Ribbed Turtleneck",
      category: "Hoodies",
      price: 1899,
      originalPrice: 2999,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1624378440757-5e638b9bb333?q=80&w=800&auto=format&fit=crop",
      badge: "Popular"
    },
    {
      id: 6,
      name: "Acid Wash Oversized Denim Jacket",
      category: "Jackets",
      price: 3799,
      originalPrice: 5299,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?q=80&w=800&auto=format&fit=crop",
      badge: "Hot"
    },
    {
      id: 7,
      name: "Pleated Wide Leg Casual Trousers",
      category: "Bottoms",
      price: 2199,
      originalPrice: 3499,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?q=80&w=800&auto=format&fit=crop",
      badge: "Classic"
    },
    {
      id: 8,
      name: "Urban Zip-Up Track Hoodie",
      category: "Hoodies",
      price: 2799,
      originalPrice: 4199,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop",
      badge: "New"
    }
  ];

  const categories = ["All", "T-Shirts", "Hoodies", "Bottoms", "Jackets"];

  const filteredProducts = selectedCategory === "All" 
    ? mensProducts 
    : mensProducts.filter(item => item.category === selectedCategory);

  return (
    <div className="bg-zinc-950 text-white min-h-screen font-sans selection:bg-yellow-400 selection:text-black">
      <div className="relative bg-gradient-to-b from-zinc-900 to-zinc-950 border-b border-zinc-800/80 py-20 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#eab308_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="relative z-10">
          <span className="text-yellow-400 text-xs font-black tracking-[6px] uppercase bg-yellow-400/10 px-4 py-1.5 rounded-full border border-yellow-400/20">
            SAHIII • Exclusive 2026 Collection
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight mt-4 uppercase">
            Shop Men's Streetwear
          </h1>
          <p className="text-zinc-400 text-sm md:text-base max-w-xl mx-auto mt-3 font-light">
            Redefining modern aesthetics. Engineered for absolute comfort, built distinctively for the streets.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between flex-wrap gap-4 mb-10 border-b border-zinc-800/60 pb-6">
          <div className="flex items-center gap-2 text-zinc-400 text-sm font-medium">
            <FaFilter className="text-yellow-400 text-xs" />
            <span>Filter Categories:</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  selectedCategory === cat 
                    ? "bg-yellow-400 text-black shadow-lg shadow-yellow-400/20 scale-105" 
                    : "bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white hover:border-zinc-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div 
              key={product.id}
              className="group bg-zinc-900/60 border border-zinc-800/80 rounded-2xl overflow-hidden hover:border-yellow-400/60 transition-all duration-300 flex flex-col justify-between shadow-2xl hover:-translate-y-1.5"
            >
              <div className="relative h-80 overflow-hidden bg-zinc-900">
                <span className="absolute top-3 left-3 z-10 bg-yellow-400 text-black text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
                  {product.badge}
                </span>

                <button className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-zinc-300 hover:text-yellow-400 hover:scale-110 transition-all cursor-pointer">
                  <FaHeart className="text-sm" />
                </button>

                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                />

                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-xs text-yellow-400 font-semibold tracking-wider uppercase">Quick View Available</span>
                </div>
              </div>

              <div className="p-5 flex flex-col flex-grow justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-yellow-400 text-xs mb-1.5">
                    <FaStar className="text-xs" />
                    <span className="font-bold text-zinc-200">{product.rating}</span>
                    <span className="text-zinc-500 text-[10px]">(Reviews)</span>
                  </div>
                  <h3 className="font-bold text-base text-white tracking-wide group-hover:text-yellow-400 transition-colors line-clamp-1">
                    {product.name}
                  </h3>
                </div>

                <div className="mt-5 pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                  <div className="flex flex-col">
                    <div className="flex items-baseline gap-2">
                      <span className="text-lg font-black text-yellow-400">₹{product.price}</span>
                      <span className="text-xs text-zinc-500 line-through">₹{product.originalPrice}</span>
                    </div>
                  </div>

                  <Link 
                    to="/productdetails" 
                    className="bg-yellow-400 text-black px-4 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider hover:bg-yellow-300 hover:shadow-lg hover:shadow-yellow-400/30 transition-all flex items-center gap-2 cursor-pointer active:scale-95"
                  >
                    <FaShoppingCart className="text-xs" />
                    <span>Buy</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Men;