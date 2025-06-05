"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, Clock } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden h-220">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-gray-800"></div>

      {/* Floating Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-48 h-48 bg-red-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-yellow-400/20 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      {/* Food Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1498654896293-37aacf113fd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
        }}
      ></div>

      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto mt-15">
        <div className="mb-8">
          <h1 
            className="font-[Oswald,sans-serif] text-4xl sm:text-6xl md:text-8xl lg:text-[96px] leading-tight sm:leading-[134.4px] font-medium tracking-normal mb-8 text-white"
          >
            Where Every Bite Tells a Korean Story
          </h1>

          <p 
            className="font-['Source_Sans_Pro',sans-serif] text-base sm:text-lg md:text-xl lg:text-[20px] leading-relaxed sm:leading-[28.05px] font-normal tracking-normal mb-12 max-w-3xl mx-auto text-white"
          >
            Experience the authentic flavors of Korea through our traditional recipes, 
            modern presentation, and warm hospitality that makes every meal unforgettable.
          </p>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {/* Add your stats here if needed */}
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button
            size="lg"
            className="relative overflow-hidden bg-gradient-to-r from-red-700 via-red-600 to-black text-white px-8 sm:px-10 md:px-12 py-4 sm:py-5 text-base sm:text-lg md:text-xl font-bold rounded-full shadow-lg border-none group focus:outline-none focus:ring-4 focus:ring-red-400 transition-all duration-300 hover:from-black hover:to-red-700 hover:scale-105"
          >
            <span className="relative z-10 flex items-center">
              Reserve Your Table
              <ArrowRight className="w-5 h-5 ml-3 transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110" />
            </span>
            <span className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-white transition-opacity duration-300 rounded-full"></span>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="relative overflow-hidden border-2 border-white/60 text-white px-8 sm:px-10 md:px-12 py-4 sm:py-5 text-base sm:text-lg md:text-xl font-bold rounded-full backdrop-blur-md bg-white/10 hover:bg-white/30 hover:text-red-700 hover:border-red-400 shadow-md focus:outline-none focus:ring-4 focus:ring-red-300 transition-all duration-300 group"
          >
            <span className="relative z-10">Explore Menu</span>
            <span className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-white transition-opacity duration-300 rounded-full"></span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
