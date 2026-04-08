"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  {
    title: "End to End Edtech Support",
    description:
      "Edtech support from educator studios to science centers with quality by Student Alliance.",
    image: "/images/choose1.jpg",
  },
  {
    title: "Research & Consultation",
    description:
      "Research & Consultation with Agile Framework to empower your education business.",
    image: "/images/choose2.png",
  },
  {
    title: "PAN India & Global Outreach",
    description:
      "PAN India & Global Outreach with logistics and support beyond Mumbai.",
    image: "/images/choose3.jpg",
  },
];

export default function WhyChoose() {
  return (
    <section className="py-20 px-6 md:px-0 bg-bg-section">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="section-heading text-center mb-4">
          <span className="gradient-text">Why Choose Student Alliance</span>
        </h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-base md:text-lg max-w-2xl mx-auto mb-14 text-text-muted"
        >
          Empowering education through innovation, research, and reliable
          support across India and beyond.
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
              className="card-glow relative group rounded-2xl overflow-hidden border border-border-primary bg-bg-card transition-all duration-500 w-full sm:w-[300px] md:w-[350px]"
              style={{ boxShadow: "var(--shadow-card)" }}
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
                <h3 className="font-bold text-xl mb-3 text-brand-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-text-muted">
                  {feature.description}
                </p>
              </div>

              {/* Accent underline on hover */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 rounded-t transition-all duration-500 group-hover:w-2/3 bg-brand-secondary"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
