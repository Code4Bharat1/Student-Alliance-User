'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Resources() {
  const products = [
    {
      title: '4K Webcam, Fully Optimized! – Download Now!',
      image: '/images/R1.png',
      link: '/download/webcam',
    },
    {
      title: 'Upgrade Your Pen Tablet! – Download Now!',
      image: '/images/R2.png',
      link: '/download/pen-tablet',
    },
  ];

  return (
    <div className="py-20 text-white bg-white ">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold mb-6 bg-clip-text text-black ">
            Download Essential Software & Drivers
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Get the latest software, drivers, and updates for your devices. Optimize performance, enhance features, and
            stay up to date. Fast, secure, and hassle-free downloads—everything you need in one place!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-4">
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="relative group rounded-xl overflow-hidden shadow-2xl hover:shadow-purple-500/30 transition-all duration-500"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="relative h-100 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
              </div>
              
              <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
                <motion.h3 
                  className="text-2xl font-bold mb-4 text-white"
                  whileHover={{ x: 5 }}
                >
                  {product.title}
                </motion.h3>
                <motion.a
                  href={product.link}
                  className="self-start relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg group-hover:from-purple-600 group-hover:to-blue-500 transition-all duration-300"></span>
                  <span className="relative z-10 block px-6 py-2 font-semibold text-white rounded-lg border-2 border-transparent group-hover:border-white/30 transition-all duration-300">
                    DOWNLOAD NOW
                  </span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}