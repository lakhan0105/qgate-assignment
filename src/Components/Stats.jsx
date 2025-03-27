import React, { useEffect, useState } from "react";
import SectionHeading from "./SectionHeading";

const statsArray = [
  {
    labelNumber: 2500,
    description: "Access Control Systems Deployed",
  },
  {
    labelNumber: 80,
    description: "Smart Facility Projects Completed",
  },
  {
    labelNumber: 1,
    description: "in Automated Gate Technologies",
  },
];

function Stats() {
  const [counts, setCounts] = useState(statsArray.map(() => 0));

  useEffect(() => {
    const intervals = statsArray.map((stat, index) => {
      const inc = Math.ceil(stat.labelNumber / 200);

      return setInterval(() => {
        setCounts((prev) => {
          const updated = [...prev]; // like [0,1,2...]
          if (updated[index] < stat.labelNumber) {
            updated[index] = Math.min(updated[index] + inc, stat.labelNumber);
          }

          return updated;
        });
      }, 10);
    });

    return () => intervals.forEach((id) => clearInterval(id));
  }, []);

  return (
    <section className="pt-8 pb-16 text-black bg-white mx-auto border">
      <div className="px-4 md:px-10 max-w-[1180px] mx-auto ">
        <SectionHeading heading={"Trusted Tech Partner Worldwide"} />

        <div className="flex justify-center items-center gap-14">
          {statsArray?.map((stat, index) => {
            return (
              <div key={index} className="text-center">
                <span className="text-2xl md:text-4xl font-semibold block mb-2">
                  {counts[index]}+
                </span>

                <p className="text-xs md:text-sm ">{stat.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Stats;
