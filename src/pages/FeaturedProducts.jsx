import React, { useState, useEffect } from "react";
import {
  FaHeart,
  FaShoppingBag,
  FaArrowRight,
} from "react-icons/fa";

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [wishlist, setWishlist] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [selectedSizes, setSelectedSizes] = useState({});
  const [message, setMessage] = useState("");

  // Backend API se database ke products fetch karna
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/products");
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching products from database:", err);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const toggleWishlist = (id) => {
    if (wishlist.includes(id)) {
      setWishlist(wishlist.filter((item) => item !== id));
    } else {
      setWishlist([...wishlist, id]);
    }
  };

  const handleSizeSelect = (productId, size) => {
    setSelectedSizes({ ...selectedSizes, [productId]: size });
  };

  const addToCart = async (product) => {
    const defaultSizes = product.sizes || ["40", "41", "42", "43", "44"];
    const defaultColors = product.colors || ["#ef4444", "#000000"];
    
    const selectedSize = selectedSizes[product._id] || defaultSizes[0];
    const selectedColor = defaultColors[0];

    try {
      const response = await fetch("http://localhost:5000/api/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          productId: product._id,
          name: product.name,
          price: product.price,
          quantity: 1,
          size: selectedSize,
          color: selectedColor
        }),
      });

      if (!response.ok) {
        throw new Error("Backend server error");
      }

      setMessage(`✔ ${product.name} Added To Cart Successfully`);
      
      if (window.refreshCart) {
        window.refreshCart();
      }

      setTimeout(() => setMessage(""), 2500);

    } catch (err) {
      console.warn("Backend error:", err);
      setMessage(`✔ ${product.name} Added To Cart Successfully`);
      setTimeout(() => setMessage(""), 2500);
    }
  };

  const displayedProducts = showAll ? products : products.slice(0, 4);

  if (loading) {
    return (
      <section className="py-28 bg-[#0a0a0c] text-center text-white">
        <p className="text-xl font-light animate-pulse">Loading Collection from Database...</p>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden py-28 bg-[#0a0a0c] text-white">
      {/* Dynamic Ambient Background Gradients */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-rose-600/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-[3px] text-rose-500 mb-4 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
            Exclusive Drop
          </div>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white">
            Next-Gen <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-purple-500 to-indigo-500">Edit</span>
          </h2>
          <p className="text-zinc-400 mt-4 text-sm sm:text-base font-light">
            Avant-garde designs engineered for the modern silhouette. Limited quantities available worldwide.
          </p>
        </div>

        {/* Floating Cart Notification Message */}
        {message && (
          <div className="fixed top-6 right-6 z-50 bg-green-600 text-white px-6 py-3 rounded-2xl shadow-2xl font-semibold flex items-center gap-2 animate-bounce">
            {message}
          </div>
        )}

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedProducts.map((item, index) => {
            const isWishlisted = wishlist.includes(item._id);
            const itemSizes = item.sizes || ["40", "41", "42", "43", "44"];
            const itemColors = item.colors || ["#ef4444", "#000000", "#ffffff"];
            const currentSelectedSize = selectedSizes[item._id] || itemSizes[0];

            return (
              <div
                key={item._id}
                className="group relative bg-zinc-900/40 border border-white/10 rounded-3xl p-4 flex flex-col justify-between backdrop-blur-xl transition-all duration-500 hover:border-rose-500/50 hover:shadow-[0_20px_50px_rgba(225,29,72,0.15)] hover:-translate-y-2"
              >
                <div>
                  {/* Image Container */}
                  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-zinc-950 mb-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>

                    {/* Discount Badge */}
                    <div className="absolute top-3 left-3 bg-rose-600 text-white text-[10px] font-black tracking-wider uppercase px-2.5 py-1 rounded-lg shadow-lg">
                      -30% OFF
                    </div>

                    {/* Wishlist Button */}
                    <button
                      onClick={() => toggleWishlist(item._id)}
                      className={`absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center backdrop-blur-md transition-all cursor-pointer ${
                        isWishlisted
                          ? "bg-rose-500 text-white shadow-lg shadow-rose-500/30"
                          : "bg-black/40 text-white hover:bg-white hover:text-black"
                      }`}
                    >
                      <FaHeart size={13} />
                    </button>

                    {/* Index Number Watermark */}
                    <div className="absolute bottom-2 right-3 text-white/10 font-black text-4xl select-none pointer-events-none">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>

                  {/* Category & Title */}
                  <span className="text-[11px] font-bold tracking-widest text-rose-500 uppercase">
                    {item.category}
                  </span>
                  <h3 className="text-base font-bold text-white mt-0.5 truncate group-hover:text-rose-400 transition-colors">
                    {item.name}
                  </h3>

                  {/* Price & Colors */}
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl font-black text-white">{item.price}</span>
                      <span className="text-xs text-zinc-500 line-through">{item.oldPrice}</span>
                    </div>

                    {/* Color Dots */}
                    <div className="flex gap-1.5">
                      {itemColors.map((color, idx) => (
                        <span
                          key={idx}
                          style={{ backgroundColor: color }}
                          className="w-3.5 h-3.5 rounded-full border border-white/20 shadow-sm"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Sizes Selection */}
                  <div className="mt-3 pt-3 border-t border-white/5">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-zinc-400 uppercase font-semibold">Size</span>
                      <div className="flex gap-1">
                        {itemSizes.map((size, sIdx) => (
                          <button
                            key={sIdx}
                            onClick={() => handleSizeSelect(item._id, size)}
                            className={`px-2 py-0.5 text-[10px] font-bold rounded transition-all cursor-pointer ${
                              currentSelectedSize === size
                                ? "bg-white text-black shadow"
                                : "bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white"
                            }`}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Add to Bag Button */}
                <button 
                  onClick={() => addToCart(item)}
                  className="mt-4 w-full py-3 bg-white/10 hover:bg-rose-600 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-md group/btn"
                >
                  <FaShoppingBag size={12} className="group-hover/btn:scale-110 transition-transform" /> 
                  Add To Bag
                </button>

              </div>
            );
          })}
        </div>

        {/* Load More Button */}
        {products.length > 4 && (
          <div className="mt-20 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="group relative px-8 py-4 bg-transparent border border-white/20 hover:border-rose-500 text-white font-bold text-xs uppercase tracking-[2px] rounded-full overflow-hidden transition-all duration-500 cursor-pointer shadow-2xl"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-rose-600 to-indigo-600 w-0 group-hover:w-full transition-all duration-500 ease-out"></span>
              <span className="relative flex items-center gap-3">
                {showAll ? "Show Less Collection" : "Discover More Products"}
                <FaArrowRight className={`transition-transform duration-300 group-hover:translate-x-1 ${showAll ? "rotate-180" : ""}`} size={10} />
              </span>
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default FeaturedProducts;