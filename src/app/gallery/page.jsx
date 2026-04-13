import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery/gallery";
import Navbar from "@/components/Navbar";
import React from "react";

export const metadata = {
  title: "Gallery | Student Alliance LLP – Labs & Events",
  description:
    "View photos from Student Alliance LLP's STEM labs, robotics events, school setups, and educational workshops across India.",
  keywords: [
    "student alliance gallery",
    "STEM lab photos",
    "robotics events India",
    "student alliance events",
    "school lab setup photos",
  ],
  alternates: { canonical: "https://studentalliancellp.com/gallery" },
  openGraph: {
    title: "Gallery | Student Alliance LLP",
    description:
      "Explore photos of Student Alliance's STEM labs, school setups, and robotics events.",
    url: "https://studentalliancellp.com/gallery",
    siteName: "Student Alliance LLP",
    images: [
      {
        url: "https://studentalliancellp.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Student Alliance Gallery",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

const Page = () => {
  return (
    <div>
      <Gallery />
    </div>
  );
};

export default Page;
