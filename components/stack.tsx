import {
  BiLogoDocker,
  BiLogoPostgresql,
  BiLogoPython,
  BiLogoTypescript,
} from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { SiFastapi, SiPydantic, SiTailwindcss } from "react-icons/si";

export default function Stack() {
  return (
    <div className="grid grid-cols-4 gap-y-4 gap-x-0 py-3 px-auto items-center text-secondary md:grid-cols-3 md:py-[10px] md:gap-y-2 md:gap-x-1 rounded-2xl border transition-all duration-300 ease-in-out md:w-[300px] h-[150px] md:h-full">
      <div title="Python" className="">
        <BiLogoPython title="FastAPI" size={30} className="mx-auto" />
      </div>
      <div title="FastAPI" className="">
        <SiFastapi size={28} className="mx-auto" />
      </div>
      <div title="Docker" className="">
        <BiLogoDocker size={30} className="mx-auto" />
      </div>
      <div title="PostgreSQL" className="">
        <BiLogoPostgresql size={30} className="mx-auto" />
      </div>
      <div title="TypeScript" className="">
        <BiLogoTypescript size={30} className="mx-auto" />
      </div>
      <div title="React" className="">
        <FaReact size={30} className="mx-auto" />
      </div>
      <div title="Pydantic" className="">
        <SiPydantic size={28} className="mx-auto" />
      </div>
      <div title="TailwindCSS" className="">
        <SiTailwindcss size={30} className="mx-auto" />
      </div>
    </div>
  );
}
