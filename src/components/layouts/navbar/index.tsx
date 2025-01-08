import React from "react";
import SearchBox from "@/components/element/SearchBox";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-10 w-full bg-slate-500">
      <nav className="container flex items-center justify-between py-4 bg-amber-100">
        <h1 className="bg-red-300">Cinestream.</h1>
        <div className="bg-red-400 flex space-x-4">
          <SearchBox />
          <div>logo theme</div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
