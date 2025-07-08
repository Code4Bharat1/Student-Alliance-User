"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import WhatsAppWidget from "../WhatsApp/WhatApp";

export default function BlogsDetail6() {
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
                  Top Digital Board Companies in India
                </span>
              </motion.h1>
              
              <motion.p
                className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Discover why Student Alliance leads the market with superior quality and service
              </motion.p>
            </div>
            
            {/* Image */}
            <motion.div
              className="lg:w-1/2 relative"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/wp.png"
                  alt="Digital Board Comparison"
                  width={800}
                  height={500}
                  className="w-280 h-60"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
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
            <div className="text-gray-500 font-medium">Featured Brands:</div>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100">Student Alliance</div>
              <div className="bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100">LG</div>
              <div className="bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100">ViewSonic</div>
              <div className="bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100">Maxhub</div>
              <div className="bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100">Samsung</div>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </section>

      {/* Comparison Section */}
      <section className="mb-24">
        <h2 className="text-3xl font-bold text-center mb-16 relative">
          <span className="relative inline-block">
            Why Student Alliance Leads the Market
            <span className="absolute bottom-0 left-0 w-full h-2 bg-blue-200 -z-10"></span>
          </span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Pricing Card */}
          <motion.div 
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="h-48 relative bg-blue-50 flex items-center justify-center">
              <svg className="w-20 h-20 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-blue-600">Economical Pricing</h3>
              <p className="text-gray-700">
                Student Alliance offers the most cost-effective solutions without compromising quality, making advanced digital boards accessible to more institutions.
              </p>
            </div>
          </motion.div>

          {/* Support Card */}
          <motion.div 
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="h-48 relative bg-purple-50 flex items-center justify-center">
              <svg className="w-20 h-20 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-purple-600">Exceptional Support</h3>
              <p className="text-gray-700">
                Renowned for outstanding one-to-one support with direct assistance, software layer support, and a dedicated guidance team.
              </p>
            </div>
          </motion.div>

          {/* Quality Card */}
          <motion.div 
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="h-48 relative bg-green-50 flex items-center justify-center">
              <svg className="w-20 h-20 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-green-600">Premium Quality</h3>
              <p className="text-gray-700">
                High-quality materials ensure durability, with constant product improvements based on user feedback for reliable performance.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Competitor Comparison Section */}
      <section className="mb-20 bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2 relative h-96 md:h-auto">
            <Image
              src="/images/lg.png"
              alt="LG Digital Board"
              fill
              className="object-cover"
            />
          </div>
          <div className="md:w-1/2 p-8 md:p-12">
            <h2 className="text-2xl font-bold mb-6 text-purple-700">
              Top Competitors Analysis
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-2 text-blue-600">LG</h3>
                <p className="text-gray-600">
                  Global leader known for innovation and reliability in digital technology, offering cutting-edge display solutions with sleek designs.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-2 text-purple-600">ViewSonic</h3>
                <p className="text-gray-600">
                  Combines quality and innovation with excellent color accuracy and interactive features for education and business.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-2 text-green-600">Maxhub</h3>
                <p className="text-gray-600">
                  Innovative and user-centric designs with excellent collaboration tools for modern workplaces and classrooms.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2 text-yellow-600">Samsung</h3>
                <p className="text-gray-600">
                  Pioneering technology in interactive displays with vibrant visuals and smart connectivity options.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      <WhatsAppWidget />
    </div>
  );
}