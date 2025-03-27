import React from "react";

import Stats from "../Components/Stats";
import { About, Contact, Footer, Hero, ServiesGrid } from "../Components";

function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <Hero />

      {/* STATS SECTION */}
      <Stats />

      {/* ABOUT US SECTION */}
      <About />

      {/* SERVICES LIST (OUR WORK) */}
      <ServiesGrid />

      {/* CONTACT */}
      <Contact />

      {/* FOOTER */}
      <Footer />
    </>
  );
}

export default Home;
