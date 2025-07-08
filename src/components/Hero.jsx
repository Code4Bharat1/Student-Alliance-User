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

  const nextImage = () => {
    setIndex(([prevIndex]) => [
      (prevIndex + 1) % images.length,
      1,
    ]);
  };

  const prevImage = () => {
    setIndex(([prevIndex]) => [
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
      -1,
    ]);
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="relative w-full h-screen">
        <div className="absolute inset-0 w-full h-full">
          <AnimatePresence initial={false} custom={direction} mode="wait">
  <motion.img
    key={images[currentIndex]}
    src={images[currentIndex]}
    alt={`Slide ${currentIndex + 1}`}
    custom={direction}
    variants={variants}
    initial="enter"
    animate="center"
    exit="exit"
    transition={{
      x: { type: "tween", duration: 0.3 }, // faster slide
      opacity: { duration: 0.3 },          // faster fade
    }}
    className="absolute top-0 left-0 w-full h-full object-center"
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
