"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircle } from "lucide-react";

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
        "Student Alliance serves a range of industries, including education, corporate offices, and government institutions, providing solutions such as digital boards, cameras, and IT infrastructure.",
    },
    {
      question: "Does Student Alliance handle large-scale installations?",
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
      {/* Hero Section - Minimalist */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 min-h-screen flex items-center justify-center text-white px-4">
        <motion.div
          className="max-w-5xl mx-auto text-center space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block px-4 py-2 bg-blue-500/20 rounded-full text-sm font-medium mb-4"
          >
            Since 2012
          </motion.div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            India's Pioneer in
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mt-2">
              STEM & Robotics Labs
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Transforming education through cutting-edge lab solutions. Over 100+ schools empowered with innovative STEM and robotics learning environments.
          </p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 rounded-full font-medium transition-colors">
              Get Started
            </button>
            <button className="px-8 py-3 border border-slate-400 hover:border-white rounded-full font-medium transition-colors">
              Learn More
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6 text-slate-400" />
        </motion.div>
      </section>

      {/* Foundation Section - Clean Cards */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Our Foundation
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              The principles that drive us forward
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="group bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all"
            >
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                To empower individuals and organizations by delivering innovative technology solutions that simplify communication, enhance collaboration, and drive success.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="group bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all"
            >
              <div className="w-12 h-12 bg-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                To become a global leader in providing accessible and reliable audio-visual technology, transforming the way people connect, learn, and grow.
              </p>
            </motion.div>

            {/* Values */}
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="group bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all"
            >
              <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Values</h3>
              <p className="text-slate-600 leading-relaxed">
                We prioritize innovation, ensure accessibility through user-friendly tech, maintain reliability with trusted products, and focus on client success.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Enhanced */}
      <section className="py-24 px-4 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-30"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-block mb-4"
            >
              <div className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white text-sm font-medium">
                Got Questions?
              </div>
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-4">
              Frequently Asked
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Questions
              </span>
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Find answers to common questions about our services and solutions
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                className="group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <motion.div
                  className={`bg-white rounded-2xl overflow-hidden border-2 transition-all duration-300 ${
                    openIndex === idx 
                      ? "border-blue-500 shadow-xl shadow-blue-100" 
                      : "border-slate-200 hover:border-slate-300 hover:shadow-lg"
                  }`}
                  whileHover={{ scale: openIndex === idx ? 1 : 1.01 }}
                >
                  <button
                    onClick={() => toggleFAQ(idx)}
                    className="w-full text-left px-8 py-6 flex justify-between items-start gap-4 transition-colors"
                  >
                    <div className="flex items-start gap-4 flex-1">
                      <motion.div 
                        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${
                          openIndex === idx 
                            ? "bg-gradient-to-br from-blue-500 to-purple-500 text-white" 
                            : "bg-slate-100 text-slate-600 group-hover:bg-slate-200"
                        }`}
                        animate={{ rotate: openIndex === idx ? 360 : 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        {idx + 1}
                      </motion.div>
                      
                      <span className={`font-semibold text-lg pt-0.5 transition-colors ${
                        openIndex === idx ? "text-blue-600" : "text-slate-900"
                      }`}>
                        {faq.question}
                      </span>
                    </div>
                    
                    <motion.div
                      animate={{ rotate: openIndex === idx ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                        openIndex === idx 
                          ? "bg-blue-100" 
                          : "bg-slate-100 group-hover:bg-slate-200"
                      }`}>
                        <ChevronDown
                          className={`w-5 h-5 transition-colors ${
                            openIndex === idx ? "text-blue-600" : "text-slate-600"
                          }`}
                        />
                      </div>
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {openIndex === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <motion.div
                          initial={{ y: -10 }}
                          animate={{ y: 0 }}
                          transition={{ delay: 0.1 }}
                          className="px-8 pb-6 pl-20"
                        >
                          <div className="border-l-4 border-blue-500 pl-6 py-2">
                            <p className="text-slate-600 leading-relaxed text-base">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Still have questions?
              </h3>
              <p className="text-slate-600 mb-6">
                Our team is here to help you with any additional queries
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all">
                  Contact Support
                </button>
                <button className="px-6 py-3 border-2 border-slate-300 text-slate-700 rounded-full font-medium hover:border-slate-400 hover:shadow-md transition-all">
                  Schedule a Call
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WhatsApp Floating Button - Minimalist */}
      <motion.a
        href="https://wa.me/your-number"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg flex items-center justify-center z-50 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </motion.a>
    </>
  );
};

export default Hero;