import {
  BiLogoDocker,
  BiLogoPostgresql,
  BiLogoPython,
  BiLogoTypescript,
} from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { SiFastapi, SiPydantic, SiTailwindcss } from "react-icons/si";

export default function Stack() {
  // TODO: Make mobile responsive

  return (
    <div className="group rounded-2xl border px-5 py-3 transition-all duration-300 ease-in-out hover:border-indigo-700/40 md:w-[300px]">
      <div className="grid grid-cols-4 gap-y-0 gap-x-2 py-2 px-auto items-center text-indigo-950/40 h-full">
        <div
          title="Python"
          className="border group-hover:border-indigo-700/30 transition-all ease-in-out cursor-pointer rounded-lg py-1 px-1"
        >
          <BiLogoPython size={24} className="mx-auto" />
        </div>
        <div
          title="FastAPI"
          className="border group-hover:border-indigo-700/30 transition-all ease-in-out cursor-pointer rounded-lg py-1 px-1"
        >
          <SiFastapi size={24} className="mx-auto" />
        </div>
        <div
          title="Docker"
          className="border group-hover:border-indigo-700/30 transition-all ease-in-out cursor-pointer rounded-lg py-1 px-1"
        >
          <BiLogoDocker size={24} className="mx-auto" />
        </div>
        <div
          title="PostgreSQL"
          className="border group-hover:border-indigo-700/30 transition-all ease-in-out cursor-pointer rounded-lg py-1 px-1"
        >
          <BiLogoPostgresql size={24} className="mx-auto" />
        </div>
        <div
          title="TypeScript"
          className="border group-hover:border-indigo-700/30 transition-all ease-in-out cursor-pointer rounded-lg py-1 px-1"
        >
          <BiLogoTypescript size={24} className="mx-auto" />
        </div>
        <div
          title="React"
          className="border group-hover:border-indigo-700/30 transition-all ease-in-out cursor-pointer rounded-lg py-1 px-1"
        >
          <FaReact size={24} className="mx-auto" />
        </div>
        <div
          title="Pydantic"
          className="border group-hover:border-indigo-700/30 transition-all ease-in-out cursor-pointer rounded-lg py-1 px-1"
        >
          <SiPydantic size={24} className="mx-auto" />
        </div>
        <div
          title="TailwindCSS"
          className="border group-hover:border-indigo-700/30 transition-all ease-in-out cursor-pointer rounded-lg py-1 px-1"
        >
          <SiTailwindcss size={24} className="mx-auto" />
        </div>
      </div>
    </div>
  );
}
