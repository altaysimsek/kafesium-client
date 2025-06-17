'use client';
import { redirect } from 'next/navigation';
import { useAuth } from '@/contexts/auth-context';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

export function UserDropdown() {
  const { user } = useAuth();

  if (user) {
    return (
      <div className="flex items-center space-x-3 group relative">
        <div className="flex items-center space-x-2 cursor-pointer">
          {user.steamProfile.avatar ? (
            <Image
              src={user.steamProfile.avatar}
              alt={user.name}
              className="w-10 h-10 rounded-full border-2 border-green-500"
              width={40}
              height={40}
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
              <span className="text-lg font-semibold text-gray-300">
                {user.name?.charAt(0).toUpperCase()}
              </span>
            </div>
          )}
          <span className="text-gray-300">{user.name}</span>
          <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-green-400 transition-colors" />
        </div>

        {/* Dropdown Menu */}
        <div className="absolute top-full right-0 mt-2 w-48 bg-zinc-800 rounded-lg shadow-lg border border-zinc-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
          <div className="py-2">
            <a href="/profile" className="block px-4 py-2 text-sm text-gray-300 hover:bg-zinc-700 hover:text-green-400 transition-colors">
              Profil
            </a>
            <a href="/settings" className="block px-4 py-2 text-sm text-gray-300 hover:bg-zinc-700 hover:text-green-400 transition-colors">
              Ayarlar
            </a>
            <div className="border-t border-zinc-700 my-1"></div>
            <button
              onClick={() => redirect(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/logout`)}
              className="w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-zinc-700 hover:text-red-300 transition-colors"
            >
              Çıkış Yap
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <button
      onClick={() => redirect(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/steam`)}
      className="group relative inline-flex items-center justify-center px-6 py-2 text-sm font-bold text-white bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg hover:from-green-600 hover:to-emerald-600 transform hover:scale-105 transition-all duration-300 cursor-pointer"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
      <div className="relative flex items-center space-x-2">
        <Image 
          src="/steam-logo.webp" 
          alt="Steam Logo" 
          width={20} 
          height={20}
          className="w-5 h-5"
        />
        <span>Sign in with Steam</span>
      </div>
    </button>
  );
} 