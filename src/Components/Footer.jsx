import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-white py-6 px-4 border-t border-white/10">
      <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
        <p>&copy; {new Date().getFullYear()} Company. All rights reserved.</p>

        <div className="flex gap-4">
          <a
            href="#about"
            className="hover:text-white transition-colors duration-200"
          >
            About
          </a>
          <a
            href="#services"
            className="hover:text-white transition-colors duration-200"
          >
            Services
          </a>
          <a
            href="#contact"
            className="hover:text-white transition-colors duration-200"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
