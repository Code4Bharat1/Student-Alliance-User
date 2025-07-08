"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WhatsAppWidget from "../WhatsApp/WhatApp";

const Hero = () => {
  const faqs = [
    {
      question: "Does Student Alliance offer consulting services?",
      answer:
        "Yes, Student Alliance provides comprehensive consulting services to assess your technology needs and recommend the best solutions, including IT product integration and system setup.",
    },
    {
      question: "Can Student Alliance be integrated with existing systems?",
      answer:
        "Yes, our products are designed for seamless integration with your existing systems. Our team can assist with configuring and installing products to ensure compatibility with your current infrastructure.",
    },
    {
      question: "What industries does Student Alliance cater to?",
      answer:
        " Student Alliance serves a range of industries, including education, corporate offices, and government institutions, providing solutions such as digital boards, cameras, and IT infrastructure.",
    },
    {
      question: "Does Student Alliance handle large-scale installations? ",
      answer:
        "Yes, Student Alliance is equipped to manage both small and large-scale installations, ensuring efficient setup and configuration for projects of any size",
    },
    {
      question: "Does Student Alliance provide after-sales support?",
      answer:
        "Yes, we offer ongoing after-sales support for all products. Our team is available for troubleshooting assistance, updates, and any other support you may need post-purchase.",
    },
    {
      question: "Can I request a demo before purchasing Student Alliance products?",
      answer:
        "Yes, Student Alliance offers product demos. Please contact our sales team to schedule a demo and explore how our solutions can fit your needs.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[90vh] flex items-center justify-center text-white"
        style={{ backgroundImage: "url('/images/about-bg2.png')" }}
      >
        <div className="absolute inset-0 bg-opacity-70 backdrop-brightness-50"></div>

        <motion.div
          className="relative z-10 max-w-4xl px-6 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1
            className="text-2xl md:text-5xl font-extrabold mb-6 tracking-wide"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            India’s Pioneer in STEM & Robotics Lab Solutions
          </motion.h1>

          <motion.p
            className="text-md md:text-2xl leading-relaxed  text-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Founded in 2012, Student Alliance LLP is India’s leading provider of
            innovative educational lab solutions. We design and deliver cutting-edge
            STEM and robotics labs that spark curiosity, creativity, and future-ready
            learning.
            <br />
            <br />
            With a passionate team and end-to-end services—ranging from layout
            design to artistic decor—we’ve transformed 100+ school labs across
            India.
          </motion.p>
        </motion.div>
      </section>

      {/* Our Foundation and Beliefs Section */}
      <section className="py-20 px-4 bg-white text-black">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Foundation and Beliefs
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            An In-depth Look at What Drives Us Forward, Inspires Our Aspirations, and Guides Every Step We Take
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Mission */}
          <motion.div
            whileHover={{ scale: 1.03, boxShadow: "0px 15px 30px rgba(0,0,0,0.2)" }}
            transition={{ type: "spring", stiffness: 100 }}
            className="bg-cover bg-center rounded-2xl text-white p-0 flex flex-col justify-end h-[450px] cursor-pointer"
            style={{ backgroundImage: "url('/images/mission.jpg')" }}
          >
            <div className="bg-black/30 backdrop-blur-md p-5 rounded-b-2xl">
              <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
              <p className="text-sm md:text-base">
                To empower individuals and organizations by delivering innovative technology
                solutions that simplify communication, enhance collaboration, and drive
                success across all sectors.
              </p>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            whileHover={{ scale: 1.03, boxShadow: "0px 15px 30px rgba(0,0,0,0.2)" }}
            transition={{ type: "spring", stiffness: 100 }}
            className="bg-cover bg-center rounded-2xl text-white p-0 flex flex-col justify-end h-[450px] cursor-pointer"
            style={{ backgroundImage: "url('/images/vision.jpg')" }}
          >
            <div className="bg-black/30 backdrop-blur-md p-5 rounded-b-2xl">
              <h3 className="text-2xl font-bold mb-2">Our Vision</h3>
              <p className="text-sm md:text-base">
                To become a global leader in providing accessible and reliable audio-visual technology,
                transforming the way people connect, learn, and grow in both educational and professional environments.
              </p>
            </div>
          </motion.div>

          {/* Values */}
          <motion.div
            whileHover={{ scale: 1.03, boxShadow: "0px 15px 30px rgba(0,0,0,0.2)" }}
            transition={{ type: "spring", stiffness: 100 }}
            className="bg-cover bg-center rounded-2xl text-white p-0 flex flex-col justify-end h-[450px] cursor-pointer"
            style={{ backgroundImage: "url('/images/values.jpg')" }}
          >
            <div className="bg-black/30 backdrop-blur-md p-5 rounded-b-2xl">
              <h3 className="text-2xl font-bold mb-2">Our Values</h3>
              <p className="text-sm md:text-base">
                We prioritize innovation with fresh ideas, ensure accessibility through affordable,
                user-friendly tech, maintain reliability with trusted products, and focus on addressing
                client needs for their success.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-10">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4 ">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                className="border border-gray-100 bg-gray rounded-xl shadow-md overflow-hidden "
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left px-5 py-4 font-semibold text-md focus:outline-none flex justify-between items-center"
                >
                  <span
                    className={`transition-colors ${
                      openIndex === idx ? "text-blue-500" : "text-black"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-black transform transition-transform duration-300 ${
                      openIndex === idx ? "rotate-180" : "rotate-0"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div
                      className="px-5 pb-4 text-gray-600 text-base"
                      initial={{ opacity: 0, height: 0, scale: 0.95 }}
                      animate={{ opacity: 1, height: "auto", scale: 1 }}
                      exit={{ opacity: 0, height: 0, scale: 0.95 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      <p>{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Icon */}
      <WhatsAppWidget />
    </>
  );
};

export default Hero;
