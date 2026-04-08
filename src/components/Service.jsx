"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, Cpu, Monitor, Rocket } from "lucide-react";

const services = [
  {
    title: "3D Printers",
    description:
      "Unlock the power of precision and creativity with our expert 3D printer services. We bring your ideas to life!",
    buttonText: "Explore Now",
    imgSrc: "/images/3DP2.png",
    link: "/printer",
    icon: <Cpu className="w-8 h-8" />,
  },
  {
    title: "IFPD Panel",
    description:
      "Discover precision and reliability with IFPD Panel Services — your trusted partner for custom-built electrical panels.",
    buttonText: "Explore Now",
    imgSrc: "/images/digital-d1.png",
    link: "/Prod",
    icon: <Monitor className="w-8 h-8" />,
  },
  {
    title: "Stem & Robotics",
    description:
      "Unlock young minds with our STEM & Robotics. Interactive sessions in coding, robotics, AI, and more!",
    buttonText: "Explore Now",
    imgSrc: "/images/K5.png",
    link: "/kits",
    icon: <Rocket className="w-8 h-8" />,
  },
];

const Service = () => {
  return (
    <div className="relative bg-bg-section py-20 px-4 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 0],
            opacity: [0.03, 0.06, 0.03],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -top-20 -left-20 w-96 h-96 bg-brand-primary rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [180, 0, 180],
            opacity: [0.03, 0.06, 0.03],
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute -bottom-20 -right-20 w-96 h-96 bg-brand-secondary rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-2 px-6 py-2 bg-bg-card/90 backdrop-blur-sm rounded-full border border-border-primary mb-6"
            style={{ boxShadow: "var(--shadow-md)" }}
          >
            <Sparkles className="w-4 h-4 text-brand-secondary" />
            <span className="text-sm font-semibold text-brand-primary">
              What We Offer
            </span>
          </motion.div>

          <h2 className="section-heading mb-4">
            <span className="gradient-text">Our Services</span>
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Innovative solutions designed to transform your educational
            experience
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div
                className="card-glow relative bg-bg-card rounded-3xl border border-border-primary transition-all duration-500 overflow-hidden h-full flex flex-col"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                {/* Icon Badge */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: index * 0.15 + 0.3, type: "spring" }}
                  className="absolute top-6 right-6 z-10 p-3 rounded-2xl text-text-inverse"
                  style={{
                    backgroundImage: "var(--brand-gradient)",
                    boxShadow: "var(--shadow-md)",
                  }}
                >
                  {service.icon}
                </motion.div>

                {/* Image Container */}
                <div className="relative p-8 bg-bg-section">
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    transition={{ duration: 0.4 }}
                    className="relative aspect-[4/3] bg-bg-card rounded-2xl overflow-hidden border border-border-primary"
                    style={{ boxShadow: "var(--shadow-sm)" }}
                  >
                    <img
                      src={service.imgSrc}
                      alt={service.title}
                      className="w-full h-full object-contain p-4"
                    />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold text-text-dark mb-3 group-hover:text-brand-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-text-muted mb-6 leading-relaxed flex-grow">
                    {service.description}
                  </p>
                  <Link href={service.link}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 text-text-inverse font-semibold rounded-xl transition-all duration-300 cursor-pointer"
                      style={{
                        backgroundImage: "var(--brand-gradient)",
                        boxShadow: "var(--shadow-md)",
                      }}
                    >
                      <span>{service.buttonText}</span>
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight className="w-5 h-5" />
                      </motion.div>
                    </motion.div>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div
            className="inline-block bg-bg-card rounded-2xl p-8 border border-border-primary"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <h3 className="text-2xl font-bold text-text-dark mb-3">
              Ready to Transform Your Experience?
            </h3>
            <p className="text-text-muted mb-6">
              Get in touch with us to learn more about our services
            </p>
            <Link href="/getintouch">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-brand-accent text-text-inverse font-semibold rounded-xl transition-all duration-300 inline-flex items-center gap-2 cursor-pointer"
                style={{ boxShadow: "var(--shadow-md)" }}
              >
                <span>Contact Us</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Service;
