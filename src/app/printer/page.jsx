import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Printer from "@/components/Printers/Printer";
import React from "react";

export const metadata = {
  title: "3D Printers for Schools | Student Alliance LLP",
  description:
    "Explore Student Alliance LLP's range of 3D printers for schools and educational institutions. Bring creativity and hands-on learning to your classroom with our affordable 3D printing solutions.",
  keywords: [
    "3D printer for schools India",
    "student alliance 3D printer",
    "educational 3D printer India",
    "buy 3D printer for classroom",
    "3D printing in education",
    "school 3D printer price India",
  ],
  alternates: { canonical: "https://studentalliancellp.com/printer" },
  openGraph: {
    title: "3D Printers for Schools | Student Alliance LLP",
    description:
      "Affordable 3D printers designed for schools and classrooms. Explore Student Alliance's 3D printing solutions for India.",
    url: "https://studentalliancellp.com/printer",
    siteName: "Student Alliance LLP",
    images: [
      {
        url: "https://studentalliancellp.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Student Alliance 3D Printers",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

const Page = () => {
  return (
    <div>
      <Printer />
    </div>
  );
};

export default Page;
