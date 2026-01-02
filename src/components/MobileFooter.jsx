"use client";

import {
  RiUser3Line,
  RiFileList2Line,
  RiBriefcaseLine,
  RiMailLine,
} from "react-icons/ri";

const NAV_ITEMS = [
  { label: "About", icon: RiUser3Line },
  { label: "Resume", icon: RiFileList2Line },
  { label: "Portfolio", icon: RiBriefcaseLine },
  { label: "Contact", icon: RiMailLine },
];

export default function MobileFooter({ activePage, setActivePage }) {
  return (
    <nav
      className="
        lg:hidden
        fixed
        bottom-0
        left-0
        right-0
        z-50
        bg-[#161616]/90
        backdrop-blur-md
        border-t
        border-gray-800
      "
    >
      <ul className="flex justify-center items-center gap-10 py-2">
        {NAV_ITEMS.map(({ label, icon: Icon }) => {
          const isActive = activePage === label;

          return (
            <li key={label}>
              <button
                onClick={() => setActivePage(label)}
                className="
                  flex
                  flex-col
                  items-center
                  justify-center
                  text-xs
                  transition
                "
              >
                {/* ICON */}
                <div
                  className={`
                    w-12 h-12
                    flex items-center justify-center
                    rounded-xl
                    transition-all
                    ${
                      isActive
                        ? "bg-gradient-to-r from-orange-400/30 to-orange-500/30 text-orange-400 scale-105"
                        : "text-gray-400"
                    }
                  `}
                >
                  <Icon size={18} />
                </div>

                {/* LABEL */}
                <span
                  className={`mt-1 ${
                    isActive ? "text-orange-400" : "text-gray-400"
                  }`}
                >
                  {label}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
