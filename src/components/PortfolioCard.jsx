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
      flex flex-col items-left justify-center shadow-gray-400/40  rounded-lg
        bg-gray-700/40 overflow-hidden w-[300px]
      "
    >
      <Link className="" href="https://bookora-mu.vercel.app">
        <Image
          src={item.image}
          alt={item.title}
          width={300}
          height={400}
          className="rounded-lg"
        />
      </Link>
      <div className="py-5">
        <h3 className="px-3 pt-1 text-lg">{item.title}</h3>
        <p className="px-3 text-sm  text-gray-300/40">{item.description}</p>
      </div>

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

