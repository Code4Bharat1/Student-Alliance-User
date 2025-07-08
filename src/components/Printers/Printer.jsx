"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import WhatsAppWidget from "../WhatsApp/WhatApp";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Printer() {
  const [printers, setPrinters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [reviewCounts, setReviewCounts] = useState({});

  const router = useRouter();

  useEffect(() => {
    const savedCounts = localStorage.getItem('printerReviewCounts');
    if (savedCounts) {
      setReviewCounts(JSON.parse(savedCounts));
    }
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          "https://student-alliance-api.code4bharat.com/api/products/category/3D%20Printers"
        );
        setPrinters(res.data);
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

  useEffect(() => {
    if (printers.length > 0 && Object.keys(reviewCounts).length === 0) {
      const newCounts = {};
      printers.forEach(printer => {
        if (!printer.reviews) {
          newCounts[printer._id] = Math.floor(Math.random() * 50) + 10;
        }
      });
      setReviewCounts(newCounts);
      localStorage.setItem('printerReviewCounts', JSON.stringify(newCounts));
    }
  }, [printers]);

  return (
    <div className="bg-white text-black">
      {/* Header Section with animation */}
      <motion.div
        className="text-center py-5"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl font-bold">3D Printers</h1>
        <div className="text-xl bg-gray-300 py-4 mt-4 font-bold">
          3D Printers Details
        </div>
      </motion.div>

      {/* Product Cards */}
      {loading ? (
        <div className="text-center py-10 text-lg">Loading products...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 pb-16">
          {printers.map((printer, index) => (
            <motion.div
              key={printer._id || index}
              className="rounded-md overflow-hidden border border-gray-300 shadow hover:shadow-lg transition-shadow duration-300 bg-white flex flex-col"
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                boxShadow: "0 15px 30px rgba(0,0,0,0.15)",
                transition: { duration: 0.3 },
              }}
            >
              <div className="relative w-full aspect-[4/3] bg-white group">
                <Image
                  src={printer.image}
                  alt={printer.name}
                  width={400}
                  height={300}
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                />
                {printer.isNew && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute top-3 right-3 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow"
                  >
                    NEW
                  </motion.div>
                )}
                {printer.discount > 0 && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow"
                  >
                    {printer.discount}% OFF
                  </motion.div>
                )}
              </div>
              <div className="p-4 flex-grow flex flex-col">
                <h3 className="text-center font-semibold text-lg mb-2 line-clamp-2">
                  {printer.name}
                </h3>
                
                {/* Golden Star Ratings with Animation */}
                <div className="flex justify-center items-center mb-3">
                  {[...Array(5)].map((_, i) => {
                    const rating = printer.rating || Math.floor(Math.random() * 2) + 4;
                    const isFilled = i < rating;
                    
                    return (
                      <motion.svg
                        key={i}
                        className={`h-5 w-5 ${isFilled ? "text-yellow-400" : "text-gray-300"}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        initial={{ scale: 1 }}
                        whileHover={{
                          scale: 1.5,
                          rotate: isFilled ? [0, 15, -15, 0] : 0,
                          transition: { 
                            scale: { duration: 0.2 },
                            rotate: { duration: 0.4 }
                          }
                        }}
                        animate={{
                          color: isFilled ? "#FBBF24" : "#D1D5DB"
                        }}
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </motion.svg>
                    );
                  })}
                  <motion.span 
                    className="text-xs text-gray-500 ml-1"
                    whileHover={{ scale: 1.05 }}
                  >
                    ({printer.reviews || reviewCounts[printer._id] || 0} reviews)
                  </motion.span>
                </div>
              </div>
              <div className="bg-white p-4 text-center">
                <motion.button
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-2 px-4 rounded-lg w-full"
                  onClick={() => router.push(`/product/${printer._id}`)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Show Details
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      )}
      <WhatsAppWidget />
    </div>
  );
}