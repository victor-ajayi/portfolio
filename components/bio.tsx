export default function Bio() {
  return (
    <div className="card group rounded-2xl border px-5 py-3 transition-all duration-300 ease-in-out md:h-fit md:w-full">
      <p className="text-justify text-lg font-normal leading-[22px]">
        Howdy 👋🏽, I&apos;m Victor.{" "}
        <span className="text-secondary">
          I&apos;m a <span className="text-primary">software developer</span>{" "}
          and I love building things. Having started as a{" "}
          <span className="text-primary">Python</span> developer, over time
          I&apos;ve become more comfortable with exploring my other interests;
          I&apos;m now entering a more rounded role in{" "}
          <span className="text-primary">fullstack</span> development with
          React.
        </span>
      </p>
    </div>
  );
}
