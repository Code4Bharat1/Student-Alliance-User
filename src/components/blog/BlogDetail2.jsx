"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import WhatsAppWidget from "../WhatsApp/WhatApp";

export default function BlogsDetail2() {
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
          Interactive Flat Panel Displays for Work & Office
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Empower collaboration and productivity with modern IFPDs that transform every meeting into an engaging experience.
        </p>
      </motion.header>

      {/* Main Content */}
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
              Empower Smarter Meetings and Collaboration
            </h2>
            <p className="text-gray-600 leading-relaxed text-justify">
              Revolutionize your workspace with Interactive Flat Panel Displays (IFPDs) designed for modern offices. Enhance presentations,
              brainstorming sessions, and team meetings with intuitive touch control and seamless screen sharing.
              IFPDs eliminate the need for traditional projectors and whiteboards, offering a sleek, all-in-one collaborative experience.
            </p>
          </div>

          <motion.div
            className="flex-1"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src="/images/b-img4.jpg"
              alt="Office Collaboration Display"
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
              Tailored Display Sizes for Every Meeting Room
            </h2>
            <p className="text-gray-600 leading-relaxed text-justify">
              From compact huddle spaces to large conference rooms, IFPDs are available in sizes ranging from 55" to 98".
              These panels deliver stunning 4K visuals, real-time touch responsiveness, and wireless device connectivity.
              Whether you're brainstorming ideas or giving a client pitch, IFPDs elevate your communication with professionalism and clarity.
            </p>
          </div>

          <motion.div
            className="flex-1"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src="/images/b-img5.jpg"
              alt="Business Presentation Panels"
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
              Boost Productivity in the Digital Workplace
            </h2>
            <p className="text-gray-600 leading-relaxed text-justify">
              Integrate IFPDs into your digital workflow and create an engaging environment for hybrid meetings and team collaboration.
              With features like multi-user interaction, remote access, cloud-based whiteboarding, and annotation tools,
              your team can share ideas freely—anytime, anywhere. Empower your business with technology built for agility and results.
            </p>
          </div>

          <motion.div
            className="flex-1"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src="/images/b-img6.jpg"
              alt="Office Collaboration with IFPDs"
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
