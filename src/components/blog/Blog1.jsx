"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import WhatsAppWidget from "../WhatsApp/WhatApp";

const blogData = [
  {
    title: "IFPD for Home Use",
    image: "/images/IFPD-home.png",
    link: "/blog-d1",
  },
  {
    title: "IFPD for Work and Office",
    image: "/images/IFPD-work.png",
    link: "/blog-d2",
  },
  {
    title: "IFPD for Schools and Classes",
    image: "/images/IFPD-school.jpg",
    link: "/blog-d3",
  },
  {
    title: "Top Live Streaming Equipment for Beginners",
    image: "/images/live .jpg",
    link: "/blog-d4",
  },
  {
    title: "4K Ultra HD Alpha Webcam",
    image: "/shop/webcam.png",
    link: "/blog-d5",
  },
  {
    title: "Top 5 Digital Board Companies in India",
    image: "/images/digital.png",
    link: "/blog-d6",
  },
  {
    title: "Online Teaching Platform Guide",
    image: "/images/online.png",
    link: "/blog-d9",
  },
  {
    title: "86-Inch Digital Boards Guide",
    image: "/images/866i.png",
    link: "/blog-d8",
  },
  {
    title: "Best Interactive Displays Guide",
    image: "/images/smart.jpg",
    link: "/blog-d10",
  },
  {
    title: "Scale Your Coaching Business",
    image: "/images/coching.png",
    link: "/blog-d7",
  },
  {
    title: "Offline Coaching Setup Guide",
    image: "/images/how.jpg",
    link: "/blog-d11",
  },
  {
    title: "Hybrid Teaching Success Story",
    image: "/images/physicswala.png",
    link: "/blog-d12",
  },
];

export default function Blog() {
  return (
    <section className="relative py-20 px-6 md:px-16 bg-gradient-to-b from-white via-gray-50 to-[#e8f3ff] overflow-hidden">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-5xl md:text-6xl font-bold mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2A1B8F] to-[#1FA55B]">
            Latest Blogs
          </span>
        </h2>
        <div className="h-1 mx-auto w-28 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full"></div>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-10">
        {blogData.map((blog, index) => (
          <div
            key={index}
            className="bg-bg-card rounded-2xl border border-border-primary overflow-hidden hover:shadow-lg transition duration-300 hover:-translate-y-1"
          >
            {/* Image */}
            <div className="relative overflow-hidden">
              <Image
                src={blog.image}
                alt={`Read more: ${blog.title}`}
                width={500}
                height={300}
                sizes="(max-width: 768px) 100vw, 33vw"
                loading="lazy"
                className="w-full h-56 object-cover transition duration-500 hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-text-heading mb-3">
                {blog.title}
              </h3>

              <Link href={blog.link}>
                <button className="mt-4 w-full py-3 px-6 rounded-lg font-semibold text-white bg-gradient-to-r from-brand-primary to-brand-secondary hover:opacity-90 transition">
                  READ MORE →
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <WhatsAppWidget />
    </section>
  );
}
