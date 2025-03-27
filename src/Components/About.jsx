import React from "react";
import aboutUs from "../assets/about-us.jpg";
import { Link } from "react-router";

function About() {
  return (
    <section
      id="about"
      className="pt-18 pb-16 text-white px-10 max-w-[1180px] mx-auto "
    >
      <div className="flex flex-col-reverse items-center md:flex-row-reverse justify-center gap-12">
        <div className="w-full md:max-w-[600px] text-white/85">
          <h2 className="text-3xl mb-2.5">What we do</h2>

          <p className="text-base font-light leading-loose">
            At QGate, we merge engineering brilliance with cutting-edge
            technology to redefine access control. By prioritizing innovation
            and precision, we deliver reliable, scalable, and smart solutions
            that empower seamless security across industries.
          </p>

          <Link to={"/about"}>
            <button className="mt-4 text-sm border border-white/40 hover:bg-white/80 hover:text-black rounded-2xl px-4 py-1 cursor-pointer">
              about us
            </button>
          </Link>
        </div>

        <div className="w-[450px] h-[300px] overflow-hidden rounded-md">
          <img
            className="w-full h-full object-cover"
            src={aboutUs}
            alt="about us"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
