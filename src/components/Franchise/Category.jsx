'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import WhatsAppWidget from '../WhatsApp/WhatApp';

const categories = [
  {
    name: 'IFPD',
    image: '/images/65_inch.png',
    link: '/Prod',
  },
  {
    name: 'Stem & Robotics',
    image: '/images/cat2.png',
    link: '/kits', 
  },
  {
    name: '3D Printers',
    image: '/images/cat3.png',
    link: '/printer', 
  },
  {
    name: 'Kites',
    image: '/images/cat4.png',
    link: '/kits',
  },
];

export default function Categories() {
  return (
    <div className="py-8 px-4 text-black md:px-12 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Categories
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {categories.map((cat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300 bg-white"
          >
            <Link href={cat.link} className="block group relative">
              <div className="overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="bg-blue-500 text-white text-center py-3 font-semibold text-lg">
                {cat.name}
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
      <WhatsAppWidget />
    </div>
  );
}