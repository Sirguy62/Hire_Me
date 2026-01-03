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
      <div
        className=" lg:grid
      lg:grid-cols-[280px_1fr]
      lg:max-w-[1200px]
      w-full"
      >
        <div
          className="
         flex justify-center
            lg:block
            lg:sticky
            lg:top-6
            lg:h-[calc(100vh-3rem)]
        "
        >
          <Sidebar />
        </div>

        <main
          className="
          relative
          flex
          justify-center
          items-start
          py-4
          lg:p-6
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
      </div>

      <MobileFooter activePage={activePage} setActivePage={setActivePage} />
    </div>
  );
}
