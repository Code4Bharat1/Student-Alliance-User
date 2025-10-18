"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import WhatsAppWidget from "@/components/WhatsApp/WhatApp";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { Star, ShoppingCart, Phone, Check, Minus, Plus, Info, Package, Heart, Share2, Truck, Shield, Award } from "lucide-react";

export default function ProductDetail() {
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.auth.user);

  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(null);
  const [activeTab, setActiveTab] = useState("description");
  const [liked, setLiked] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!id) return;
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://student-alliance-api.code4bharat.com/api/products/${id}`);
        const data = await res.json();
        setProduct(data);
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

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <motion.div
          className="flex flex-col items-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="relative w-24 h-24"
          >
            <motion.div
              className="absolute inset-0 border-4 border-blue-500 border-t-transparent rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-2 border-4 border-purple-500 border-b-transparent rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
          <p className="text-slate-300 font-semibold text-lg">Loading Amazing Product...</p>
        </motion.div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <motion.div 
            className="w-32 h-32 bg-gradient-to-br from-red-500 to-pink-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl"
            animate={{ rotate: [0, -5, 5, -5, 0] }}
            transition={{ duration: 0.5 }}
          >
            <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </motion.div>
          <h3 className="text-3xl font-bold text-white mb-3">Product Not Found</h3>
          <p className="text-slate-400 text-lg">Sorry, this product doesn't exist</p>
        </motion.div>
      </div>
    );
  }

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
      const res = await fetch(
        "https://student-alliance-api.code4bharat.com/api/cart/add",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            customerId: user._id,
            productId: product._id,
            quantity,
          }),
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-30">
        <motion.div 
          className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500 rounded-full"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          style={{ filter: 'blur(100px)' }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500 rounded-full"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          style={{ filter: 'blur(100px)' }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-8 md:py-12">
        {/* Back Button & Actions */}
        <motion.div 
          className="flex items-center justify-between mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <motion.button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
            whileHover={{ x: -5 }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </motion.button>
          
          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setLiked(!liked)}
              className={`p-3 rounded-full transition-all ${liked ? 'bg-red-500 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}
            >
              <Heart className={`w-5 h-5 ${liked ? 'fill-current' : ''}`} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full bg-slate-800 text-slate-300 hover:bg-slate-700 transition-colors"
            >
              <Share2 className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Left: Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="sticky top-8 space-y-4">
              <motion.div
                className="relative aspect-square w-full rounded-3xl overflow-hidden bg-slate-800 shadow-2xl border border-slate-700"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={mainImage || product.image}
                  alt={product.name}
                  width={600}
                  height={600}
                  className="w-full h-full object-contain p-8"
                  priority
                />
                
                {/* Floating Badges */}
                <div className="absolute top-6 left-6 flex flex-col gap-3">
                  {product.discount > 0 && (
                    <motion.div
                      initial={{ scale: 0, rotate: -20 }}
                      animate={{ scale: 1, rotate: 0 }}
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      className="px-4 py-2 bg-gradient-to-r from-red-500 to-pink-500 text-white text-sm font-bold rounded-full shadow-xl backdrop-blur-sm"
                    >
                      -{product.discount}% OFF
                    </motion.div>
                  )}
                  {product.isNew && (
                    <motion.div
                      initial={{ scale: 0, rotate: 20 }}
                      animate={{ scale: 1, rotate: 0 }}
                      whileHover={{ rotate: -5, scale: 1.1 }}
                      className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-bold rounded-full shadow-xl backdrop-blur-sm"
                    >
                      ✨ NEW
                    </motion.div>
                  )}
                </div>

                {/* Rating Badge */}
                <div className="absolute bottom-6 right-6">
                  <motion.div 
                    className="px-4 py-2 bg-slate-900/80 backdrop-blur-md rounded-full flex items-center gap-2 shadow-xl border border-slate-700"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-white font-bold">{product.rating || 4}.0</span>
                  </motion.div>
                </div>
              </motion.div>

              {/* Thumbnail Gallery */}
              {Array.isArray(product.additionalImages) &&
                product.additionalImages.filter(
                  (img) => typeof img === "string" && img.trim() !== ""
                ).length > 0 && (
                  <div className="flex gap-3 overflow-x-auto pb-2">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setMainImage(product.image)}
                      className={`flex-shrink-0 w-24 h-24 rounded-2xl overflow-hidden cursor-pointer border-2 transition-all ${
                        mainImage === product.image
                          ? "border-blue-500 shadow-lg shadow-blue-500/50"
                          : "border-slate-700 hover:border-slate-600"
                      }`}
                    >
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={100}
                        height={100}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    {product.additionalImages
                      .filter(
                        (img) => typeof img === "string" && img.trim() !== ""
                      )
                      .map((img, idx) => (
                        <motion.div
                          key={idx}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setMainImage(img)}
                          className={`flex-shrink-0 w-24 h-24 rounded-2xl overflow-hidden cursor-pointer border-2 transition-all ${
                            mainImage === img
                              ? "border-blue-500 shadow-lg shadow-blue-500/50"
                              : "border-slate-700 hover:border-slate-600"
                          }`}
                        >
                          <Image
                            src={img}
                            alt={`${product.name} - ${idx + 1}`}
                            width={100}
                            height={100}
                            className="w-full h-full object-cover"
                          />
                        </motion.div>
                      ))}
                  </div>
                )}

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-3">
                <motion.div 
                  className="bg-slate-800 rounded-2xl p-4 text-center border border-slate-700"
                  whileHover={{ y: -5, borderColor: "rgb(59, 130, 246)" }}
                >
                  <Truck className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                  <p className="text-xs text-slate-300 font-medium">Free Delivery</p>
                </motion.div>
                <motion.div 
                  className="bg-slate-800 rounded-2xl p-4 text-center border border-slate-700"
                  whileHover={{ y: -5, borderColor: "rgb(168, 85, 247)" }}
                >
                  <Shield className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                  <p className="text-xs text-slate-300 font-medium">Secure Payment</p>
                </motion.div>
                <motion.div 
                  className="bg-slate-800 rounded-2xl p-4 text-center border border-slate-700"
                  whileHover={{ y: -5, borderColor: "rgb(34, 197, 94)" }}
                >
                  <Award className="w-6 h-6 text-green-400 mx-auto mb-2" />
                  <p className="text-xs text-slate-300 font-medium">Top Quality</p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right: Product Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Title */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                {product.name}
              </h1>
              
              <div className="flex items-center gap-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < (product.rating || 4)
                          ? "fill-yellow-400 text-yellow-400"
                          : "fill-slate-700 text-slate-700"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-slate-400">
                  ({product.reviews || 45} reviews)
                </span>
              </div>
            </div>

            {/* Price Card */}
            {product.price > 0 && (
              <motion.div
                className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-6 shadow-2xl border border-blue-400/20"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="text-5xl font-black text-white">
                    ₹{totalPrice.toLocaleString("en-IN")}
                  </span>
                  {product.discount > 0 && (
                    <span className="text-2xl line-through text-blue-200">
                      ₹{(product.price * quantity).toLocaleString("en-IN")}
                    </span>
                  )}
                </div>
                
                {totalSavings > 0 && (
                  <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 w-fit">
                    <Check className="w-5 h-5 text-green-300" />
                    <span className="text-white font-semibold">
                      Save ₹{totalSavings.toLocaleString("en-IN")}
                    </span>
                  </div>
                )}
              </motion.div>
            )}

            {/* Tabs */}
            <div>
              <div className="flex gap-2 mb-4 bg-slate-800 rounded-2xl p-2 border border-slate-700">
                {["description", "features"].map((tab) => (
                  <motion.button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 py-3 px-4 rounded-xl font-semibold capitalize transition-all ${
                      activeTab === tab
                        ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                        : "text-slate-400 hover:text-white"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {tab}
                  </motion.button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                {activeTab === "description" && (
                  <motion.div
                    key="description"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="bg-slate-800 rounded-2xl p-6 border border-slate-700"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <Info className="w-5 h-5 text-blue-400" />
                      <h3 className="font-bold text-white text-lg">About This Product</h3>
                    </div>
                    <div className="max-h-60 overflow-y-auto text-slate-300 leading-relaxed space-y-3">
                      {product.description.split('\n').map((para, i) => (
                        <p key={i}>{para}</p>
                      ))}
                    </div>
                  </motion.div>
                )}

                {activeTab === "features" && product.features && product.features.length > 0 && (
                  <motion.div
                    key="features"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="bg-slate-800 rounded-2xl p-6 border border-slate-700"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <Package className="w-5 h-5 text-purple-400" />
                      <h3 className="font-bold text-white text-lg">Key Features</h3>
                    </div>
                    <div className="space-y-3">
                      {product.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          className="flex items-start gap-3 p-4 bg-slate-900/50 rounded-xl hover:bg-slate-900 transition-colors group"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                            <Check className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-slate-300 group-hover:text-white transition-colors">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Quantity & Stock */}
            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
              <div className="flex items-center justify-between mb-4">
                <label className="font-bold text-white text-lg">Quantity</label>
                {product.stocks && (
                  <span className="text-sm text-green-400 flex items-center gap-2 bg-green-500/20 px-3 py-1 rounded-full">
                    <Check className="w-4 h-4" />
                    {product.stocks} Available
                  </span>
                )}
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center bg-slate-900 rounded-2xl overflow-hidden border-2 border-slate-700">
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                    className="p-4 hover:bg-slate-800 disabled:opacity-50 transition-colors"
                  >
                    <Minus className="w-5 h-5 text-white" />
                  </motion.button>
                  
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => {
                      const value = parseInt(e.target.value) || 1;
                      const max = product?.stocks || 10;
                      setQuantity(Math.max(1, Math.min(max, value)));
                    }}
                    className="w-20 text-center font-bold text-xl text-white bg-transparent focus:outline-none"
                  />
                  
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setQuantity(Math.min(product?.stocks || 10, quantity + 1))}
                    disabled={quantity >= (product?.stocks || 10)}
                    className="p-4 hover:bg-slate-800 disabled:opacity-50 transition-colors"
                  >
                    <Plus className="w-5 h-5 text-white" />
                  </motion.button>
                </div>
                
                <span className="text-slate-400">
                  ₹{discountedPrice.toLocaleString("en-IN")} each
                </span>
              </div>
            </div>

            {/* Buy Button */}
            <Link href={"https://wa.me/9594402775"} target="_blank">
              <motion.button
                onClick={handleAddToCart}
                disabled={product.stocks <= 0}
                className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white font-bold py-5 px-6 rounded-2xl flex items-center justify-center gap-3 shadow-2xl hover:shadow-3xl transition-all disabled:opacity-50 text-lg relative overflow-hidden group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
                <ShoppingCart className="w-6 h-6" />
                BUY NOW ON WHATSAPP
              </motion.button>
            </Link>

            {/* Contact */}
            <motion.div 
              className="flex items-center gap-4 mt-6 p-5 bg-slate-800 rounded-2xl border border-slate-700"
              whileHover={{ borderColor: "rgb(59, 130, 246)" }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-bold text-white">Need Help?</p>
                <p className="text-slate-400">Call +91-9594402775</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <WhatsAppWidget />
    </div>
  );
}