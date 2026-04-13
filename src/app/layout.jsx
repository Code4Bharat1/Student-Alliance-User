import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LayoutClientWrapper from "@/components/LayoutClientWrapper";
import Script from "next/script";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Global Metadata
export const metadata = {
  metadataBase: new URL("https://studentalliancellp.com/"),
  title: "Student Alliance | Best STEM & Robotics Lab Solutions in India",
  description:
    "Student Alliance LLP is India's leading provider of innovative educational lab solutions. We design and deliver cutting-edge STEM and robotics labs that spark curiosity, creativity, and future-ready learning.",
  keywords: [
    "student alliance",
    "student alliance llp",
    "STEM labs India",
    "robotics lab for schools",
    "educational lab solutions",
    "best STEM lab provider India",
    "school robotics lab",
    "student alliance franchise",
    "STEM education India",
    "robotics for students",
    "innovation lab for schools",
    "student alliance kits",
    "student alliance products",
    "education technology India",
    "STEM kits India",
    "robotics kits for schools",
    "3D printer for schools",
    "student alliance blog",
    "student alliance contact",
    "student alliance about",
  ],
  authors: [{ name: "Student Alliance LLP" }],
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  alternates: { canonical: "https://studentalliancellp.com/" },
  openGraph: {
    title: "Student Alliance | Best STEM & Robotics Lab Solutions in India",
    description:
      "Student Alliance LLP designs and delivers cutting-edge STEM and robotics labs for schools across India.",
    type: "website",
    url: "https://studentalliancellp.com/",
    siteName: "Student Alliance LLP",
    locale: "en_IN",
    images: [
      {
        url: "https://studentalliancellp.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Student Alliance LLP - STEM & Robotics Lab Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Student Alliance | STEM & Robotics Lab Solutions in India",
    description:
      "We design and deliver cutting-edge STEM and robotics labs that spark curiosity, creativity, and future-ready learning.",
    images: ["https://studentalliancellp.com/images/logo.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#2a1b8f" />

        {/* Structured Data (JSON-LD) - Organization Schema */}
        <Script
          id="schema-org"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Student Alliance LLP",
            url: "https://studentalliancellp.com",
            logo: "https://studentalliancellp.com/images/logo.jpg",
            description:
              "Student Alliance LLP is India's leading provider of innovative STEM and robotics lab solutions for schools.",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91-9022477293",
              contactType: "Customer Support",
            },
            sameAs: [
              "https://www.facebook.com/studentalliancellp/",
              "https://www.instagram.com/studentalliance/#",
            ],
          })}
        </Script>
      </head>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GoogleAnalytics />
        <LayoutClientWrapper>{children}</LayoutClientWrapper>
      </body>
    </html>
  );
}
