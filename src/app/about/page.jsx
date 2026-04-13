import Hero from "@/components/about/Hero";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

export const metadata = {
  title: "About Student Alliance LLP | Our Mission & Vision",
  description:
    "Learn about Student Alliance LLP - India's pioneer in STEM and robotics lab solutions. Discover our mission, vision, and commitment to future-ready education.",
  keywords: [
    "about student alliance",
    "student alliance llp about",
    "STEM lab company India",
    "robotics education company",
    "student alliance mission",
  ],
  alternates: { canonical: "https://studentalliancellp.com/about" },
  openGraph: {
    title: "About Student Alliance LLP | Our Mission & Vision",
    description:
      "Discover who we are and how Student Alliance LLP is transforming education through STEM and robotics labs.",
    url: "https://studentalliancellp.com/about",
    siteName: "Student Alliance LLP",
    images: [
      {
        url: "https://studentalliancellp.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "About Student Alliance LLP",
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
    </div>
  );
};

export default Page;
