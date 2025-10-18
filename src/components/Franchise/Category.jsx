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
    name: 'STEM & Robotics',
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
  const theme = {
    primaryBlue: '#2A1B8F',
    accentGreen: '#1FA55B',
    ctaRed: '#E63946',
    backgroundWhite: '#FFFFFF',
    sectionGray: '#F7F9FB',
    textDark: '#1E1E1E',
    subtextGray: '#757575',
    border: '#E0E0E0',
  };

  return (
    <section
      className="bg-[#F7F9FB]  py-24 px-6 md:px-12 relative overflow-hidden"
      
    >
      {/* Background glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#2A1B8F]/10 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#1FA55B]/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Heading */}
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2A1B8F] to-[#1FA55B]">
          
            Shop by Category
              
            </span>
          </h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-base md:text-lg max-w-2xl mx-auto mb-16"
          style={{ color: theme.subtextGray }}
        >
          Explore innovative tools, products, and technology designed for
          future-ready education and learning.
        </motion.p>

        {/* Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative group rounded-2xl overflow-hidden border bg-white transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)]"
              style={{
                borderColor: theme.border,
                boxShadow: `0 4px 8px ${theme.border}`,
              }}
            >
              <Link href={cat.link} className="block relative">
                <div className="overflow-hidden relative">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    width={500}
                    height={300}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Category Label (Fixed Text Color) */}
                <div
                  className="absolute bottom-0 left-0 right-0 py-4 text-lg font-semibold tracking-wide text-center transition-all duration-500"
                  style={{
                    color: theme.primaryBlue,
                    backgroundColor: theme.backgroundWhite,
                    borderTop: `1px solid ${theme.border}`,
                    boxShadow: `0 -2px 10px ${theme.border}`,
                  }}
                >
                  {cat.name}
                </div>
              </Link>

              {/* Hover underline accent */}
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[3px] rounded-t transition-all duration-500 group-hover:w-3/4"
                style={{ backgroundColor: theme.accentGreen }}
              />
            </motion.div>
          ))}
        </div>

        {/* Explore Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <Link
            href="/all-categories"
            className="inline-block px-10 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{
              backgroundColor: theme.accentGreen,
              color: theme.backgroundWhite,
              boxShadow: `0 6px 14px ${theme.border}`,
            }}
          >
            Explore All Categories
          </Link>
        </motion.div>

        {/* WhatsApp Widget */}
        <WhatsAppWidget />
      </div>
    </section>
  );
}
