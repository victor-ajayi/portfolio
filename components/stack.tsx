"use client";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { SiPydantic } from "react-icons/si";
import {
  DjangoIcon,
  DockerIcon,
  FastIcon,
  PostgresIcon,
  PythonIcon,
} from "./ui/icons";

interface StackItemProps {
  title: string;
  icon: React.ReactNode;
}

function StackItem({ title, icon }: StackItemProps) {
  return (
    <HoverCard openDelay={200} closeDelay={200}>
      <HoverCardTrigger asChild>
        <div className="cursor-pointer">{icon}</div>
      </HoverCardTrigger>
      <HoverCardContent className="w-auto p-3 py-2">
        <h3 className="font-medium text-[12px]">{title}</h3>
      </HoverCardContent>
    </HoverCard>
  );
}

export default function Stack() {
  return (
    <section className="card col-span-2 flex flex-wrap py-4 px-3 justify-evenly align-middle text-indigo-950/80 md:py-[10px] md:gap-4 md:gap-x-4 rounded-2xl border transition-all duration-300 ease-in-out md:w-full md:h-full">
      <StackItem
        title="Python"
        icon={<PythonIcon size={30} className="mx-auto" />}
      />
      <StackItem
        title="Django"
        icon={
          <DjangoIcon
            size={32}
            className="mx-auto text-[#092E20] dark:text-white"
          />
        }
      />
      <StackItem
        title="FastAPI"
        icon={<FastIcon size={30} className="mx-auto" />}
      />
      <StackItem
        title="Docker"
        icon={<DockerIcon size={30} className="mx-auto" />}
      />
      <StackItem
        title="Pydantic"
        icon={<SiPydantic size={28} className="mx-auto" color="#CD3962" />}
      />
      <StackItem
        title="PostgreSQL"
        icon={<PostgresIcon size={26} className="mx-auto relative top-[2px]" />}
      />
      <StackItem
        title="TypeScript"
        icon={
          <BiLogoTypescript size={30} className="mx-auto" color="#4476C0" />
        }
      />
      <StackItem
        title="React"
        icon={<FaReact size={30} className="mx-auto" color="#71BFDB" />}
      />
    </section>
  );
}
