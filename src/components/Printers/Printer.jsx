"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";
import { ArrowRight, Star } from "lucide-react";
import WhatsAppWidget from "../WhatsApp/WhatApp";

export default function Printer() {
  const [printers, setPrinters] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchPrinters = async () => {
      try {
        const res = await axios.get(
          "/api/products/category/3D%20Printers"
        );
        setPrinters(res.data || []);
      } catch (err) {
        console.error("Error fetching printers:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPrinters();
  }, []);

  const handleProductClick = (id) => {
    router.push(`/product/${id}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-tertiary">
      {/* Header */}
      <motion.div
        className="relative py-16 px-4 overflow-hidden text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Decorative Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-bg-badge rounded-full blur-3xl opacity-30"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-primary/20 rounded-full blur-3xl opacity-30"></div>
        </div>

        <motion.h1
          className="text-4xl md:text-6xl font-bold text-text-heading relative z-10"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <span>3D Printers</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-purple-600">
            Innovation at Your Desk
          </span>
        </motion.h1>

        <motion.p
          className="text-text-secondary mt-3 text-lg relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Explore our high-performance 3D printers designed for professionals and creators.
        </motion.p>
      </motion.div>

      {/* Products */}
      {loading ? (
        <div className="flex justify-center py-20 text-text-secondary">Loading...</div>
      ) : printers.length === 0 ? (
        <div className="text-center py-20 text-text-muted">No printers available.</div>
      ) : (
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-6 pb-20">
          {printers.map((printer, index) => (
            <motion.div
              key={printer._id}
              className="bg-bg-card border border-border-primary rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-transform duration-150 ease-out flex flex-col items-center "
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }} // Fast zoom
            >
              <div className="relative aspect-[4/3] w-full bg-bg-section overflow-hidden">
                <Image
                  src={printer.image}
                  alt={printer.name}
                  fill
                  className="object-contain p-4 transition-transform duration-150 ease-out group-hover:scale-110"
                />
              </div>

              <div className="p-5 w-full text-center flex flex-col flex-grow">
                <h3 className="font-semibold text-lg text-text-heading mb-2 line-clamp-2 min-h-[3rem]">
                  {printer.name}
                </h3>

                <div className="flex justify-center items-center gap-1 text-yellow-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < 4 ? "fill-yellow-400 text-yellow-400" : "fill-border-primary text-border-primary"
                      }`}
                    />
                  ))}
                </div>

                <p className="text-text-muted text-sm mb-4 flex-grow">
                  {printer.reviews ? `${printer.reviews} reviews` : "No reviews yet"}
                </p>

                <motion.button
                  onClick={() => handleProductClick(printer._id)}
                  className="w-full bg-gradient-to-r from-brand-primary to-purple-600 hover:from-brand-hover hover:to-purple-700 text-white font-medium py-3 rounded-xl flex items-center justify-center gap-2 transition-all duration-150 ease-out cursor-pointer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  View Details <ArrowRight className="w-4 h-4" />
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
