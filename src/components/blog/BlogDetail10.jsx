"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';
import WhatsAppWidget from '../WhatsApp/WhatApp';

export default function BlogsDetail10() {
  return (
    <div className="px-4 py-8 md:px-16 lg:px-32 bg-gray-50 text-gray-800">
      {/* Hero Section */}
<section className="mb-10 relative w-full overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 z-0"></div>
  
  <motion.div
    className="container mx-auto px-4 py-16 md:py-24 relative z-10"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <div className="flex flex-col lg:flex-row items-center gap-12">
      {/* Text Content */}
      <div className="lg:w-1/2 text-center lg:text-left">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Digital Board Price Guide
          </span>
        </motion.h1>
        
        <motion.p
          className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Get the best interactive displays for your classroom with our complete 2024 pricing breakdown
        </motion.p>
        
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
        </motion.div>
      </div>
      
      {/* Image */}
      <motion.div
        className="lg:w-1/2 relative"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="/images/gg.png"
            alt="Digital Board in Classroom"
            width={800}
            height={500}
            className="w-full h-auto"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          
          {/* Price tag decoration */}
          <div className="absolute -bottom-4 -right-4 bg-white px-6 py-3 rounded-lg shadow-lg border border-gray-200">
            <div className="text-sm text-gray-500">Starting from</div>
            <div className="text-2xl font-bold text-blue-600">₹90,000</div>
          </div>
        </div>
      </motion.div>
    </div>
    
    {/* Trust badges */}
    <motion.div
      className="mt-16 flex flex-wrap justify-center gap-6 items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.6 }}
    >
      <div className="text-gray-500 font-medium">Trusted by:</div>
      <div className="flex flex-wrap justify-center gap-4">
        <div className="bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100">100+ Schools</div>
        <div className="bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100">5-Star Reviews</div>
        <div className="bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100">Certified Partners</div>
      </div>
    </motion.div>
  </motion.div>
  
  {/* Decorative elements */}
  <div className="absolute top-0 left-0 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
  <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
</section>

      {/* Pricing Factors Section */}
      <section className="mb-24">
        <h2 className="text-3xl font-bold text-center mb-16 relative">
          <span className="relative inline-block">
            What Determines The Price?
            <span className="absolute bottom-0 left-0 w-full h-2 bg-blue-200 -z-10"></span>
          </span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Size Card */}
          <motion.div 
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="h-48 relative">
              <Image
                src="/images/board-size.png"
                alt="Board size comparison"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center mb-3">
                <div className="bg-blue-100 p-2 rounded-lg mr-3">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Size</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex justify-between">
                  <span>65-inch:</span> <span className="font-semibold">₹90K-₹1.1L</span>
                </li>
                <li className="flex justify-between">
                  <span>75-inch:</span> <span className="font-semibold">₹1.2L-₹2L</span>
                </li>
                <li className="flex justify-between">
                  <span>86-inch:</span> <span className="font-semibold">₹1.5L-₹2.8L</span>
                </li>
                <li className="flex justify-between">
                  <span>98-inch+:</span> <span className="font-semibold">Custom</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Brand Card */}
          <motion.div 
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="h-48 relative">
              <Image
                src="/images/brand.png"
                alt="Brand logos"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center mb-3">
                <div className="bg-purple-100 p-2 rounded-lg mr-3">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Brand</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Trusted brands offer better durability and support:
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">AIWaft</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Maxhub</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Viewsonic</span>
              </div>
             
            </div>
          </motion.div>

          {/* Features Card */}
          <motion.div 
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="h-48 relative">
              <Image
                src="/images/board-feature.png"
                alt="Board features"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center mb-3">
                <div className="bg-green-100 p-2 rounded-lg mr-3">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Features</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>OPS adds ₹15K-₹25K</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Touch sensitivity levels</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Built-in software</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Warranty options</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Buying Guide Section */}
      <section className="mb-20 bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2 relative h-96 md:h-auto">
            <Image
              src="/images/smart-buy.png"
              alt="Classroom with digital board"
              fill
              className="object-cover"
            />
          </div>
          <div className="md:w-1/2 p-8 md:p-12">
            <h2 className="text-2xl font-bold mb-6 text-purple-700">
              Smart Buying Guide
            </h2>
            
            <div className="space-y-6">
              <div className="flex">
                <div className="mr-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Right Size Matters</h3>
                  <p className="text-gray-600">
                    75-inch or 86-inch boards offer the best visibility and value for classrooms.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Brand Reliability</h3>
                  <p className="text-gray-600">
                    Established brands ensure better performance and long-term support.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-0">Feature Selection</h3>
                  <p className="text-gray-600">
                    Only pay for features you'll actually use in your teaching environment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppWidget />
    </div>
  );
}