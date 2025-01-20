"use client";

import React, { useEffect } from "react";
import AOS from "aos";

import Navbar from "./navbar";
import Footer from "./footer";
import { Toaster } from "@/components/ui/toaster";

import "aos/dist/aos.css";

interface LayoutsProps {
  children: React.ReactNode;
}

export default function Layouts({ children }: LayoutsProps) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 50,
    });
  }, []);

  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-col justify-center w-full min-h-screen overflow-auto">
        <Navbar />
        <main className="flex-1 w-full transition-all duration-300 no-scrollbar scroll-smooth">
          {children}
        </main>
        <Footer />
        <Toaster />
      </div>
    </div>
  );
}
