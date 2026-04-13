export const metadata = {
  robots: { index: false, follow: false },
};

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
