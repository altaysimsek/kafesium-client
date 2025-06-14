import { Shield } from "lucide-react";
import { UserDropdown } from "../user-dropdown";

export const Navigation = () => {
    return (
        <nav className="relative z-50 px-6 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Kafesium
              </span>
            </div>
  
            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-300 hover:text-green-400 transition-colors duration-200 font-medium">
                Pricing
              </a>
              <a href="#" className="text-gray-300 hover:text-green-400 transition-colors duration-200 font-medium">
                Leaderboard
              </a>
              <a href="#" className="text-gray-300 hover:text-green-400 transition-colors duration-200 font-medium">
                Teams
              </a>
              <a href="#" className="text-gray-300 hover:text-green-400 transition-colors duration-200 font-medium">
                About
              </a>
            </div>
  
            {/* User Menu or Sign In Button */}
            <UserDropdown />
  
            {/* Mobile Menu Button */}
            <button className="md:hidden text-gray-300 hover:text-green-400 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>
    )
}