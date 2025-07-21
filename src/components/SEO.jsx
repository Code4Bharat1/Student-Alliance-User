import Head from "next/head";
import React from "react";

export default function SEO({
  title = "Student Alliance – Empowering Students Together",
  description = "Student Alliance is a platform dedicated to empowering students through collaboration, resources, and community support.",
  keywords = "students, alliance, student alliance, student alliance llp, student, study, education, community, collaboration, resources",
  url = "https://studentalliancellp.com/",
  image = "https://studentalliancellp.com/images/og-image.jpg",
  siteName = "Student Alliance",
  author = "Student Alliance Team",
  type = "website",
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={url} />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="theme-color" content="#ffffff" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Favicon & Apple Touch Icon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    </Head>
  );
}