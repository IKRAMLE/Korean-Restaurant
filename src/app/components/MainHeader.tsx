import React from "react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

export default function MainHeader() {
  return (
    <header className="w-full absolute top-0 left-0 z-10">
      <nav className="flex items-center justify-between px-8 py-4 bg-black ">
        {/* Social Icons */}
        <div className="flex gap-4">
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
          <span className="text-white text-2xl font-bold font-serif tracking-widest select-none">The Pizzeria</span>
        </div>
        {/* Order Online Button */}
        <div className="flex items-center">
          <button className="border border-white text-white px-5 py-2 rounded transition hover:bg-white hover:text-black font-semibold">
            ORDER ONLINE
          </button>
        </div>
      </nav>
    </header>
  );
}
