'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Dish {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  rating: number;
  spiceLevel?: string;
}

const popularDishes: Dish[] = [
  {
    id: 1,
    name: "Bibimbap",
    description: "Traditional Korean rice bowl with assorted vegetables, beef, and gochujang sauce",
    price: "$16.99",
    image: "/bibimpap.jpg",
    rating: 4.9,
    spiceLevel: "Medium"
  },
  {
    id: 2,
    name: "Korean Fried Chicken",
    description: "Double-fried crispy chicken glazed with sweet and spicy sauce",
    price: "$18.99",
    image: "/korean-fried-chicken.jpg",
    rating: 4.8
  },
  {
    id: 3,
    name: "Bulgogi",
    description: "Marinated beef slices grilled to perfection",
    price: "$22.99",
    image: "/bulgogi.jpg",
    rating: 4.9
  },
  {
    id: 4,
    name: "Tteokbokki",
    description: "Spicy rice cakes with fish cakes in sweet and spicy sauce",
    price: "$12.99",
    image: "/tteokbokki.jpg",
    rating: 4.7,
    spiceLevel: "Hot"
  },
  {
    id: 5,
    name: "Kimchi Stew",
    description: "Spicy fermented kimchi soup with pork and tofu",
    price: "$14.99",
    image: "/kimchi-stew.jpg",
    rating: 4.8,
    spiceLevel: "Hot"
  },
  {
    id: 6,
    name: "Japchae",
    description: "Stir-fried glass noodles with vegetables and beef in sesame oil",
    price: "$15.99",
    image: "/japchae.jpg",
    rating: 4.7
  },
  {
    id: 7,
    name: "Haemul Pajeon",
    description: "Savory seafood and green onion pancake",
    price: "$13.99",
    image: "/haemul-pajeon.jpg",
    rating: 4.6
  },
  {
    id: 8,
    name: "Sundubu Jjigae",
    description: "Spicy soft tofu stew with seafood and vegetables",
    price: "$14.99",
    image: "/sundubu-Jjigae.jpg",
    rating: 4.8,
    spiceLevel: "Hot"
  }
];

const PopularDishes = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const newScrollLeft = direction === 'left' 
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % popularDishes.length;
        if (scrollContainerRef.current) {
          scrollContainerRef.current.scrollTo({
            left: nextIndex * 324, // 300px card width + 24px gap
            behavior: 'smooth'
          });
        }
        return nextIndex;
      });
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-red-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Korean Dishes</h2>
          <p className="text-lg text-gray-600">Experience authentic Korean flavors</p>
        </motion.div>

        <div 
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Scroll Buttons */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-all duration-300"
          >
            <ChevronLeft className="h-6 w-6 text-red-600" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-all duration-300"
          >
            <ChevronRight className="h-6 w-6 text-red-600" />
          </button>

          {/* Horizontal Scroll Container */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-6 pb-8 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {popularDishes.map((dish, index) => (
              <motion.div
                key={dish.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-none w-[300px] snap-center"
              >
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative h-48">
                    <Image
                      src={dish.image}
                      alt={dish.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-red-600">
                      {dish.rating} ★
                    </div>
                    {dish.spiceLevel && (
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-red-600">
                        {dish.spiceLevel} 🔥
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{dish.name}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{dish.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold text-red-600">{dish.price}</span>
                      <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-300 text-sm">
                        Order Now
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Progress Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {popularDishes.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'w-8 bg-red-600' : 'w-2 bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default PopularDishes;
