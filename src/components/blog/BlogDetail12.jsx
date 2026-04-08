"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';
import WhatsAppWidget from '../WhatsApp/WhatApp';

export default function BlogsDetail12() {
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
                  Hybrid Teaching Success
                </span>
              </motion.h1>
              
              <motion.p
                className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto lg:mx-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                How innovative hybrid teaching earned crores while maintaining quality education
              </motion.p>

              <motion.div
                className="flex items-center justify-center lg:justify-start gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <div className="bg-bg-card px-6 py-3 rounded-lg shadow-md border border-border-primary">
                  <div className="text-sm text-text-muted">Revenue Model</div>
                  <div className="text-2xl font-bold text-brand-primary">Multi-Crore</div>
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
                  src="/images/h.png"
                  alt="Hybrid Model"
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
            <div className="text-text-muted font-medium">Key Benefits:</div>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-bg-card px-4 py-2 rounded-lg shadow-sm border border-border-primary">Scalable Teaching</div>
              <div className="bg-bg-card px-4 py-2 rounded-lg shadow-sm border border-border-primary">Cost Effective</div>
              <div className="bg-bg-card px-4 py-2 rounded-lg shadow-sm border border-border-primary">High Revenue</div>
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
            The Hybrid Teaching Advantage
            <span className="absolute bottom-0 left-0 w-full h-2 bg-brand-primary/30 -z-10"></span>
          </span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Quality Card */}
          <motion.div 
            className="bg-bg-card rounded-2xl shadow-lg overflow-hidden"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="h-48 relative bg-bg-section flex items-center justify-center">
              <svg className="w-20 h-20 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-brand-primary">Consistent Quality</h3>
              <p className="text-text-primary">
                Maintains high teaching standards across all centers with centralized expert faculty.
              </p>
            </div>
          </motion.div>

          {/* Revenue Card */}
          <motion.div 
            className="bg-bg-card rounded-2xl shadow-lg overflow-hidden"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="h-48 relative bg-bg-section flex items-center justify-center">
              <svg className="w-20 h-20 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-brand-primary">Revenue Growth</h3>
              <p className="text-text-primary">
                Scalable model that generates significant income while keeping operational costs low.
              </p>
            </div>
          </motion.div>

          {/* Accessibility Card */}
          <motion.div 
            className="bg-bg-card rounded-2xl shadow-lg overflow-hidden"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="h-48 relative bg-success-bg flex items-center justify-center">
              <svg className="w-20 h-20 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-success">Wider Reach</h3>
              <p className="text-text-primary">
                Makes quality education accessible to students across multiple locations simultaneously.
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
              src="/images/hh.png"
              alt="Hybrid Teaching Setup"
              fill
              className="object-cover"
            />
          </div>
          <div className="md:w-1/2 p-8 md:p-12">
            <h2 className="text-2xl font-bold mb-6 text-brand-primary">
              Key Components of the Hybrid Setup
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-bg-badge p-2 rounded-lg mr-4">
                  <div className="bg-brand-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-brand-primary">Digital Studio Setup</h3>
                  <p className="text-text-secondary">
                    State-of-the-art equipment including 4K digital boards and professional cameras.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-bg-badge p-2 rounded-lg mr-4">
                  <div className="bg-brand-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-brand-primary">Audio-Visual Equipment</h3>
                  <p className="text-text-secondary">
                    High-quality microphones and speakers ensure crystal clear communication.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-success-bg p-2 rounded-lg mr-4">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-success">Lighting Solutions</h3>
                  <p className="text-text-secondary">
                    Professional studio lighting for optimal video quality in all conditions.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-yellow-100 p-2 rounded-lg mr-4">
                  <div className="bg-yellow-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-yellow-600">Streaming Infrastructure</h3>
                  <p className="text-text-secondary">
                    Robust platform to deliver seamless live and recorded sessions to multiple centers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hardware Section */}
      <section className="mb-20">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Hardware Requirements Card */}
          <motion.div 
            className="bg-bg-card rounded-2xl shadow-lg overflow-hidden"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-brand-primary">
                Essential Hardware
              </h2>
              <div className="space-y-4">
                <div className="bg-bg-section p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-1">Core Equipment</h3>
                  <p className="text-text-primary">Investments that ensure professional quality</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Must-Have Items:</h3>
                  <ul className="space-y-2 text-text-primary">
                    <li className="flex items-start">
                      <span className="text-brand-primary mr-2">•</span>
                      <span>4K Digital Boards for crystal clear visuals</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-primary mr-2">•</span>
                      <span>Professional-grade wide-angle 4K cameras</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-primary mr-2">•</span>
                      <span>High-fidelity microphones and speaker systems</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-primary mr-2">•</span>
                      <span>Studio-quality lighting setup</span>
                    </li>
                  </ul>
                </div>
                <p className="text-text-secondary mt-4">
                  While the initial investment is significant, these tools pay for themselves through scalable teaching and increased revenue.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Business Model Card */}
          <motion.div 
            className="bg-bg-card rounded-2xl shadow-lg overflow-hidden"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-brand-primary">
                The Revenue Model
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-bg-badge p-2 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Scalable Teaching</h3>
                    <p className="text-text-secondary">
                      One expert teacher can simultaneously instruct hundreds of students across multiple locations.
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
                    <h3 className="font-semibold text-lg mb-1">Cost Efficiency</h3>
                    <p className="text-text-secondary">
                      Reduces need for multiple expert faculty while maintaining teaching quality.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-success-bg p-2 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Growth Potential</h3>
                    <p className="text-text-secondary">
                      Easy expansion to new locations with minimal additional infrastructure costs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="mb-20 bg-gradient-to-r from-bg-section to-bg-section rounded-2xl p-8 md:p-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-6 text-brand-primary">
            The Future of Education
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-text-primary mb-6">
                 Hybrid teaching model demonstrates how technology can revolutionize education while being financially sustainable. This approach maintains the personal touch of classroom teaching while leveraging digital advantages for scale.
              </p>
              <div className="bg-bg-card p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-2 text-brand-primary">Key Takeaways:</h3>
                <ul className="space-y-2 text-text-primary">
                  <li className="flex items-start">
                    <span className="text-brand-primary mr-2">•</span>
                    <span>Hybrid models offer the best of both offline and online education</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-primary mr-2">•</span>
                    <span>Initial technology investments lead to long-term scalability</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-primary mr-2">•</span>
                    <span>Student satisfaction remains high while reducing operational costs</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative h-64 md:h-full rounded-lg overflow-hidden">
              <Image
                src="/images/hhh.png"
                alt="Successful Hybrid Model"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>
      </section>
      
      <WhatsAppWidget />
    </div>
  );
}