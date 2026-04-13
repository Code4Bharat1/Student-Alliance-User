import Footer from "@/components/Footer";
import KitsSection from "@/components/Kits/Kits";
import Navbar from "@/components/Navbar";
import React from "react";

export const metadata = {
  title: "STEM & Robotics Kits | Student Alliance LLP",
  description:
    "Explore Student Alliance LLP's range of STEM and robotics kits for schools and students. Build, learn, and innovate with our high-quality educational kits designed for future-ready learning.",
  keywords: [
    "STEM kits India",
    "robotics kits for schools",
    "student alliance kits",
    "buy STEM kits online",
    "educational kits India",
    "science kits for students",
    "innovation kits for schools",
  ],
  alternates: { canonical: "https://studentalliancellp.com/kits" },
  openGraph: {
    title: "STEM & Robotics Kits | Student Alliance LLP",
    description:
      "Shop Student Alliance's premium STEM and robotics kits for hands-on learning in schools across India.",
    url: "https://studentalliancellp.com/kits",
    siteName: "Student Alliance LLP",
    images: [
      {
        url: "https://studentalliancellp.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Student Alliance STEM Kits",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

const Page = () => {
  return (
    <div>
      <KitsSection />
    </div>
  );
};

export default Page;
