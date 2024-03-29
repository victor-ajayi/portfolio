"use client";

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

export default function Stack() {
  return (
    <section className="card grid grid-cols-4 gap-y-4 gap-x-0 py-3 px-auto items-center text-indigo-950/80 md:grid-cols-3 md:py-[10px] md:gap-y-2 md:gap-x-1 rounded-2xl border transition-all duration-300 ease-in-out md:w-[300px] h-[150px] md:h-full">
      <div title="Python" className="">
        <PythonIcon size={30} className="mx-auto" />
      </div>
      <div title="FastAPI" className="">
        <FastIcon size={30} className="mx-auto" />
      </div>
      <div title="Docker" className="">
        <DockerIcon size={30} className="mx-auto" />
      </div>
      <div title="Django" className="">
        <DjangoIcon
          size={32}
          className="mx-auto text-[#092E20] dark:text-white"
        />
      </div>
      <div title="Pydantic" className="">
        <SiPydantic size={28} className="mx-auto" color="#CD3962" />
      </div>
      <div title="PostgreSQL" className="">
        <PostgresIcon size={26} className="mx-auto" />
      </div>
      <div title="TypeScript" className="">
        <BiLogoTypescript size={30} className="mx-auto" color="#4476C0" />
      </div>
      <div title="React" className="">
        <FaReact size={30} className="mx-auto" color="#71BFDB" />
      </div>
    </section>
  );
}
