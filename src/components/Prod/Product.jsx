"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { useRouter } from "next/navigation";

// ✅ JSON import
import { products as staticProducts } from "@/data/products";

const Products = () => {
  const router = useRouter();

  const [products] = useState(staticProducts);
  const [productRatings, setProductRatings] = useState({});
  const [reviewCounts, setReviewCounts] = useState({});

  // ⭐ Random rating system (lightweight)
  useEffect(() => {
    const ratings = {};
    const reviews = {};

    for (let product of products) {
      ratings[product.id] = Math.floor(Math.random() * 2) + 4;
      reviews[product.id] = Math.floor(Math.random() * 50) + 10;
    }

    setProductRatings(ratings);
    setReviewCounts(reviews);
  }, [products]);

  // ✅ Grouping
  const groupedProducts = {
    "Interactive Flat Panel Display (IFPD)": products.filter(
      (p) => p.subCategory === "Normal"
    ),
    "Google EDLA With Camera": products.filter(
      (p) => p.subCategory === "Google EDLA with Camera"
    ),
    "Google EDLA Without Camera": products.filter(
      (p) => p.subCategory === "Google EDLA without Camera"
    ),
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-primary">

      {/* Header */}
      <div className="py-16 text-center">
        <h1 className="text-4xl font-bold mb-2">
          Interactive Flat Panel Displays
        </h1>
        <p className="text-gray-500">
          Explore our complete range of IFPD solutions
        </p>
      </div>

      {/* Sections */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        {Object.entries(groupedProducts).map(([section, items]) =>
          items.length > 0 && (
            <div key={section} className="mb-12">

              {/* Section Title */}
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                {section}
                <span className="text-sm bg-gray-200 px-2 py-1 rounded">
                  {items.length}
                </span>
              </h2>

              {/* Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

                {/* 🔥 LIMIT RENDERING (adjust if needed) */}
                {items.slice(0, 12).map((product, index) => {
                  const rating = productRatings[product.id] || 4;
                  const reviewCount = reviewCounts[product.id] || 0;

                  return (
                    <div
                      key={product.id || index}
                      className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition duration-300 hover:-translate-y-1"
                    >
                      {/* Image */}
                      <div className="aspect-[4/3] bg-gray-50 flex items-center justify-center relative">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          loading="lazy"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                          className="object-contain p-4"
                        />
                      </div>

                      {/* Content */}
                      <div className="p-4">

                        {/* Title */}
                        <h3 className="font-bold text-lg mb-3 text-gray-800">
                          {product.name}
                        </h3>

                        {/* Features */}
                        <ul className="space-y-2 mb-4">
                          {product.features?.slice(0, 4).map((f, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-sm text-gray-600"
                            >
                              <span className="text-green-500 mt-1">✔</span>
                              {f}
                            </li>
                          ))}
                        </ul>

                        {/* Buttons */}
                        <div className="flex gap-2">


                          {/* WhatsApp */}
                          <button
                            onClick={() => {
                              const message = `Hello, I'm interested in this product:

📺 Product: ${product.name}
📏 Size: ${product.size}
📂 Category: ${product.subCategory}
💰 Price: ₹${product.price}

Please share more details.`;

                              const url = `https://wa.me/9594402775?text=${encodeURIComponent(
                                message
                              )}`;
                              window.open(url, "_blank");
                            }}
                            className="flex-1 bg-gradient-to-r from-indigo-600 to-green-500 text-white py-2 rounded-xl text-sm hover:opacity-90 transition"
                          >
                            Quote
                          </button>

                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )
        )}

        {/* Empty state */}
        {products.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-xl font-bold">No products found</h3>
          </div>
        )}
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/9594402775"
        className="fixed bottom-6 right-6 bg-green-500 w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
      >
        <MessageCircle className="text-white" />
      </a>
    </div>
  );
};

export default React.memo(Products);