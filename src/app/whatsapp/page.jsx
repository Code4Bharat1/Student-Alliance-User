import React from 'react';
import WhatsAppWidget from "@/components/WhatsApp/WhatApp";

export default function Layout({ children }) {
  return (
    <>
      {children}
      <WhatsAppWidget/>
    </>
  );
}
