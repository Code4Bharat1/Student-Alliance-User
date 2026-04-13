import Blog from '@/components/blog/Blog1';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react';

export const metadata = {
  title: "Blog | Student Alliance LLP – STEM & Education Insights",
  description:
    "Read the latest articles, insights, and updates on STEM education, robotics, and innovation labs from Student Alliance LLP's blog.",
  keywords: [
    "student alliance blog",
    "STEM education articles",
    "robotics insights",
    "innovation labs updates",
    "educational blog India",
  ],
  alternates: { canonical: "https://studentalliancellp.com/blog" },
  openGraph: {
    title: "Blog | Student Alliance LLP",
    description:
      "Stay updated with the latest articles, insights, and news on STEM education, robotics, and innovation labs from Student Alliance LLP.",
    url: "https://studentalliancellp.com/blog",
    siteName: "Student Alliance LLP",
    images: [
      {
        url: "https://studentalliancellp.com/images/og-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Student Alliance Blog",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};


const page = () => {
  return (
    <div>
      
      <Blog/>
      
    </div>
  )
}

export default page;
