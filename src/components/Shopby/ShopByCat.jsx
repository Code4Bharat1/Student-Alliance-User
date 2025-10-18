"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const categories = [
  { id: 4, name: "IFPD Panel", image: "/shop/board.png", link: "/Prod" },
  { id: 5, name: "Camera", image: "/shop/camera.png", link: "/shop1" },
  { id: 7, name: "OPS", image: "/shop/opss.png", link: "/shop1" },
  { id: 8, name: "3D Printers", image: "/images/printer.png", link: "/printer" },
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
    <section className="relative overflow-hidden bg-[#F7F9FB] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-[#1E1E1E]">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2A1B8F] to-[#1FA55B]">
            Shop By Category
          </span>
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
                    bg-[#FFFFFF] border-2 border-[#E0E0E0] shadow-md 
                    transition-all duration-500 group-hover:shadow-xl 
                    group-hover:border-[#2A1B8F]"
                  >
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-contain p-3 transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </Link>
                <p className="mt-4 text-lg font-semibold text-[#1E1E1E] group-hover:text-[#2A1B8F] transition-colors duration-300">
                  {category.name}
                </p>
              </div>
            ))}
          </div>

          {/* Gradient Fades */}
          <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-[#F7F9FB] to-transparent z-10"></div>
          <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-[#F7F9FB] to-transparent z-10"></div>
        </div>

        {/* Accent Line */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2/3 h-[3px] bg-gradient-to-r from-[#2A1B8F] via-[#1FA55B] to-[#E63946] rounded-full blur-[1px]"></div>
      </div>
    </section>
  );
};

export default ShopByCat;
