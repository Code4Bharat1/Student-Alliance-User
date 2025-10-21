"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import WhatsAppWidget from "../WhatsApp/WhatApp";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function KitsSection() {
  const [kits, setKits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [kitRatings, setKitRatings] = useState({});
  const [reviewCounts, setReviewCounts] = useState({});
  const router = useRouter();

  // Load saved ratings/reviews
  useEffect(() => {
    const savedRatings = localStorage.getItem("kitRatings");
    const savedReviewCounts = localStorage.getItem("kitReviewCounts");

    if (savedRatings) setKitRatings(JSON.parse(savedRatings));
    if (savedReviewCounts) setReviewCounts(JSON.parse(savedReviewCounts));
  }, []);

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          "https://student-alliance-api.code4bharat.com/api/products/category/STEM%20%26%20Robotics"
        );
        setKits(res.data || []);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Generate random ratings if not available
  useEffect(() => {
    if (kits.length > 0 && Object.keys(kitRatings).length === 0) {
      const newRatings = {};
      const newReviewCounts = {};
      kits.forEach((kit) => {
        newRatings[kit._id] = kit.rating || Math.floor(Math.random() * 2) + 4; // 4 or 5
        newReviewCounts[kit._id] = kit.reviews || Math.floor(Math.random() * 50) + 10; // 10–59
      });
      setKitRatings(newRatings);
      setReviewCounts(newReviewCounts);
      localStorage.setItem("kitRatings", JSON.stringify(newRatings));
      localStorage.setItem("kitReviewCounts", JSON.stringify(newReviewCounts));
    }
  }, [kits]);

  return (
    <section className="bg-gradient-to-br from-slate-50 via-white to-slate-100 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-slate-900  text-4xl font-bold mb-12 text-center "
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          STEM & Robotics 

           <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Kits
          </span>
        </motion.h2>

        {loading ? (
          <div className="text-center py-12 text-slate-600 text-lg">
            Loading kits...
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {kits.map((kit, idx) => {
              const rating = kitRatings[kit._id] || 4;
              const reviews = reviewCounts[kit._id] || 0;

              return (
                <motion.div
                  key={kit._id || idx}
                  className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-transform duration-150 ease-out flex flex-col items-center "
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  whileHover={{ scale: 1.05 }} // Fast zoom only, no lift
                >
                  <div className="relative aspect-[4/3] w-full bg-slate-50 overflow-hidden">
                    <Image
                      src={kit.image}
                      alt={kit.name}
                      fill
                      className="object-contain p-4 transition-transform duration-150 ease-out group-hover:scale-110"
                    />
                    {kit.discount > 0 && (
                      <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                        {kit.discount}% OFF
                      </div>
                    )}
                    {kit.isNew && (
                      <div className="absolute top-3 right-3 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                        NEW
                      </div>
                    )}
                  </div>

                  <div className="p-5 w-full text-center flex flex-col flex-grow">
                    <h3 className="font-semibold text-lg text-slate-900 mb-2 line-clamp-2 min-h-[3rem]">
                      {kit.name}
                    </h3>

                    {/* ⭐ Ratings */}
                    <div className="flex justify-center items-center gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill={i < rating ? "#FBBF24" : "#E5E7EB"}
                          className="w-5 h-5 transition-transform duration-100 ease-out"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="text-xs text-slate-500 ml-1">
                        ({reviews} reviews)
                      </span>
                    </div>

                    <motion.button
                      onClick={() => router.push(`/product/${kit._id}`)}
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-medium py-3 rounded-xl transition-all duration-150 ease-out cursor-pointer"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      View Details
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
}
