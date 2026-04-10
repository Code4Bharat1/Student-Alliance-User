"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";
import { useRouter } from "next/navigation";
import WhatsAppWidget from "../WhatsApp/WhatApp";

export default function Printer() {
  const [printers, setPrinters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchPrinters = async () => {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();
        setPrinters(data || []);
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
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="section-heading gradient-text">
            Explore advanced IFPDs, 3D printers, and cameras for education excellence
          </h1>
        </div>

        {/* Products */}
        {isLoading ? (
          <div className="text-center py-20 text-lg text-text-tertiary">
            Loading products...
          </div>
        ) : printers.length === 0 ? (
          <div className="text-center py-20 text-text-tertiary">
            No 3D printers available.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

            {/* LIMIT ITEMS */}
            {printers.slice(0, 12).map((printer) => (
              <div
                key={printer._id}
                className="card-glow bg-bg-card rounded-2xl overflow-hidden border border-border-primary hover:shadow-lg transition duration-200 flex flex-col h-full hover:scale-[1.02]"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={printer.image}
                    alt={printer.name}
                    width={400}
                    height={300}
                    loading="lazy"
                    className="w-full h-64 object-contain bg-bg-section p-4"
                  />
                </div>

                <div className="p-6 flex flex-col flex-grow text-center">
                  <h3 className="text-lg font-semibold text-text-heading mb-3 line-clamp-2 min-h-[3.5rem]">
                    {printer.name}
                  </h3>

                  {/* ⭐ Static stars (no animation) */}
                  <div className="flex justify-center items-center mb-5 flex-grow">
                    {[...Array(5)].map((_, i) => {
                      const rating = printer.rating || 4;
                      return (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${i < rating
                              ? "text-yellow-400"
                              : "text-text-tertiary"
                            }`}
                          fill="currentColor"
                        />
                      );
                    })}
                    <span className="text-xs text-text-muted ml-1">
                      ({printer.reviews || 10} reviews)
                    </span>
                  </div>

                  <button
                    onClick={() => handleProductClick(printer._id)}
                    className="w-full text-white font-medium py-3 rounded-xl flex items-center justify-center gap-2 transition duration-200"
                    style={{ backgroundImage: "var(--brand-gradient)" }}
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
    </div>
  );
}