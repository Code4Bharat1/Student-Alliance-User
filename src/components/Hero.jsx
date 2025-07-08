"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import WhatsAppWidget from "./WhatsApp/WhatApp";

const images = [
  "/gallery/hero1.jpg",
  "/gallery/hero2.jpg",
  "/gallery/hero3.jpg",
  "/gallery/hero4.jpg",
  "/gallery/hero5.jpg",
];

const Respimages = [
  "/gallery/h1.png",
  "/gallery/h2.png",
  "/gallery/h3.png",
  "/gallery/h4.png",
  "/gallery/h5.png",
]; 

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
    zIndex: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    zIndex: 1,
  },
  exit: (direction) => ({
    x: direction < 0 ? 100 : -100,
    opacity: 0,
    zIndex: 0,
  }),
};

const Hero = () => {
  const [[currentIndex, direction], setIndex] = useState([0, 1]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if window is defined (to avoid SSR issues)
    if (typeof window !== 'undefined') {
      const checkIfMobile = () => {
        setIsMobile(window.innerWidth <= 768); // 768px is common breakpoint for mobile
      };
      
      // Initial check
      checkIfMobile();
      
      // Add event listener for window resize
      window.addEventListener('resize', checkIfMobile);
      
      // Cleanup
      return () => window.removeEventListener('resize', checkIfMobile);
    }
  }, []);

  const nextImage = () => {
    const currentImages = isMobile ? Respimages : images;
    setIndex(([prevIndex]) => [
      (prevIndex + 1) % currentImages.length,
      1,
    ]);
  };

  const prevImage = () => {
    const currentImages = isMobile ? Respimages : images;
    setIndex(([prevIndex]) => [
      prevIndex === 0 ? currentImages.length - 1 : prevIndex - 1,
      -1,
    ]);
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 4000);
    return () => clearInterval(interval);
  }, [isMobile]); // Add isMobile to dependency array

  return (
    <>
      <section className="relative w-full h-[60vh] md:h-screen">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.img
              key={isMobile ? Respimages[currentIndex] : images[currentIndex]}
              src={isMobile ? Respimages[currentIndex] : images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "tween", duration: 0.3 },
                opacity: { duration: 0.3 },
              }}
              className="absolute top-0 left-0 w-full h-full object-cover object-center"
            />
          </AnimatePresence>
        </div>

        {/* Arrow Controls */}
        <div className="absolute inset-0 flex items-center justify-between px-4 z-10">
          <button
            onClick={prevImage}
            className="bg-white/70 hover:bg-white rounded-full p-2 shadow-md"
          >
            <ChevronLeftIcon className="h-6 w-6 text-gray-700" />
          </button>
          <button
            onClick={nextImage}
            className="bg-white/70 hover:bg-white rounded-full p-2 shadow-md"
          >
            <ChevronRightIcon className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </section>

      <WhatsAppWidget />
    </>
  );
};

export default Hero;