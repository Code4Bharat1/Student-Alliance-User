'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const features = [
  {
    title: 'End to End Edtech Support',
    description:
      'Edtech support from educator studios to science centers with quality by Student Alliance.',
    image: '/images/choose1.jpg',
  },
  {
    title: 'Research & Consultation',
    description:
      'Research & Consultation with Agile Framework to empower your education business.',
    image: '/images/choose2.png',
  },
  {
    title: 'PAN India & Global Outreach',
    description:
      'PAN India & Global Outreach with logistics and support beyond Mumbai.',
    image: '/images/choose3.jpg',
  },
];

export default function WhyChoose() {
  // 🎨 Theme Colors
  const theme = {
    primaryBlue: '#2A1B8F',
    accentGreen: '#1FA55B',
    ctaRed: '#E63946',
    backgroundWhite: '#FFFFFF',
    sectionGray: '#F7F9FB',
    textDark: '#1E1E1E',
    subtextGray: '#757575',
    border: '#E0E0E0',
  };

  return (
    <section
      className="py-20 px-6 md:px-0"
      style={{ backgroundColor: theme.sectionGray }}
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-[#1E1E1E]">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2A1B8F] to-[#1FA55B]">
             Why Choose Student Alliance
          </span>
        </h2>
   
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-base md:text-lg max-w-2xl mx-auto mb-12"
          style={{ color: theme.subtextGray }}
        >
          Empowering education through innovation, research, and reliable support across India and beyond.
        </motion.p>

        {/* Feature Cards */}
        <div className="flex flex-wrap justify-center gap-8 px-2 md:px-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group rounded-2xl overflow-hidden border transition-all duration-500 hover:shadow-lg hover:-translate-y-2 w-full sm:w-[300px] md:w-[350px]"
              style={{
                backgroundColor: theme.backgroundWhite,
                borderColor: theme.border,
                boxShadow: `0 4px 10px ${theme.border}`,
              }}
            >
              <div className="overflow-hidden relative">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={400}
                  height={250}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="p-6 text-center">
                <h3
                  className="font-bold text-xl mb-3 transition-colors duration-300"
                  style={{ color: theme.primaryBlue }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: theme.subtextGray }}
                >
                  {feature.description}
                </p>
              </div>

              {/* Accent underline on hover */}
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 rounded-t transition-all duration-500 group-hover:w-2/3"
                style={{ backgroundColor: theme.accentGreen }}
              ></div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          className="mt-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <button
            className="px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{
              backgroundColor: theme.accentGreen,
              color: theme.backgroundWhite,
              boxShadow: `0 4px 12px ${theme.border}`,
            }}
          >
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
}
