import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 px-4 py-12 relative overflow-hidden font-sans">
      
      {/* Background Decorative Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Main Container Card */}
      <div className="relative w-full max-w-md bg-white/10 backdrop-blur-2xl rounded-3xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] border border-white/20 p-8 sm:p-10 text-white">
        
        {/* Brand Header */}
        <div className="text-center mb-8">
          <span className="uppercase tracking-[8px] text-[10px] font-semibold text-amber-200/90 block mb-2">
            SAHIII • Welcome Back
          </span>
          <h1 className="text-3xl font-light tracking-wide">Member Login</h1>
          <p className="text-gray-400 text-sm mt-2">Please enter your details to sign in.</p>
        </div>

        {/* Login Form */}
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          
          {/* Email Field */}
          <div>
            <label className="block mb-2 text-xs font-semibold uppercase tracking-wider text-gray-300">
              Email Address
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              <input 
                type="email" 
                className="w-full bg-black/40 border border-white/10 text-white text-sm rounded-xl pl-11 pr-4 py-3.5 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all duration-300 placeholder:text-gray-500" 
                placeholder="name@example.com" 
                required 
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300">
                Password
              </label>
              <a href="#" className="text-xs text-gray-400 hover:text-white transition-colors duration-200">
                Forgot password?
              </a>
            </div>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </span>
              <input 
                type={showPassword ? "text" : "password"} 
                className="w-full bg-black/40 border border-white/10 text-white text-sm rounded-xl pl-11 pr-12 py-3.5 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all duration-300 placeholder:text-gray-500" 
                placeholder="••••••••" 
                required 
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-white transition-colors"
              >
                {showPassword ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Remember & Terms Checkbox */}
          <div className="flex items-center">
            <input 
              id="remember-alternative" 
              type="checkbox" 
              className="w-4 h-4 rounded border-white/20 bg-black/40 text-white focus:ring-0 focus:ring-offset-0 cursor-pointer accent-white" 
              required 
            />
            <label htmlFor="remember-alternative" className="ms-3 text-sm text-gray-300 select-none cursor-pointer">
              I agree with the <a href="#" className="text-white underline hover:text-amber-200 transition-colors">terms and conditions</a>.
            </label>
          </div>

          {/* Submit Button */}
          <Link to="/" className="block w-full pt-2">
            <button 
              type="submit" 
              className="w-full py-4 bg-white text-black font-semibold uppercase tracking-[3px] text-xs rounded-xl transition-all duration-300 hover:bg-gray-100 hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] active:scale-[0.98] cursor-pointer"
            >
              Sign In
            </button>
          </Link>
        </form>

        {/* Footer Link to Register */}
        <p className="text-center text-xs text-gray-400 mt-8">
          Don't have an account?{" "}
          <Link to="/register" className="text-white font-medium cursor-pointer hover:underline">
            Register here
          </Link>
        </p>

      </div>
    </div>
  )
}

export default Login