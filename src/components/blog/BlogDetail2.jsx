"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';
import WhatsAppWidget from '../WhatsApp/WhatApp';

export default function BlogsDetail2() {
  return (
    <>
      <div className="px-4 py-8 md:px-16 lg:px-32 bg-white text-gray-800">
        <h1 className="text-4xl font-bold text-center border-b-4 border-blue-600 pb-4 mb-12">
          Blogs Detail
        </h1>

        {/* Header Section */}
        <section className="mb-16">
          <h2 className="text-2xl text-purple-600 font-semibold mb-6 border-l-4 border-purple-600 pl-4 text-left">
            INTERACTIVE FLAT PANEL DISPLAYS FOR WORK & OFFICE
          </h2>

          <motion.div
            className="grid md:grid-cols-2 gap-8 items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/images/b-img4.jpg"
              alt="Office Collaboration Display"
              width={600}
              height={400}
              className="rounded-xl shadow-xl w-full h-auto"
            />

            <div className="text-left">
              <h3 className="text-xl font-semibold mb-4">
                Empower Smarter Meetings and Collaboration
              </h3>
              <p className="text-gray-600 text-base leading-relaxed text-justify">
                Revolutionize your workspace with Interactive Flat Panel Displays (IFPDs) designed for modern offices. Enhance presentations, brainstorming sessions, and team meetings with intuitive touch control and seamless screen sharing. IFPDs eliminate the need for traditional projectors and whiteboards, offering a sleek, all-in-one collaborative experience.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Range Section */}
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
                Tailored Display Sizes for Every Meeting Room
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                From compact huddle spaces to large conference rooms, IFPDs are available in sizes ranging from 55" to 98". These panels deliver stunning 4K visuals, real-time touch responsiveness, and wireless device connectivity. Whether you're brainstorming ideas or giving a client pitch, IFPDs elevate your communication with professionalism and clarity.
              </p>
            </div>

            <Image
              src="/images/b-img5.jpg"
              alt="Business Presentation Panels"
              width={600}
              height={400}
              className="rounded-xl shadow-xl w-full h-auto"
            />
          </motion.div>
        </section>

        {/* Productivity Section */}
        <section>
          <motion.div
            className="grid md:grid-cols-2 gap-8 items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/b-img6.jpg"
              alt="Office Collaboration with IFPDs"
              width={600}
              height={400}
              className="rounded-xl shadow-xl w-full h-auto"
            />

            <div>
              <h3 className="text-xl font-semibold mb-4">
                Boost Productivity in the Digital Workplace
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                Integrate IFPDs into your digital workflow and create an engaging environment for hybrid meetings and team collaboration. With features like multi-user interaction, remote access, cloud-based whiteboarding, and annotation tools, your team can share ideas freely—anytime, anywhere. Empower your business with technology built for agility and results.
              </p>
            </div>
          </motion.div>
        </section>
        <WhatsAppWidget/>
      </div>
    </>
  );
}
