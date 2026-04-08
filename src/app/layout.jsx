import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LayoutClientWrapper from "@/components/LayoutClientWrapper";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Student Alliance | Student Alliance LLP",
  description:
    "Student Alliance LLP is India’s leading provider of innovative educational lab solutions. We design and deliver cutting-edge STEM and robotics labs that spark curiosity, creativity, and future-ready learning.",
  keywords: [
    "student alliance",
    "student alliance llp",
    "education",
    "STEM",
    "robotics labs",
  ],
  authors: [{ name: "Student Alliance LLP" }],
  alternates: { canonical: "https://studentalliancellp.com/" },
  openGraph: {
    title: "Student Alliance | Student Alliance LLP",
    description:
      "Student Alliance LLP is India's leading provider of innovative educational lab solutions.",
    type: "website",
    url: "https://studentalliancellp.com/",
    images: [{ url: "https://studentalliancellp.com/images/og-banner.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Student Alliance | Student Alliance LLP",
    description:
      "We design and deliver cutting-edge STEM and robotics labs that spark curiosity, creativity, and future-ready learning.",
    images: ["https://studentalliancellp.com/images/og-banner.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Student Alliance LLP",
            "url": "https://studentalliancellp.com",
            "logo": "https://studentalliancellp.com/images/logo.jpg",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-9022477293",
              "contactType": "Customer Support"
            },
            "sameAs": [
              "https://www.facebook.com/studentalliancellp/",
              "https://www.instagram.com/studentalliance/#"
            ]
          }
        `,
          }}
        />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-L48FSWY2HB"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-L48FSWY2HB');
          `}
        </Script>
      </head>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LayoutClientWrapper>{children}</LayoutClientWrapper>
      </body>
    </html>
  );
}
