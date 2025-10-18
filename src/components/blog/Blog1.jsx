'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import WhatsAppWidget from '../WhatsApp/WhatApp';

const blogData = [
  {
    title: 'IFPD for Home Use',
    image: '/images/IFPD-home.png',
    link: '/blog-d1',
  },
  {
    title: 'IFPD for Work and Office',
    image: '/images/IFPD-work.png',
    link: '/blog-d2',
  },
  {
    title: 'IFPD for Schools and Classes',
    image: '/images/IFPD-school.jpg',
    link: '/blog-d3',
  },
  {
    title: 'Top Live Streaming Equipment for Beginners: Cameras, Microphones & More',
    image: '/images/live .jpg',
    link: '/blog-d4',
  },
  {
    title: 'Student Alliance 4K Ultra HD Alpha Webcam: Unmatched Quality at an Affordable Price',
    image: '/shop/webcam.png',
    link: '/blog-d5',
  },
  {
    title: 'Top 5 Best Digital Board Companies in India – Why Student Alliance Leads the Way',
    image: '/images/digital.png',
    link: '/blog-d6',
  },
  {
    title: 'Start Teaching on an Online Teaching Platform & Earn from Home',
    image: '/images/online.png',
    link: '/blog-d9',
  },
  {
    title: '86-Inch Digital Boards: Features, Pricing, and Why Student Alliance Panel is a Top Choice',
    image: '/images/866i.png',
    link: '/blog-d8',
  },
  {
    title: 'Get the Best Interactive Displays for Your Classroom – Complete Guide to Latest Digital Board Prices',
    image: '/images/smart.jpg',
    link: '/blog-d10',
  },
  {
    title: '5 Key Strategies to Scale Your Online Coaching Business in 2024 with High-Quality Video Tools',
    image: '/images/coching.png',
    link: '/blog-d7',
  },
  {
    title: 'Start an Offline Coaching Center: Costs, Requirements, and Setup Guide',
    image: '/images/how.jpg',
    link: '/blog-d11',
  },
  {
    title: 'Hybrid Teaching Module Earned Crores: Inside the Success of Innovative Hybrid Education',
    image: '/images/physicswala.png',
    link: '/blog-d12',
  },
];

export default function Blog() {
  return (
    <>
      <section className="relative py-20 px-6 md:px-16 bg-gradient-to-b from-white via-gray-50 to-[#e8f3ff] overflow-hidden">
        {/* Background glow accents */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-200/30 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-green-200/30 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center relative z-10"
        >
          
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2A1B8F] to-[#1FA55B]">
            Latest Blogs
              
            </span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '7rem' }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="h-1 mx-auto bg-gradient-to-r from-blue-500 to-green-500 rounded-full mb-12"
          />
        </motion.div>

        {/* Category Head */}
        <h3 className="text-2xl font-bold text-gray-800 mb-8 border-l-4 border-blue-500 pl-3">
          IFPD
        </h3>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-3 gap-10 relative z-10">
          {blogData.map((blog, index) => (
            <React.Fragment key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03, y: -5 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden group hover:shadow-[0_15px_40px_rgba(37,99,235,0.15)] transition-all duration-500"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.07 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      width={500}
                      height={300}
                      className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 ">
                    {blog.title}
                  </h3>

                 <Link href={blog.link}>
                    <motion.button
                      whileHover={{
                        scale: 1.05, // only zoom effect
                      }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 w-full py-3 px-6 rounded-lg font-semibold text-white 
                                bg-gradient-to-r from-blue-900 to-green-800 
                                shadow-md hover:shadow-lg transition-transform duration-300"
                    >
                      READ MORE →
                    </motion.button>
                  </Link>

                </div>
              </motion.div>

              {/* Category Dividers */}
              {index === 2 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="md:col-span-3 mt-12"
                >
                  <h3 className="text-2xl font-bold text-gray-800 border-l-4 border-green-500 pl-3">
                    Studio Setup
                  </h3>
                </motion.div>
              )}

              {index === 5 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="md:col-span-3 mt-12"
                >
                  <h3 className="text-2xl font-bold text-gray-800 border-l-4 border-green-500 pl-3">
                    Online Teaching
                  </h3>
                </motion.div>
              )}

              {index === 8 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="md:col-span-3 mt-12"
                >
                  <h3 className="text-2xl font-bold text-gray-800 border-l-4 border-green-500 pl-3">
                    Coaching Growth
                  </h3>
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* WhatsApp Floating Widget */}
        <WhatsAppWidget />
      </section>
    </>
  );
}
