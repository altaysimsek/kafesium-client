'use client';
import React from 'react';
import { Shield, Trophy, Users, Zap, Stamp as Steam } from 'lucide-react';
import { useAuth } from '@/contexts/auth-context';

function App() {
  const { user, loading } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 to-black text-white">
      {/* Navbar */}
      <nav className="relative z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              CS2 Arena
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-300 hover:text-green-400 transition-colors duration-200 font-medium">
              Matches
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
          <div className="flex items-center space-x-4">
            {loading ? (
              <div className="animate-pulse h-10 w-24 bg-gray-700 rounded-lg"></div>
            ) : user ? (
              <div className="flex items-center space-x-3">
                {user.image && (
                  <img
                    src={user.image}
                    alt={user.name}
                    className="w-10 h-10 rounded-full"
                  />
                )}
                <span className="text-gray-300">{user.name}</span>
              </div>
            ) : (
              <button
                onClick={() => window.location.href = 'http://localhost:8000/api/auth/steam'}
                className="group relative inline-flex items-center justify-center px-6 py-2 text-sm font-bold text-white bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg hover:from-green-600 hover:to-emerald-600 transform hover:scale-105 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="relative flex items-center space-x-2">
                  <div className="w-5 h-5 bg-white/20 rounded flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-sm flex items-center justify-center">
                      <span className="text-xs font-bold text-gray-800">S</span>
                    </div>
                  </div>
                  <span>Sign in with Steam</span>
                </div>
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-300 hover:text-green-400 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="grid grid-cols-8 gap-8 transform rotate-12 scale-150 opacity-30">
              {Array.from({length: 64}).map((_, i) => (
                <div key={i} className="w-2 h-2 bg-green-500/20 rounded-full"></div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center">
            {/* Main Heading */}
            <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-green-200 to-emerald-300 bg-clip-text text-transparent">
                Dominate
              </span>
              <br />
              <span className="text-white">CS2 Competitive</span>
            </h1>

            {/* Subheading */}
            <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join the ultimate Counter-Strike 2 competitive platform. Play ranked 5v5 matches, 
              climb the leaderboards, and prove your skills against the best players.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-green-500/30 transition-all duration-300 hover:transform hover:scale-105">
                <Trophy className="w-8 h-8 text-green-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Ranked Matches</h3>
                <p className="text-gray-400 text-sm">Competitive 5v5 games with skill-based matchmaking</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-green-500/30 transition-all duration-300 hover:transform hover:scale-105">
                <Users className="w-8 h-8 text-green-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Team Building</h3>
                <p className="text-gray-400 text-sm">Form teams and compete in tournaments</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-green-500/30 transition-all duration-300 hover:transform hover:scale-105">
                <Zap className="w-8 h-8 text-green-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Instant Queuing</h3>
                <p className="text-gray-400 text-sm">Fast matchmaking with low wait times</p>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">15K+</div>
                <div className="text-sm text-gray-400 mt-1">Active Players</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">240K+</div>
                <div className="text-sm text-gray-400 mt-1">Matches Played</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">99.2%</div>
                <div className="text-sm text-gray-400 mt-1">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">~32s</div>
                <div className="text-sm text-gray-400 mt-1">Avg Queue Time</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
      </div>
    </div>
  );
}

export default App;
