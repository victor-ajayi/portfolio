import Link from "next/link";
import Navbar from "./navbar";

export default function Bio() {
  return (
    <section className="card col-span-2 group rounded-2xl border px-5 py-3 transition-all duration-300 ease-in-out md:h-fit md:w-full">
      <Navbar />
      <p className="text-justify text-base font-normal leading-[22px]">
        Howdy 👋🏽, I&apos;m Victor. Nice to meet you!{" "}
        <span className="text-secondary">
          I&apos;m a Python developer and I love building things.
          <br />
          <br />
          I&apos;m an explorer by nature, debugger by necessity. When I&apos;m
          not writing code in the wee hours, you can find me deep in other
          passions: music, photography, chess, football, tennis.
        </span>
      </p>
    </section>
  );
}
