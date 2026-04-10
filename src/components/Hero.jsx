"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from 'next/image'

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

const slides = [
  {
    tagline: "Empowering Future Leaders",
    headline: "Transform Education\nWith Technology",
    description:
      "Interactive panels, 3D printers, and STEM kits designed to make learning engaging, creative, and future-ready.",
    cta: { label: "Explore Products", href: "/Prod" },
    secondary: { label: "Get in Touch", href: "/getintouch" },
  },
  {
    tagline: "Interactive Learning",
    headline: "Smart Classrooms\nStart Here",
    description:
      "Discover our range of Interactive Flat Panel Displays that bring lessons to life with touch-enabled technology.",
    cta: { label: "View IFPDs", href: "/Prod" },
    secondary: { label: "Shop Now", href: "/shop1" },
  },
  {
    tagline: "Innovation in 3D",
    headline: "Build, Create,\nInnovate",
    description:
      "Professional-grade 3D printers for education — from prototyping to creative projects, bring ideas into reality.",
    cta: { label: "3D Printers", href: "/printer" },
    secondary: { label: "STEM Kits", href: "/kits" },
  },
  {
    tagline: "STEM & Robotics",
    headline: "Hands-On Learning\nFor Every Student",
    description:
      "Comprehensive STEM and Robotics kits that teach coding, engineering, and problem-solving through play.",
    cta: { label: "Explore Kits", href: "/kits" },
    secondary: { label: "Learn More", href: "/about" },
  },
  {
    tagline: "Trusted Nationwide",
    headline: "Pan-India\nEdTech Partner",
    description:
      "Serving 500+ institutions across India with world-class educational technology and unmatched support.",
    cta: { label: "Our Story", href: "/about" },
    secondary: { label: "Contact Us", href: "/getintouch" },
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPlaying(true);
    }, 3000); // start after 3 sec

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const checkIfMobile = () => setIsMobile(window.innerWidth <= 768);
      checkIfMobile();
      window.addEventListener("resize", checkIfMobile);
      return () => window.removeEventListener("resize", checkIfMobile);
    }
  }, []);

  const currentImages = isMobile ? Respimages : images;

  const nextImage = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % currentImages.length);
  }, [currentImages.length]);

  const prevImage = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? currentImages.length - 1 : prevIndex - 1
    );
  }, [currentImages.length]);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(nextImage, 6000);
    return () => clearInterval(interval);
  }, [isPlaying, nextImage]);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [prevImage, nextImage]);

  const slide = slides[currentIndex] || slides[0];

  return (
    <section className="relative w-full h-[85vh] md:h-[92vh] overflow-hidden bg-bg-primary mt-9 ">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentImages[currentIndex]}

            className="absolute inset-0 w-full h-full"
            // initial={{ opacity: 0, scale: 1.1 }}
            // animate={{ opacity: 1, scale: 1 }}
            // exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <Image
              src={currentImages[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              fill
              className="object-contain"
              priority={currentIndex === 0}
              fetchPriority="high"
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>

        {/* Dark Overlay */}
        {/* <div className="hero-overlay absolute inset-0 z-[1]" /> */}

        {/* Bottom gradient for depth */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/40 to-transparent z-[1]" />
      </div>

      {/* Text Content */}


      {/* Navigation Arrows */}
      <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4 md:px-8 z-10 pointer-events-none">
        <motion.button
          onClick={prevImage}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="pointer-events-auto bg-black backdrop-blur-md hover:bg-white/20 rounded-full p-3 transition-all duration-300 border border-white/20"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5 text-white" />
        </motion.button>

        <motion.button
          onClick={nextImage}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="pointer-events-auto bg-black  backdrop-blur-md hover:bg-white/20 rounded-full p-3 transition-all duration-300 border border-white/20"
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5 text-white" />
        </motion.button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {currentImages.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsPlaying(false);
              setCurrentIndex(index);
            }}
            className={`rounded-full transition-all duration-500 ${index === currentIndex
              ? "w-10 h-2.5 bg-white"
              : "w-2.5 h-2.5 bg-white/40 hover:bg-white/60"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
