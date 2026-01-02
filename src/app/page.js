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
    <div className="p-2  lg:w-full lg:gap-5 flex flex-col lg:flex-row justify-center ">
      <div className="flex justify-center items-center lg:items-start lg:p-6">
        <Sidebar />
      </div>

      <main className="flex justify-center relative items-center lg:items-start py-4 lg:p-6">
        {activePage === "About" && <About />}
        {activePage === "Resume" && <Resume />}
        {activePage === "Portfolio" && <Portfolio />}
        {activePage === "Contact" && <Contact />}
      </main>
      <div className="hidden lg:block absolute top-4 right-4 z-20">
        <Navbar activePage={activePage} setActivePage={setActivePage} />
      </div>

      <MobileFooter activePage={activePage} setActivePage={setActivePage} />
    </div>
  );
}
