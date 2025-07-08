"use client";
import Navbar from "@/components/Navbar";
import WhatsAppWidget from "@/components/WhatsApp/WhatApp";
import Footer from "@/components/Footer";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { Toaster } from "react-hot-toast";

export default function LayoutClientWrapper({ children }) {
  return (
    <>
      <Provider store={store}>
        <Toaster />
        <Navbar />
        {children}
        <WhatsAppWidget />
        <Footer />
      </Provider>
    </>
  );
}
