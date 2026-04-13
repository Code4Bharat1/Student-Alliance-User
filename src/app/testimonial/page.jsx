import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Testimonial from "@/components/Testimonial/Testimonial";
import React from "react";

export const metadata = {
  title: "Testimonials | Student Alliance LLP – What Our Clients Say",
  description:
    "Read testimonials from schools and educators who have transformed their learning environment with Student Alliance LLP's STEM and robotics lab solutions.",
  keywords: [
    "student alliance testimonials",
    "student alliance reviews",
    "STEM lab reviews",
    "student alliance client feedback",
    "school robotics lab testimonial",
  ],
  alternates: { canonical: "https://studentalliancellp.com/testimonial" },
  openGraph: {
    title: "Testimonials | Student Alliance LLP",
    description:
      "See what schools and educators say about Student Alliance LLP's STEM and robotics solutions.",
    url: "https://studentalliancellp.com/testimonial",
    siteName: "Student Alliance LLP",
    images: [
      {
        url: "https://studentalliancellp.com/images/og-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Student Alliance Testimonials",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

const Page = () => {
  return (
    <div>
      <Testimonial />
    </div>
  );
};

export default Page;
