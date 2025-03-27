import React from "react";
import vid from "../assets/landing-vid.mp4";
import { IoArrowDownCircleOutline } from "react-icons/io5";

function Hero() {
  return (
    <section id="hero" className="t-[65px] h-screen">
      {/* video container */}
      <div className="w-full h-full overflow-hidden relative">
        <div className="absolute top-0 right-0 bottom-0 left-0 bg-black/60 z-80"></div>

        <video
          className="w-full h-full object-cover z-40"
          src={vid}
          muted
          loop
          autoPlay
        ></video>

        {/* hero heading */}

        <h2 className="w-full text-center text-white text-4xl md:text-5xl font-medium leading-[1.4] z-80 absolute left-[50%] top-[40%] translate-x-[-50%]">
          Your Gateway <br />
          to Smarter Security.
        </h2>

        <button
          className="z-80 text-white text-4xl mt-32 font-light cursor-pointer absolute left-[50%] bottom-[5%] translate-x-[-50%]"
          onClick={() => {
            document
              .getElementById("about")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          <span>
            <IoArrowDownCircleOutline />
          </span>
        </button>
      </div>
    </section>
  );
}

export default Hero;
