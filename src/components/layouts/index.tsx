import React from "react";

import { Toaster } from "@/components/ui/toaster";
import Navbar from "./navbar";
import Footer from "./footer";

interface LayoutsProps {
  children: React.ReactNode;
}

const Layouts = ({ children }: LayoutsProps) => {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-col justify-center w-full min-h-screen overflow-auto">
        <Navbar />
        <main className="flex-1 w-full transition-all duration-300 no-scrollbar scroll-smooth bg-slate-400">
          {children}
        </main>
        <Footer />
        <Toaster />
      </div>
    </div>
  );
};

export default Layouts;
