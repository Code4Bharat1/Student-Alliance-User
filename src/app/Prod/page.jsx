import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Products from "@/components/Prod/Product";
import React from "react";

export const metadata = {
  title: "All Products | Student Alliance LLP – STEM & Education Solutions",
  description:
    "Browse all products from Student Alliance LLP including STEM kits, robotics sets, 3D printers, digital boards, webcams, and more. Quality educational products for schools across India.",
  keywords: [
    "student alliance products",
    "buy STEM products India",
    "robotics products for schools",
    "digital board buy India",
    "student alliance shop",
    "educational products India",
  ],
  alternates: { canonical: "https://studentalliancellp.com/Prod" },
  openGraph: {
    title: "All Products | Student Alliance LLP",
    description:
      "Shop Student Alliance's complete range of STEM, robotics, and educational products for schools and students in India.",
    url: "https://studentalliancellp.com/Prod",
    siteName: "Student Alliance LLP",
    images: [
      {
        url: "https://studentalliancellp.com/images/og-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Student Alliance Products",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

const Page = () => {
  return (
    <div>
      <Products />
    </div>
  );
};

export default Page;
