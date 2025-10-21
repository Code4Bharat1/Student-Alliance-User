"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, Cpu, Monitor, Rocket } from "lucide-react";

const Service = () => {
  const services = [
    {
      title: "3D Printers",
      description:
        "Unlock the power of precision and creativity with our expert 3D printer services. we bring your ideas to life!",
      buttonText: "Explore Now",
      imgSrc: "/images/3DP2.png",
      link: "/printer",
      icon: <Cpu className="w-8 h-8" />,
      gradient: "from-[#2A1B8F] to-[#1FA55B]",
      bgColor: "#F7F9FB",
    },
    {
      title: "IFPD Panel",
      description:
        "Discover precision and reliability with IFPD Panel Services — your trusted partner for custom-built electrical panels.",
      buttonText: "Explore Now",
      imgSrc: "/images/digital-d1.png",
      link: "/Prod",
      icon: <Monitor className="w-8 h-8" />,
      gradient: "from-[#2A1B8F] to-[#1FA55B]",
      bgColor: "#F7F9FB",
    },
    {
      title: "Stem & Robotics",
      description:
        "Unlock young minds with our STEM & Robotics. interactive sessions in coding, robotics, AI, and more!",
      buttonText: "Explore Now",
      imgSrc: "/images/K5.png",
      link: "/kits",
      icon: <Rocket className="w-8 h-8" />,
      gradient: "from-[#2A1B8F] to-[#1FA55B]",
      bgColor: "#F7F9FB",
    },
  ];

  return (
    <div className="relative bg-[#F7F9FB] py-20 px-4 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 0],
            opacity: [0.03, 0.06, 0.03],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -top-20 -left-20 w-96 h-96 bg-[#2A1B8F] rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [180, 0, 180],
            opacity: [0.03, 0.06, 0.03],
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#1FA55B] rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
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
            className="inline-flex items-center gap-2 px-6 py-2 bg-white/90 backdrop-blur-sm rounded-full border border-[#E0E0E0] shadow-lg mb-6"
          >
            <Sparkles className="w-4 h-4 text-[#1FA55B]" />
            <span className="text-sm font-semibold text-[#2A1B8F]">
              What We Offer
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2A1B8F] to-[#1FA55B]">
              Our Services
            </span>
          </h2>
          <p className="text-[#757575] text-lg max-w-2xl mx-auto">
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
              {/* Card */}
              <div className="relative bg-white rounded-3xl shadow-[0_4px_20px_rgba(224,224,224,0.5)] hover:shadow-[0_8px_30px_rgba(224,224,224,0.8)] transition-all duration-500 overflow-hidden h-full flex flex-col border border-[#E0E0E0]">
                {/* Icon Badge */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: index * 0.15 + 0.3, type: "spring" }}
                  className={`absolute top-6 right-6 z-10 p-3 bg-gradient-to-br ${service.gradient} rounded-2xl shadow-lg text-white`}
                >
                  {service.icon}
                </motion.div>

                {/* Image Container */}
                <div
                  className="relative p-8"
                  style={{ backgroundColor: service.bgColor }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    transition={{ duration: 0.4 }}
                    className="relative aspect-[4/3] bg-white rounded-2xl shadow-[0_4px_15px_rgba(224,224,224,0.4)] overflow-hidden border border-[#E0E0E0]"
                  >
                    <img
                      src={service.imgSrc}
                      alt={service.title}
                      className="w-full h-full object-contain p-4"
                    />

                    {/* Overlay on hover */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-gradient-to-t from-[#2A1B8F]/10 to-transparent"
                    />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold text-[#1E1E1E] mb-3 group-hover:text-[#2A1B8F] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-[#757575] mb-6 leading-relaxed flex-grow">
                    {service.description}
                  </p>

                  {/* ✅ Replaced <motion.a> with <Link> */}
                  <Link href={service.link} passHref>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r ${service.gradient} text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group/btn cursor-pointer`}
                    >
                      <span>{service.buttonText}</span>
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                      </motion.div>
                    </motion.div>
                  </Link>
                </div>

                {/* Decorative corner gradient */}
                <div
                  className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl ${service.gradient} opacity-5 rounded-tl-full transition-all duration-500 group-hover:w-40 group-hover:h-40 group-hover:opacity-10`}
                />
              </div>

              {/* Glow effect on hover */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className={`absolute inset-0 -z-10 bg-gradient-to-r ${service.gradient} opacity-10 blur-2xl rounded-3xl transition-opacity duration-500`}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-white rounded-2xl shadow-[0_4px_20px_rgba(224,224,224,0.5)] p-8 border border-[#E0E0E0]">
            <h3 className="text-2xl font-bold text-[#1E1E1E] mb-3">
              Ready to Transform Your Experience?
            </h3>
            <p className="text-[#757575] mb-6">
              Get in touch with us to learn more about our services
            </p>
            <Link href="/getintouch">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-[#E63946] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2 cursor-pointer" 
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
