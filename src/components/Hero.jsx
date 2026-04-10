"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const images = [
  "/gallery/hero1.jpg",
  "/gallery/hero2.jpg",
  "/gallery/hero3.jpg",
  "/gallery/hero4.jpg",
  "/gallery/hero5.jpg",
];

const Respimages = [
  "/gallery/h1.jpg",
  "/gallery/h2.jpg",
  "/gallery/h3.jpg",
  "/gallery/h4.jpg",
  "/gallery/h5.jpg",
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => setIsMobile(window.innerWidth <= 768);
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const currentImages = isMobile ? Respimages : images;

  // autoplay (clean)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % currentImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [currentImages.length]);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % currentImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      (prev - 1 + currentImages.length) % currentImages.length
    );
  };

  return (
    <section className="relative w-full h-[50vh] sm:h-[60vh] md:h-[92vh] overflow-hidden mt-[0px] sm:mt-[72px] md:mt-[10px]">

      {/* Image */}
      <div className="absolute inset-0">
        <Image
          src={currentImages[currentIndex]}
          alt="hero"
          fill
          priority={currentIndex === 0}
          className="object-contain transition-opacity duration-700"
        />
      </div>

      {/* Arrows */}
      <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4 md:px-8 z-20">
        <button
          onClick={prevImage}
          className="bg-black/70 hover:bg-white/20 rounded-full p-3 transition"
        >
          <ChevronLeft className="h-5 w-5 text-white" />
        </button>

        <button
          onClick={nextImage}
          className="bg-black/70 hover:bg-white/20 rounded-full p-3 transition"
        >
          <ChevronRight className="h-5 w-5 text-white" />
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {currentImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`rounded-full ${i === currentIndex
              ? "w-8 h-2 bg-white"
              : "w-2 h-2 bg-white/40"
              }`}
          />
        ))}
      </div>
    </section>
  );
};

export default React.memo(Hero);