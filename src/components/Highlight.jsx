import React from "react";
import { motion } from "framer-motion";


const Highlight = () => {
  const highlights = [
    {
      title: "Best Startup Idea - 1st Nov 2018",
      description:
        "Recognized for innovation and impact, this idea stood out among thousands. Aimed at empowering educators and creators with smart digital teaching setups.",
      imgSrc: "/images/h1.png",
      alt: "Best Startup Idea",
      reverse: false,
    },
    {
      title: "Start-Up of the Year - 2018",
      description:
        "Student Alliance LLP has been awarded the Outstanding Start-Up of the Year by Indo Global Chamber of Commerce Industries, held at Vivanta by Taj, Goa in 2018.",
      imgSrc: "/images/h2.png",
      alt: "Start-Up of the Year 2018",
      reverse: true,
    },
    {
      title: "World Records",
      description:
        "World Record in STEM Education to train 6,627 students by 204 trainers in 5 different states (Maharashtra, Rajasthan, Karnataka, Telangana, Uttar Pradesh).",
      imgSrc: "/images/h3.png",
      alt: "World Record",
      reverse: false,
    },
  ];

  return (
    <div className="bg-gray-50 py-12 text-black">
      <motion.div
        className="max-w-7xl mx-auto px-6 lg:px-8"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-center mb-12">Highlighted By</h2>

        <div className="space-y-10">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              className={`flex flex-col ${
                item.reverse ? "md:flex-row-reverse" : "md:flex-row"
              } items-center bg-white shadow-lg rounded-lg overflow-hidden`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src={item.imgSrc}
                alt={item.alt}
                className="w-full md:w-1/3 h-64 object-cover"
              />
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Highlight;
