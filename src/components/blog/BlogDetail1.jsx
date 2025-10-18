"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import WhatsAppWidget from "../WhatsApp/WhatApp";

export default function BlogsDetail() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-indigo-50 via-white to-blue-50 text-gray-900 overflow-hidden">
      {/* Animated Background Blobs */}
      <motion.div
        className="absolute top-0 left-0 w-[45rem] h-[45rem] bg-purple-300/30 blur-[120px] rounded-full"
        animate={{ y: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[35rem] h-[35rem] bg-blue-300/30 blur-[120px] rounded-full"
        animate={{ y: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
      />

      {/* Blog Title */}
      <motion.header
        className="relative text-center py-20 px-6 md:px-16 lg:px-32"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 leading-tight mb-4">
          Interactive Flat Panel Displays
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Discover how Solitaire Interactive Flat Panel Displays are reshaping
          classrooms, offices, and training spaces with intelligent technology
          and seamless collaboration tools.
        </p>
      </motion.header>

      {/* Blog Sections */}
      <main className="relative z-10 px-6 md:px-16 lg:px-40 space-y-20 pb-24">
        {/* Section 1 */}
        <motion.section
          className="flex flex-col md:flex-row items-center gap-8"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex-1 space-y-4">
            <h2 className="text-3xl font-bold text-gray-900">
              Elevate Interactions with Smart Flat Panels
            </h2>
            <p className="text-gray-600 leading-relaxed text-justify">
              Unleash the future of interaction with Solitaire Interactive Flat
              Panel Displays. Elevate collaboration, presentations, and learning
              with vibrant visuals and cutting-edge touch technology that turns
              every meeting or class into a smart experience.
            </p>
          </div>

          <motion.div
            className="flex-1"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src="/images/b-img1.png"
              alt="Interactive Display"
              width={600}
              height={400}
              className="rounded-2xl shadow-xl"
            />
          </motion.div>
        </motion.section>

        {/* Divider */}
        <div className="w-full border-t border-gray-300/50 my-4"></div>

        {/* Section 2 */}
        <motion.section
          className="flex flex-col md:flex-row-reverse items-center gap-8"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="flex-1 space-y-4">
            <h2 className="text-3xl font-bold text-gray-900">
              A Complete Range of Interactive Displays
            </h2>
            <p className="text-gray-600 leading-relaxed text-justify">
              Our Interactive Flat Panels are available in 55", 65", 75", 86" &
              98" sizes — offering ultra-responsive touch, 4K clarity, and
              effortless connectivity. Designed for classrooms, training rooms,
              and business spaces to make learning and collaboration seamless.
            </p>
          </div>

          <motion.div
            className="flex-1"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src="/images/b-img2.png"
              alt="Interactive Panels"
              width={600}
              height={400}
              className="rounded-2xl shadow-xl"
            />
          </motion.div>
        </motion.section>

        {/* Divider */}
        <div className="w-full border-t border-gray-300/50 my-4"></div>

        {/* Section 3 */}
        <motion.section
          className="flex flex-col md:flex-row items-center gap-8"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="flex-1 space-y-4">
            <h2 className="text-3xl font-bold text-gray-900">
              Engage Students Like Never Before
            </h2>
            <p className="text-gray-600 leading-relaxed text-justify">
              With SOLITAIRE IFPDs, students experience curiosity, enthusiasm,
              and motivation like never before. Our panels combine sleek design,
              4K resolution, and interactive K–12 software that transforms
              lessons into immersive, hands-on experiences.
            </p>
          </div>

          <motion.div
            className="flex-1"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src="/images/b-img3.png"
              alt="Students Using Panels"
              width={600}
              height={400}
              className="rounded-2xl shadow-xl"
            />
          </motion.div>
        </motion.section>
      </main>

      {/* Floating WhatsApp Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        <WhatsAppWidget />
      </div>
    </div>
  );
}
