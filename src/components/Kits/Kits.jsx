"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import WhatsAppWidget from "../WhatsApp/WhatApp";
import axios from "axios";
import { useRouter } from "next/navigation";

const KitsSection = () => {
  const [kits, setKits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [kitRatings, setKitRatings] = useState({});
  const [reviewCounts, setReviewCounts] = useState({});

  const router = useRouter();

  // Load saved ratings and review counts from localStorage
  useEffect(() => {
    const savedRatings = localStorage.getItem('kitRatings');
    const savedReviewCounts = localStorage.getItem('kitReviewCounts');
    
    if (savedRatings) {
      setKitRatings(JSON.parse(savedRatings));
    }
    if (savedReviewCounts) {
      setReviewCounts(JSON.parse(savedReviewCounts));
    }
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          "https://student-alliance-api.code4bharat.com/api/products/category/STEM%20%26%20Robotics"
        );
        setKits(res.data);
        if (!res.data || res.data.length === 0) {
          console.warn("No products found in the database.");
        }
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Generate and save ratings and review counts when kits data loads
  useEffect(() => {
    if (kits.length > 0 && Object.keys(kitRatings).length === 0) {
      const newRatings = {};
      const newReviewCounts = {};
      
      kits.forEach(kit => {
        if (!kit.rating) {
          newRatings[kit._id] = Math.floor(Math.random() * 2) + 4; // 4 or 5 stars
        }
        if (!kit.reviews) {
          newReviewCounts[kit._id] = Math.floor(Math.random() * 50) + 10; // 10-59 reviews
        }
      });
      
      setKitRatings(newRatings);
      setReviewCounts(newReviewCounts);
      localStorage.setItem('kitRatings', JSON.stringify(newRatings));
      localStorage.setItem('kitReviewCounts', JSON.stringify(newReviewCounts));
    }
  }, [kits]);

  return (
    <section className="bg-gray-100 py-10 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl font-semibold mb-8 text-gray-800 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Kits
        </motion.h2>

        {loading ? (
          <div className="text-center py-10 text-lg">Loading kits...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {kits.map((kit, idx) => {
              // Use actual rating if available, otherwise use saved generated rating
              const rating = kit.rating || kitRatings[kit._id] || 4;
              
              return (
                <motion.div
                  key={kit._id || idx}
                  className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col justify-between"
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -10,
                    boxShadow: "0 15px 30px rgba(0,0,0,0.15)",
                    transition: { duration: 0.3 },
                  }}
                >
                  <div className="relative w-full h-60 group">
                    <Image
                      src={kit.image}
                      alt={kit.name}
                      width={500}
                      height={300}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />
                    {kit.isNew && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute top-3 right-3 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow"
                      >
                        NEW
                      </motion.div>
                    )}
                    {kit.discount > 0 && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow"
                      >
                        {kit.discount}% OFF
                      </motion.div>
                    )}
                  </div>
                  <div className="p-4 flex flex-col gap-4">
                    <h3 className="text-lg font-medium text-center text-gray-900 line-clamp-2">
                      {kit.name}
                    </h3>
                    
                    {/* Golden Star Ratings with Animation */}
                    <div className="flex justify-center items-center">
                      {[...Array(5)].map((_, i) => {
                        const isFilled = i < rating;

                        return (
                          <motion.svg
                            key={i}
                            className={`h-5 w-5 ${
                              isFilled ? "text-yellow-400" : "text-gray-300"
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            initial={{ scale: 1 }}
                            whileHover={{
                              scale: 1.5,
                              rotate: isFilled ? [0, 15, -15, 0] : 0,
                              transition: {
                                scale: { duration: 0.2 },
                                rotate: { duration: 0.4 },
                              },
                            }}
                            animate={{
                              color: isFilled ? "#FBBF24" : "#D1D5DB",
                            }}
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </motion.svg>
                        );
                      })}
                      <br/>
                      <motion.span
                        className="text-xs text-gray-500 ml-1"
                        whileHover={{ scale: 1.05 }}
                      >
                        ({kit.reviews || reviewCounts[kit._id] || 0} reviews)
                      </motion.span>
                    </div>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-4 py-2 rounded-lg shadow"
                      onClick={() => {
                        router.push(`/product/${kit._id}`);
                      }}
                    >
                      Show Details
                    </motion.button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
      <WhatsAppWidget />
    </section>
  );
};

export default KitsSection;