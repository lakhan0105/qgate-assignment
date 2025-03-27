import React from "react";
import Logo from "./Logo";
import { FaXmark } from "react-icons/fa6";

function Sidebar({ hideSidebar }) {
  return (
    <section className="bg-white w-full fixed top-0 bottom-0 z-100">
      {/* header  */}
      <nav className="flex justify-between px-4 py-4 border-b border-black/20">
        <Logo />

        <button className="text-2xl cursor-pointer" onClick={hideSidebar}>
          <FaXmark />
        </button>
      </nav>

      {/* links */}
      <div className=" flex flex-col w-full">
        <button
          className="cursor-pointer text-start px-4 py-3 hover:bg-black/10"
          onClick={() => {
            document
              .getElementById("hero")
              .scrollIntoView({ behavior: "smooth" });

            hideSidebar();
          }}
        >
          Home
        </button>

        <button
          className="cursor-pointer text-start px-4 py-3 hover:bg-black/10"
          onClick={() => {
            document
              .getElementById("about")
              .scrollIntoView({ behavior: "smooth" });
            hideSidebar();
          }}
        >
          About Us
        </button>

        <button
          className="cursor-pointer text-start px-4 py-3 hover:bg-black/10"
          onClick={() => {
            document
              .getElementById("services")
              .scrollIntoView({ behavior: "smooth" });
            hideSidebar();
          }}
        >
          Services
        </button>

        <button
          className="cursor-pointer text-start px-4 py-3 hover:bg-black/10"
          onClick={() => {
            document
              .getElementById("contact")
              .scrollIntoView({ behavior: "smooth" });
            hideSidebar();
          }}
        >
          Contact
        </button>
      </div>
    </section>
  );
}

export default Sidebar;
