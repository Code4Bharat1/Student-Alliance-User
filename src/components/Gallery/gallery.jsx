"use client"

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import WhatsAppWidget from '../WhatsApp/WhatApp';

const galleryImages = [
  '/gallery/1.jpg', '/gallery/2.jpg', '/gallery/3.jpg',
  '/gallery/4.jpg', '/gallery/5.jpg', '/gallery/6.jpg',
  '/gallery/7.jpg', '/gallery/8.jpg', '/gallery/9.jpg',
  '/gallery/10.jpg', '/gallery/11.jpg', '/gallery/12.jpg'
];

export default function Gallery() {
  return (
    <section className="bg-white py-5">
        <motion.h2
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-800">Gallery</h2> 
      </div>
      </motion.h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {galleryImages.map((src, index) => (
          <motion.div
            key={index}
            className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Image
              src={src}
              alt={`Gallery Image ${index + 1}`}
              width={400}
              height={300}
              className="w-full h-64 object-cover rounded-xl"
            />
          </motion.div>
        ))}
      </div>
      <WhatsAppWidget/>
    </section>
  );
}
