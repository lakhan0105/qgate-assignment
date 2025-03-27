import React from "react";

import { servicesData } from "../utils/utils";
import { Link } from "react-router";

function ServiesGrid() {
  return (
    <section
      className="pt-8 pb-16 text-white px-10 max-w-[1180px] mx-auto"
      id="services"
    >
      <h2 className="text-3xl mt-8 mb-3 text-cente">Our Work</h2>
      <h3 className="text-xl mb-12">
        Building the Future, One Project at a Time
      </h3>

      <div className="flex flex-col gap-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-16 ">
        {servicesData?.map((data, index) => {
          const { id, img, title, shortDescription } = data;

          return (
            <Link to={`/services/${id}`}>
              <article
                className="w-full md:w-[350px] border border-white/20 overflow-hidden rounded hover:scale-105 cursor-pointer"
                key={index}
              >
                <div className="w-full h-[220px] overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src={img}
                    alt={title}
                  />
                </div>

                <div className="mt-2 text-white/80 pb-5 pt-2 px-2">
                  <h3 className="text-lg font-medium">{title}</h3>
                  <p className="text-sm mt-1  mb-4 max-w-[350px]">
                    {shortDescription}
                  </p>

                  <button className="border border-white/40  hover:bg-white/80 hover:text-black cursor-pointer text-xs px-4 py-1 rounded ">
                    learn more
                  </button>
                </div>
              </article>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default ServiesGrid;
