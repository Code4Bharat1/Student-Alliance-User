"use client"

import React from "react";
import { motion } from "framer-motion";

const Franchise = () => {
  return (
    <>
      <motion.section
              className="relative bg-no-repeat bg-center bg-[length:100%_100%] min-h-screen flex items-center justify-center overflow-hidden"
              style={{ backgroundImage: "url('/gallery/std-all.gif')" }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <motion.div
                className="text-center text-white"
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
              >
              </motion.div>
            </motion.section>
    </>
  );
};

export default Franchise;
