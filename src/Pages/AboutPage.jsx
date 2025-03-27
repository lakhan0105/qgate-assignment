import React from "react";
import aboutUs from "../assets/about-us.jpg";
import { Stats } from "../Components";

function AboutPage() {
  return (
    <section className=" mx-auto pt-[65px]">
      <div className="flex flex-col-reverse px-4 md:px-0 md:flex-row-reverse justify-center gap-12 mt-18 mb-18">
        <div className="max-w-[600px] text-white/85">
          <h2 className="text-3xl mb-2.5">About us</h2>

          <p className="text-base font-light leading-loose mb-5">
            At QGate, we merge engineering brilliance with cutting-edge
            technology to redefine access control. By prioritizing innovation
            and precision, we deliver reliable, scalable, and smart solutions
            that empower seamless security across industries.
          </p>

          <p className="text-base font-light leading-loose mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
            sequi. Ex nihil voluptatem laudantium tempora rerum, illum quia
            incidunt sequi. Rem, repudiandae, cum tenetur quas labore facere
            recusandae reiciendis alias culpa corrupti autem placeat ad
            exercitationem soluta iusto! Beatae ipsa possimus quam obcaecati
            sint a ratione facere nesciunt atque delectus!
          </p>

          <p className="text-base font-light leading-loose mb-5">
            By prioritizing innovation and precision, we deliver reliable,
            scalable, and smart solutions that empower seamless security across
            industries.
          </p>
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

export default AboutPage;
