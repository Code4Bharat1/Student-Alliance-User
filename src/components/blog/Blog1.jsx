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
    image: '/images/webcam.jpg',
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
    title: 'Get the best  interactive displays for your classroom Complete Guide to Latest Digital Board Prices',
    image: '/images/smart.jpg',
    link: '/blog-d10',
  },
  {
    title: '5 Key Strategies to Scale Your Online Coaching Business in 2024 with High-Quality Video Tools',
    image: '/images/coching.png',
    link: '/blog-d7',
  },
  {
    title: 'Start an Offline Coaching Center Costs and Requirements How to Start an Offline Coaching',
    image: '/images/how.jpg',
    link: '/blog-d11',
  },
  {
    title: 'Hybrid Teaching Module Earned Crores: A Deep Dive into Success, innovative hybrid teaching',
    image: '/images/physicswala.png',
    link: '/blog-d12',
  },
  
];

export default function Blog() {
  return (
    <>
      <section className="bg-gradient-to-b from-white to-gray-50 text-black py-12 px-4 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center mb-10 relative">
            <span className="relative inline-block">
              Latest Blogs
              <motion.span 
                className="absolute left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600"
                style={{ bottom: '-6px' }} // Move underline lower
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </span>
          </h2>
        </motion.div>

        <h3 className="text-2xl font-bold text-gray-800 p-4 mb-6 border-l-4 border-blue-500 pl-3">IFPD</h3>
        
        <div className="grid md:grid-cols-3 gap-8">
          {blogData.map((blog, index) => (
            <React.Fragment key={index}>
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  whileHover: { duration: 0.3 }
                }}
                viewport={{ once: true }}
                className="flex flex-col justify-between rounded-xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-2xl transition-all bg-white group h-full"
              >
                <div>
                  <div className="overflow-hidden">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src={blog.image}
                        alt={blog.title}
                        width={500}
                        height={300}
                        className="w-full h-52 object-cover transform transition-transform duration-300 group-hover:scale-105"
                      />
                    </motion.div>
                  </div>
                  <div className="p-5 text-center">
                    <p className="text-md text-gray-600 font-medium mb-2">{blog.date}</p>
                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">{blog.title}</h3>
                  </div>
                </div>
                <div className="px-6 pb-6 mt-auto">
                  <Link href={blog.link}>
                    <motion.button
                      initial={{ background: "linear-gradient(135deg, #3B82F6 0%, #6366F1 100%)" }}
                      whileHover={{ 
                        scale: 1.05,
                        background: "linear-gradient(135deg, #2563EB 0%, #4F46E5 100%)",
                        boxShadow: "0 0 20px rgba(0, 130, 246, 0.6)"
                      }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ 
                        duration: 0.3,
                        hover: { duration: 0.2 }
                      }}
                      className="relative w-full py-3 px-6 rounded-lg font-bold text-white overflow-hidden cursor-pointer"
                    >
                      <span className="relative z-10 flex items-center justify-center">
                        READ MORE
                        <motion.span
                          initial={{ x: -20, opacity: 0 }}
                          whileHover={{ x: 5, opacity: 1 }}
                          transition={{ duration: 0.3 }}
                          className="ml-2"
                        >
                          →
                        </motion.span>
                      </span>
                      <motion.span
                        className="absolute top-0 left-0 w-full h-full bg-white opacity-0 group-hover:opacity-10"
                        whileHover={{ opacity: 0.1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.button>
                  </Link>
                </div>
              </motion.div>

              {index === 2 && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="md:col-span-3 text-left mt-8 mb-4"
                >
                  <h3 className="text-2xl font-bold text-gray-800 border-l-4 border-blue-500 pl-3">Studio Setup</h3>
                </motion.div>
              )}

              {index === 5 && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="md:col-span-3 text-left mt-8 mb-4"
                >
                  <h3 className="text-2xl font-bold text-gray-800 border-l-4 border-blue-500 pl-3">Online Teaching</h3>
                </motion.div>
              )}
              
              {index === 8 && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="md:col-span-3 text-left mt-8 mb-4"
                >
                  <h3 className="text-2xl font-bold text-gray-800 border-l-4 border-blue-500 pl-3">Coaching Growth</h3>
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </div>
        
        <WhatsAppWidget />
      </section>
    </>
  );
}