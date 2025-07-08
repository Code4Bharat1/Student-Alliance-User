"use client"

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    // this is footer section
    <footer className="text-white bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-0 md:gap-8">
          {/* Get In Touch */}
          <motion.div 
            className="p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-bold text-xl mb-4 text-white border-b-2 border-indigo-400 pb-2 inline-block">Get In Touch</h3>
            <div className="space-y-3 mt-4">
              <div className="flex items-start">
                <span className="text-indigo-300 mr-3 mt-1">📍</span>
                <p>Office No. 1A & 2, Lower Ground Floor, Building No. 3 White House, New Buddha Colony, Kurla (west)</p>
              </div>
              <div className="flex items-center">
                <span className="text-indigo-300 mr-3">📧</span>
                <p>sales@studentalliance.in</p>
              </div>
              <div className="flex items-center">
                <span className="text-indigo-300 mr-3">📞</span>
                <p>+91-9022477293 <br />  +91-9594402775</p>
              </div>
            </div>
            
            <div className="mt-6 flex space-x-4">
              {[
                { name: 'Twitter', src: "/images/x.png", href: "https://x.com/studentaliance" },
                { name: 'Facebook', src: "/images/facebook.png", href: "https://www.facebook.com/studentalliancellp/" },
                { name: 'LinkedIn', src: "/images/linkedin.jpg", href: "https://www.linkedin.com/company/student-alliance-llp/" },
                { name: 'Instagram', src: "/images/insta.jpg", href: "https://www.instagram.com/studentalliance" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-2 rounded-full hover:bg-white hover:text-white transition-all duration-300"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Image 
                    src={social.src} 
                    alt={social.name} 
                    width={24} 
                    height={24} 
                    className="w-6 h-6 object-contain"
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Popular Links */}
          <motion.div 
            className="p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-bold text-xl mb-4 text-white border-b-2 border-indigo-400 pb-2 inline-block">Popular Links</h3>
            <ul className="space-y-3 mt-4">
              {[
                { name: 'Home', href: '/' },
                { name: 'About', href: '/about' },
                { name: 'Products', href: '/Prod' },
                { name: 'Shop', href: '/shop1' },
                { name: 'Updates', href: '/blog' }
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  className="flex items-center hover:text-indigo-300 transition-colors duration-200"
                  whileHover={{ x: 5 }}
                >
                  <span className="text-indigo-300 mr-2">➔</span>
                  <a href={item.href} className="block py-1">{item.name}</a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Categories */}
          <motion.div 
            className="p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-bold text-xl mb-4 text-white border-b-2 border-indigo-400 pb-2 inline-block">Categories</h3>
            <ul className="space-y-3 mt-4">
              {[
                { name: 'IFPD', href: '/Prod' },
                { name: 'Stem & Robotics', href: '/kits' },
                { name: '3D Printers', href: '/printer' },
                { name: 'STEM & Robotics', href: '/kits' }
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  className="flex items-center hover:text-indigo-300 transition-colors duration-200"
                  whileHover={{ x: 5 }}
                >
                  <span className="text-indigo-300 mr-2">➔</span>
                  <a href={item.href} className="block py-1">{item.name}</a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-indigo-500 text-center py-6 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p>© 2025. Student Alliance LLP. All Rights Reserved</p>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;