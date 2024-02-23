export default function Bio() {
  return (
    <div className="group rounded-2xl border px-5 py-3 transition-all duration-300 ease-in-out   md:h-fit md:w-full">
      <p className="text-justify text-lg font-normal leading-[22px]">
        Howdy 👋🏽, I&apos;m Victor.{" "}
        <span className="text-secondary">
          I&apos;m a{" "}
          <span className="transition-all ease-in-out group-hover:text-primary">
            software developer
          </span>{" "}
          and I love building things. Started as a{" "}
          <span className="transition-all ease-in-out group-hover:text-primary">
            Python
          </span>{" "}
          developer, but over time I&apos;ve become more comfortable with
          exploring my other interests, so now I&apos;m entering a more rounded
          role in{" "}
          <span className="transition-all ease-in-out group-hover:text-primary">
            fullstack
          </span>{" "}
          development.
        </span>
      </p>
    </div>
  );
}
