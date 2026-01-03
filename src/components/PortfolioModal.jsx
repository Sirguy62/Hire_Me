"use client";

import Image from "next/image";
import { FaGithub } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa";
import Link from "next/link";

export default function PortfolioModal({ item, onClose }) {
  return (
    <div
      onClick={onClose}
      className="
        fixed inset-0 z-50
        flex items-center justify-center
        bg-black/60 backdrop-blur-sm
        animate-fadeIn
      "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="
          relative w-[90%] max-w-md
          rounded-2xl bg-[#201f1f]
          p-6 text-white
          animate-scaleIn
        "
      >
        <button
          onClick={onClose}
          className="absolute text-lg top-1 right-2 text-gray-400 hover:text-white"
        >
          ✕
        </button>
        <div>
          <Image src={item.image} alt="modal" width={700} height={600} className="rounded-md"/>
        </div>

        <div className="py-6">
          <h1 className="text-xl">{item.name}</h1>

          <h3 className="text-lg font-semibold mb-2 text-[#D4B15F]">
            {item.title}
          </h3>

          <p className="text-gray-400 text-md mb-4">{item.longDescription}</p>

          <div className="flex gap-2 flex-wrap">
            {item.stack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-md text-black bg-white rounded-full "
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-4">
          <Link
            href={item.link}
            className="flex justify-center bg-black py-3 w-full rounded-xl items-center text-lg gap-4"
          >
            Github
            <span>
              <FaGithub size={20} />
            </span>
          </Link>
          <Link
            href={item.app}
            className="flex justify-center bg-[#D4B15F] py-3 w-full rounded-xl items-center text-lg gap-4"
          >
            Preview
            <FaRegEye size={20} className="text-white text-3xl scale-90 group-hover:scale-100 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </div>
  );
}
