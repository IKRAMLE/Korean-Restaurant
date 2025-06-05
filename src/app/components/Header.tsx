"use client";

import React, { useState } from "react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import Link from "next/link";

export default function MainHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full absolute top-0 left-0 z-10">
      <nav className="flex items-center justify-between px-8 py-4 bg-transparent md:px-[140px] sm:px-[140px]">
        {/* Social Icons */}
        <div className="hidden md:flex gap-4">
          <a href="#" aria-label="Twitter" className="hover:opacity-80">
            <FaTwitter size={24} className="text-white" />
          </a>
          <a href="#" aria-label="Facebook" className="hover:opacity-80">
            <FaFacebook size={24} className="text-white" />
          </a>
          <a href="#" aria-label="Instagram" className="hover:opacity-80">
            <FaInstagram size={24} className="text-white" />
          </a>
        </div>
        {/* Centered Brand */}
        <div className="flex-1 flex justify-center">
          <span className="text-white text-2xl md:text-3xl font-bold font-['Playfair_Display'] tracking-wider select-none italic"> Bibimpap </span>
        </div>
        {/* Order Online Button */}
        <div className="hidden md:flex items-center">
          <button className="border border-white text-white px-3 py-1.5 md:px-5 md:py-2 rounded transition hover:bg-white hover:text-black font-semibold text-sm md:text-base">
            ORDER ONLINE
          </button>
        </div>
      </nav>

      {/* Navigation Links */}
      <div className="bg-transparent">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-center">
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <Link 
                href="/" 
                className="text-white hover:text-gray-700 transition font-['Source_Sans_Pro'] text-[20px] leading-[40px] font-normal tracking-normal"
              >
                Home
              </Link>
              <Link 
                href="/menu" 
                className="text-white hover:text-gray-700 transition font-['Source_Sans_Pro'] text-[20px] leading-[40px] font-normal tracking-normal"
              >
                Our Menu
              </Link>
              <Link 
                href="/about" 
                className="text-white hover:text-gray-700 transition font-['Source_Sans_Pro'] text-[20px] leading-[40px] font-normal tracking-normal"
              >
                About
              </Link>
              <Link 
                href="/offers" 
                className="text-white hover:text-gray-700 transition font-['Source_Sans_Pro'] text-[20px] leading-[40px] font-normal tracking-normal"
              >
                Offers
              </Link>
              <Link 
                href="/contact" 
                className="text-white hover:text-gray-700 transition font-['Source_Sans_Pro'] text-[20px] leading-[40px] font-normal tracking-normal"
              >
                Contact
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white hover:text-gray-700 focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden fixed inset-x-0 top-[120px] w-full bg-black py-4 px-6 shadow-lg z-50">
              <div className="flex flex-col space-y-4 max-h-[calc(100vh-120px)] overflow-y-auto">
                <Link 
                  href="/" 
                  className="text-white hover:text-gray-700 transition font-['Source_Sans_Pro'] text-[20px] leading-[40px] font-normal tracking-normal"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  href="/menu" 
                  className="text-white hover:text-gray-700 transition font-['Source_Sans_Pro'] text-[20px] leading-[40px] font-normal tracking-normal"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Our Menu
                </Link>
                <Link 
                  href="/about" 
                  className="text-white hover:text-gray-700 transition font-['Source_Sans_Pro'] text-[20px] leading-[40px] font-normal tracking-normal"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link 
                  href="/offers" 
                  className="text-white hover:text-gray-700 transition font-['Source_Sans_Pro'] text-[20px] leading-[40px] font-normal tracking-normal"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Offers
                </Link>
                <Link 
                  href="/contact" 
                  className="text-white hover:text-gray-700 transition font-['Source_Sans_Pro'] text-[20px] leading-[40px] font-normal tracking-normal"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                {/* Mobile Social Icons */}
                <div className="flex gap-6 pt-4 border-t border-gray-700">
                  <a href="#" aria-label="Twitter" className="hover:opacity-80">
                    <FaTwitter size={24} className="text-white" />
                  </a>
                  <a href="#" aria-label="Facebook" className="hover:opacity-80">
                    <FaFacebook size={24} className="text-white" />
                  </a>
                  <a href="#" aria-label="Instagram" className="hover:opacity-80">
                    <FaInstagram size={24} className="text-white" />
                  </a>
                </div>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
