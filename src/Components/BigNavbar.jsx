import React from "react";
import Logo from "./Logo";
import { FaBars } from "react-icons/fa6";

function BigNavbar({ showSidebar }) {
  return (
    <div className="h-[65px] bg-transparen bg-black text-white flex items-center justify-between px-4 fixed top-0 right-0 left-0 z-100">
      <Logo />

      <button
        className="md:hidden text-2xl cursor-pointer"
        onClick={showSidebar}
      >
        <FaBars />
      </button>

      <ul className="hidden md:flex gap-10 translate-x-[-25%] font-medium text-lg">
        <a href="#hero">
          <li>Home</li>
        </a>

        <a href="#about">
          <li>About Us</li>
        </a>

        <a href="#services">
          <li>Services</li>
        </a>

        <a href="#contact">
          <li>Contact</li>
        </a>
      </ul>
    </div>
  );
}

export default BigNavbar;
