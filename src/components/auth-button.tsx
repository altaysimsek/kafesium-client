'use client';
import { redirect } from 'next/navigation';

export function AuthButton() {

  return (
    <button
      onClick={() => redirect(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/steam`)}
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
  );
} 