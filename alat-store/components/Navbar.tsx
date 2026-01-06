"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
         <Image
  src="/images/IMG_5995-removebg-preview.png"
  alt="Alat Stores Logo"
  width={150}
  height={150}
  priority
  className="w-24 md:w-32 h-auto"
/>

          <span className="text-2xl font-extrabold text-purple-700 tracking-wide">
            Alat Stores
          </span>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8 font-medium text-gray-700">
          <li>
            <Link href="#home" className="hover:text-purple-700 transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="#features" className="hover:text-purple-700 transition">
              Why Us
            </Link>
          </li>
          <li>
            <Link href="#products" className="hover:text-purple-700 transition">
              Products
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-purple-700 transition">
              Contact
            </Link>
          </li>
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="https://wa.me/2349055515211?text=Hello%20I%20want%20to%20order"
            className="bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-800 transition"
          >
            Order Now
          </Link>

          <span className="text-lg font-bold text-red-600 animate-pulse">
            SALES 🔥
          </span>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t shadow-sm">
          <ul className="flex flex-col px-6 py-4 gap-4 font-medium text-gray-700">
            <li>
              <Link href="#home" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="#features" onClick={() => setMenuOpen(false)}>
                Why Us
              </Link>
            </li>
            <li>
              <Link href="#products" onClick={() => setMenuOpen(false)}>
                Products
              </Link>
            </li>
            <li>
              <Link
                href="https://wa.me/2349055515211?text=Hello%20I%20want%20to%20order"
                className="bg-purple-700 text-white text-center py-3 rounded-lg"
                onClick={() => setMenuOpen(false)}
              >
                Order Now
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
