import React from "react";

export function Footer() {
  return (
    <footer className="w-full text-gray-400 py-8 mt-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} Kafesium. All rights reserved.
        </div>
        <div className="flex space-x-4">
          <a href="/about" className="hover:text-green-400 transition-colors">About</a>
          <a href="/contact" className="hover:text-green-400 transition-colors">Contact</a>
          <a href="/privacy" className="hover:text-green-400 transition-colors">Privacy</a>
        </div>
      </div>
    </footer>
  );
} 