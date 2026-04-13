import Blog from "@/components/blog/Blog1";
import Brand from "@/components/Brand/Brand";
import Footer from "@/components/Footer";
import Categories from "@/components/Franchise/Category";
import WhyChoose from "@/components/Franchise/Choose";
import Features from "@/components/Franchise/Features";
import Hero from "@/components/Hero";
import Highlight from "@/components/Highlight";
import Navbar from "@/components/Navbar";
import Service from "@/components/Service";
import ShopByCat from "@/components/Shopby/ShopByCat";
import Testimonial from "@/components/Testimonial/Testimonial";
import WhatsAppWidget from "@/components/WhatsApp/WhatApp";
import React from "react";

export const metadata = {
  title: "Student Alliance | STEM & Robotics Labs for Schools in India",
  description:
    "Explore Student Alliance LLP – India's trusted provider of STEM, robotics, and innovation labs for schools. Shop kits, explore franchise opportunities, and empower future-ready learning.",
  alternates: { canonical: "https://studentalliancellp.com/" },
  openGraph: {
    title: "Student Alliance | STEM & Robotics Labs for Schools in India",
    description:
      "Shop STEM kits, explore franchise opportunities, and set up world-class innovation labs with Student Alliance LLP.",
    url: "https://studentalliancellp.com/",
    siteName: "Student Alliance LLP",
    images: [
      {
        url: "https://studentalliancellp.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Student Alliance LLP",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

const Page = () => {
  return (
    <div>
      <Hero />

      <Service />
      <ShopByCat />
      <Brand />
      <WhyChoose />
      <Categories />
      <Features />
      <Blog />
      <Highlight />
      <Testimonial />
    </div>
  );
};

export default Page;
