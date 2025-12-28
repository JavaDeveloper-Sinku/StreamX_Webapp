"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-2xl font-extrabold text-red-600 tracking-wider">
          StreamX
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-300 font-medium">
          <li className="hover:text-white cursor-pointer">Home</li>
          <li className="hover:text-white cursor-pointer">Movies</li>
          <li className="hover:text-white cursor-pointer">Series</li>
          <li className="hover:text-white cursor-pointer">Live</li>
          <li className="hover:text-white cursor-pointer">Plans</li>
        </ul>

        {/* Right Section */}
        <div className="hidden md:flex items-center gap-4">
          <input
            type="text"
            placeholder="Search..."
            className="bg-zinc-900 border border-gray-700 px-3 py-1 rounded-md focus:outline-none text-sm"
          />
          <button className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-md font-semibold">
            Login
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="text-white text-2xl md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-white/10">
          <ul className="flex flex-col gap-4 px-6 py-4 text-gray-300">
            <li className="hover:text-white">Home</li>
            <li className="hover:text-white">Movies</li>
            <li className="hover:text-white">Series</li>
            <li className="hover:text-white">Live</li>
            <li className="hover:text-white">Plans</li>

            <input
              type="text"
              placeholder="Search..."
              className="bg-zinc-900 border border-gray-700 px-3 py-2 rounded-md focus:outline-none"
            />

            <button className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-md font-semibold">
              Login
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
}
