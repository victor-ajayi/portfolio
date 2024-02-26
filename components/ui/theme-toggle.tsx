"use client";

import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "./icons";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import clsx from "clsx";
import { useState } from "react";

export function ThemeToggle({ className }: { className?: string }) {
  const [selected, setSelected] = useState("system");
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className={className}>
          <SunIcon className="h-[1.2rem] w-[1.2rem] block dark:hidden transition-all" />
          <MoonIcon className="h-[1.2rem] w-[1.2rem] transition-all hidden dark:block" />
          <span className="sr-only">Toggle theme</span>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg rounded-[10px]" align="end">
        <DropdownMenuItem
          className={clsx(
            "cursor-pointer hover:bg-gray-100 dark:hover:bg-[#212123] rounded-md",
            { "text-primary": selected === "light" }
          )}
          onClick={() => {
            setSelected("light");
            setTheme("light");
          }}
        >
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          className={clsx(
            "cursor-pointer hover:bg-gray-100 dark:hover:bg-[#212123] rounded-md",
            { "text-primary": selected === "dark" }
          )}
          onClick={() => {
            setSelected("dark");
            setTheme("dark");
          }}
        >
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          className={clsx(
            "cursor-pointer hover:bg-gray-100 dark:hover:bg-[#212123] rounded-md",
            { "text-primary": selected === "system" }
          )}
          onClick={() => {
            setSelected("system");
            setTheme("system");
          }}
        >
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
