"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';
import WhatsAppWidget from '../WhatsApp/WhatApp';

export default function BlogsDetail3() {
  return (
    <>
      <div className="px-4 py-8 md:px-16 lg:px-32 bg-white text-gray-800">
        <h1 className="text-4xl font-bold text-center border-b-4 border-blue-600 pb-4 mb-12">
          Blogs Detail
        </h1>

        {/* Header Section */}
        <section className="mb-16">
          <h2 className="text-2xl text-purple-600 font-semibold mb-6 border-l-4 border-purple-600 pl-4 text-left">
            IFPD FOR SCHOOLS AND CLASSES
          </h2>

          <motion.div
            className="grid md:grid-cols-2 gap-8 items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/images/b-img7.jpg"
              alt="IFPD in Classroom"
              width={600}
              height={400}
              className="rounded-xl shadow-xl w-full h-auto"
            />

            <div className="text-left">
              <h3 className="text-xl font-semibold mb-4">
                Transform Classrooms with Interactive Flat Panel Displays
              </h3>
              <p className="text-gray-600 text-base leading-relaxed text-justify">
                Interactive Flat Panel Displays (IFPDs) are revolutionizing the way educators teach and students learn.
                These smart displays foster an interactive and collaborative environment in classrooms, enhancing student
                participation and engagement. With crystal-clear visuals and touch-enabled interfaces, IFPDs bring lessons
                to life and make learning more fun and effective.
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
            <div className="text-left">
              <h3 className="text-xl font-semibold mb-4">
                A Range Designed for Every Classroom
              </h3>
              <p className="text-gray-600 text-base leading-relaxed text-justify">
                Whether you're teaching a small group of students or a large class, our IFPDs come in a variety of sizes
                (55", 65", 75", 86", and 98") to meet every classroom need. Designed to be durable, user-friendly, and packed
                with educational features, these panels support a wide range of teaching styles and interactive activities.
                Empower educators to create dynamic learning experiences.
              </p>
            </div>

            <Image
              src="/images/b-img8.png"
              alt="Range of IFPDs"
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
              src="/images/b-img9.jpg"
              alt="Students Engaged with IFPDs"
              width={600}
              height={400}
              className="rounded-xl shadow-xl w-full h-auto"
            />

            <div className="text-left">
              <h3 className="text-xl font-semibold mb-4">
                Inspire Student Engagement Like Never Before
              </h3>
              <p className="text-gray-600 text-base leading-relaxed text-justify">
                IFPDs bring interactivity to the forefront of the learning process. With multi-touch capabilities,
                vibrant display quality, and compatibility with educational software, students are more focused, curious,
                and eager to learn. From interactive quizzes to multimedia presentations, IFPDs make lessons more immersive,
                increasing retention and improving academic outcomes.
              </p>
            </div>
          </motion.div>
        </section>
        <WhatsAppWidget/>
      </div>
    </>
  );
}
