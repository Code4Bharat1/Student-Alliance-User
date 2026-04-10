"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
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
        const res = await fetch("/api/products/category/3D%20Printers");
        const data = await res.json();
        setPrinters(data || []);
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

      {/* Header (NO motion = faster first paint) */}
      <div className="relative py-16 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-text-heading">
          <span>3D Printers</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-purple-600">
            Innovation at Your Desk
          </span>
        </h1>

        <p className="text-text-secondary mt-3 text-lg">
          Explore our high-performance 3D printers designed for professionals and creators.
        </p>
      </div>

      {/* Products */}
      {loading ? (
        <div className="flex justify-center py-20 text-text-secondary">Loading...</div>
      ) : printers.length === 0 ? (
        <div className="text-center py-20 text-text-muted">No printers available.</div>
      ) : (
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6 px-6 pb-20">

          {/* LIMIT RENDERING */}
          {printers.map((printer) => (
            <div
              key={printer._id}
              className="bg-bg-card border border-border-primary rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition duration-200 hover:scale-[1.02] flex flex-col items-center"
            >
              <div className="relative aspect-[4/3] w-full bg-bg-section">
                <Image
                  src={printer.image}
                  alt={printer.name}
                  fill
                  loading="lazy"
                  className="object-contain p-4"
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
                      className={`w-4 h-4 ${i < 4
                          ? "fill-yellow-400 text-yellow-400"
                          : "fill-border-primary text-border-primary"
                        }`}
                    />
                  ))}
                </div>

                <p className="text-text-muted text-sm mb-4 flex-grow">
                  {printer.reviews
                    ? `${printer.reviews} reviews`
                    : "No reviews yet"}
                </p>

                <button
                  onClick={() => handleProductClick(printer._id)}
                  className="w-full bg-gradient-to-r from-brand-primary to-purple-600 hover:from-brand-hover hover:to-purple-700 text-white font-medium py-3 rounded-xl flex items-center justify-center gap-2 transition duration-200"
                >
                  View Details <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <WhatsAppWidget />
    </div>
  );
}