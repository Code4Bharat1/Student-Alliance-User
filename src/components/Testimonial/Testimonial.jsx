"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaQuoteLeft,
  FaStar,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import { testimonials } from "./data";

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    const updateCardsPerPage = () => {
      if (window.innerWidth < 768) {
        setCardsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerPage(2);
      } else {
        setCardsPerPage(3);
      }
    };

    window.addEventListener("resize", updateCardsPerPage);
    updateCardsPerPage();

    return () => window.removeEventListener("resize", updateCardsPerPage);
  }, []);

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, cardsPerPage, isAutoPlay]);

  const handlePrev = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - cardsPerPage : prev - cardsPerPage,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev + cardsPerPage >= testimonials.length ? 0 : prev + cardsPerPage,
    );
  };

  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + cardsPerPage,
  );

  return (
    <div className="relative min-h-screen bg-bg-section py-20 px-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-brand-primary/20 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div
        className="absolute bottom-20 right-10 w-72 h-72 bg-brand-secondary/20 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-block mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-text-heading font-semibold text-sm uppercase tracking-wider bg-bg-badge px-4 py-2 rounded-full">
              Client Reviews
            </span>
          </motion.div>

          <h2 className="section-heading mb-4">
            <span className="gradient-text">What Our Clients Say</span>
          </h2>

          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Discover why thousands of satisfied customers trust us with their
            needs
          </p>
        </motion.div>

        {/* Testimonials Container */}
        <div className="relative">
          <div className="flex items-center justify-center gap-8">
            {/* Left Arrow */}
            <motion.button
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePrev}
              aria-label="Previous testimonials"
              className="hidden md:flex w-14 h-14 items-center justify-center bg-bg-card rounded-full shadow-xl hover:shadow-2xl text-brand-primary transition-all z-10"
            >
              <FaChevronLeft size={20} />
            </motion.button>

            {/* Cards Container */}
            <div className="flex-1 max-w-6xl overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                  role="list"
                >
                  {visibleTestimonials.map((testimonial, index) => (
                    <motion.div
                      key={testimonial.id}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -10, scale: 1.02 }}
                      className="relative bg-bg-card rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 group"
                      role="listitem"
                      aria-label={`Testimonial by ${testimonial.name}`}
                    >
                      {/* Quote Icon */}
                      <div className="absolute top-6 right-6 text-brand-primary/30 opacity-50 group-hover:opacity-100 transition-opacity">
                        <FaQuoteLeft size={40} />
                      </div>

                      {/* Profile Section */}
                      <div className="flex items-center gap-4 mb-6">
                        <div className="relative">
                          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary p-0.5">
                            <Image
                              src={testimonial.image}
                              alt={testimonial.name}
                              fill
                              sizes="64px"
                              className="rounded-full object-cover border-4 border-white"
                            />
                          </div>
                          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-brand-secondary rounded-full border-2 border-white"></div>
                        </div>

                        <div className="flex-1">
                          <h3 className="font-bold text-text-heading text-lg">
                            {testimonial.name}
                          </h3>
                          <p className="text-sm text-text-muted">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>

                      {/* Rating */}
                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <FaStar
                            key={i}
                            className="text-yellow-400"
                            size={16}
                          />
                        ))}
                      </div>

                      {/* Message */}
                      <p className="text-text-secondary leading-relaxed">
                        {testimonial.message}
                      </p>

                      <div
                        className="absolute bottom-0 left-0 right-0 h-1 rounded-b-3xl"
                        style={{ backgroundImage: "var(--brand-gradient)" }}
                      ></div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Arrow */}
            <motion.button
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNext}
              aria-label="Next testimonials"
              className="hidden md:flex w-14 h-14 items-center justify-center bg-bg-card rounded-full shadow-xl hover:shadow-2xl text-brand-primary transition-all z-10"
            >
              <FaChevronRight size={20} />
            </motion.button>
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden justify-center gap-4 mt-8">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={handlePrev}
              className="w-12 h-12 flex items-center justify-center bg-bg-card rounded-full shadow-lg text-brand-primary"
            >
              <FaChevronLeft size={18} />
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={handleNext}
              className="w-12 h-12 flex items-center justify-center bg-bg-card rounded-full shadow-lg text-brand-primary"
            >
              <FaChevronRight size={18} />
            </motion.button>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {Array.from({
            length: Math.ceil(testimonials.length / cardsPerPage),
          }).map((_, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                setIsAutoPlay(false);
                setCurrentIndex(index * cardsPerPage);
              }}
              aria-label={`Go to testimonial set ${index + 1}`}
              className={`transition-all duration-300 rounded-full ${
                index === Math.floor(currentIndex / cardsPerPage)
                  ? "w-12 h-3 bg-gradient-to-r from-brand-primary to-brand-secondary"
                  : "w-3 h-3 bg-border-primary hover:bg-border-secondary"
              }`}
            />
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        >
          {[
            { label: "Happy Clients", value: "500+" },
            { label: "Projects Done", value: "1000+" },
            { label: "Success Rate", value: "99%" },
            { label: "5 Star Reviews", value: "450+" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-bg-card rounded-2xl p-6 text-center shadow-lg"
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-text-secondary text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
