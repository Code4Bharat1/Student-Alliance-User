"use client";

import React, { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";

const Hero = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Does Student Alliance offer consulting services?",
      answer:
        "Yes, Student Alliance provides comprehensive consulting services to assess your technology needs and recommend the best solutions.",
    },
    {
      question: "Can Student Alliance be integrated with existing systems?",
      answer:
        "Yes, our products are designed for seamless integration with your existing systems.",
    },
    {
      question: "What industries does Student Alliance cater to?",
      answer:
        "Student Alliance serves education, corporate offices, and government institutions.",
    },
    {
      question: "Does Student Alliance handle large-scale installations?",
      answer:
        "Yes, we manage both small and large-scale installations efficiently.",
    },
    {
      question: "Does Student Alliance provide after-sales support?",
      answer:
        "Yes, we offer ongoing support for all products.",
    },
    {
      question: "Can I request a demo?",
      answer:
        "Yes, you can contact us to schedule a demo.",
    },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative bg-gradient-to-br from-bg-primary via-brand-primary to-bg-primary min-h-screen flex items-center justify-center text-white px-4">
        <div className="max-w-5xl mx-auto text-center space-y-8">

          <div className="inline-block px-4 py-2 bg-brand-primary/20 rounded-full text-sm font-medium mb-4">
            Since 2012
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
            India's Pioneer in
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary mt-2">
              STEM & Robotics Labs
            </span>
          </h1>

          <p className="text-lg md:text-xl text-text-tertiary max-w-3xl mx-auto">
            Transforming education through cutting-edge lab solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <a
              href="https://wa.me/919594402775"
              target="_blank"
              className="px-8 py-3 bg-brand-primary rounded-full"
            >
              Get Started
            </a>

            <a
              href="https://wa.me/919594402775"
              target="_blank"
              className="px-8 py-3 border rounded-full"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6" />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto space-y-4">

          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border p-6"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === idx ? null : idx)
                }
                className="w-full flex justify-between items-center"
              >
                <span className="font-semibold">{faq.question}</span>
                <ChevronDown
                  className={`transition ${openIndex === idx ? "rotate-180" : ""
                    }`}
                />
              </button>

              {openIndex === idx && (
                <p className="mt-4 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}

        </div>
      </section>

      {/* WhatsApp */}
      <a
        href="https://wa.me/your-number"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center"
      >
        <MessageCircle className="text-white" />
      </a>
    </>
  );
};

export default Hero;