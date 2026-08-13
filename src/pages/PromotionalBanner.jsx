import React from "react";
import { FaArrowRight, FaBolt, FaFire, FaPercent, FaShieldAlt } from "react-icons/fa";

const PromotionalBanner = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-zinc-950 via-black to-zinc-900 text-white py-36 border-y border-zinc-800/80">
      
      {/* Background Neon Orbs with Pulsing & Floating Animations */}
      <div className="absolute inset-0 opacity-60 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-rose-600/30 rounded-full blur-[140px] animate-pulse"></div>
        <div className="absolute bottom-10 left-1/4 w-[400px] h-[400px] bg-indigo-600/20 rounded-full blur-[120px] animate-ping" style={{ animationDuration: '8s' }}></div>
        <div className="absolute top-10 right-1/4 w-[450px] h-[450px] bg-amber-500/15 rounded-full blur-[150px]"></div>
      </div>

      {/* Subtle Grid Overlay Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="relative max-w-6xl mx-auto px-6 text-center z-10">
        
        {/* Floating Top Badge */}
        <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-gradient-to-r from-rose-500/10 via-pink-500/10 to-rose-500/10 border border-rose-500/30 text-xs font-black tracking-[4px] uppercase text-rose-400 mb-10 backdrop-blur-xl shadow-[0_0_25px_rgba(244,63,94,0.2)] animate-bounce" style={{ animationDuration: '3s' }}>
          <FaFire className="text-rose-500 text-sm animate-spin" style={{ animationDuration: '6s' }} />
          <span>Exclusive Seasonal Flash Event</span>
          <FaBolt className="text-amber-400 text-sm" />
        </div>

        {/* Main Heading with Layered Gradients & Glow */}
        <div className="relative">
          <h2 className="text-6xl sm:text-7xl md:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-100 to-zinc-500 leading-none select-none drop-shadow-2xl">
            UP TO <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-pink-500 to-amber-400 drop-shadow-[0_0_50px_rgba(244,63,94,0.6)]">50% OFF</span>
          </h2>
          
          {/* Reflection Effect under Heading */}
          <span className="hidden md:block absolute -bottom-10 left-1/2 -translate-x-1/2 text-6xl sm:text-7xl md:text-9xl font-black tracking-tighter text-white/5 blur-sm select-none pointer-events-none scale-y-[-1]">
            UP TO 50% OFF
          </span>
        </div>

        {/* Subtitle */}
        <p className="mt-12 text-zinc-300 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
          Engineered for the modern silhouette. Upgrade your wardrobe with high-end luxury pieces at unprecedented prices.
        </p>

        {/* Feature Highlights Pills */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold uppercase tracking-widest text-zinc-400">
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900/80 border border-zinc-800">
            <FaPercent className="text-rose-400" /> Instant Discount
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900/80 border border-zinc-800">
            <FaShieldAlt className="text-emerald-400" /> 100% Verified Quality
          </span>
        </div>

        {/* Ultra-Modern Interactive CTA Button */}
        <div className="mt-14 flex justify-center">
          <button
            className="group relative px-14 py-7 overflow-hidden rounded-2xl bg-gradient-to-r from-rose-600 via-pink-600 to-rose-700 text-white font-black text-base tracking-[3px] uppercase transition-all duration-500 hover:shadow-[0_0_40px_rgba(244,63,94,0.6)] hover:scale-105 active:scale-95 cursor-pointer border border-rose-400/30"
          >
            {/* Shimmer Light Sweep Effect */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
            
            <span className="relative flex items-center gap-3">
              Claim Your Discount Now
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-2 transition-transform duration-300">
                <FaArrowRight size={12} className="text-white" />
              </div>
            </span>
          </button>
        </div>

      </div>

      {/* Cyberpunk Style Corner Accents */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-rose-500/40 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-rose-500/40 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-rose-500/40 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-rose-500/40 pointer-events-none"></div>
    </section>
  );
};

export default PromotionalBanner;