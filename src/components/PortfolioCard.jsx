"use client";

import Image from "next/image";
import { FaRegEye } from "react-icons/fa";
import Link from "next/link";

export default function PortfolioCard({ item, onOpen }) {
  return (
    <div
      onClick={onOpen}
      className="
        group relative cursor-pointer
      flex flex-col items-left justify-center shadow-gray-400/40 shadow-lg rounded-2xl
        bg-gray-700/40 overflow-hidden
      "
    >
      <Link className="rounded-lg" href="https://bookora-mu.vercel.app">
        <Image src={item.image} alt={item.title} width={300} height={400} />
      </Link>

      <h3 className="px-3 pt-1 text-lg">{item.title}</h3>
      <p className="px-3 text-gray-300/40">{item.description}</p>

      {/* Hover overlay */}
      <div
        className="
          absolute inset-0
          flex items-center justify-center
          bg-black/60
          opacity-0 group-hover:opacity-100
          transition-all duration-300
        "
      >
        <FaRegEye className="text-white text-3xl scale-90 group-hover:scale-100 transition-transform duration-300" />
      </div>
    </div>
  );
}
{/* <div className="flex flex-col items-left justify-center shadow-gray-400/40 shadow-lg rounded-2xl">
  <Link className="rounded-lg" href="https://bookora-mu.vercel.app">
    <Image src="/image/project.png" alt="project" width={300} height={400} />
  </Link>
  <h2 className="px-3 pt-1 text-lg">Bookora | Travel App</h2>
  <p className="px-3 text-gray-300/40">Web Development</p>
</div>; */}
