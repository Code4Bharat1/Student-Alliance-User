"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';
import WhatsAppWidget from '../WhatsApp/WhatApp';

export default function BlogsDetail8() {
  return (
    <div className="px-4 py-8 md:px-16 lg:px-32 bg-bg-section text-text-heading">
      {/* Hero Section */}
      <section className="mb-10 relative w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-bg-section to-bg-section z-0"></div>
        
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
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-primary to-brand-primary">
                   Student Alliance 86-Inch Digital Board
                </span>
              </motion.h1>
              
              <motion.p
                className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto lg:mx-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Premium interactive display for large classrooms and training centers
              </motion.p>

              <motion.div
                className="flex items-center justify-center lg:justify-start gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <div className="bg-bg-card px-6 py-3 rounded-lg shadow-md border border-border-primary">
                  <div className="text-sm text-text-muted">Starting from</div>
                  <div className="text-2xl font-bold text-brand-primary">₹240,000</div>
                </div>
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
                  src="/images/cll.png"
                  alt="Student Alliance Digital Board"
                  width={800}
                  height={500}
                  className="w-full h-60"
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
            <div className="text-text-muted font-medium">Ideal for:</div>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-bg-card px-4 py-2 rounded-lg shadow-sm border border-border-primary">Large Classrooms</div>
              <div className="bg-bg-card px-4 py-2 rounded-lg shadow-sm border border-border-primary">Training Centers</div>
              <div className="bg-bg-card px-4 py-2 rounded-lg shadow-sm border border-border-primary">Corporate Meetings</div>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-brand-primary/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-brand-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </section>

      {/* Why Choose Section */}
      <section className="mb-24">
        <h2 className="text-3xl font-bold text-center mb-16 relative">
          <span className="relative inline-block">
            Why Choose 86-Inch Digital Boards?
            <span className="absolute bottom-0 left-0 w-full h-2 bg-brand-primary/30 -z-10"></span>
          </span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Large Classrooms Card */}
          <motion.div 
            className="bg-bg-card rounded-2xl shadow-lg overflow-hidden"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="h-48 relative bg-bg-section flex items-center justify-center">
              <svg className="w-20 h-20 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-brand-primary">Large Classrooms</h3>
              <p className="text-text-primary">
                Perfect for 70-80 students or more, ensuring clear visibility even from the back of the room.
              </p>
            </div>
          </motion.div>

          {/* Viewing Angles Card */}
          <motion.div 
            className="bg-bg-card rounded-2xl shadow-lg overflow-hidden"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="h-48 relative bg-bg-section flex items-center justify-center">
              <svg className="w-20 h-20 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-brand-primary">Wide Viewing Angles</h3>
              <p className="text-text-primary">
                Superior visual experience from any position in the room, ideal for coaching centers.
              </p>
            </div>
          </motion.div>

          {/* Engagement Card */}
          <motion.div 
            className="bg-bg-card rounded-2xl shadow-lg overflow-hidden"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="h-48 relative bg-success-bg flex items-center justify-center">
              <svg className="w-20 h-20 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-success">Enhanced Engagement</h3>
              <p className="text-text-primary">
                Larger canvas allows educators to share more detailed information in one frame.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mb-20 bg-bg-card rounded-2xl shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2 relative h-96 md:h-auto">
            <Image
              src="/images/cll.png"
              alt="Student Alliance U3 Series Features"
              fill
              className="object-cover"
            />
          </div>
          <div className="md:w-1/2 p-8 md:p-12">
            <h2 className="text-2xl font-bold mb-6 text-brand-primary">
              Key Features of Student Alliance 86-Inch Digital Board
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-bg-badge p-2 rounded-lg mr-4">
                  <div className="bg-brand-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-brand-primary">Android OS Powered</h3>
                  <p className="text-text-secondary">
                    Runs on Android 11 for smooth performance with access to a wide range of applications.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-bg-badge p-2 rounded-lg mr-4">
                  <div className="bg-brand-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-brand-primary">Superior Writing Experience</h3>
                  <p className="text-text-secondary">
                    High-precision stylus input for accurate annotations and smooth writing.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-success-bg p-2 rounded-lg mr-4">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-success">Built-in Applications</h3>
                  <p className="text-text-secondary">
                    Pre-installed EDL-certified apps for teaching and training, ready to use out of the box.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-yellow-100 p-2 rounded-lg mr-4">
                  <div className="bg-yellow-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-yellow-600">Enhanced Audio</h3>
                  <p className="text-text-secondary">
                    Six high-quality speakers deliver clear, powerful sound for video tutorials and sessions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Selection Guide */}
      <section className="mb-20">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Pricing Card */}
          <motion.div 
            className="bg-bg-card rounded-2xl shadow-lg overflow-hidden"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-brand-primary">
                Pricing Details
              </h2>
              <div className="space-y-4">
                <div className="bg-bg-section p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-1">Starting Price</h3>
                  <p className="text-text-primary">₹240,000</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Price Factors:</h3>
                  <ul className="space-y-2 text-text-primary">
                    <li className="flex items-start">
                      <span className="text-brand-primary mr-2">•</span>
                      <span>Quantity purchased (bulk discounts available)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-primary mr-2">•</span>
                      <span>Ongoing promotions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-primary mr-2">•</span>
                      <span>Additional accessories or services</span>
                    </li>
                  </ul>
                </div>
                <p className="text-text-secondary mt-4">
                  While the initial investment may seem steep, the quality and features justify the cost for premium educational environments.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Selection Guide Card */}
          <motion.div 
            className="bg-bg-card rounded-2xl shadow-lg overflow-hidden"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-brand-primary">
                How to Choose the Right Digital Board
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-bg-badge p-2 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Assess Your Needs</h3>
                    <p className="text-text-secondary">
                      For large coaching centers, the Student Alliance offers premium features. Smaller setups might consider more compact options.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-bg-badge p-2 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Budget Consideration</h3>
                    <p className="text-text-secondary">
                      If budget is constrained, prioritize features you'll use most frequently.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-success-bg p-2 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Future-Proofing</h3>
                    <p className="text-text-secondary">
                      Investing in high-quality panels ensures durability and reliability for years to come.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      <WhatsAppWidget />
    </div>
  );
}