"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import WhatsAppWidget from "../WhatsApp/WhatApp";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [productRatings, setProductRatings] = useState({});
  const [reviewCounts, setReviewCounts] = useState({});

  const router = useRouter();

  // Load saved ratings and review counts from localStorage
  useEffect(() => {
    const savedRatings = localStorage.getItem('productRatings');
    const savedReviewCounts = localStorage.getItem('productReviewCounts');
    
    if (savedRatings) {
      setProductRatings(JSON.parse(savedRatings));
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
          "https://student-alliance-api.code4bharat.com/api/products/category/IFPD"
        );
        setProducts(res.data);
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

  // Generate and save ratings and review counts when products data loads
  useEffect(() => {
    if (products.length > 0 && Object.keys(productRatings).length === 0) {
      const newRatings = {};
      const newReviewCounts = {};
      
      products.forEach(product => {
        if (!product.rating) {
          newRatings[product._id] = Math.floor(Math.random() * 2) + 4; // 4 or 5 stars
        }
        if (!product.reviews) {
          newReviewCounts[product._id] = Math.floor(Math.random() * 50) + 10; // 10-59 reviews
        }
      });
      
      setProductRatings(newRatings);
      setReviewCounts(newReviewCounts);
      localStorage.setItem('productRatings', JSON.stringify(newRatings));
      localStorage.setItem('productReviewCounts', JSON.stringify(newReviewCounts));
    }
  }, [products]);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  return (
    <div className="bg-white text-black">
      {/* Header */}
      <motion.div
        className="text-center py-5"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl font-bold">Products</h1>
        <div className="text-xl bg-gray-300 py-4 mt-4 font-bold">
          Interactive Flat Panel Display
        </div>
      </motion.div>

      {/* Loading State */}
      {loading ? (
        <div className="text-center py-10 text-lg">Loading products...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 pb-16">
          {products.map((product, index) => {
            // Use actual rating if available, otherwise use saved generated rating
            const rating = product.rating || productRatings[product._id] || 4;
            
            return (
              <motion.div
                key={product._id || index}
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
                    alt="Image of product"
                    src={product.image}
                    width={400}
                    height={300}
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.isNew && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute top-3 right-3 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow"
                    >
                      NEW
                    </motion.div>
                  )}
                  {product.discount > 0 && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow"
                    >
                      {product.discount}% OFF
                    </motion.div>
                  )}
                </div>
                <div className="p-4 flex-grow flex flex-col">
                  <h3 className="text-center font-semibold text-lg mb-2 line-clamp-2">
                    {product.name}
                  </h3>

                  {/* Golden Star Ratings with Animation */}
                  <div className="flex justify-center items-center mb-3">
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
                    <motion.span
                      className="text-xs text-gray-500 ml-1"
                      whileHover={{ scale: 1.05 }}
                    >
                      ({product.reviews || reviewCounts[product._id] || 0} reviews)
                    </motion.span>
                  </div>
                </div>
                <div className="bg-white p-4 text-center">
                  <motion.button
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-2 px-4 rounded-lg w-full"
                    onClick={() => router.push(`/product/${product._id}`)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Show More
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}
      <WhatsAppWidget />
    </div>
  );
}