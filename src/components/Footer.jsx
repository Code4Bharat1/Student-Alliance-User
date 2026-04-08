"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
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
  {
    name: "Twitter",
    src: "/images/x.png",
    href: "https://x.com/studentaliance",
  },
  {
    name: "Facebook",
    src: "/images/facebook.png",
    href: "https://www.facebook.com/studentalliancellp/",
  },
  {
    name: "LinkedIn",
    src: "/images/linkedin.jpg",
    href: "https://www.linkedin.com/company/student-alliance-llp/",
  },
  {
    name: "Instagram",
    src: "/images/insta.jpg",
    href: "https://www.instagram.com/studentalliance",
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
});

const Footer = () => {
  return (
    <footer
      style={{ background: "var(--bg-footer)" }}
      className="text-white tracking-wide"
    >
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid max-sm:grid-cols-1 max-lg:grid-cols-2 lg:grid-cols-5 lg:gap-20 max-lg:gap-10">
          {/* Logo & About */}
          <motion.div {...fadeUp(0.1)} className="lg:col-span-3">
            <Link href="/">
              <Image
                src="/images/logo.jpg"
                alt="Student Alliance Logo"
                width={160}
                height={60}
                className="w-36 h-auto"
              />
            </Link>
            <p className="text-white/50 leading-relaxed text-sm lg:max-w-sm mt-6">
              Student Alliance is your go-to platform for innovative educational
              technology, STEM learning kits, and digital solutions that inspire
              creativity.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex space-x-4">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 p-2 rounded-full hover:bg-brand-primary transition-all duration-300"
                  whileHover={{ y: -4, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Image
                    src={social.src}
                    alt={social.name}
                    width={24}
                    height={24}
                    className="object-contain w-6 h-auto"
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* About Us */}
          <motion.div {...fadeUp(0.2)}>
            <h4 className="text-base font-medium mb-6 text-white border-b-2 border-brand-primary inline-block pb-1">
              About Us
            </h4>
            <ul className="space-y-3 mt-4">
              {footerLinks.popular.map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.href}
                    className="text-white/50 hover:text-brand-accent text-sm transition"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div {...fadeUp(0.3)}>
            <h4 className="text-base font-medium mb-6 text-white border-b-2 border-brand-primary inline-block pb-1">
              Services
            </h4>
            <ul className="space-y-3 mt-4">
              {footerLinks.categories.map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.href}
                    className="text-white/50 hover:text-brand-accent text-sm transition"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          {...fadeUp(0.4)}
          className="mt-10 border-t border-white/10 text-center pt-6 text-white/40 text-sm"
        >
          <p>
            © 2011-{new Date().getFullYear()} Student Alliance LLP. All rights
            reserved.
          </p>
          <p className="mt-1 text-xs text-white/30">
            Designed with ❤️ by Student Alliance Team
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
