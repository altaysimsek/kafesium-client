import React from 'react';
import { Trophy, Users, Zap } from 'lucide-react';
import Image from 'next/image';
import { WorldMapWithMarkers } from '@/components/worldmapwithmarkers';

export const Landing = () => {
    return (
      <>
        <div className="relative overflow-hidden py-6">
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

              {/* Server Locations */}
              <section className="relative w-screen left-1/2 right-1/2 -mx-[50vw] min-h-[600px] flex flex-col items-center justify-center mt-20 overflow-hidden">
                <h2 className="text-3xl font-bold mb-2 text-white z-10">Locations</h2>
                <p className="text-gray-400 mb-8 z-10">Our game server locations around the world</p>
                <div className="absolute inset-0 w-full h-full pointer-events-none select-none" aria-hidden="true"></div>
                <div className="w-full z-10">
                  <WorldMapWithMarkers />
                </div>
              </section>
            </div>
          </div>
        </div>
      </>
    );
  }
  