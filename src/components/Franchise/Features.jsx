"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const features = [
  {
    title: "Robobloq Qoopers",
    desc: "6-in-1 programmable robot kit with remote, LED matrix, ultrasonic sensor & more.",
    image: "/images/robot.png",
  },
  {
    title: "DIY Tank STEM Kit",
    desc: "Wooden model, RC tracking tank, science experiment craft kits full set.",
    image: "/images/tank.png",
  },
  {
    title: "DIY Piano STEM Kit",
    desc: "Wooden music box puzzle, science education, school robotic project set.",
    image: "/images/piyano.png",
  },
  {
    title: "DIY Foldscope Basic Kit",
    desc: "Portable paper microscope for science experiments and projects.",
    image: "/images/scope.png",
  },
  {
    title: "DIY Intelligent Sorting STEM Kit",
    desc: "Science experiment, tech project, early learning toy for teens.",
    image: "/images/diy-stem.png",
  },
  {
    title: "DIY Air Cannon STEM Kit",
    desc: "Solar electric wooden car, educational science toys for kids.",
    image: "/images/cannon.png",
  },
];

export default function Features() {
  return (
    <section className="relative bg-bg-section py-24 px-6 md:px-12 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-primary/10 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-secondary/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-brand-primary to-brand-secondary"
        >
          Top Features of STEM & Robotics
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-lg md:text-xl text-text-secondary max-w-3xl mx-auto mb-16"
        >
          Unlock creativity and curiosity with innovative STEM kits designed for
          hands-on learning and exploration.
        </motion.p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group rounded-2xl overflow-hidden border border-transparent bg-bg-card/70 backdrop-blur-md transition-all duration-500 shadow-[0_8px_25px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.15)] hover:border-brand-secondary/40 hover:-translate-y-1 hover:scale-[1.03]"
            >
              {/* Image */}
              <div className="overflow-hidden flex justify-center items-center p-6 bg-gradient-to-b from-transparent to-brand-primary/5">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={350}
                  height={200}
                  className="object-contain transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Text */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-brand-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>

              {/* Hover accent line */}
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[3px] rounded-t transition-all duration-500 group-hover:w-3/4"
                style={{ backgroundColor: "var(--brand-secondary)" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
