"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";

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
  const [[currentIndex, direction], setIndex] = useState([0, 1]);
  const [isMobile, setIsMobile] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

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
    setIndex(([prevIndex]) => [(prevIndex + 1) % currentImages.length, 1]);
  }, [currentImages.length]);

  const prevImage = useCallback(() => {
    setIndex(([prevIndex]) => [
      prevIndex === 0 ? currentImages.length - 1 : prevIndex - 1,
      -1,
    ]);
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
    <section className="relative w-full h-[85vh] md:h-[92vh] overflow-hidden bg-bg-primary">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence initial={false}>
          <motion.img
            key={currentImages[currentIndex]}
            src={currentImages[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            loading={currentIndex === 0 ? "eager" : "lazy"}
          />
        </AnimatePresence>

        {/* Dark Overlay */}
        <div className="hero-overlay absolute inset-0 z-[1]" />

        {/* Bottom gradient for depth */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/40 to-transparent z-[1]" />
      </div>

      {/* Text Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <div className="max-w-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {/* Tagline */}
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border border-white/20 bg-white/10 backdrop-blur-sm text-white"
                >
                  <span className="w-2 h-2 rounded-full bg-brand-secondary animate-pulse" />
                  {slide.tagline}
                </motion.span>

                {/* Headline */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight mb-6 whitespace-pre-line"
                  style={{ textShadow: "0 2px 20px rgba(0,0,0,0.3)" }}
                >
                  {slide.headline}
                </motion.h1>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-base sm:text-lg text-white/80 mb-8 leading-relaxed max-w-lg"
                >
                  {slide.description}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-wrap gap-4"
                >
                  <Link href={slide.cta.href}>
                    <motion.button
                      whileHover={{ scale: 1.04, y: -2 }}
                      whileTap={{ scale: 0.97 }}
                      className="px-7 py-3.5 rounded-xl text-white font-semibold text-sm sm:text-base flex items-center gap-2 transition-all duration-300"
                      style={{
                        backgroundImage: "var(--brand-gradient)",
                        boxShadow: "0 8px 30px rgba(42, 27, 143, 0.35)",
                      }}
                    >
                      {slide.cta.label}
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </Link>
                  <Link href={slide.secondary.href}>
                    <motion.button
                      whileHover={{ scale: 1.04, y: -2 }}
                      whileTap={{ scale: 0.97 }}
                      className="px-7 py-3.5 rounded-xl text-white font-semibold text-sm sm:text-base border border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
                    >
                      {slide.secondary.label}
                    </motion.button>
                  </Link>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4 md:px-8 z-10 pointer-events-none">
        <motion.button
          onClick={prevImage}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="pointer-events-auto bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-full p-3 transition-all duration-300 border border-white/20"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5 text-white" />
        </motion.button>

        <motion.button
          onClick={nextImage}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="pointer-events-auto bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-full p-3 transition-all duration-300 border border-white/20"
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
              setIndex(([prev]) => [index, index > prev ? 1 : -1]);
            }}
            className={`rounded-full transition-all duration-500 ${
              index === currentIndex
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
