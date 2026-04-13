"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const categories = [
  { id: 4, name: "IFPD Panel", image: "/shop/board.png", link: "/Prod" },
  { id: 5, name: "Camera", image: "/shop/camera.png", link: "/shop1" },
  { id: 7, name: "OPS", image: "/shop/opss.png", link: "/shop1" },
  {
    id: 8,
    name: "3D Printers",
    image: "/images/printer.png",
    link: "/printer",
  },
  { id: 9, name: "Kits", image: "/images/K1.jpg", link: "/kits" },
];

const ShopByCat = () => {
  const duplicatedCategories = [...categories, ...categories];
  const marqueeRef = useRef(null);
  const animationRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  // Start marquee animation
  useEffect(() => {
    if (marqueeRef.current) {
      const keyframes = [
        { transform: "translateX(0)" },
        { transform: "translateX(-50%)" },
      ];

      const options = {
        duration: 20000,
        iterations: Infinity,
        easing: "linear",
      };

      animationRef.current = marqueeRef.current.animate(keyframes, options);
    }
  }, []);

  // Hover slow-down
  useEffect(() => {
    if (animationRef.current) {
      animationRef.current.playbackRate = isHovering ? 0.25 : 1;
    }
  }, [isHovering]);

  return (
    <section className="relative overflow-hidden bg-bg-section py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="section-heading text-center mb-14">
          <span className="gradient-text">Shop By Category</span>
        </h2>

        {/* Marquee Container */}
        <div className="relative w-full overflow-hidden">
          <div
            ref={marqueeRef}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="flex w-max whitespace-nowrap"
          >
            {duplicatedCategories.map((category, index) => (
              <div
                key={`${category.id}-${index}`}
                className="inline-flex flex-col items-center mx-10 group cursor-pointer"
              >
                <Link href={category.link} scroll={false}>
                  <div
                    className="relative w-28 h-40 md:w-36 md:h-36 rounded-full overflow-hidden 
                    bg-bg-card border-2 border-border-primary 
                    transition-all duration-500 group-hover:shadow-xl 
                    group-hover:border-brand-primary"
                    style={{ boxShadow: "var(--shadow-md)" }}
                  >
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      sizes="(max-width: 768px) 112px, 144px"
                      className="object-contain p-3 transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </Link>
                <p className="mt-4 text-lg font-semibold text-text-dark group-hover:text-brand-primary transition-colors duration-300">
                  {category.name}
                </p>
              </div>
            ))}
          </div>

          {/* Gradient Fades */}
          <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-bg-section to-transparent z-10"></div>
          <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-bg-section to-transparent z-10"></div>
        </div>

        {/* Accent Line */}
        <div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2/3 h-[3px] rounded-full blur-[1px]"
          style={{ backgroundImage: "var(--brand-gradient)" }}
        ></div>
      </div>
    </section>
  );
};

export default ShopByCat;
