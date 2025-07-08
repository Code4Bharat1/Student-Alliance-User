"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import WhatsAppWidget from "../WhatsApp/WhatApp";
import axios from "axios";
import { useRouter } from "next/navigation";

const Shop = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [sortBy, setSortBy] = useState("Featured");
  const controls = useAnimation();

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const router = useRouter();

  const filters = ["All", "Camera", "IFPD", "OPS", "Stand"];
  const sortOptions = [
    "Featured",
    "Price: Low to High",
    "Price: High to Low",
    "Rating",
  ];

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/products`
        );
        setProducts(res.data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();

    const handleProductAdded = () => fetchProducts();
    window.addEventListener("productAdded", handleProductAdded);

    return () => {
      window.removeEventListener("productAdded", handleProductAdded);
    };
  }, []);

  useEffect(() => {
    if (activeFilter === "All") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((product) => product.category === activeFilter)
      );
    }
    controls.start({ opacity: 1, y: 0 });
  }, [activeFilter, controls, products]);

  useEffect(() => {
    let sorted = [...filteredProducts];
    switch (sortBy) {
      case "Price: Low to High":
        sorted.sort(
          (a, b) => a.price - (a.discount || 0) - (b.price - (b.discount || 0))
        );
        break;
      case "Price: High to Low":
        sorted.sort(
          (a, b) => b.price - (b.discount || 0) - (a.price - (a.discount || 0))
        );
        break;
      case "Rating":
        sorted.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      default:
        break;
    }
    setFilteredProducts(sorted);
  }, [sortBy]);

  const formatINR = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-8 sm:mb-16"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Explore advanced IFPDs, 3D printers, and cameras for education excellence
          </h1>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-8 sm:mb-12"
        >
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-4 sm:mb-8">
            {filters.map((filter) => (
              <motion.button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                }}
                whileTap={{ scale: 0.95 }}
                className={`px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xl"
                    : "bg-white text-gray-700 hover:bg-gray-50 shadow"
                }`}
              >
                {filter}
              </motion.button>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-gray-600 text-sm sm:text-base font-medium"
            >
              {filteredProducts.length} products found
            </motion.p>
            <div className="relative w-full sm:w-auto">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none w-full bg-white border border-gray-200 rounded-lg pl-3 pr-8 py-2 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 shadow-sm hover:shadow-md transition-all"
              >
                {sortOptions.map((option) => (
                  <option key={option} value={option}>
                    Sort by: {option}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                <svg
                  className="h-4 w-4 sm:h-5 sm:w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Products Grid */}
{isLoading ? (
  <div className="text-center py-10 text-lg">Loading products...</div>
) : (
  <motion.div
    animate={controls}
    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
  >
    {filteredProducts.map((product, index) => (
      <motion.div
        key={product._id || product.id || index}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: index * 0.1,
          duration: 0.6,
          ease: "easeOut",
        }}
        whileHover={{
          y: -10,
          boxShadow: "0 15px 30px rgba(0,0,0,0.15)",
          transition: { duration: 0.3 },
        }}
        className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col"
      >
        <div className="relative group">
          <motion.img
            src={product.image}
            alt={product.name}
            className="h-64 w-full object-cover group-hover:scale-105 transition-transform duration-500"
            whileHover={{ scale: 1.05 }}
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
              {product.discount.toLocaleString("en-IN")}% OFF
            </motion.div>
          )}
        </div>
        <div className="p-6 flex flex-col flex-grow">
  {/* Product Title */}
  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2 line-clamp-2">
    {product.name}
  </h3>
  
  {/* Star Ratings with Golden Stars and Hover Animation */}
<div className="flex items-center mb-4">
  {[...Array(5)].map((_, i) => {
    // Use product.rating if available, otherwise generate random rating (4-5 stars)
    const rating = product.rating || Math.floor(Math.random() * 2) + 4;
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
    ({product.reviews || Math.floor(Math.random() * 50) + 10} reviews)
  </motion.span>
</div>

  {/* See More Button at the bottom */}
  <div className="mt-auto">
    <button
      className="w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-medium rounded-lg hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300"
      onClick={() => router.push(`/product/${product._id}`)}
    >
      See More
    </button>
  </div>
</div>
      </motion.div>
    ))}
  </motion.div>
)}

        <WhatsAppWidget />
      </div>
    </div>
  );
};

export default Shop;
