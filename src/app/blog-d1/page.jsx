export const metadata = {
  title: "Interactive Flat Panel Displays | Student Alliance LLP",
  description: "Explore the features, benefits, and buying guide for Interactive Flat Panel Displays (IFPD). Learn how Student Alliance IFPD transforms classrooms and offices.",
  keywords: ["interactive flat panel display", "IFPD", "student alliance IFPD", "digital board India", "interactive display for schools"],
  alternates: { canonical: "https://studentalliancellp.com/blog-d1" },
  openGraph: {
    title: "Interactive Flat Panel Displays | Student Alliance LLP",
    description: "Explore the features, benefits, and buying guide for Interactive Flat Panel Displays (IFPD). Learn how Student Alliance IFPD transforms classrooms and offices.",
    url: "https://studentalliancellp.com/blog-d1",
    siteName: "Student Alliance LLP",
    images: [{ url: "https://studentalliancellp.com/images/og-banner.jpg", width: 1200, height: 630, alt: "Interactive Flat Panel Displays" }],
    locale: "en_IN",
    type: "article",
  },
};

import BlogsDetail from '@/components/blog/BlogDetail1'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const Page = () => {
  return (
    <div>
    
      <BlogsDetail/>
    
    </div>
  )
}

export default Page
