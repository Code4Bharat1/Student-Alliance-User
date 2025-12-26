"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

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

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
    scale: 1.05,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: "spring", stiffness: 280, damping: 28 },
      opacity: { duration: 0.5 },
      scale: { duration: 0.5 },
    },
  },
  exit: (direction) => ({
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0,
    scale: 0.95,
    transition: {
      x: { type: "spring", stiffness: 280, damping: 28 },
      opacity: { duration: 0.4 },
      scale: { duration: 0.4 },
    },
  }),
};

const Hero = () => {
  const [[currentIndex, direction], setIndex] = useState([0, 1]);
  const [isMobile, setIsMobile] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const checkIfMobile = () => {
        setIsMobile(window.innerWidth <= 768);
      };

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


  
  const goToSlide = useCallback((index) => {
    setIndex(([prevIndex]) => [index, index > prevIndex ? 1 : -1]);
  }, []);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(nextImage, 5000);
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

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section 
      className="relative w-full h-[60vh] md:h-screen overflow-hidden"
      style={{ background: "linear-gradient(to bottom, #2A1B8F, #1E1E1E)" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="absolute inset-0 w-full h-full">
  <AnimatePresence initial={false}>
    <motion.img
      key={currentImages[currentIndex]}
      src={currentImages[currentIndex]}
      alt={`Slide ${currentIndex + 1}`}
      className="absolute inset-0 w-full h-full object-cover"
      initial={{ opacity: 0, x: direction > 0 ? 40 : -40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: direction > 0 ? -40 : 40 }}
      transition={{
        duration: 0.6,
        ease: "easeInOut",
      }}
      loading={currentIndex === 0 ? "eager" : "lazy"}

    />
  </AnimatePresence>

  {/* Gradient Overlay */}
  <div
    className="absolute inset-0 z-10 pointer-events-none"
    style={{
      background:
        "linear-gradient(to top, rgba(42, 27, 143, 0.6), transparent, rgba(42, 27, 143, 0.2))",
    }}
  />
</div>


      {/* Navigation Controls */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0.3 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 flex items-center justify-between px-4 md:px-8 z-10 pointer-events-none"
      >
        <motion.button
          onClick={prevImage}
          whileHover={{ scale: 1.1, x: -5 }}
          whileTap={{ scale: 0.95 }}
          className="pointer-events-auto bg-white/90 backdrop-blur-sm hover:bg-white rounded-full p-3 md:p-4 shadow-xl hover:shadow-2xl transition-all duration-300 group"
          style={{ border: "1px solid #E0E0E0" }}
          aria-label="Previous slide"
        >
          <ChevronLeft 
            className="h-5 w-5 md:h-6 md:w-6 transition-colors" 
            style={{ color: "#2A1B8F" }}
            onMouseEnter={(e) => e.currentTarget.style.color = "#1FA55B"}
            onMouseLeave={(e) => e.currentTarget.style.color = "#2A1B8F"}
          />
        </motion.button>

        <motion.button
          onClick={nextImage}
          whileHover={{ scale: 1.1, x: 5 }}
          whileTap={{ scale: 0.95 }}
          className="pointer-events-auto bg-white/90 backdrop-blur-sm hover:bg-white rounded-full p-3 md:p-4 shadow-xl hover:shadow-2xl transition-all duration-300 group"
          style={{ border: "1px solid #E0E0E0" }}
          aria-label="Next slide"
        >
          <ChevronRight 
            className="h-5 w-5 md:h-6 md:w-6 transition-colors" 
            style={{ color: "#2A1B8F" }}
            onMouseEnter={(e) => e.currentTarget.style.color = "#1FA55B"}
            onMouseLeave={(e) => e.currentTarget.style.color = "#2A1B8F"}
          />
        </motion.button>
      </motion.div>

      {/* Play/Pause Button */}
      <motion.button
        onClick={togglePlayPause}
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="absolute top-4 right-4 md:top-8 md:right-8 z-20 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full p-2 md:p-3 shadow-xl hover:shadow-2xl transition-all duration-300"
        style={{ border: "1px solid #E0E0E0" }}
        aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
      >
        {isPlaying ? (
          <Pause className="h-5 w-5 md:h-6 md:w-6" style={{ color: "#E63946" }} />
        ) : (
          <Play className="h-5 w-5 md:h-6 md:w-6" style={{ color: "#1FA55B" }} />
        )}
      </motion.button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2 md:gap-3">
        {currentImages.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="relative transition-all duration-300 rounded-full overflow-hidden"
            style={{
              width: index === currentIndex ? (isMobile ? "2.5rem" : "3rem") : (isMobile ? "0.5rem" : "0.625rem"),
              height: isMobile ? "0.5rem" : "0.625rem",
              backgroundColor: index === currentIndex ? "white" : "rgba(255, 255, 255, 0.4)",
            }}
            aria-label={`Go to slide ${index + 1}`}
          >
            {index === currentIndex && (
              <motion.div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to right, #1FA55B, #2A1B8F, #E63946)" }}
                initial={{ width: "0%" }}
                animate={{ width: isPlaying ? "100%" : "100%" }}
                transition={{ duration: isPlaying ? 5 : 0, ease: "linear" }}
              />
            )}
          </motion.button>
        ))}
      </div>

      {/* Slide Counter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
        className="absolute top-6 left-6 md:top-8 md:left-8 z-20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm md:text-base font-semibold shadow-lg"
        style={{ backgroundColor: "rgba(42, 27, 143, 0.9)", border: "1px solid #2A1B8F" }}
      >
        {currentIndex + 1} / {currentImages.length}
      </motion.div>

     
    
    </section>
  );
};

export default Hero;