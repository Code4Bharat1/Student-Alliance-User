"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const Brand = () => {
  const cards = [
    {
      id: 1,
      img: "/shop/computer-brand (1).png",
      link: "/shop1",
    },
    {
      id: 2,
      img: "/shop/camera-brand.png",
      link: "/shop1",
    },
    {
      id: 5,
      img: "/shop/brand5.png",
      link: "/shop1",
    },
  ];

  const theme = {
    primaryBlue: "#2A1B8F",
    accentGreen: "#1FA55B",
    ctaRed: "#E63946",
    bgWhite: "#FFFFFF",
    sectionGray: "#F7F9FB",
    textDark: "#1E1E1E",
    subtextGray: "#757575",
    border: "#E0E0E0",
  };

  return (
    <section
      className="py-16"
      style={{ backgroundColor: theme.sectionGray }}
    >
      <div className="container mx-auto text-center px-4">
         <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-[#1E1E1E]">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2A1B8F] to-[#1FA55B]">
            Shop By Brand
          </span>
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
                <div
                  className="relative group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border"
                  style={{
                    backgroundColor: theme.bgWhite,
                    borderColor: theme.border,
                  }}
                >
                  <img
                    src={card.img}
                    alt={`Brand ${card.id}`}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition duration-500 flex items-center justify-center">
                    <span
                      className="text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ color: theme.bgWhite }}
                    >
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
            href="/all-brands"
            className="inline-block px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: theme.accentGreen,
              color: theme.bgWhite,
              boxShadow: `0 4px 10px ${theme.border}`,
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
