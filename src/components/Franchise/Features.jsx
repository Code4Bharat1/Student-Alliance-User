'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Robobloq Qoopers',
    desc: '6-in-1 programmable robot kit with remote, LED matrix, ultrasonic sensor & more.',
    image: '/images/robot.png',
  },
  {
    title: 'DIY Tank STEM Kit',
    desc: 'Wooden model, RC tracking tank, science experiment craft kits full set.',
    image: '/images/tank.png',
  },
  {
    title: 'DIY Piano STEM Kit',
    desc: 'Wooden music box puzzle, science education, school robotic project set.',
    image: '/images/piyano.png',
  },
  {
    title: 'DIY Foldscope Basic Kit',
    desc: 'Portable paper microscope for science experiments and projects.',
    image: '/images/scope.png',
  },
  {
    title: 'DIY Intelligent Sorting STEM Kit',
    desc: 'Science experiment, tech project, early learning toy for teens.',
    image: '/images/diy-stem.png',
  },
  {
    title: 'DIY Air Cannon STEM Kit',
    desc: 'Solar electric wooden car,educational science toys for kids.',
    image: '/images/cannon.png',
  },
];

export default function Features() {
  return (
    <section className="py-16 px-4 md:px-12 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
        Top Features of STEM & Robotics
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="rounded-xl overflow-hidden shadow-xl border-gray-700 hover:shadow-2xl transition-shadow duration-300 bg-white "
          >
            <div className="overflow-hidden group p-6 flex justify-center">
              <Image
                src={feature.image}
                alt={feature.title}
                width={350}
                height={180}
                className="object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="bg-blue-500 text-white text-center py-4 px-3">
              <h3 className="font-semibold text-lg">{feature.title}</h3>
              <p className="text-sm mt-2">{feature.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
