import React from "react";
import { useParams } from "react-router";
import { servicesData } from "../utils/utils";

function ServiceDetails() {
  const paramId = useParams().id;

  const findService = servicesData.find((service) => service.id === paramId);
  console.log(findService);

  const { id, img, shortDescription, description, title } = findService;

  return (
    <section className="text-white min-h-screen z-20 pt-[65p] px-">
      <div className=" max-w-[1120p] mx-auto relative">
        <div className="absolute left-0 right-0 top-0 bottom-0 bg-black/50"></div>

        <div className="w-full h-[300px] overflow-hidden rounded ">
          <img className="w-full h-full object-cover" src={img} alt={title} />
        </div>

        <h2 className="absolute top-[50%] left-[155px] text-5xl font-semibold text-white">
          Services
        </h2>
      </div>

      <div className="mt-6 max-w-[1120px] mx-auto px-2 md:px-0">
        <h3 className="text-2xl font-medium">{title}</h3>
        <p className="mt-1">{shortDescription}</p>

        <p className="mt-6 leading-7">{description}</p>
      </div>
    </section>
  );
}

export default ServiceDetails;
