import Footer from "@/components/Footer";
import GetinTouch from "@/components/Getintouch/getintouch";
import Navbar from "@/components/Navbar";
import React from "react";

export const metadata = {
  title: "Contact Us | Student Alliance LLP – Get in Touch",
  description:
    "Contact Student Alliance LLP for STEM lab setups, robotics kits, franchise inquiries, or any other queries. We're here to help you build the future of education.",
  keywords: [
    "contact student alliance",
    "student alliance contact",
    "student alliance phone number",
    "student alliance email",
    "STEM lab inquiry",
    "student alliance franchise inquiry",
  ],
  alternates: { canonical: "https://studentalliancellp.com/getintouch" },
  openGraph: {
    title: "Contact Us | Student Alliance LLP",
    description:
      "Reach out to Student Alliance LLP for STEM labs, kits, franchise, and education solutions.",
    url: "https://studentalliancellp.com/getintouch",
    siteName: "Student Alliance LLP",
    images: [
      {
        url: "https://studentalliancellp.com/images/og-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Student Alliance LLP",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

const Page = () => {
  return (
    <div>
      <GetinTouch />
    </div>
  );
};

export default Page;
