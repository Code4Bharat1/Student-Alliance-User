"use client";

import React, { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Star, MessageCircle, ArrowRight } from "lucide-react";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [productRatings, setProductRatings] = useState({});
  const [reviewCounts, setReviewCounts] = useState({});

  // Generate ratings and review counts in memory
  useEffect(() => {
    const generateRatings = {};
    const generateReviews = {};

    products.forEach((product) => {
      if (!generateRatings[product._id]) {
        generateRatings[product._id] = Math.floor(Math.random() * 2) + 4;
        generateReviews[product._id] = Math.floor(Math.random() * 50) + 10;
      }
    });

    setProductRatings(generateRatings);
    setReviewCounts(generateReviews);
  }, [products]);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        // Try sessionStorage cache first to avoid duplicate fetches (helps in dev StrictMode/HMR)
        try {
          const cached = sessionStorage.getItem("ifpdProducts");
          if (cached) {
            const parsed = JSON.parse(cached);
            console.log("Using cached products (IFPD):", parsed);
            setProducts(parsed);
            return;
          }
        } catch (err) {
          console.warn("sessionStorage read failed:", err?.message || err);
        }

        // If another mount already started fetching, reuse its promise to dedupe.
        // Create a single controllable promise on `window` to avoid race conditions.
        try {
          if (typeof window !== "undefined") {
            if (!window.__ifpdProductsPromise) {
              let _resolve, _reject;
              window.__ifpdProductsPromise = new Promise((resolve, reject) => {
                _resolve = resolve;
                _reject = reject;
              });

              (async () => {
                try {
                  const res = await fetch("/api/products/category/IFPD");
                  if (!res.ok)
                    throw new Error(`HTTP error! Status: ${res.status}`);
                  const data = await res.json();
                  try {
                    sessionStorage.setItem(
                      "ifpdProducts",
                      JSON.stringify(data),
                    );
                  } catch (err) {
                    console.warn(
                      "sessionStorage write failed:",
                      err?.message || err,
                    );
                  }
                  _resolve(data);
                } catch (err) {
                  _reject(err);
                } finally {
                  // allow other mounts to complete awaiting the promise; then remove reference
                  setTimeout(() => {
                    try {
                      delete window.__ifpdProductsPromise;
                    } catch (e) {}
                  }, 0);
                }
              })();
            }

            const data = await window.__ifpdProductsPromise;
            setProducts(data);
            return;
          }
        } catch (err) {
          console.warn("in-memory promise reuse failed:", err?.message || err);
        }
      } catch (error) {
        console.error("Detailed fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const fallbackImage = "/images/robot.png";

  // Choose a smarter fallback based on product name/category
  const getFallbackImage = (p) => {
    if (p?.image) return p.image;
    const name = (p?.name || "").toLowerCase();
    const category = (p?.category || "").toLowerCase();

    if (
      name.includes("ifpd") ||
      category.includes("ifpd") ||
      name.includes("display")
    )
      return "/images/IFPD-home.png";
    if (
      name.includes("printer") ||
      name.includes("3d") ||
      category.includes("printer")
    )
      return "/images/printer.png";
    if (
      name.includes("smart") ||
      name.includes("car") ||
      name.includes("robot")
    )
      return "/images/robot.png";
    if (name.includes("kit") || name.includes("stem"))
      return "/images/diy-stem.png";

    return fallbackImage;
  };

  // Deduplicate products by normalized name (helps when DB has duplicate entries)
  const uniqueProducts = useMemo(() => {
    if (!Array.isArray(products)) return [];
    const seen = new Map();
    for (const p of products) {
      if (!p) continue;
      const nameKey = (p.name || "").toString().toLowerCase().trim();
      const key = nameKey || p._id || JSON.stringify(p);
      if (!seen.has(key)) seen.set(key, p);
    }
    return Array.from(seen.values());
  }, [products]);

  const [visibleProducts, setVisibleProducts] = useState([]);
  const [imageCheckDone, setImageCheckDone] = useState(false);

  const handleProductClick = (productId) => {
    window.location.href = `/product/${productId}`;
  };

  // Validate images and remove products whose primary image fails to load
  useEffect(() => {
    let cancelled = false;

    const loadImage = (url, timeout = 4500) =>
      new Promise((resolve) => {
        if (!url) return resolve(false);
        const img = new window.Image();
        let done = false;
        const timer = setTimeout(() => {
          if (!done) {
            done = true;
            cleanup();
            resolve(false);
          }
        }, timeout);
        function cleanup() {
          img.onload = null;
          img.onerror = null;
          clearTimeout(timer);
        }
        img.onload = () => {
          if (!done) {
            done = true;
            cleanup();
            resolve(true);
          }
        };
        img.onerror = () => {
          if (!done) {
            done = true;
            cleanup();
            resolve(false);
          }
        };
        img.src = url;
      });

    const runCheck = async () => {
      setImageCheckDone(false);
      try {
        const cachedInvalid = new Set();
        try {
          const raw = sessionStorage.getItem("ifpdInvalidImages");
          if (raw) {
            const parsed = JSON.parse(raw);
            if (Array.isArray(parsed))
              parsed.forEach((id) => cachedInvalid.add(id));
          }
        } catch (e) {
          /* ignore */
        }

        const visible = [];

        await Promise.all(
          uniqueProducts.map(async (p) => {
            if (!p) return;
            const id = p._id ?? p.id ?? p.name ?? JSON.stringify(p);

            // If we've cached this as invalid, skip
            if (cachedInvalid.has(id)) return;

            // If there's no explicit image URL, treat as invalid (remove it)
            if (!p.image) {
              cachedInvalid.add(id);
              return;
            }

            const ok = await loadImage(p.image);
            if (ok) visible.push(p);
            else cachedInvalid.add(id);
          }),
        );

        try {
          sessionStorage.setItem(
            "ifpdInvalidImages",
            JSON.stringify(Array.from(cachedInvalid)),
          );
        } catch (e) {
          /* ignore */
        }

        if (!cancelled) setVisibleProducts(visible);
      } finally {
        if (!cancelled) setImageCheckDone(true);
      }
    };

    // run only when we have products
    if (uniqueProducts && uniqueProducts.length > 0) runCheck();
    else {
      setVisibleProducts([]);
      setImageCheckDone(true);
    }

    return () => {
      cancelled = true;
    };
  }, [uniqueProducts]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-primary">
      {/* Header Section */}
      <motion.div
        className="relative py-20 px-4 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Decorative Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-bg-badge rounded-full blur-3xl opacity-30"></div>
          <div
            className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-primary/20 rounded-full opacity-30"
            style={{ filter: "blur(100px)" }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 bg-gradient-to-r from-brand-primary to-purple-600 text-white rounded-full text-sm font-medium">
              Our Products
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-bold text-text-heading mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Interactive Flat Panel
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-purple-600">
              Display Solutions
            </span>
          </motion.h1>

          <motion.p
            className="text-text-secondary text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Discover our cutting-edge interactive display technology
          </motion.p>
        </div>
      </motion.div>

      {/* Products Grid */}
      {loading ? (
        <div className="flex items-center justify-center py-20">
          <div className="flex flex-col items-center gap-4">
            <motion.div
              className="w-16 h-16 border-4 border-brand-primary border-t-transparent rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            <p className="text-text-secondary font-medium">
              Loading products...
            </p>
          </div>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto px-4 pb-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {(imageCheckDone ? visibleProducts : uniqueProducts).map(
              (product, index) => {
                const rating =
                  product.rating || productRatings[product._id] || 4;
                const reviewCount =
                  product.reviews || reviewCounts[product._id] || 0;

                return (
                  <motion.div
                    key={product._id || index}
                    className="group bg-bg-card rounded-2xl overflow-hidden border-2 border-border-primary hover:border-brand-primary transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    whileHover={{
                      y: -8,
                      boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                    }}
                  >
                    {/* Image Container */}
                    <div className="relative aspect-[4/3] bg-gradient-to-br from-bg-section to-bg-hover overflow-hidden">
                      <img
                        src={getFallbackImage(product)}
                        alt={product.name}
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = fallbackImage;
                        }}
                        className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                      />

                      {/* Badges */}
                      <div className="absolute top-3 left-3 flex flex-col gap-2">
                        {product.isNew && (
                          <motion.div
                            initial={{ scale: 0, rotate: -10 }}
                            animate={{ scale: 1, rotate: 0 }}
                            className="px-3 py-1 bg-brand-secondary text-white text-xs font-bold rounded-full shadow-lg"
                          >
                            NEW
                          </motion.div>
                        )}
                        {product.discount > 0 && (
                          <motion.div
                            initial={{ scale: 0, rotate: 10 }}
                            animate={{ scale: 1, rotate: 0 }}
                            className="px-3 py-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold rounded-full shadow-lg"
                          >
                            -{product.discount}%
                          </motion.div>
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <h3 className="font-bold text-text-heading text-lg mb-3 line-clamp-2 min-h-[3.5rem]">
                        {product.name}
                      </h3>

                      {/* Rating */}
                      <div className="flex items-center gap-2 mb-4">
                        <div className="flex gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < rating
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "fill-border-primary text-border-primary"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-text-muted font-medium">
                          {rating}.0
                        </span>
                        <span className="text-xs text-text-tertiary">
                          ({reviewCount})
                        </span>
                      </div>

                      {/* Button */}
                      <motion.button
                        onClick={() => handleProductClick(product._id)}
                        className="w-full bg-gradient-to-r from-brand-primary to-purple-600 hover:from-brand-hover hover:to-purple-700 text-white font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 group/btn transition-all cursor-pointer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        View Details
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </motion.button>
                    </div>
                  </motion.div>
                );
              },
            )}
          </div>

          {/* Empty State */}
          {products.length === 0 && !loading && (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="w-20 h-20 bg-bg-hover rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-10 h-10 text-text-tertiary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text-heading mb-2">
                No products found
              </h3>
              <p className="text-text-secondary">
                Check back later for new products
              </p>
            </motion.div>
          )}
        </div>
      )}

      {/* WhatsApp Floating Button */}
      <motion.a
        href="https://wa.me/your-number"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-brand-secondary hover:bg-brand-secondary rounded-full shadow-2xl flex items-center justify-center z-50 transition-colors"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </motion.a>
    </div>
  );
}
