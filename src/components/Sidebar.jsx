"use client";

import { useEffect, useRef, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import {
  RiMailLine,
  RiPhoneLine,
  RiCalendarLine,
  RiMapPinLine,
} from "react-icons/ri";
import { FaGithub } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";
import Image from "next/image";
import { MdOutlineCloudDownload } from "react-icons/md";
import Link from "next/link";

const CONTACTS = [
  {
    label: "EMAIL",
    value: "gospele62@gmail.com",
    icon: RiMailLine,
  },
  {
    label: "PHONE",
    value: "+234 810 860 4226",
    icon: RiPhoneLine,
  },
  {
    label: "BIRTHDAY",
    value: "April 15, 199-",
    icon: RiCalendarLine,
  },
  {
    label: "LOCATION",
    value: "Abuja, Nigeria",
    icon: RiMapPinLine,
  },
];

export default function Sidebar() {
  const [showContacts, setShowContacts] = useState(false);
  const sidebarRef = useRef(null);

  /* CLICK OUTSIDE TO CLOSE */
  useEffect(() => {
    function handleClickOutside(e) {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setShowContacts(false);
      }
    }

    if (showContacts) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showContacts]);

  return (
    <aside
      ref={sidebarRef}
      className="relative w-full bg-[#201f1f] rounded-2xl lg:sticky  px-2 pt-2 lg:p-6 max-w-174.5 lg:w-70"
    >
      {/* ICON TOGGLE BUTTON */}
      <button
        onClick={() => setShowContacts(!showContacts)}
        aria-label="Toggle contacts"
        className="
    lg:hidden
    absolute
    top-0
    right-0
    w-auto
    h-10
    flex
    items-center
    justify-center
    text-orange-400
    z-10
    backdrop-blur-md
    bg-black/30
    p-2
    before:content-['']
    before:absolute
    before:-inset-px
    before:rounded-bl-xl
    before:rounded-tr-xl
    before:bg-gradient-to-r
    before:from-orange-400/40
    before:to-orange-600/40
    before:-z-10
  "
      >
        {/* ICON — ONLY on sm */}
        <RiArrowDropDownLine
          className={`block sm:hidden text-xl transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
            showContacts ? "rotate-180" : ""
          }`}
        />

        {/* TEXT — above sm */}
        <span className="hidden sm:block text-sm">
          {showContacts ? "Hide Contacts" : "Show Contacts"}
        </span>
      </button>

      {/* PROFILE */}
      <div className="flex items-center gap-4 lg:flex-col lg:text-center">
        <div className="md:mr-3">
          <Image
            className="rounded-md"
            src="/image/profile.jpg"
            alt="profile"
            width={80}
            height={30}
          />
        </div>

        <div>
          <div className="flex flex-col lg:gap-3">
            <h2 className="text-xl md:text-2xl font-semibold">Edwin Gospel</h2>
            <span className="text-sm md:text-md w-42 bg-[#222] px-3 py-1 rounded-full">
              Frontend Engineer
            </span>
          </div>
          <div className="flex gap-3 lg:mt-2 lg:justify-center">
            <button className="bg-gradient-to-r from-orange-400/40 to-orange-500/40 p-2 md:px-4 md:py-2 rounded-lg text-sm">
              Hire me
            </button>
            <button
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-orange-400/40 to-orange-500/40 px-4 py-2 rounded-lg text-sm"
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/resume.pdf";
                link.download = "Edwin-Gospel-Resume.pdf";
                link.click();
              }}
            >
              CV
              <span>
                <MdOutlineCloudDownload />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* CONTACTS (SLIDE-DOWN ANIMATION) */}
      {/* CONTACTS (ANIMATED SLIDE-DOWN) */}
      <div
        className={`
    overflow-hidden
    border-t
    border-gray-700
    mt-4
    text-sm
    p-2
    text-gray-400

    transition-[max-height,opacity,transform]
    duration-600
    ease-[cubic-bezier(0.4,0,0.2,1)]

    ${
      showContacts
        ? "max-h-[500px] opacity-100 translate-y-0 pt-4"
        : "max-h-0 opacity-0 -translate-y-2 pt-0"
    }

    lg:max-h-none
    lg:opacity-100
    lg:translate-y-0
    lg:pt-4
  `}
      >
        <ul className="space-y-4">
          {CONTACTS.map(({ label, value, icon: Icon }, i) => (
            <li
              key={label}
              className={`
          flex items-center gap-4
          transition-all
          duration-400
          delay-[${i * 75}ms]
          ${
            showContacts
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-2"
          }
          lg:opacity-100 lg:translate-x-0
        `}
            >
              {/* Icon box */}
              <div className="w-8 h-8 flex items-center justify-center rounded-xl bg-[#1d1d1d] text-orange-400 ring-1 ring-orange-400/40">
                <Icon size={15} />
              </div>

              {/* Text */}
              <div>
                <p className="text-xs uppercase text-gray-500">{label}</p>
                <p className="text-white">{value}</p>
              </div>
            </li>
          ))}
        </ul>

        <div
          className={`
      flex border-t border-gray-700 p-3 gap-3 mt-4
      transition-all duration-300
      ${showContacts ? "opacity-100" : "opacity-0"}
      lg:opacity-100
    `}
        >
          <Link href="https://github.com/Sirguy62">
            <FaGithub size={15} />
          </Link>

          <BsTwitterX size={15} />
          <FaLinkedin size={15} />
        </div>
      </div>
    </aside>
  );
}
