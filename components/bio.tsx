export default function Bio() {
  return (
    <div className="group rounded-2xl border px-5 py-3 transition-all duration-300 ease-in-out hover:border-indigo-700/40 md:h-fit md:w-full">
      <p className="text-justify text-lg font-normal leading-[22px]">
        Howdy 👋🏽, I'm Victor.{" "}
        <span className="text-indigo-950/40">
          I'm a{" "}
          <span className="transition-all ease-in-out group-hover:text-indigo-700">
            software developer
          </span>{" "}
          and I love building things. Started as a{" "}
          <span className="transition-all ease-in-out group-hover:text-indigo-700">
            Python
          </span>{" "}
          developer, but over time I've become more comfortable with exploring
          my other interests, so now I'm entering a more rounded role in{" "}
          <span className="transition-all ease-in-out group-hover:text-indigo-700">
            fullstack
          </span>{" "}
          development.
        </span>
      </p>
    </div>
  );
}
