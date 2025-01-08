"use client";

import React, { useState } from "react";
import SearchBox from "@/components/element/SearchBox";
import { MoonIcon, SunIcon } from "lucide-react";

const Navbar = () => {
  const [theme, setTheme] = useState("light");

  function handleTheme() {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  }

  return (
    <header className="sticky top-0 z-10 w-full bg-black/50 backdrop-blur-sm">
      <nav className="container flex justify-between items-center py-4">
        <h1 className="text-2xl font-semibold tracking-widest text-white">
          Cinestream.
        </h1>
        <div className="flex space-x-4 justify-center items-center">
          <SearchBox />
          <div
            onClick={() => handleTheme()}
            className="bg-transparent rounded-md cursor-pointer text-slate-300"
          >
            {theme == "light" ? (
              <SunIcon className="border border-slate-300 h-[40px] w-[40px] p-2 rounded-md shadow-md" />
            ) : (
              <MoonIcon className="border border-slate-300 h-[40px] w-[40px] p-2 rounded-md shadow-md" />
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
