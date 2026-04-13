import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import dynamic from "next/dynamic";
const Testimonial = dynamic(() => import("@/components/Testimonial/Testimonial"), {
  ssr: false,
  loading: () => <div className="min-h-[300px] flex items-center justify-center">Loading testimonials...</div>,
});
import { testimonials, aggregate } from "@/components/Testimonial/data";
import React from "react";

export const metadata = {
  title: "Testimonials | Student Alliance LLP – What Our Clients Say",
  description:
    "Read testimonials from schools and educators who have transformed their learning environment with Student Alliance LLP's STEM and robotics lab solutions.",
  keywords: [
    "student alliance testimonials",
    "student alliance reviews",
    "STEM lab reviews",
    "student alliance client feedback",
    "school robotics lab testimonial",
  ],
  alternates: { canonical: "https://studentalliancellp.com/testimonial" },
  openGraph: {
    title: "Testimonials | Student Alliance LLP",
    description:
      "See what schools and educators say about Student Alliance LLP's STEM and robotics solutions.",
    url: "https://studentalliancellp.com/testimonial",
    siteName: "Student Alliance LLP",
    images: [
      {
        url: "https://studentalliancellp.com/images/og-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Student Alliance Testimonials",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

const Page = () => {
  // Build JSON-LD for reviews (server-rendered)
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    mainEntity: {
      "@type": "ItemList",
      name: "Testimonials",
      itemListElement: testimonials.map((t, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Review",
          author: t.name,
          reviewBody: t.message,
          reviewRating: {
            "@type": "Rating",
            ratingValue: t.rating,
            bestRating: 5,
            worstRating: 1,
          },
        },
      })),
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: aggregate.ratingValue,
      reviewCount: aggregate.reviewCount,
    },
  };

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
      <Testimonial />
    </div>
  );
};

export default Page;
