import React from "react";

export function Footer() {
  return (
    <footer className="w-full text-gray-400 py-8 mt-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} Kafesium. Tüm hakları saklıdır.
        </div>
        <div className="flex space-x-4">
          <a href="/about" className="hover:text-green-400 transition-colors">Hakkında</a>
          <a href="/contact" className="hover:text-green-400 transition-colors">İletişim</a>
          <a href="/privacy" className="hover:text-green-400 transition-colors">Gizlilik</a>
        </div>
      </div>
    </footer>
  );
} 