import React, { useState } from "react";
import { FaTimes, FaStar, FaShoppingCart, FaChevronRight } from "react-icons/fa";

const categoriesWithProducts = [
  {
    name: "Sneakers",
    image: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=500",
    itemCount: "Flagship Edition",
    products: [
      { id: 1, name: "Air Max Series (Side Profile)", price: "₹4,999", rating: 4.9, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500" },
      { id: 2, name: "Air Max Series (Top Down View)", price: "₹4,999", rating: 4.9, image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500" },
      { id: 3, name: "Air Max Series (Heel Detail)", price: "₹4,999", rating: 4.9, image: "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?w=500" },
    ]
  },
  {
    name: "Watches",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
    itemCount: "Premium Series",
    products: [
      { id: 1, name: "Classic Chrono (Front Dial)", price: "₹8,499", rating: 4.8, image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500" },
      { id: 2, name: "Classic Chrono (Side Angle)", price: "₹8,499", rating: 4.8, image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=500" },
      { id: 3, name: "Classic Chrono (On Wrist View)", price: "₹8,499", rating: 4.8, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500" },
    ]
  },
  {
    name: "Women",
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=500",
    itemCount: "Designer Wear",
    products: [
      { id: 1, name: "Black Evening Gown (Front Pose)", price: "₹3,999", rating: 4.7, image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500" },
      { id: 2, name: "Black Evening Gown (Side Profile)", price: "₹3,999", rating: 4.7, image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=500" },
      { id: 3, name: "Black Evening Gown (Back Detail)", price: "₹3,999", rating: 4.7, image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500" },
    ]
  },
  {
    name: "Indian Wear",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500",
    itemCount: "Royal Collection",
    products: [
      { id: 1, name: "Banarasi Silk Saree (Full View)", price: "₹7,999", rating: 4.9, image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500" },
      { id: 2, name: "Banarasi Silk Saree (Pallu Detail)", price: "₹7,999", rating: 4.9, image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=500" },
      { id: 3, name: "Banarasi Silk Saree (Blouse Angle)", price: "₹7,999", rating: 4.9, image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=500" },
    ]
  },
  {
    name: "Men",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500",
    itemCount: "Tailored Fit",
    products: [
      { id: 1, name: "Classic Denim Jacket (Front Look)", price: "₹2,499", rating: 4.6, image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500" },
      { id: 2, name: "Classic Denim Jacket (Side Profile)", price: "₹2,499", rating: 4.6, image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=500" },
      { id: 3, name: "Classic Denim Jacket (Back Design)", price: "₹2,499", rating: 4.6, image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500" },
    ]
  },
  {
    name: "Footwear",
    image: "https://images.unsplash.com/photo-1533867617858-e7d97e0afd8b?w=500",
    itemCount: "Leather Series",
    products: [
      { id: 1, name: "Brown Leather Loafer (Side Angle)", price: "₹3,199", rating: 4.8, image: "https://images.unsplash.com/photo-1533867617858-e7d97e0afd8b?w=500" },
      { id: 2, name: "Brown Leather Loafer (Top View)", price: "₹3,199", rating: 4.8, image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=500" },
      { id: 3, name: "Brown Leather Loafer (Sole Detail)", price: "₹3,199", rating: 4.8, image: "https://images.unsplash.com/photo-1614252339460-e1763e0034fc?w=500" },
    ]
  },
  {
    name: "Perfumes",
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=500",
    itemCount: "Luxury Scents",
    products: [
      { id: 1, name: "Oud Noir Parfum (Bottle Front)", price: "₹4,299", rating: 4.9, image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=500" },
      { id: 2, name: "Oud Noir Parfum (Spray Angle)", price: "₹4,299", rating: 4.9, image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=500" },
      { id: 3, name: "Oud Noir Parfum (Box Packaging)", price: "₹4,299", rating: 4.9, image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500" }
    ]
  },
  {
    name: "Eyewear",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500",
    itemCount: "UV Protection",
    products: [
      { id: 1, name: "Classic Wayfarer (Front Frame)", price: "₹1,699", rating: 4.5, image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500" },
      { id: 2, name: "Classic Wayfarer (Side Temple)", price: "₹1,699", rating: 4.5, image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500" },
      { id: 3, name: "Classic Wayfarer (On Model Look)", price: "₹1,699", rating: 4.5, image: "https://images.unsplash.com/photo-1508296695146-257a814070b4?w=500" },
    ]
  },
  {
    name: "Handbags",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500",
    itemCount: "Genuine Leather",
    products: [
      { id: 1, name: "Luxury Tote Bag (Front Look)", price: "₹3,599", rating: 4.7, image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500" },
      { id: 2, name: "Luxury Tote Bag (Top Handle View)", price: "₹3,599", rating: 4.7, image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=500" },
      { id: 3, name: "Luxury Tote Bag (Inside Space)", price: "₹3,599", rating: 4.7, image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500" },
    ]
  },
  {
    name: "Lingerie",
    image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=500",
    itemCount: "Comfort & Style",
    products: [
      { id: 1, name: "Silk Nightwear (Front View)", price: "₹1,499", rating: 4.8, image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=500" },
      { id: 2, name: "Silk Nightwear (Side Lace Detail)", price: "₹1,499", rating: 4.8, image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500" },
      { id: 3, name: "Silk Nightwear (Back Design)", price: "₹1,499", rating: 4.8, image: "https://images.unsplash.com/photo-1516726817505-f5ed825624d8?w=500" },
    ]
  },
  {
    name: "Jewellery",
    image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=500",
    itemCount: "24k Plated",
    products: [
      { id: 1, name: "Gold Pendant Set (Top View)", price: "₹2,199", rating: 4.9, image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=500" },
      { id: 2, name: "Gold Pendant Set (Side Angle)", price: "₹2,199", rating: 4.9, image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500" },
      { id: 3, name: "Gold Pendant Set (Worn Look)", price: "₹2,199", rating: 4.9, image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500" },
    ]
  },
  {
    name: "Cosmetics",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=500",
    itemCount: "Pro Makeup",
    products: [
      { id: 1, name: "Matte Lipstick (Tube Front)", price: "₹899", rating: 4.6, image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500" },
      { id: 2, name: "Matte Lipstick (Color Swatch)", price: "₹899", rating: 4.6, image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=500" },
      { id: 3, name: "Matte Lipstick (Applied Look)", price: "₹899", rating: 4.6, image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=500" },
    ]
  },
  {
    name: "Wallets & Belts",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500",
    itemCount: "Accessories",
    products: [
      { id: 1, name: "Leather Wallet (Closed View)", price: "₹1,299", rating: 4.7, image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500" },
      { id: 2, name: "Leather Wallet (Open Inner View)", price: "₹1,299", rating: 4.7, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500" },
      { id: 3, name: "Leather Wallet (Side Edge View)", price: "₹1,299", rating: 4.7, image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500" },
    ]
  },
  {
    name: "Sports",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500",
    itemCount: "Activewear",
    products: [
      { id: 1, name: "Dry-Fit Gym Tee (Front Fit)", price: "₹1,099", rating: 4.8, image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500" },
      { id: 2, name: "Dry-Fit Gym Tee (Side Profile)", price: "₹1,099", rating: 4.8, image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=500" },
      { id: 3, name: "Dry-Fit Gym Tee (Back Mesh Detail)", price: "₹1,099", rating: 4.8, image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=500" },
    ]
  },
  {
    name: "Kids",
    image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=500",
    itemCount: "Playful Styles",
    products: [
      { id: 1, name: "Denim Dungaree (Front Look)", price: "₹1,499", rating: 4.7, image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=500" },
      { id: 2, name: "Denim Dungaree (Side Angle)", price: "₹1,499", rating: 4.7, image: "https://images.unsplash.com/photo-1503944583220-74d8964d567a?w=500" },
      { id: 3, name: "Denim Dungaree (Action Shot)", price: "₹1,499", rating: 4.7, image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=500" },
    ]
  }
];

const AllCategories = () => {
  // बाय डिफ़ॉल्ट पहली कैटेगरी (Sneakers) सेलेक्टेड रहेगी
  const [selectedCategory, setSelectedCategory] = useState(categoriesWithProducts[0]);

  return (
    <div className="bg-zinc-950 text-white font-sans min-h-screen py-6 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Page Title */}
        <div className="mb-6 border-b border-zinc-800 pb-4">
          <h1 className="text-xl sm:text-2xl font-black uppercase tracking-wider text-white">
            Select <span className="text-yellow-400">Category</span>
          </h1>
          <p className="text-zinc-400 text-xs mt-1">Explore all available collections just like Flipkart</p>
        </div>

        {/* Flipkart Style Vertical Layout Container */}
        <div className="flex flex-col md:flex-row gap-6 items-start">
          
          {/* Left Side: Vertical Categories Sidebar */}
          <div className="w-full md:w-1/4 bg-zinc-900/80 border border-zinc-800 rounded-2xl p-3 shadow-xl overflow-y-auto max-h-[75vh] scrollbar-none">
            <h3 className="text-xs font-bold uppercase tracking-[2px] text-zinc-400 px-3 py-2 mb-2 border-b border-zinc-800">
              Categories
            </h3>
            <div className="flex flex-col gap-1.5">
              {categoriesWithProducts.map((cat, index) => {
                const isSelected = selectedCategory.name === cat.name;
                return (
                  <button
                    key={index}
                    onClick={() => setSelectedCategory(cat)}
                    className={`flex items-center gap-3 w-full p-3 rounded-xl transition-all text-left cursor-pointer group ${
                      isSelected
                        ? "bg-yellow-400 text-black font-extrabold shadow-lg"
                        : "bg-zinc-950/40 hover:bg-zinc-800 text-zinc-300"
                    }`}
                  >
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className={`w-10 h-10 rounded-lg object-cover border ${
                        isSelected ? "border-black" : "border-zinc-700"
                      }`}
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs uppercase tracking-wider truncate font-bold">
                        {cat.name}
                      </h4>
                      <span className={`text-[10px] block truncate ${isSelected ? "text-zinc-900 font-semibold" : "text-zinc-500"}`}>
                        {cat.itemCount}
                      </span>
                    </div>
                    <FaChevronRight className={`text-xs ${isSelected ? "text-black" : "text-zinc-600"}`} />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Side: Products Grid for Selected Category */}
          <div className="w-full md:w-3/4 bg-zinc-900/40 border border-zinc-800 rounded-2xl p-4 sm:p-6 shadow-xl min-h-[75vh]">
            
            {/* Header of Right Content */}
            <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-6">
              <div>
                <span className="text-[10px] font-black uppercase tracking-[3px] text-yellow-400">Showing Products For</span>
                <h2 className="text-lg sm:text-xl font-black text-white mt-0.5">
                  {selectedCategory.name} <span className="text-zinc-500 text-sm font-normal">({selectedCategory.itemCount})</span>
                </h2>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {selectedCategory.products.map((prod) => (
                <div 
                  key={prod.id} 
                  className="bg-zinc-900 border border-zinc-800 hover:border-yellow-400/50 rounded-2xl p-3.5 flex flex-col justify-between group transition-all duration-300 shadow-md"
                >
                  <div>
                    <div className="aspect-[4/5] rounded-xl overflow-hidden mb-3 bg-zinc-950 relative">
                      <div className="absolute top-2 left-2 z-10 bg-black/70 backdrop-blur-md text-white text-[9px] uppercase tracking-wider px-2 py-0.5 rounded border border-white/10">
                        {prod.name.split('(')[1]?.replace(')', '') || 'Angle'}
                      </div>
                      <img 
                        src={prod.image} 
                        alt={prod.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      />
                    </div>
                    <h4 className="font-bold text-xs text-zinc-200 truncate" title={prod.name}>
                      {prod.name.split(' (')[0]}
                    </h4>
                    <div className="flex items-center justify-between mt-2.5">
                      <span className="text-yellow-400 font-black text-sm">{prod.price}</span>
                      <span className="flex items-center gap-1 text-[11px] text-yellow-400 font-bold bg-yellow-400/10 px-2 py-0.5 rounded">
                        <FaStar size={9} /> {prod.rating}
                      </span>
                    </div>
                  </div>
                  
                  <button className="mt-4 w-full py-2.5 bg-zinc-800 hover:bg-yellow-400 hover:text-black text-white text-xs font-black uppercase tracking-wider rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2">
                    <FaShoppingCart size={11} /> Add To Cart
                  </button>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default AllCategories;