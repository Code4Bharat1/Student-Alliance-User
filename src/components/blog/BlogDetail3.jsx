"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import WhatsAppWidget from "../WhatsApp/WhatApp";

export default function BlogsDetail3() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-indigo-50 via-white to-blue-50 text-gray-900 overflow-hidden">
      {/* Animated Gradient Blobs */}
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

      {/* Header */}
      <motion.header
        className="relative text-center py-20 px-6 md:px-16 lg:px-32"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 leading-tight mb-4">
          IFPD for Schools and Classes
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Transform your classroom into an interactive learning hub with
          cutting-edge technology designed to boost engagement, creativity, and
          collaboration.
        </p>
      </motion.header>

      {/* Content Sections */}
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
              Transform Classrooms with Interactive Flat Panel Displays
            </h2>
            <p className="text-gray-600 leading-relaxed text-justify">
              Interactive Flat Panel Displays (IFPDs) are revolutionizing the
              way educators teach and students learn. These smart displays
              foster collaboration, creativity, and participation — enhancing
              the overall classroom experience. With crystal-clear visuals and
              intuitive touch technology, IFPDs bring lessons to life, making
              learning engaging and fun for all.
            </p>
          </div>

          <motion.div
            className="flex-1"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src="/images/b-img7.jpg"
              alt="IFPD in Classroom"
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
              A Range Designed for Every Classroom
            </h2>
            <p className="text-gray-600 leading-relaxed text-justify">
              Whether it’s a small group or a large classroom, our IFPDs come in
              multiple sizes — 55", 65", 75", 86", and 98". Each model is built
              with durability, responsiveness, and simplicity in mind, ensuring
              seamless integration into your teaching environment. Empower
              educators to inspire creativity and enhance collaboration across
              all learning levels.
            </p>
          </div>

          <motion.div
            className="flex-1"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src="/images/b-img8.png"
              alt="Range of IFPDs"
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
              Inspire Student Engagement Like Never Before
            </h2>
            <p className="text-gray-600 leading-relaxed text-justify">
              IFPDs make learning immersive, engaging, and collaborative.
              Students can interact with lessons through multi-touch gestures,
              write notes digitally, and participate in live quizzes or group
              activities. The result? Higher focus, curiosity, and retention —
              creating a new era of smart, dynamic education.
            </p>
          </div>

          <motion.div
            className="flex-1"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src="/images/b-img9.jpg"
              alt="Students Engaged with IFPDs"
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
