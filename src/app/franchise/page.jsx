import Footer from '@/components/Footer'
import Categories from '@/components/Franchise/Category'
import WhyChoose from '@/components/Franchise/Choose'
import Features from '@/components/Franchise/Features'
import Franchise from '@/components/Franchise/Franchise'
import Navbar from '@/components/Navbar'
import React from 'react'

const Page = () => {
  return (
    <div>
     
      <Franchise/>
      <WhyChoose/>
      <Categories/>
      <Features/>
     
    </div>
  )
}

export default Page
