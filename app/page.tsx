export default function Page() {
  const projects = [
    {
      title: "denarii",
      stack: ["Python", "FastAPI", "Docker", "React", "TS"],
      imgUrl: "https://via.placeholder.com/150",
      description: "A personal financial budgeting and analysis app",
      year: "2023",
      source: "https://github.com/victor-ajayi/denarii",
    },
    {
      title: "animeee",
      stack: ["Python", "Flask", "SQLite"],
      imgUrl: "https://via.placeholder.com/150",
      description: "A personal anime watchlist app",
      year: "2022",
      source: "https://github.com/victor-ajayi/animeee",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-2">
      <div className="flex flex-col md:flex-row gap-2 col-span-2 justify-center">
        <div className="group border rounded-2xl px-5 py-3 md:auto h-full transition-all duration-200 ease-in-out hover:bg-teal-100/5 hover:border-teal-700/30">
          <p className="text-lg font-normal leading-[22px] text-justify">
            Howdy 👋🏽, I'm Victor.{" "}
            <span className="text-gray-400">
              I'm a{" "}
              <span className="transition-all ease-in-out group-hover:text-teal-800/80">
                software developer
              </span>{" "}
              and I love building things. Started as a{" "}
              <span className="transition-all ease-in-out group-hover:text-teal-800/80">
                Python
              </span>{" "}
              developer, but over time I've become more comfortable with
              exploring my other interests, so now I'm entering a more rounded
              role in{" "}
              <span className="transition-all ease-in-out group-hover:text-teal-800/80">
                fullstack
              </span>{" "}
              development.
            </span>
          </p>
        </div>
        <div className="group border rounded-2xl px-5 py-3 h-full md:w-auto transition-all duration-200 ease-in-out hover:bg-teal-100/5 hover:border-teal-700/30">
          <p className="text-xl">stack</p>
          <p className="text-gray-400 transition-all duration-200 ease-in-out group-hover:text-teal-800/80">
            stack goes here
          </p>
        </div>
      </div>
      <div className="flex gap-2 col-span-2">
        <div className="border rounded-2xl px-5 py-3 w-full">
          <p className="text-xl">projects</p>
          <div className="flex flex-col md-custom:flex-row gap-2 mt-4">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group flex flex-col border rounded-xl w-full "
              >
                <div className="flex justify-between items-center border-b py-1 px-4 transition-all ease-in-out group-hover:bg-teal-100/5">
                  <div className="">
                    <a
                      className="text-sm cursor-pointer transition-all ease-in-out group-hover:text-teal-800/80"
                      href={project.source}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {project.title}
                      <svg
                        className="inline-block"
                        width="15"
                        height="15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="m4 11 7.5-7.5m0 0H6.55m4.95 0v4.95"
                          stroke="currentColor"
                        />
                      </svg>
                    </a>
                  </div>
                  <p className="text-xs text-gray-400 group-hover:text-teal-800/80">
                    {project.year}
                  </p>
                </div>
                <div className="flex flex-col justify-between px-4 h-full">
                  <p className="text-sm text-gray-400 mt-2">
                    {project.description}
                  </p>
                  <div className="py-2">
                    <div className="flex flex-wrap gap-1">
                      {project.stack.map((item) => (
                        <span
                          key={item}
                          className="border rounded-md px-2 text-[10px]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
