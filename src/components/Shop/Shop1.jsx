"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";
import { useRouter } from "next/navigation";
import WhatsAppWidget from "../WhatsApp/WhatApp";

export default function Printer() {
  const [printers, setPrinters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12; // 2 full rows on 6-column grid
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

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = printers.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(printers.length / itemsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-bg-primary py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1600px] mx-auto">

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
          <div className="flex flex-col gap-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
              {currentItems.map((printer) => (
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

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-8">
                <button
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`px-4 py-2 rounded-lg border transition duration-200 ${currentPage === 1
                      ? "border-border-primary text-text-muted cursor-not-allowed"
                      : "border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white"
                    }`}
                >
                  Prev
                </button>
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => paginate(i + 1)}
                    className={`w-10 h-10 rounded-lg border transition duration-200 ${currentPage === i + 1
                        ? "bg-brand-gradient text-white border-transparent shadow-md"
                        : "border-border-primary text-text-secondary hover:border-brand-primary hover:text-brand-primary"
                      }`}
                    style={currentPage === i + 1 ? { backgroundImage: "var(--brand-gradient)" } : {}}
                  >
                    {i + 1}
                  </button>
                ))}
                <button
                  onClick={() => paginate(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`px-4 py-2 rounded-lg border transition duration-200 ${currentPage === totalPages
                      ? "border-border-primary text-text-muted cursor-not-allowed"
                      : "border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white"
                    }`}
                >
                  Next
                </button>
              </div>
            )}
          </div>
        )}

        <WhatsAppWidget />
      </div>
    </div>
  );
}