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
    <section className="card col-span-2 flex flex-wrap py-4 px-3 justify-evenly align-middle text-indigo-950/80 md:py-[10px] md:gap-4 md:gap-x-4 rounded-2xl border transition-all duration-300 ease-in-out md:w-full md:h-full">
      <div title="Python" className="">
        <PythonIcon size={30} className="mx-auto" />
      </div>
      <div title="Django" className="">
        <DjangoIcon
          size={32}
          className="mx-auto text-[#092E20] dark:text-white"
        />
      </div>
      <div title="FastAPI" className="">
        <FastIcon size={30} className="mx-auto" />
      </div>
      <div title="Docker" className="">
        <DockerIcon size={30} className="mx-auto" />
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
