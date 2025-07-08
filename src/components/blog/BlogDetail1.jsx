"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';
import WhatsAppWidget from '../WhatsApp/WhatApp';

export default function BlogsDetail() {
  return (
    <>
      <div className="px-4 py-8 md:px-16 lg:px-32 bg-white text-gray-800">
        <h1 className="text-4xl font-bold text-center border-b-4 border-blue-600 pb-4 mb-12">
          Blogs Detail
        </h1>

        {/* Header Section */}
        <section className="mb-16">
          <h2 className="text-2xl text-purple-600 font-semibold mb-6 border-l-4 border-purple-600 pl-4 text-left">
            INTERACTIVE FLAT PANEL DISPLAYS
          </h2>

          <motion.div
            className="grid md:grid-cols-2 gap-8 items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/images/b-img1.png"
              alt="4K Display"
              width={600}
              height={400}
              className="rounded-xl shadow-xl w-full h-auto"
            />

            <div className="text-left">
              <h3 className="text-xl font-semibold mb-4"> 
                Elevate Interactions: Unleash the Power of Interactive Flat Panels
              </h3>
              <p className="text-gray-600 text-base leading-relaxed text-justify">
                Unleash the Future of Interaction: Solitaire Interactive Flat Panel Displays. Elevate collaboration and
                engagement with cutting-edge technology that redefines presentations, meetings, and learning experiences.
                Experience brilliance, empower productivity.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Complete Range Section */}
        <section className="mb-16">
          <motion.div
            className="grid md:grid-cols-2 gap-8 items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-xl font-semibold mb-4">
                A Complete Range of Interactive Displays
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                Interactive Flat Panel aids teaching and learning. We provide a complete range (55", 65", 75", 86" & 98")
                of reliable, high quality yet affordable Interactive Flat Panel Display (IFPD) systems with precise interactive
                experience, ideal for classrooms, training rooms, learning centres, and meeting rooms. We offer interactive
                tools to help teachers engage and inspire their students/learners.
              </p>
            </div>

            <Image
              src="/images/b-img2.png"
              alt="Interactive Panels"
              width={600}
              height={400}
              className="rounded-xl shadow-xl w-full h-auto"
            />
          </motion.div>
        </section>

        {/* Engage Students Section */}
        <section>
          <motion.div
            className="grid md:grid-cols-2 gap-8 items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/b-img3.png"
              alt="Students Using Panels"
              width={600}
              height={400}
              className="rounded-xl shadow-xl w-full h-auto"
            />

            <div>
              <h3 className="text-xl font-semibold mb-4">
                Engage Students Like Never Before
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                When students learn or are taught using SOLITAIRE IFPDs, our products ensure that the amount of attention,
                curiosity, enthusiasm, optimism, and passion they show extends to their motivation to learn and succeed in
                their education. Simple Design, 4K Resolution, Intuitive Interactive software, Full K12 content support.
                Teachers can improve learning outcomes using responsive touch, rich yet simple to use interactive software.
              </p>
            </div>
          </motion.div>
        </section>
        <WhatsAppWidget/>
      </div>
    </>
  );
}
