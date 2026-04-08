"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';
import WhatsAppWidget from '../WhatsApp/WhatApp';

export default function BlogsDetail7() {
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
                  Scale Your Coaching Business in 2024
                </span>
              </motion.h1>
              
              <motion.p
                className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto lg:mx-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                5 Key Strategies to Grow Your Online Coaching Business with High-Quality Video Tools
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
                  src="/images/bus.png"
                  alt="Online Coaching Business"
                  width={800}
                  height={500}
                  className="w-full h-70"
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
              <div className="bg-bg-card px-4 py-2 rounded-lg shadow-sm border border-border-primary">Life Coaches</div>
              <div className="bg-bg-card px-4 py-2 rounded-lg shadow-sm border border-border-primary">Business Coaches</div>
              <div className="bg-bg-card px-4 py-2 rounded-lg shadow-sm border border-border-primary">Career Coaches</div>
              <div className="bg-bg-card px-4 py-2 rounded-lg shadow-sm border border-border-primary">Wellness Coaches</div>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-brand-primary/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-brand-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </section>

      {/* Key Factors Section */}
      <section className="mb-24">
        <h2 className="text-3xl font-bold text-center mb-16 relative">
          <span className="relative inline-block">
            Key Scaling Factors
            <span className="absolute bottom-0 left-0 w-full h-2 bg-brand-primary/30 -z-10"></span>
          </span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Tools Card */}
          <motion.div 
            className="bg-bg-card rounded-2xl shadow-lg overflow-hidden"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="h-48 relative bg-bg-section flex items-center justify-center">
              <svg className="w-20 h-20 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-brand-primary">Essential Tools</h3>
              <ul className="space-y-2 text-text-primary">
                <li className="flex items-start">
                  <span className="text-brand-primary mr-2">•</span>
                  <span>Project management platforms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-primary mr-2">•</span>
                  <span>Collaboration tools</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-primary mr-2">•</span>
                  <span>Automation software</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-primary mr-2">•</span>
                  <span>High-quality video equipment</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Marketing Card */}
          <motion.div 
            className="bg-bg-card rounded-2xl shadow-lg overflow-hidden"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="h-48 relative bg-bg-section flex items-center justify-center">
              <svg className="w-20 h-20 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-brand-primary">Marketing Strategies</h3>
              <ul className="space-y-2 text-text-primary">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Website and blog content</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Targeted social media</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Email campaigns</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>SEO optimization</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Offerings Card */}
          <motion.div 
            className="bg-bg-card rounded-2xl shadow-lg overflow-hidden"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="h-48 relative bg-success-bg flex items-center justify-center">
              <svg className="w-20 h-20 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-success">Diverse Offerings</h3>
              <ul className="space-y-2 text-text-primary">
                <li className="flex items-start">
                  <span className="text-success mr-2">•</span>
                  <span>One-on-one sessions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-success mr-2">•</span>
                  <span>Group workshops</span>
                </li>
                <li className="flex items-start">
                  <span className="text-success mr-2">•</span>
                  <span>Online courses</span>
                </li>
                <li className="flex items-start">
                  <span className="text-success mr-2">•</span>
                  <span>Seminars & lectures</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Strategies Section */}
      <section className="mb-20 bg-bg-card rounded-2xl shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2 relative h-96 md:h-auto">
            <Image
              src="/images/cbb.png"
              alt="Coaching Business Strategies"
              fill
              className="object-cover"
            />
          </div>
          <div className="md:w-1/2 p-8 md:p-12">
            <h2 className="text-2xl font-bold mb-6 text-brand-primary">
              Crucial Scaling Strategies
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="font-semibold text-lg mb-2 text-brand-primary">1. Membership Packages</h3>
                <p className="text-text-secondary">
                  Implement membership-based pricing with structured curriculum. Offer regular access to coaching resources, webinars, and group sessions through a subscription model.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-2 text-brand-primary">2. Strategic Hiring</h3>
                <p className="text-text-secondary">
                  Identify areas needing support (marketing, client management, accounting). Carefully evaluate candidates through interviews to build your ideal team.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-2 text-success">3. Marketing Automation</h3>
                <p className="text-text-secondary">
                  Automate marketing to optimize time. Share success stories, engage on social media, and use email campaigns to attract new clients while focusing on coaching.
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