"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  { id: 1, image: "/images/s2.png", name: "Shubham Prajapti", role: "Customer", message: "Thank you IFPD for providing such a smooth and reliable experience. Truly helped me a lot.", rating: 5 },
  { id: 2, image: "/images/s1.png", name: "Rohan Pawar", role: "Business Owner", message: "We are at a time where we need service more than the product, thanks for giving us the trust factor", rating: 5 },
  { id: 3, image: "/images/s3.png", name: "Shubham Thakare", role: "Tech Enthusiast", message: "We are happy with the open source technologies where we can use more features on the Panels", rating: 5 },
  { id: 4, image: "/images/p4.png", name: "Nitesh Pawar", role: "Educator", message: "Great digital teaching device by Student Alliance. Screen interactive make virtual classes engaging and effective.", rating: 5 },
  { id: 5, image: "/images/p5.png", name: "Siddharth Bhagat", role: "Content Creator", message: "Student Alliance is excellent for great camera quality and interactive tools keep the audience engaged.", rating: 5 },
  { id: 6, image: "/images/feedbackpic1.png", name: "Maksud Kureshi", role: "Event Manager", message: "Student Alliance device is ideal for virtual events large screen and great camera quality enhance the experience.", rating: 5 },
  { id: 7, image: "/images/feedbackpic2.png", name: "Umar Afrad", role: "Language Teacher", message: "The Student Alliance device is excellent for language learning interactive features boost speaking listening practice.", rating: 5 },
  { id: 8, image: "/images/feedbackpic3.png", name: "Gaurang Mahankar", role: "Online Instructor", message: "The Student Alliance device is perfect for online teaching excellent video and audio quality.", rating: 5 },
  { id: 9, image: "/images/feedbackpic4.png", name: "Pritilesh Surve", role: "Corporate Trainer", message: "This digital lectern from Student Alliance is ideal for training sessions intuitive, modern, and very satisfying to use", rating: 5 },
];

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
      prev === 0 ? testimonials.length - cardsPerPage : prev - cardsPerPage
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev + cardsPerPage >= testimonials.length ? 0 : prev + cardsPerPage
    );
  };

  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + cardsPerPage
  );

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-20 px-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
      
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
            <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wider bg-indigo-100 px-4 py-2 rounded-full">
              Client Reviews
            </span>
          </motion.div>
          
          
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2A1B8F] to-[#1FA55B]">
            What Our Clients Say
            </span>
          </h2>
          
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover why thousands of satisfied customers trust us with their needs
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
              className="hidden md:flex w-14 h-14 items-center justify-center bg-white rounded-full shadow-xl hover:shadow-2xl text-indigo-600 transition-all z-10"
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
                >
                  {visibleTestimonials.map((testimonial, index) => (
                    <motion.div
                      key={testimonial.id}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -10, scale: 1.02 }}
                      className="relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 group"
                    >
                      {/* Quote Icon */}
                      <div className="absolute top-6 right-6 text-indigo-200 opacity-50 group-hover:opacity-100 transition-opacity">
                        <FaQuoteLeft size={40} />
                      </div>

                      {/* Profile Section */}
                      <div className="flex items-center gap-4 mb-6">
                        <div className="relative">
                          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-400 to-purple-400 p-0.5">
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="w-full h-full rounded-full object-cover border-4 border-white"
                            />
                          </div>
                          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
                        </div>
                        
                        <div className="flex-1">
                          <h3 className="font-bold text-gray-800 text-lg">{testimonial.name}</h3>
                          <p className="text-sm text-gray-500">{testimonial.role}</p>
                        </div>
                      </div>

                      {/* Rating */}
                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <FaStar key={i} className="text-yellow-400" size={16} />
                        ))}
                      </div>

                      {/* Message */}
                      <p className="text-gray-600 leading-relaxed">
                        {testimonial.message}
                      </p>

                      {/* Decorative gradient */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-b-3xl"></div>
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
              className="hidden md:flex w-14 h-14 items-center justify-center bg-white rounded-full shadow-xl hover:shadow-2xl text-indigo-600 transition-all z-10"
            >
              <FaChevronRight size={20} />
            </motion.button>
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden justify-center gap-4 mt-8">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={handlePrev}
              className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg text-indigo-600"
            >
              <FaChevronLeft size={18} />
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={handleNext}
              className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg text-indigo-600"
            >
              <FaChevronRight size={18} />
            </motion.button>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {Array.from({ length: Math.ceil(testimonials.length / cardsPerPage) }).map((_, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                setIsAutoPlay(false);
                setCurrentIndex(index * cardsPerPage);
              }}
              className={`transition-all duration-300 rounded-full ${
                index === Math.floor(currentIndex / cardsPerPage)
                  ? "w-12 h-3 bg-gradient-to-r from-indigo-600 to-purple-600"
                  : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
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
            { label: "5 Star Reviews", value: "450+" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl p-6 text-center shadow-lg"
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}