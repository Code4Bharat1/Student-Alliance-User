"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const Brand = () => {
  const cards = [
    { id: 1, img: "/shop/computer-brand (1).png", link: "/shop1" },
    { id: 2, img: "/shop/camera-brand.png", link: "/shop1" },
    { id: 5, img: "/shop/brand5.png", link: "/shop1" },
  ];

  return (
    <section className="py-20 bg-bg-section">
      <div className="max-w-7xl mx-auto text-center px-4">
        <h2 className="section-heading text-center mb-14">
          <span className="gradient-text">Shop By Brand</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={card.link}>
                <div className="card-glow relative group rounded-2xl overflow-hidden bg-bg-card border border-border-primary transition-all duration-500">
                  <img
                    src={card.img}
                    alt={`Brand ${card.id}`}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition duration-500 flex items-center justify-center">
                    <span className="text-lg font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      View Products →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Link
            href="/shop1"
            className="inline-block px-8 py-3 rounded-xl font-semibold text-text-inverse transition-all duration-300 hover:scale-105"
            style={{
              backgroundImage: "var(--brand-gradient)",
              boxShadow: "var(--shadow-md)",
            }}
          >
            Explore All Brands
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Brand;
