"use client";

import React, { useState, useRef } from "react";
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
  const [isHovering, setIsHovering] = useState(false);
  const marqueeRef = useRef(null); // Removed <HTMLDivElement>
  const animationRef = useRef(null); // Removed <Animation | null>

  const handleMouseEnter = () => {
    if (marqueeRef.current && animationRef.current) {
      animationRef.current.pause();
    }
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    if (marqueeRef.current && animationRef.current) {
      animationRef.current.play();
    }
    setIsHovering(false);
  };

  // Initialize animation on component mount
  React.useEffect(() => {
    if (marqueeRef.current) {
      const keyframes = [
        { transform: 'translateX(0)' },
        { transform: 'translateX(-50%)' }
      ];
      
      const options = { // Removed : KeyframeAnimationOptions
        duration: 20000,
        iterations: Infinity,
        easing: 'linear',
      };
      
      animationRef.current = marqueeRef.current.animate(keyframes, options);
    }
  }, []);

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 bg-clip-text text-black">
          Shop By Category
        </h2>
        
        <div className="relative w-full overflow-hidden">
          {/* Marquee Container */}
          <div 
            ref={marqueeRef}
            className="flex w-max whitespace-nowrap"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {duplicatedCategories.map((category, index) => (
              <div 
                key={`${category.id}-${index}`} 
                className="inline-flex flex-col items-center mx-8 group transition-all duration-300"
              >
                <Link href={category.link} scroll={false}>
                  <div className="relative w-28 h-28 rounded-full overflow-hidden shadow-lg border-4 border-white bg-white transition-all duration-300 group-hover:border-purple-600">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain transition-transform duration-500 group-hover:scale-110"
                      style={{
                        objectPosition: 'center',
                        padding: '4px'
                      }}
                    />
                  </div>
                </Link>
                <p className="text-center text-black font-medium mt-3 text-lg">
                  {category.name}
                </p>
              </div>
            ))}
          </div>

          {/* Gradient Fade Effects */}
          <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-gray-100 to-transparent z-10"></div>
          <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-gray-100 to-transparent z-10"></div>
        </div>
      </div>
    </div>
  );
};

export default ShopByCat;