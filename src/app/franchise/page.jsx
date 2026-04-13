import Footer from "@/components/Footer";
import Categories from "@/components/Franchise/Category";
import WhyChoose from "@/components/Franchise/Choose";
import Features from "@/components/Franchise/Features";
import Franchise from "@/components/Franchise/Franchise";
import Navbar from "@/components/Navbar";
import React from "react";

export const metadata = {
  title: "Franchise | Student Alliance LLP – Partner With Us",
  description:
    "Join the Student Alliance LLP franchise network and bring world-class STEM and robotics labs to your city. Explore franchise opportunities across India.",
  keywords: [
    "student alliance franchise",
    "STEM lab franchise India",
    "robotics lab franchise",
    "education franchise opportunity",
    "student alliance partner",
    "STEM franchise business",
  ],
  alternates: { canonical: "https://studentalliancellp.com/franchise" },
  openGraph: {
    title: "Franchise | Student Alliance LLP – Partner With Us",
    description:
      "Become a Student Alliance LLP franchise partner and bring cutting-edge STEM education to your region.",
    url: "https://studentalliancellp.com/franchise",
    siteName: "Student Alliance LLP",
    images: [
      {
        url: "https://studentalliancellp.com/images/og-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Student Alliance Franchise",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

const Page = () => {
  return (
    <div>
      <Franchise />
      <WhyChoose />
      <Categories />
      <Features />
    </div>
  );
};

export default Page;
