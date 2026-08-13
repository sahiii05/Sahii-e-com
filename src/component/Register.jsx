import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 px-4 py-16 relative overflow-hidden font-sans">
      
      {/* Background Decorative Glow Effects */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Main Container Card */}
      <div className="relative w-full max-w-xl bg-white/10 backdrop-blur-2xl rounded-3xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] border border-white/20 p-8 sm:p-12 text-white">
        
        {/* Brand Header */}
        <div className="text-center mb-8">
          <span className="uppercase tracking-[8px] text-[10px] font-semibold text-amber-200/90 block mb-2">
            SAHIII • Join Us
          </span>
          <h1 className="text-3xl font-light tracking-wide">Create Account</h1>
          <p className="text-gray-400 text-sm mt-2">Fill in your details to get started.</p>
        </div>

        {/* Register Form */}
        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          
          {/* Email Field */}
          <div>
            <label className="block mb-2 text-xs font-semibold uppercase tracking-wider text-gray-300">
              Email Address
            </label>
            <input 
              type="email" 
              className="w-full bg-black/40 border border-white/10 text-white text-sm rounded-xl px-4 py-3.5 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all duration-300 placeholder:text-gray-500" 
              placeholder="name@example.com" 
              required 
            />
          </div>

          {/* Password Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Password */}
            <div>
              <label className="block mb-2 text-xs font-semibold uppercase tracking-wider text-gray-300">
                Password
              </label>
              <div className="relative">
                <input 
                  type={showPassword ? "text" : "password"} 
                  className="w-full bg-black/40 border border-white/10 text-white text-sm rounded-xl px-4 py-3.5 pr-10 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all duration-300 placeholder:text-gray-500" 
                  placeholder="••••••••" 
                  required 
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white"
                >
                  {showPassword ? (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"/></svg>
                  ) : (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                  )}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block mb-2 text-xs font-semibold uppercase tracking-wider text-gray-300">
                Confirm Password
              </label>
              <div className="relative">
                <input 
                  type={showConfirmPassword ? "text" : "password"} 
                  className="w-full bg-black/40 border border-white/10 text-white text-sm rounded-xl px-4 py-3.5 pr-10 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all duration-300 placeholder:text-gray-500" 
                  placeholder="••••••••" 
                  required 
                />
                <button 
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white"
                >
                  {showConfirmPassword ? (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"/></svg>
                  ) : (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* First & Last Name Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-2 text-xs font-semibold uppercase tracking-wider text-gray-300">
                First Name
              </label>
              <input 
                type="text" 
                className="w-full bg-black/40 border border-white/10 text-white text-sm rounded-xl px-4 py-3.5 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all duration-300 placeholder:text-gray-500" 
                placeholder="John" 
                required 
              />
            </div>
            <div>
              <label className="block mb-2 text-xs font-semibold uppercase tracking-wider text-gray-300">
                Last Name
              </label>
              <input 
                type="text" 
                className="w-full bg-black/40 border border-white/10 text-white text-sm rounded-xl px-4 py-3.5 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all duration-300 placeholder:text-gray-500" 
                placeholder="Doe" 
                required 
              />
            </div>
          </div>

          {/* Phone & Address Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-2 text-xs font-semibold uppercase tracking-wider text-gray-300">
                Phone Number
              </label>
              <input 
                type="tel" 
                className="w-full bg-black/40 border border-white/10 text-white text-sm rounded-xl px-4 py-3.5 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all duration-300 placeholder:text-gray-500" 
                placeholder="9876543210" 
                required 
              />
            </div>
            <div>
              <label className="block mb-2 text-xs font-semibold uppercase tracking-wider text-gray-300">
                Address
              </label>
              <input 
                type="text" 
                className="w-full bg-black/40 border border-white/10 text-white text-sm rounded-xl px-4 py-3.5 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all duration-300 placeholder:text-gray-500" 
                placeholder="Ex. CIDCO" 
                required 
              />
            </div>
          </div>

          {/* Submit Button */}
          <Link to="/login" className="block w-full pt-4">
            <button 
              type="submit" 
              className="w-full py-4 bg-white text-black font-semibold uppercase tracking-[3px] text-xs rounded-xl transition-all duration-300 hover:bg-gray-100 hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] active:scale-[0.98] cursor-pointer"
            >
              Create Account
            </button>
          </Link>
        </form>

        {/* Footer Link */}
        <p className="text-center text-xs text-gray-400 mt-8">
          Already have an account? <Link to="/login" className="text-white font-medium hover:underline">Sign In</Link>
        </p>

      </div>
    </div>
  )
}

export default Register