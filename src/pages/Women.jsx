import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaHeart, FaStar, FaFilter } from 'react-icons/fa';

const Women = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const womenProducts = [
    {
      id: 1,
      name: "Elegance Satin Wrap Dress",
      category: "Dresses",
      price: 2499,
      originalPrice: 3999,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop",
      badge: "Best Seller"
    },
    {
      id: 2,
      name: "Chic Oversized Blazer",
      category: "Blazers",
      price: 3499,
      originalPrice: 4999,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1590422538600-b217038e124a?q=80&w=800&auto=format&fit=crop",
      badge: "New Drop"
    },
    {
      id: 3,
      name: "High-Waist Pleated Midi Skirt",
      category: "Skirts",
      price: 1899,
      originalPrice: 2899,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80&w=800&auto=format&fit=crop",
      badge: "Trending"
    },
    {
      id: 4,
      name: "Luxury Knitwear Pullover",
      category: "Knitwear",
      price: 2199,
      originalPrice: 3499,
      rating: 5.0,
      image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=800&auto=format&fit=crop",
      badge: "Limited"
    },
    {
      id: 5,
      name: "Bohemian Floral Midi Dress",
      category: "Dresses",
      price: 2799,
      originalPrice: 4199,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=800&auto=format&fit=crop",
      badge: "Popular"
    },
    {
      id: 6,
      name: "Tailored Double-Breasted Coat",
      category: "Blazers",
      price: 4599,
      originalPrice: 6499,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800&auto=format&fit=crop",
      badge: "Hot"
    },
    {
      id: 7,
      name: "A-Line Velvet Evening Skirt",
      category: "Skirts",
      price: 2299,
      originalPrice: 3299,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=800&auto=format&fit=crop",
      badge: "Classic"
    },
    {
      id: 8,
      name: "Soft Cashmere Blend Cardigan",
      category: "Knitwear",
      price: 2699,
      originalPrice: 3899,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=800&auto=format&fit=crop",
      badge: "New"
    }
  ];

  const categories = ["All", "Dresses", "Blazers", "Skirts", "Knitwear"];

  const filteredProducts = selectedCategory === "All" 
    ? womenProducts 
    : womenProducts.filter(item => item.category === selectedCategory);

  return (
    <div className="bg-zinc-950 text-white min-h-screen font-sans selection:bg-amber-300 selection:text-black">
      <div className="relative bg-gradient-to-b from-zinc-900 to-zinc-950 border-b border-zinc-800/80 py-20 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fde047_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="relative z-10">
          <span className="text-amber-300 text-xs font-black tracking-[6px] uppercase bg-amber-300/10 px-4 py-1.5 rounded-full border border-amber-300/20">
            SAHIII • Women's Collection 2026
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight mt-4 uppercase">
            Shop Women's Fashion
          </h1>
          <p className="text-zinc-400 text-sm md:text-base max-w-xl mx-auto mt-3 font-light">
            Timeless elegance meets modern trends. Explore our exclusive luxury apparel lineup.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between flex-wrap gap-4 mb-10 border-b border-zinc-800/60 pb-6">
          <div className="flex items-center gap-2 text-zinc-400 text-sm font-medium">
            <FaFilter className="text-amber-300 text-xs" />
            <span>Filter Categories:</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  selectedCategory === cat 
                    ? "bg-amber-300 text-black shadow-lg shadow-amber-300/20 scale-105" 
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
              className="group bg-zinc-900/60 border border-zinc-800/80 rounded-2xl overflow-hidden hover:border-amber-300/60 transition-all duration-300 flex flex-col justify-between shadow-2xl hover:-translate-y-1.5"
            >
              <div className="relative h-80 overflow-hidden bg-zinc-900">
                <span className="absolute top-3 left-3 z-10 bg-amber-300 text-black text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
                  {product.badge}
                </span>

                <button className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-zinc-300 hover:text-amber-300 hover:scale-110 transition-all cursor-pointer">
                  <FaHeart className="text-sm" />
                </button>

                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                />

                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-xs text-amber-300 font-semibold tracking-wider uppercase">Quick View Available</span>
                </div>
              </div>

              <div className="p-5 flex flex-col flex-grow justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-amber-300 text-xs mb-1.5">
                    <FaStar className="text-xs" />
                    <span className="font-bold text-zinc-200">{product.rating}</span>
                    <span className="text-zinc-500 text-[10px]">(Reviews)</span>
                  </div>
                  <h3 className="font-bold text-base text-white tracking-wide group-hover:text-amber-300 transition-colors line-clamp-1">
                    {product.name}
                  </h3>
                </div>

                <div className="mt-5 pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                  <div className="flex flex-col">
                    <div className="flex items-baseline gap-2">
                      <span className="text-lg font-black text-amber-300">₹{product.price}</span>
                      <span className="text-xs text-zinc-500 line-through">₹{product.originalPrice}</span>
                    </div>
                  </div>

                  <Link 
                    to="/productdetails" 
                    className="bg-amber-300 text-black px-4 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider hover:bg-amber-400 hover:shadow-lg hover:shadow-amber-300/30 transition-all flex items-center gap-2 cursor-pointer active:scale-95"
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

export default Women;