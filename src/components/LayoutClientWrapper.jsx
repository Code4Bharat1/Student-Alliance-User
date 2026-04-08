"use client";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { Toaster } from "react-hot-toast";

const WhatsAppWidget = dynamic(() => import("@/components/WhatsApp/WhatApp"), {
  ssr: false,
});

export default function LayoutClientWrapper({ children }) {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Toaster
          toastOptions={{
            style: {
              background: "var(--bg-card)",
              color: "var(--text-primary)",
              border: "1px solid var(--border-primary)",
            },
          }}
        />
        <Navbar />
        <main className="pt-[70px]">{children}</main>
        <WhatsAppWidget />
        <Footer />
      </ThemeProvider>
    </Provider>
  );
}
