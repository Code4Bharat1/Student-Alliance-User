"use client";

import React from "react";
import { motion } from "framer-motion";

const highlights = [
  {
    title: "Best Startup Idea - 1st Nov 2018",
    description:
      "Recognized for innovation and impact, this idea stood out among thousands. Aimed at empowering educators and creators with smart digital teaching setups.",
    imgSrc: "/images/h1.png",
    alt: "Best Startup Idea",
    reverse: false,
  },
  {
    title: "Start-Up of the Year - 2018",
    description:
      "Student Alliance LLP was honored as the Outstanding Start-Up of the Year by the Indo Global Chamber of Commerce Industries, held at Vivanta by Taj, Goa.",
    imgSrc: "/images/h2.png",
    alt: "Start-Up of the Year 2018",
    reverse: true,
  },
  {
    title: "World Records",
    description:
      "World Record in STEM Education — trained 6,627 students by 204 trainers across 5 states: Maharashtra, Rajasthan, Karnataka, Telangana, and Uttar Pradesh.",
    imgSrc: "/images/h3.png",
    alt: "World Record",
    reverse: false,
  },
];

const Highlight = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-bg-section">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-secondary/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
      </div>

      <motion.div
        className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-heading text-center mb-16 gradient-text">
          Highlighted By
        </h2>

        <div className="space-y-16">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              className={`flex flex-col ${
                item.reverse ? "md:flex-row-reverse" : "md:flex-row"
              } items-center rounded-3xl overflow-hidden bg-bg-card border border-border-primary transition-all duration-500 hover:-translate-y-2`}
              style={{ boxShadow: "var(--shadow-card)" }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="w-full md:w-1/2 h-64 md:h-80 overflow-hidden relative"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src={item.imgSrc}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>

              <div className="w-full md:w-1/2 p-8 text-left">
                <h3 className="text-2xl font-bold mb-4 text-brand-primary">
                  {item.title}
                </h3>
                <p className="text-base leading-relaxed text-text-muted">
                  {item.description}
                </p>
                <div
                  className="mt-4 w-24 h-[3px] rounded-full"
                  style={{ backgroundImage: "var(--brand-gradient)" }}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Highlight;
