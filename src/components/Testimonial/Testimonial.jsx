"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import WhatsAppWidget from "../WhatsApp/WhatApp";

const testimonials = [
  { id: 1, image: "/images/s2.png", message: "Shubham Prajapti: Thank you IFPD for providing such a smooth and reliable experience.Truly helped me alot." },
  { id: 2, image: "/images/s1.png", message: "Rohan Pawar: We are at a time where we need service more than the product, thanks for giving us the trust factor " },
  { id: 3, image: "/images/s3.png", message: "Shubham Thakare: We are happy with the open source technologies where we can use more features on the Panels" },
  { id: 4, image: "/images/p4.png", message: "Nitesh pawar:Great digital teaching device by Student Alliance ,Screen interactive make virtual classes engaging and effective." },
  { id: 5, image: "/images/p5.png", message: "Siddharth Bhagat:Student Alliance is excellent for great camera quality and interactive tools keep the audience engaged." },
  { id: 6, image: "/images/feedbackpic1.png", message: "Maksud Kureshi:Student Alliance device is ideal for virtual events large screen and great camera quality enhance the experience." },
  { id: 7, image: "/images/feedbackpic2.png", message: "Umar Afrad: The Student Alliance device is excellent for language learning interactive features boost speaking  listening practice." },
  { id: 8, image: "/images/feedbackpic3.png", message: "Gaurang Mahankar:The Student Alliance device is perfect for online teaching excellent video and audio quality." },
  { id: 9, image: "/images/feedbackpic4.png", message: "Pritilesh Surve: This digital lectern from Student Alliance is ideal for training sessions intuitive, modern, and very satisfying to use" },

];

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);
  const [direction, setDirection] = useState(0); // 0: initial, 1: right, -1: left

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

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - cardsPerPage : prev - cardsPerPage
    );
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) =>
      prev + cardsPerPage >= testimonials.length ? 0 : prev + cardsPerPage
    );
  };

  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + cardsPerPage
  );

  // Animation variants
  const cardVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -200,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? 100 : -200,
      opacity: 0
    })
  };

  return (
    <div className="flex flex-col items-center px-4 py-8 bg-white text-center">
      <h1 className="text-4xl text-gray-800 font-bold mb-2">TESTIMONIALS</h1>
      <div className="w-24 h-1 bg-purple-300 mb-6"></div>
      <h2 className="text-xl font-semibold text-gray-800 mb-12 ">
        What Our Clients Say
      </h2>
      <div className="relative flex items-center justify-center w-full max-w-6xl">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="absolute left-2 md:left-0 z-10 text-blue-500 hover:scale-110 transition-transform"
        >
          <FaArrowLeft size={28} />
        </button>

        {/* Testimonial Cards */}
        <div className="flex gap-6 flex-wrap justify-center min-h-[400px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              className="flex gap-6 flex-wrap justify-center"
              custom={direction}
              variants={cardVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5 }}
            >
              {visibleTestimonials.map((testimonial) => (
                <motion.div
                  key={testimonial.id}
                  className="relative w-full md:w-72 h-80 bg-white shadow-lg rounded-md flex flex-col items-center justify-start pt-16 pb-4 px-4"
                >
                  {/* Floating image */}
                  <img
                    src={testimonial.image}
                    alt="Client"
                    className="absolute top-[-30px] w-20 h-20 rounded-full object-cover border-4 border-white shadow-md"
                  />

                  <div className="bg-blue-100 rounded-t-3xl p-4 w-full mt-4">
                    <p className="text-lg text-gray-700">
                      <span className="text-3xl text-black">“</span>
                      
                      {testimonial.message}
                      <br />
                      
                      <span className="text-3xl text-black float-right">”</span>
                      
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="absolute right-2 md:right-0 z-10 text-blue-500 hover:scale-110 transition-transform"
        >
          <FaArrowRight size={28} />
        </button>
      </div>

      {/* Dots */}
      <div className="flex space-x-3 mt-[2px]">
        {Array.from({ length: Math.ceil(testimonials.length / cardsPerPage) }).map(
          (_, index) => (
            <span
              key={index}
              className={`w-4 h-4 rounded-full ${
                index === Math.floor(currentIndex / cardsPerPage)
                  ? "bg-blue-500"
                  : "bg-gray-300"
              }`}
            ></span>
          )
        )}
      </div>
      <WhatsAppWidget />
    </div>
  );
}