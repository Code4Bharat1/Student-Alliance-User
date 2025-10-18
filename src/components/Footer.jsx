"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const footerLinks = {

  popular: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/Prod" },
    { name: "Shop", href: "/shop1" },
    { name: "Updates", href: "/blog" },
  ],
  categories: [
    { name: "IFPD", href: "/Prod" },
    { name: "STEM & Robotics", href: "/kits" },
    { name: "3D Printers", href: "/printer" },
    
  ],
};

const socialLinks = [
  { name: "Twitter", src: "/images/x.png", href: "https://x.com/studentaliance" },
  { name: "Facebook", src: "/images/facebook.png", href: "https://www.facebook.com/studentalliancellp/" },
  { name: "LinkedIn", src: "/images/linkedin.jpg", href: "https://www.linkedin.com/company/student-alliance-llp/" },
  { name: "Instagram", src: "/images/insta.jpg", href: "https://www.instagram.com/studentalliance" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
});

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white tracking-wide">
      <div className="max-w-screen-xl mx-auto px-6 py-12">
       

        {/* Footer Main Content */}
        <div className="grid max-sm:grid-cols-1 max-lg:grid-cols-2 lg:grid-cols-5 lg:gap-20 max-lg:gap-10">
          {/* Logo & About */}
          <motion.div {...fadeUp(0.1)} className="lg:col-span-3">
            <a href="/">
              <Image
                src="/images/logo.jpg"
                alt="Student Alliance Logo"
                width={160}
                height={60}
                className="w-36"
              />
            </a>
            <p className="text-slate-400 leading-relaxed text-sm lg:max-w-sm mt-6">
              Student Alliance is your go-to platform for innovative educational
              technology, STEM learning kits, and digital solutions that inspire creativity.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex space-x-4">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 p-2 rounded-full hover:bg-indigo-500 transition-all duration-300"
                  whileHover={{ y: -4, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Image
                    src={social.src}
                    alt={social.name}
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div {...fadeUp(0.2)}>
            <h4 className="text-base font-medium mb-6 text-white border-b-2 border-indigo-400 inline-block pb-1">
              About Us
            </h4>
            <ul className="space-y-3 mt-4">
              {footerLinks.popular.map((item, i) => (
                <li key={i}>
                  <a
                    href={item.href}
                    className="text-slate-400 hover:text-indigo-300 text-sm transition"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* About Us */}
          <motion.div {...fadeUp(0.3)}>
            <h4 className="text-base font-medium mb-6 text-white border-b-2 border-indigo-400 inline-block pb-1">
              Services 
            </h4>
            <ul className="space-y-3 mt-4">
              {footerLinks.categories.map((item, i) => (
                <li key={i}>
                  <a
                    href={item.href}
                    className="text-slate-400 hover:text-indigo-300 text-sm transition"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          {...fadeUp(0.4)}
          className="mt-10 border-t border-indigo-600 text-center pt-6 text-gray-400 text-sm"
        >
          <p>© 2011-{new Date().getFullYear()} Student Alliance LLP. All rights reserved.</p>
          <p className="mt-1 text-xs text-gray-500">
            Designed with ❤️ by Student Alliance Team
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
