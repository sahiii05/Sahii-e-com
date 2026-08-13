import React, { useState, useRef } from "react";
import { FaArrowRight, FaChevronLeft, FaChevronRight, FaFire, FaTimes, FaStar, FaShoppingCart } from "react-icons/fa";

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

const Categories = () => {
  const scrollRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth / 2;
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-white font-sans overflow-hidden border-t border-b border-zinc-900/80">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[5px] mb-3 px-3.5 py-1.5 rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/20 backdrop-blur-md">
              <FaFire className="text-sm animate-bounce text-rose-500" />
              <span>Curated Luxury Collections</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white uppercase">
              Explore Trending <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-500">Categories</span>
            </h2>
            <p className="text-zinc-400 text-sm font-light mt-2 max-w-lg">
              Click on any category to view multi-angle interactive shots.
            </p>
          </div>

          {/* Scroll Buttons */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => handleScroll("left")}
              className="w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 hover:bg-rose-500 hover:text-white transition-all cursor-pointer"
            >
              <FaChevronLeft size={14} />
            </button>
            <button
              onClick={() => handleScroll("right")}
              className="w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 hover:bg-rose-500 hover:text-white transition-all cursor-pointer"
            >
              <FaChevronRight size={14} />
            </button>
          </div>
        </div>

        {/* Categories Horizontal Scroll */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-none pb-6 pt-2 snap-x snap-mandatory scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {categoriesWithProducts.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                setSelectedCategory(item);
                setActiveImageIndex(0);
              }}
              className="flex-shrink-0 group snap-start cursor-pointer"
            >
              <div className="w-48 md:w-56 bg-zinc-900/80 backdrop-blur-md rounded-3xl p-3.5 border border-zinc-800/80 hover:border-rose-500/60 transition-all duration-500 shadow-2xl hover:shadow-[0_15px_40px_rgba(244,63,94,0.15)] hover:-translate-y-2">
                
                <div className="relative overflow-hidden rounded-2xl aspect-[4/5] bg-zinc-950">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent opacity-80 group-hover:opacity-50 transition-opacity"></div>
                  
                  <span className="absolute bottom-3 left-3 text-[10px] font-black tracking-wider bg-black/60 backdrop-blur-xl text-rose-400 px-3 py-1.5 rounded-xl border border-white/10 shadow-lg">
                    {item.itemCount}
                  </span>
                </div>

                <div className="mt-4 px-1.5 flex items-center justify-between">
                  <div>
                    <h3 className="font-extrabold text-base text-white group-hover:text-rose-400 transition-colors tracking-wide">
                      {item.name}
                    </h3>
                    <p className="text-[11px] text-zinc-400 uppercase tracking-widest mt-0.5 font-medium">360° View Ready</p>
                  </div>
                  <div className="w-9 h-9 rounded-2xl bg-zinc-800/80 group-hover:bg-rose-500 group-hover:text-white flex items-center justify-center text-zinc-400 transition-all duration-300 shadow">
                    <FaArrowRight size={10} className="transform -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Modal / Popup for Products with Multi-Angle View */}
        {selectedCategory && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 overflow-y-auto">
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl max-w-4xl w-full p-6 relative max-h-[90vh] overflow-y-auto">
              
              <button 
                onClick={() => setSelectedCategory(null)}
                className="absolute top-5 right-5 w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-white hover:bg-rose-500 transition-all cursor-pointer z-10"
              >
                <FaTimes />
              </button>

              <div className="mb-6 pr-12">
                <span className="text-xs font-bold uppercase tracking-widest text-rose-400">Interactive 360° Showcase</span>
                <h3 className="text-2xl md:text-3xl font-black text-white mt-1">{selectedCategory.name} Collection</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {selectedCategory.products.map((prod, idx) => (
                  <div key={prod.id} className="bg-zinc-950/80 border border-zinc-800 rounded-2xl p-4 flex flex-col justify-between group relative overflow-hidden">
                    
                    {/* Angle Badge */}
                    <div className="absolute top-6 left-6 z-10 bg-black/70 backdrop-blur-md text-white text-[9px] uppercase tracking-widest px-2.5 py-1 rounded-md border border-white/10">
                      {prod.name.split('(')[1]?.replace(')', '') || 'Angle'}
                    </div>

                    <div>
                      <div className="aspect-[4/5] rounded-xl overflow-hidden mb-3 bg-zinc-900 relative">
                        <img 
                          src={prod.image} 
                          alt={prod.name} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" 
                        />
                      </div>
                      <h4 className="font-bold text-sm text-white pr-2 truncate" title={prod.name}>
                        {prod.name.split(' (')[0]}
                      </h4>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-rose-400 font-extrabold">{prod.price}</span>
                        <span className="flex items-center gap-1 text-xs text-yellow-400 font-bold">
                          <FaStar size={10} /> {prod.rating}
                        </span>
                      </div>
                    </div>
                    
                    <button className="mt-4 w-full py-2.5 bg-zinc-800 hover:bg-rose-500 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2">
                      <FaShoppingCart size={10} /> Add To Cart
                    </button>
                  </div>
                ))}
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Categories;