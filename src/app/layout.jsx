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
  description: "Student Alliance LLP is India’s leading provider of innovative educational lab solutions. We design and deliver cutting-edge STEM and robotics labs that spark curiosity, creativity, and future-ready learning.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Primary Meta Tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Student Alliance LLP is India’s leading provider of innovative educational lab solutions. We design and deliver cutting-edge STEM and robotics labs that spark curiosity, creativity, and future-ready learning." />
        <meta name="keywords" content="student alliance, student alliance llp, student, education, education website, Student Alliance LLP" />
        <meta name="author" content="Student Alliance LLP" />
        <link rel="canonical" href="https://studentalliancellp.com/" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Student Alliance | Student Alliance LLP" />
        <meta property="og:description" content="Student Alliance LLP is India’s leading provider of innovative educational lab solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://studentalliancellp.com/" />
        <meta property="og:image" content="https://studentalliancellp.com/images/og-banner.jpg" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Student Alliance | Student Alliance LLP" />
        <meta name="twitter:description" content="We design and deliver cutting-edge STEM and robotics labs that spark curiosity, creativity, and future-ready learning." />
        <meta name="twitter:image" content="https://studentalliancellp.com/images/og-banner.jpg" />

       {/* Structured Data (JSON-LD) */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
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
        ` }} />

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LayoutClientWrapper>{children}</LayoutClientWrapper>
      </body>
    </html>
  );
}
