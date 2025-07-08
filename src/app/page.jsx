"use client"

import Blog from '@/components/blog/Blog1';
import Brand from '@/components/Brand/Brand';
import Categories from '@/components/Franchise/Category';
import WhyChoose from '@/components/Franchise/Choose';
import Features from '@/components/Franchise/Features';
import Hero from '@/components/Hero';
import Highlight from '@/components/Highlight';
import Service from '@/components/Service';
import ShopByCat from '@/components/Shopby/ShopByCat';
import Testimonial from '@/components/Testimonial/Testimonial';
import React from 'react';

const HomePage = () => {
  return (
    <>
    {/* this is page.jsx */}
    
    <Hero/>
  
    <Service/>
    <ShopByCat/>
    <Brand/>
    <WhyChoose/>
    <Categories/>
    <Features/>
    <Blog/>
    <Highlight/>
    <Testimonial/>
    
    </>
  );
};

export default HomePage;
