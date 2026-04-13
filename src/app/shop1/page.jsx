import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Shop from "@/components/Shop/Shop1";
import React from "react";

export const metadata = {
  title: "Shop | Student Alliance LLP – STEM Kits & Robotics Products",
  description:
    "Browse and buy STEM kits, robotics sets, 3D printers, and innovative education products from Student Alliance LLP. Quality lab solutions for schools and students.",
  keywords: [
    "student alliance shop",
    "buy STEM kits India",
    "robotics kits online",
    "3D printer for schools India",
    "student alliance products",
    "STEM education products",
    "innovation lab equipment",
  ],
  alternates: { canonical: "https://studentalliancellp.com/shop1" },
  openGraph: {
    title: "Shop | Student Alliance LLP – STEM Kits & Robotics Products",
    description:
      "Explore Student Alliance's wide range of STEM kits, robotics, and lab equipment for schools.",
    url: "https://studentalliancellp.com/shop1",
    siteName: "Student Alliance LLP",
    images: [
      {
        url: "https://studentalliancellp.com/images/og-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Student Alliance Shop",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

const Page = () => {
  return (
    <div>
      <Shop />
    </div>
  );
};

export default Page;
