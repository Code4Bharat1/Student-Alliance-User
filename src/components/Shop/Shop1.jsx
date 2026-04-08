"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";
import axios from "axios";
import { useRouter } from "next/navigation";
import WhatsAppWidget from "../WhatsApp/WhatApp";

export default function Printer() {
  const [printers, setPrinters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const controls = useAnimation();
  const router = useRouter();

  useEffect(() => {
    const fetchPrinters = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get("/api/products");
        setPrinters(res.data || []);
      } catch (err) {
        console.error("Error fetching printers:", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPrinters();
  }, []);

  const handleProductClick = (id) => {
    router.push(`/product/${id}`);
  };

  return (
    <div className="min-h-screen bg-bg-primary py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-12 sm:mb-16"
        >
          <h1 className="section-heading gradient-text">
            Explore advanced IFPDs, 3D printers, and cameras for education
            excellence
          </h1>
        </motion.div>

        {/* Product Grid */}
        {isLoading ? (
          <div className="text-center py-20 text-lg text-text-tertiary">
            Loading products...
          </div>
        ) : printers.length === 0 ? (
          <div className="text-center py-20 text-text-tertiary">
            No 3D printers available.
          </div>
        ) : (
          <motion.div
            animate={controls}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {printers.map((printer, index) => (
              <motion.div
                key={printer._id || index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.6,
                  ease: "easeOut",
                }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3, ease: "easeInOut" },
                }}
                className="card-glow bg-bg-card rounded-2xl overflow-hidden border border-border-primary transition-all duration-500 flex flex-col h-full"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={printer.image}
                    alt={printer.name}
                    width={400}
                    height={300}
                    className="w-full h-64 object-contain bg-bg-section p-4"
                  />
                </div>

                <div className="p-6 flex flex-col flex-grow text-center">
                  <h3 className="text-lg font-semibold text-text-heading mb-3 line-clamp-2 min-h-[3.5rem]">
                    {printer.name}
                  </h3>

                  {/* Star Ratings */}
                  <div className="flex justify-center items-center mb-5 flex-grow">
                    {[...Array(5)].map((_, i) => {
                      const rating = printer.rating || 4;
                      const isFilled = i < rating;
                      return (
                        <motion.svg
                          key={i}
                          className={`h-5 w-5 ${
                            isFilled ? "text-yellow-400" : "text-text-tertiary"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          whileHover={{
                            scale: 1.2,
                            rotate: isFilled ? [0, 10, -10, 0] : 0,
                            transition: { duration: 0.3 },
                          }}
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </motion.svg>
                      );
                    })}
                    <span className="text-xs text-text-muted ml-1">
                      ({printer.reviews || Math.floor(Math.random() * 50) + 10}{" "}
                      reviews)
                    </span>
                  </div>

                  {/* Button - Always at bottom */}
                  <motion.button
                    onClick={() => handleProductClick(printer._id)}
                    className="w-full text-text-inverse font-medium py-3 rounded-xl flex items-center justify-center gap-2 transition-all duration-150 ease-out cursor-pointer"
                    style={{ backgroundImage: "var(--brand-gradient)" }}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    View Details <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        <WhatsAppWidget />
      </div>
    </div>
  );
}
