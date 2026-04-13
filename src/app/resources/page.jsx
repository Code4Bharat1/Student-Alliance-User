import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Resources from "@/components/Resources/Resources";
import WhatsAppWidget from "@/components/WhatsApp/WhatApp";
import React from "react";

export const metadata = {
  title: "Resources | Student Alliance LLP – STEM Learning Materials",
  description:
    "Access educational resources, guides, and learning materials from Student Alliance LLP to support STEM and robotics education in schools.",
  keywords: [
    "student alliance resources",
    "STEM learning resources",
    "robotics education materials",
    "student alliance guides",
    "education resources India",
  ],
  alternates: { canonical: "https://studentalliancellp.com/resources" },
  openGraph: {
    title: "Resources | Student Alliance LLP",
    description:
      "Download and access STEM and robotics learning resources from Student Alliance LLP.",
    url: "https://studentalliancellp.com/resources",
    siteName: "Student Alliance LLP",
    images: [
      {
        url: "https://studentalliancellp.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Student Alliance Resources",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

const Page = () => {
  return (
    <div>
      <Resources />
    </div>
  );
};

export default Page;
