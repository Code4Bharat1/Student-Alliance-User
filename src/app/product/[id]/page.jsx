"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import WhatsAppWidget from "@/components/WhatsApp/WhatApp";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

export default function ProductDetail() {
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.auth.user);

  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (!id) return;
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`https://student-alliance-api.code4bharat.com/api/products/${id}`);
        setProduct(res.data);
      } catch (error) {
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  useEffect(() => {
    if (product) {
      setMainImage(product.image);
    }
  }, [product]);

  if (loading)
    return <div className="text-center py-10 text-lg">Loading...</div>;
  if (!product)
    return (
      <div className="text-center py-10 text-red-500">Product not found.</div>
    );

  // Calculate prices
  const discountedPrice = product.price * (1 - (product.discount || 0) / 100);
  const totalPrice = discountedPrice * quantity;
  const totalSavings = (product.price - discountedPrice) * quantity;

  const handleAddToCart = async () => {
    if (!token) {
      toast.error("Please login first to add to cart.");
      router.replace("/contact");
      return;
    }
    try {
      const res = await axios.post(
        "https://student-alliance-api.code4bharat.com/api/cart/add",
        {
          customerId: user._id,
          productId: product._id,
          quantity,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.status === 200) {
        toast.success("Product added to cart!");
      } else {
        toast.error("Failed to add to cart.");
      }
    } catch (err) {
      toast.error("Error adding to cart.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 px-4 py-8">
      <div className="max-w-7xl mx-auto bg-white shadow-xl rounded-xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
          {/* Product Image Section */}
          <div className="flex flex-col gap-4">
            <motion.div
              className="relative aspect-square w-full rounded-xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src={mainImage || product.image}
                alt={product.name}
                width={600}
                height={600}
                className="w-full h-full object-contain transition duration-500 hover:scale-105"
                priority
              />
              {product.discount > 0 && (
                <div className="absolute top-4 right-4 bg-red-500 text-white font-bold px-3 py-1 rounded-full text-xs">
                  {product.discount}% OFF
                </div>
              )}
              {product.isNew && (
                <div className="absolute top-4 left-4 bg-green-500 text-white font-bold px-3 py-1 rounded-full text-xs">
                  NEW
                </div>
              )}
            </motion.div>

            {/* Additional Images */}
            {Array.isArray(product.additionalImages) &&
              product.additionalImages.filter(
                (img) => typeof img === "string" && img.trim() !== ""
              ).length > 0 && (
                <div className="flex gap-2 overflow-x-auto py-2">
                  {product.additionalImages
                    .filter(
                      (img) => typeof img === "string" && img.trim() !== ""
                    )
                    .map((img, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-shrink-0"
                      >
                        <Image
                          src={img}
                          alt={`${product.name} - ${idx + 1}`}
                          width={100}
                          height={100}
                          className={`w-20 h-20 rounded-lg border-2 object-cover cursor-pointer ${
                            mainImage === img
                              ? "border-purple-500"
                              : "border-gray-200"
                          }`}
                          onClick={() => setMainImage(img)}
                        />
                      </motion.div>
                    ))}
                </div>
              )}
          </div>

          {/* Product Info Section */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                {product.name}
              </h1>
              
              {/* Star Ratings */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <motion.svg
                      key={i}
                      className={`h-5 w-5 ${
                        i < (product.rating || 4) ? "text-yellow-400" : "text-gray-300"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      whileHover={{ scale: 1.2 }}
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </motion.svg>
                  ))}
                </div>
              </div>

              {/* Description Section */}
<motion.div 
  className="mb-6"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
  <div className="flex items-center gap-2 mb-3">
    <svg 
      className="w-5 h-5 text-purple-500" 
      fill="currentColor" 
      viewBox="0 0 20 20"
    >
      <path 
        fillRule="evenodd" 
        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" 
        clipRule="evenodd" 
      />
    </svg>
    <h3 className="text-xl font-bold text-gray-800">Product Details</h3>
  </div>
  
  <motion.div
    className="max-h-48 overflow-y-auto pr-3 mb-4 p-4 bg-gray-50 rounded-xl border border-gray-200"
    whileHover={{ boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }}
    transition={{ duration: 0.3 }}
  >
    <div className="prose prose-sm text-gray-600">
      {product.description.split('\n').map((paragraph, i) => (
        <motion.p 
          key={i}
          className="mb-3 leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: i * 0.05 }}
        >
          {paragraph}
        </motion.p>
      ))}
    </div>
  </motion.div>
</motion.div>

              {/* Features */}
{product.features && product.features.length > 0 && (
  <div className="mb-8">
    <motion.h3 
      className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-purple-100"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
    >
      ✨ Key Features
    </motion.h3>
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {product.features.map((feature, index) => (
        <motion.li 
          key={index}
          className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-purple-50 transition-colors"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex-shrink-0 p-1 bg-purple-100 rounded-full">
            <svg
              className="w-5 h-5 text-purple-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <span className="text-gray-700 font-medium">{feature}</span>
        </motion.li>
      ))}
    </ul>
  </div>
)}
            </div>

           {/* Price Section */}
{product.price > 0 && (
  <motion.div 
    className="bg-gradient-to-br from-indigo-50 to-purple-50 p-4 sm:p-5 rounded-xl border border-indigo-100 shadow-sm"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    whileHover={{ 
      boxShadow: "0 10px 25px -5px rgba(99, 102, 241, 0.2)",
      borderColor: "rgba(99, 102, 241, 0.3)"
    }}
  >
    <div className="flex flex-col gap-2">
      <div className="flex flex-col sm:flex-row sm:items-end gap-2 sm:gap-3">
        <motion.span 
          className="text-3xl sm:text-3xl font-extrabold text-indigo-600"
          whileHover={{ scale: 1.05 }}
        >
          ₹{totalPrice.toLocaleString("en-IN")}
        </motion.span>
        
        {product.discount > 0 && (
          <motion.div
            className="flex items-center gap-2 flex-wrap"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-base sm:text-lg line-through text-gray-500 whitespace-nowrap">
              ₹{(product.price * quantity).toLocaleString("en-IN")}
            </span>
            <motion.span 
              className="bg-green-100 text-green-800 font-semibold px-2 py-1 rounded-full text-xs flex items-center gap-1 whitespace-nowrap"
              whileHover={{ scale: 1.05 }}
            >
              <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              Save ₹{totalSavings.toLocaleString("en-IN")}
            </motion.span>
          </motion.div>
        )}
      </div>

      <motion.div 
        className="flex items-center gap-2 text-xs sm:text-sm text-indigo-500 mt-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
        </svg>
        <span>
          {quantity} {quantity > 1 ? "items" : "item"} × ₹
          {discountedPrice.toLocaleString("en-IN")} each
        </span>
      </motion.div>

      {product.discount > 0 && (
        <motion.div 
          className="mt-3 pt-3 border-t border-indigo-100 flex flex-col xs:flex-row xs:items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <span className="text-xs font-medium bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full w-fit">
            {product.discount}% OFF
          </span>
          <span className="text-xs text-gray-500">
            Limited time offer
          </span>
        </motion.div>
      )}
    </div>
  </motion.div>
)}

{/* Quantity & Buttons */}
<div className="space-y-4 mt-4">
  <motion.div 
    className="flex flex-col sm:flex-row sm:items-center gap-3 p-3 sm:p-4 bg-gray-50 rounded-xl border border-gray-200"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.3 }}
  >
    <div className="flex items-center justify-between sm:justify-start gap-2">
      <label htmlFor="quantity" className="flex items-center gap-2 text-gray-700 font-medium text-sm sm:text-base">
        <svg 
          className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          />
        </svg>
        <span className="whitespace-nowrap">Quantity:</span>
      </label>
      
      <div className="flex items-center gap-2">
        <motion.button
          type="button"
          className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center bg-white border border-gray-300 rounded-full text-purple-600 hover:bg-purple-50 transition-colors disabled:opacity-50"
          whileTap={{ scale: 0.9 }}
          onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
          disabled={quantity <= 1}
        >
          <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
          </svg>
        </motion.button>
        
        <motion.input
          type="number"
          id="quantity"
          min="1"
          max={product?.stocks || 10}
          value={quantity}
          onChange={(e) => {
            const value = parseInt(e.target.value) || 1;
            const max = product?.stocks || 10;
            setQuantity(Math.max(1, Math.min(max, value)));
          }}
          className="w-12 sm:w-16 p-1 sm:p-2 text-center border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 font-medium text-sm sm:text-base"
          whileFocus={{ scale: 1.05 }}
        />
        
        <motion.button
          type="button"
          className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center bg-white border border-gray-300 rounded-full text-purple-600 hover:bg-purple-50 transition-colors disabled:opacity-50"
          whileTap={{ scale: 0.9 }}
          onClick={() => setQuantity(prev => Math.min(product?.stocks || 10, prev + 1))}
          disabled={quantity >= (product?.stocks || 10)}
        >
          <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
          </svg>
        </motion.button>
      </div>
    </div>
    
    {product?.stocks && (
      <motion.div 
        className="flex items-center justify-center sm:justify-start gap-1 text-xs sm:text-sm text-gray-500 sm:ml-auto bg-green-50 px-3 py-1.5 rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
        <span>{product.stocks} in stock</span>
      </motion.div>
    )}
  </motion.div>

  <div className="flex flex-col sm:flex-row gap-3">
  <Link href={"https://wa.me/9594402775"} target="_blank">
    <motion.button
      className="flex-1 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 flex items-center justify-center gap-2 text-base"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      onClick={handleAddToCart}
      disabled={product.stocks <= 0}
    >
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
      </svg>
      BUY NOW
    </motion.button>
  </Link>
</div>
</div>

            {/* Additional Info */}
            <div className="pt-4 border-t border-gray-200">
              <div className="flex items-center gap-2 text-gray-600">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
                <span>Need help? Call us at +91-9594402775</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <WhatsAppWidget />
    </div>
  );
}