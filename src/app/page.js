"use client";

import { useState } from "react";
import MobileFooter from "@/components/MobileFooter";
import About from "@/components/About";
import Resume from "@/components/Resume";
import Portfolio from "@/components/Portfolio";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";

export default function Page() {
  const [activePage, setActivePage] = useState("About");

  return (
    <div className="p-2 flex flex-col lg:flex-row justify-center">
      {/* SIDEBAR */}
      <div
        className="
          flex justify-center
          lg:fixed
          lg:top-8
          lg:left-6
          lg:w-[320px]
          lg:h-[65vh]
        "
      >
        <Sidebar />
      </div>

      {/* MAIN CONTENT */}
      <main
        className="
          relative
          flex
          justify-center
          items-start
          py-4
          lg:p-6
          lg:ml-[300px]
        "
      >
        {/* DESKTOP NAVBAR */}
        <div className="hidden lg:block absolute top-6 right-6 z-20">
          <Navbar activePage={activePage} setActivePage={setActivePage} />
        </div>

        {/* PAGE CONTENT */}
        {activePage === "About" && <About />}
        {activePage === "Resume" && <Resume />}
        {activePage === "Portfolio" && <Portfolio />}
        {activePage === "Contact" && <Contact />}
      </main>

      {/* MOBILE FOOTER */}
      <MobileFooter activePage={activePage} setActivePage={setActivePage} />
    </div>
  );
}
