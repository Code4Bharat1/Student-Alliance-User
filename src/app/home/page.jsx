"use client"

import Blog from '@/components/blog/Blog1'
import Brand from '@/components/Brand/Brand'
import Footer from '@/components/Footer'
import Categories from '@/components/Franchise/Category'
import WhyChoose from '@/components/Franchise/Choose'
import Features from '@/components/Franchise/Features'
import Hero from '@/components/Hero'
import Highlight from '@/components/Highlight'
import Navbar from '@/components/Navbar'
import Service from '@/components/Service'
import ShopByCat from '@/components/Shopby/ShopByCat'
import Testimonial from '@/components/Testimonial/Testimonial'
import WhatsAppWidget from '@/components/WhatsApp/WhatApp'
import React from 'react'

const Page = () => {
  return (
    <div>
      
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
     
    </div>
  )
}

export default Page
