import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const slides = [
  {
    id: 1,
    title: "NEW COLLECTION",
    subtitle: "Timeless Fashion For Modern Living",
    image:
      "https://plus.unsplash.com/premium_photo-1669703777695-f8052a432411?q=80&w=1920&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "AUTUMN ESSENTIALS",
    subtitle: "Minimal Style • Premium Quality",
    image:
      "https://plus.unsplash.com/premium_photo-1727967292443-92580665bff5?q=80&w=1920&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "URBAN LOOK",
    subtitle: "Designed For Everyday Luxury",
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1920&auto=format&fit=crop",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <section 
      className="relative h-screen w-full overflow-hidden bg-zinc-950 font-sans select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {slides.map((slide, index) => {
        const isActive = current === index;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={slide.image}
                alt={slide.title}
                className={`w-full h-full object-cover transition-transform duration-[7000ms] ease-out ${
                  isActive ? "scale-105" : "scale-100"
                }`}
              />
            </div>

            {/* फोटो के ऊपर की ब्लैक शैडो को पूरी तरह हटा दिया गया है */}
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/70 via-transparent to-transparent"></div>

            <div className="absolute inset-0 flex items-center">
              <div className="max-w-7xl mx-auto w-full px-8 md:px-16 lg:px-24 text-white">
                
                {/* 'SAHIII • Exclusive 2026' वाला बैज यहाँ से हटा दिया गया है */}

                <div className={`overflow-hidden transition-all duration-700 delay-200 ${
                  isActive ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                }`}>
                  <h1 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tight leading-[1.1] text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
                    {slide.title}
                  </h1>
                </div>

                <div className={`overflow-hidden transition-all duration-700 delay-300 ${
                  isActive ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}>
                  <p className="mt-6 text-lg md:text-2xl max-w-xl text-zinc-300 font-light tracking-wide">
                    {slide.subtitle}
                  </p>
                </div>

                <div className={`flex flex-wrap gap-5 mt-10 relative z-30 transition-all duration-700 delay-500 ${
                  isActive ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}>
                  <Link
                    to="/women"
                    className="group relative px-8 py-4 bg-rose-500 text-white text-xs font-bold uppercase tracking-[3px] overflow-hidden transition-all duration-500 hover:shadow-[0_0_35px_rgba(244,63,94,0.5)] active:scale-95 inline-flex items-center justify-center cursor-pointer rounded-2xl"
                  >
                    <span className="relative z-10 transition-transform duration-300 group-hover:scale-105">Shop Women</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-rose-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </Link>

                  <Link
                    to="/men"
                    className="group relative px-8 py-4 bg-zinc-900/80 backdrop-blur-md border border-zinc-700 text-white text-xs font-bold uppercase tracking-[3px] overflow-hidden transition-all duration-500 active:scale-95 inline-flex items-center justify-center cursor-pointer rounded-2xl hover:border-rose-500/50"
                  >
                    <span className="relative z-10 transition-colors duration-300 group-hover:text-rose-400">Shop Men</span>
                    <div className="absolute inset-0 bg-white/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  </Link>
                </div>

              </div>
            </div>
          </div>
        );
      })}

      <div className="absolute bottom-10 left-8 md:left-16 lg:left-24 z-20 flex items-center gap-6">
        <span className="text-xs font-bold tracking-widest text-rose-400">
          0{current + 1}
        </span>
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className="relative h-[3px] w-14 bg-zinc-800 overflow-hidden transition-all duration-300 focus:outline-none cursor-pointer rounded-full"
              aria-label={`Go to slide ${index + 1}`}
            >
              {current === index && (
                <div 
                  className={`absolute inset-0 bg-rose-500 ${isPaused ? 'w-full' : 'animate-[progress_6s_linear_infinite]'}`}
                ></div>
              )}
            </button>
          ))}
        </div>
        <span className="text-xs font-bold tracking-widest text-zinc-600">
          0{slides.length}
        </span>
      </div>

      <div className="absolute bottom-10 right-8 md:right-16 z-20 hidden sm:flex items-center gap-3">
        <button 
          onClick={() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)}
          className="w-12 h-12 rounded-full border border-zinc-800 bg-zinc-900/60 flex items-center justify-center text-zinc-300 backdrop-blur-md transition-all duration-300 hover:bg-rose-500 hover:text-white hover:border-rose-500 cursor-pointer shadow-lg"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
          className="w-12 h-12 rounded-full border border-zinc-800 bg-zinc-900/60 flex items-center justify-center text-zinc-300 backdrop-blur-md transition-all duration-300 hover:bg-rose-500 hover:text-white hover:border-rose-500 cursor-pointer shadow-lg"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <style>{`
        @keyframes progress {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(0%); }
        }
      `}</style>
    </section>
  );
};

export default HeroSlider;