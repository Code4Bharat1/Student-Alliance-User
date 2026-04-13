"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const WhatsAppWidget = () => {
  const [showPopup, setShowPopup] = useState(false);
  const togglePopup = () => setShowPopup(!showPopup);

  return (
    <>
      {/* Floating WhatsApp Button */}
      <motion.button
        onClick={togglePopup}
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-br from-brand-secondary to-brand-secondary text-white rounded-full w-16 h-16 flex items-center justify-center shadow-2xl"
        whileHover={{ scale: 1.1 }}
        animate={{
          boxShadow: [
            "0 0 0 0 rgba(16,185,129,0.7)",
            "0 0 0 20px rgba(16,185,129,0)",
          ],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
          focusable="false"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 3.08 4.18 2 2 0 0 1 5 2h3a2 2 0 0 1 2 1.72c.12.8.3 1.6.56 2.36a2 2 0 0 1-.45 2.11L9 9l3 3 1.79-1.79a2 2 0 0 1 2.11-.45c.76.26 1.56.44 2.36.56A2 2 0 0 1 22 16.92z"
          />
        </svg>
      </motion.button>

      {/* Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="fixed bottom-28 right-6 w-80 md:w-96 bg-bg-card rounded-3xl shadow-2xl overflow-hidden border border-border-primary z-50"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-brand-secondary to-brand-secondary p-4 flex justify-between items-center text-white">
              <div>
                <h3 className="text-lg font-semibold">Chat with Us</h3>
                <p className="text-xs opacity-90">We reply within minutes 💬</p>
              </div>
              <button
                onClick={togglePopup}
                className="text-white opacity-80 hover:opacity-100 transition"
              >
                ✕
              </button>
            </div>

            {/* Chat Preview Section */}
            <div className="p-4 bg-bg-section">
              <p className="text-sm text-text-primary mb-3">
                👋 Hi there! How can we help you today?
              </p>

              {/* Contact Cards */}
              <div className="space-y-3">
                {/* Contact 1 */}
                <a
                  href="https://wa.me/9594402775"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-bg-card p-3 rounded-2xl hover:bg-success-bg transition shadow-sm"
                >
                  <Image
                    src="/images/p6.png"
                    alt="Neha Fakih"
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full border-2 border-brand-secondary"
                  />
                  <div className="flex-1">
                    <p className="font-semibold text-text-heading">
                      Neha Fakih
                    </p>
                    <p className="text-xs text-text-muted">Owner</p>
                  </div>
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="text-success text-xs font-semibold"
                  >
                    Online
                  </motion.span>
                </a>

                {/* Contact 2 */}
                <a
                  href="https://wa.me/9920892689"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-bg-card p-3 rounded-2xl hover:bg-success-bg transition shadow-sm"
                >
                  <Image
                    src="/images/p4.png"
                    alt="Ayaan Raje"
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full border-2 border-brand-secondary"
                  />
                  <div className="flex-1">
                    <p className="font-semibold text-text-heading">
                      Ayaan Raje
                    </p>
                    <p className="text-xs text-text-muted">Marketing Head</p>
                  </div>
                  <span className="text-text-tertiary text-xs">
                    Typically replies in 5m
                  </span>
                </a>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-bg-card border-t border-border-primary text-center py-3 text-xs text-text-muted">
              💬 Powered by{" "}
              <span className="text-brand-secondary font-medium">WhatsApp</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default WhatsAppWidget;
