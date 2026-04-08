"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';
import WhatsAppWidget from '../WhatsApp/WhatApp';

export default function BlogsDetail5() {
  return (
    <div className="px-4 py-8 md:px-16 lg:px-32 bg-bg-section text-text-heading">
      {/* Hero Section */}
      <section className="mb-10 relative w-full overflow-hidden">
        <div className="absolute  inset-0 bg-gradient-to-r from-bg-section to-bg-section z-0"></div>
        
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
                  Student Alliance 4K Ultra HD Alpha Webcam
                </span>
              </motion.h1>
              
              <motion.p
                className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto lg:mx-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Unmatched quality at an affordable price for streamers, educators, and professionals
              </motion.p>
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
                  src="/images/webcam.jpg"
                  alt="Student Alliance 4K Webcam"
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
            <div className="text-text-muted font-medium">Perfect for:</div>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-bg-card px-4 py-2 rounded-lg shadow-sm border border-border-primary">Streamers</div>
              <div className="bg-bg-card px-4 py-2 rounded-lg shadow-sm border border-border-primary">Educators</div>
              <div className="bg-bg-card px-4 py-2 rounded-lg shadow-sm border border-border-primary">Professionals</div>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-brand-primary/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-brand-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </section>

      {/* Features Section */}
      <section className="mb-24">
        <h2 className="text-3xl font-bold text-center mb-16 relative">
          <span className="relative inline-block">
            Key Features & Benefits
            <span className="absolute bottom-0 left-0 w-full h-2 bg-brand-primary/30 -z-10"></span>
          </span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Resolution Card */}
          <motion.div 
            className="bg-bg-card rounded-2xl shadow-lg overflow-hidden"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="h-48 relative">
              <Image
                src="/images/4k_res.png"
                alt="4K Resolution"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center mb-3">
                <div className="bg-bg-badge p-2 rounded-lg mr-3">
                  <svg className="w-6 h-6 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">4K Resolution</h3>
              </div>
              <ul className="space-y-2 text-text-primary">
                <li className="flex items-start">
                  <span className="text-success mr-2">✓</span>
                  <span>Ultra HD 4K at 60fps</span>
                </li>
                <li className="flex items-start">
                  <span className="text-success mr-2">✓</span>
                  <span>Crisp, detailed visuals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-success mr-2">✓</span>
                  <span>Professional quality streaming</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Zoom Card */}
          <motion.div 
            className="bg-bg-card rounded-2xl shadow-lg overflow-hidden"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="h-48 relative">
              <Image
                src="/images/zoom.jpeg"
                alt="Zoom capabilities"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center mb-3">
                <div className="bg-bg-badge p-2 rounded-lg mr-3">
                  <svg className="w-6 h-6 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Advanced Zoom</h3>
              </div>
              <ul className="space-y-2 text-text-primary">
                <li className="flex items-start">
                  <span className="text-success mr-2">✓</span>
                  <span>12X optical zoom</span>
                </li>
                <li className="flex items-start">
                  <span className="text-success mr-2">✓</span>
                  <span>16X digital zoom</span>
                </li>
                <li className="flex items-start">
                  <span className="text-success mr-2">✓</span>
                  <span>No clarity loss</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* AI Features Card */}
          <motion.div 
            className="bg-bg-card rounded-2xl shadow-lg overflow-hidden"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="h-48 relative">
              <Image
                src="/images/AI-Cam.png"
                alt="AI tracking"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center mb-3">
                <div className="bg-success-bg p-2 rounded-lg mr-3">
                  <svg className="w-6 h-6 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">AI Technology</h3>
              </div>
              <ul className="space-y-2 text-text-primary">
                <li className="flex items-start">
                  <span className="text-success mr-2">✓</span>
                  <span>Auto-tracking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-success mr-2">✓</span>
                  <span>Gesture control</span>
                </li>
                <li className="flex items-start">
                  <span className="text-success mr-2">✓</span>
                  <span>Low-light correction</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="mb-20 bg-bg-card rounded-2xl shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2 relative h-96 md:h-auto">
            <Image
              src="/images/on.png"
              alt="Webcam in use"
              fill
              className="object-cover"
            />
          </div>
          <div className="md:w-1/2 p-8 md:p-12">
            <h2 className="text-2xl font-bold mb-6 text-brand-primary">
              Best Use Cases
            </h2>
            
            <div className="space-y-6">
              <div className="flex">
                <div className="mr-4">
                  <div className="bg-brand-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Online Teaching</h3>
                  <p className="text-text-secondary">
                    Perfect for educators who need excellent video and audio quality for remote lessons.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4">
                  <div className="bg-brand-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Content Creation</h3>
                  <p className="text-text-secondary">
                    YouTubers, vloggers, and gamers will appreciate its high resolution and dual mics.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4">
                  <div className="bg-brand-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-0">Professional Presentations</h3>
                  <p className="text-text-secondary">
                    Enhance your PowerPoint presentations with professional-grade visuals.
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