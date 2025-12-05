"use client";

import Link from "next/link";
import { ThemeToggle } from "./ui/theme-toggle";

const options: Intl.DateTimeFormatOptions = {
  hour: "2-digit",
  minute: "2-digit",
  timeZone: "Europe/Moscow",
};

export default function NavBar() {
  return (
    <nav className="card flex items-center w-full mb-6 h-fit">
      <Link href={"/"} className="text-sm xs:text-base mr-auto cursor-pointer">
        Victor Ajayi
      </Link>
      <div className="flex items-center">
        <ThemeToggle className="cursor-pointer hover:bg-gray-100 dark:hover:bg-[#272729] rounded-lg px-2 py-[6px]" />
        <hr className="mx-1 border-l h-[20px]" />
      </div>
      <div className="hidden xs:flex items-center px-1 py-[6px] text-sm text-secondary">
        <svg
          width="15"
          height="15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="inline-block"
        >
          <circle cx="7.5" cy="7.5" r="5" stroke="currentColor" />
          <path
            d="M7.5 4v3.086a1 1 0 0 0 .293.707L9.5 9.5"
            stroke="currentColor"
          />
        </svg>
        <span className="text-center w-fit pl-2">GMT+3</span>
      </div>
    </nav>
  );
}
