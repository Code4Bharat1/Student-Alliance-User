import dynamic from "next/dynamic";
import Hero from "@/components/Hero";

export const metadata = {
  title: "Student Alliance | STEM & Robotics Labs for Schools in India",
  description:
    "Explore Student Alliance LLP – India's trusted provider of STEM, robotics, and innovation labs for schools. Shop kits, explore franchise opportunities, and empower future-ready learning.",
  keywords: [
    "student alliance",
    "student alliance llp",
    "STEM lab for schools",
    "robotics lab India",
    "school innovation lab",
    "student alliance kits",
    "student alliance shop",
    "STEM education India",
    "student alliance franchise",
    "best STEM lab provider",
    "robotics kits for students",
    "3D printing for schools",
  ],
  alternates: { canonical: "https://studentalliancellp.com/" },
  openGraph: {
    title: "Student Alliance | STEM & Robotics Labs for Schools in India",
    description:
      "Shop STEM kits, explore franchise opportunities, and set up world-class innovation labs with Student Alliance LLP.",
    url: "https://studentalliancellp.com/",
    siteName: "Student Alliance LLP",
    images: [
      {
        url: "https://studentalliancellp.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Student Alliance LLP - STEM & Robotics Lab Solutions",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

// Lazy load below-the-fold components
const Service = dynamic(() => import("@/components/Service"));
const ShopByCat = dynamic(() => import("@/components/Shopby/ShopByCat"));
const Brand = dynamic(() => import("@/components/Brand/Brand"));
const WhyChoose = dynamic(() => import("@/components/Franchise/Choose"));
const Categories = dynamic(() => import("@/components/Franchise/Category"));
const Features = dynamic(() => import("@/components/Franchise/Features"));
const Blog = dynamic(() => import("@/components/blog/Blog1"));
const Highlight = dynamic(() => import("@/components/Highlight"));
const Testimonial = dynamic(
  () => import("@/components/Testimonial/Testimonial"),
);

const HomePage = () => {
  return (
    <>
      <Hero />
      <Service />
      <ShopByCat />
      <Brand />
      <WhyChoose />
      <Categories />
      <Features />
      <Blog />
      <Highlight />
      <Testimonial />
    </>
  );
};

export default HomePage;
