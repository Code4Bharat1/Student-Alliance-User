"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WhatsAppWidget = () => {
  const [showPopup, setShowPopup] = useState(false);
  const togglePopup = () => setShowPopup(!showPopup);

  return (
    <>
      {/* Floating WhatsApp Button */}
      <motion.button
        onClick={togglePopup}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-2xl"
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
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-8 h-8"
        />
      </motion.button>

      {/* Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="fixed bottom-28 right-6 w-80 md:w-96 bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200 z-50"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-4 flex justify-between items-center text-white">
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
            <div className="p-4 bg-gray-50">
              <p className="text-sm text-gray-700 mb-3">
                👋 Hi there! How can we help you today?
              </p>

              {/* Contact Cards */}
              <div className="space-y-3">
                {/* Contact 1 */}
                <a
                  href="https://wa.me/9594402775"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-white p-3 rounded-2xl hover:bg-green-50 transition shadow-sm"
                >
                  <img
                    src="/images/p6.png"
                    alt="Neha Fakih"
                    className="w-12 h-12 rounded-full border-2 border-green-500"
                  />
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800">Neha Fakih</p>
                    <p className="text-xs text-gray-500">Owner</p>
                  </div>
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="text-green-500 text-xs font-semibold"
                  >
                    Online
                  </motion.span>
                </a>

                {/* Contact 2 */}
                <a
                  href="https://wa.me/9920892689"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-white p-3 rounded-2xl hover:bg-green-50 transition shadow-sm"
                >
                  <img
                    src="/images/p4.png"
                    alt="Ayaan Raje"
                    className="w-12 h-12 rounded-full border-2 border-green-500"
                  />
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800">Ayaan Raje</p>
                    <p className="text-xs text-gray-500">Marketing Head</p>
                  </div>
                  <span className="text-gray-400 text-xs">Typically replies in 5m</span>
                </a>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-white border-t border-gray-200 text-center py-3 text-xs text-gray-500">
              💬 Powered by <span className="text-green-600 font-medium">WhatsApp</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default WhatsAppWidget;
