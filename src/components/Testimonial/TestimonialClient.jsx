"use client";

import dynamic from "next/dynamic";
import React from "react";

const Testimonial = dynamic(() => import("./Testimonial"), {
  ssr: false,
  loading: () => (
    <div className="min-h-[300px] flex items-center justify-center">
      Loading testimonials...
    </div>
  ),
});

export default function TestimonialClient() {
  return <Testimonial />;
}
