import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import Service from "@/components/Service";
import ShopByCat from "@/components/Shopby/ShopByCat";
import Brand from "@/components/Brand/Brand";

// Lazy load below-the-fold components
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
