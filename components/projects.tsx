export default function Projects() {
  const projects = [
    {
      title: "denarii",
      stack: ["Python", "FastAPI", "Docker", "React", "TS"],
      description: "A financial budgeting and analysis app",
      year: "2023",
      source: "https://github.com/victor-ajayi/denarii",
    },
    {
      title: "animeee",
      stack: ["Python", "Flask", "SQLite"],
      description: "A personal anime watchlist app",
      year: "2022",
      source: "https://github.com/victor-ajayi/animeee",
    },
  ];

  return (
    <div className="col-span-2 flex gap-2">
      <div className="w-full rounded-2xl border px-5 pt-3 pb-4">
        <p className="text-lg">projects</p>
        <div className="flex flex-col gap-3 md-custom:flex-row md-custom:gap-3 mt-4">
          {projects.map((project) => (
            <div
              key={project.title}
              className="flex w-full flex-col rounded-xl border"
            >
              <a
                className="flex cursor-pointer items-center justify-between border-b rounded-t-[10px] px-4 py-1 transition-all ease-in-out hover:bg-indigo-100/20   hover:text-primary"
                href={project.source}
                rel="noopener noreferrer"
                target="_blank"
              >
                <div>
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
                </div>
                <p className="text-xs text-secondary">{project.year}</p>
              </a>
              <div className="flex h-full flex-col justify-between px-4">
                <p className="mt-2 text-[14px] text-secondary">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 py-2 mt-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border px-2 text-[10px]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
