import Project from "./project";

export default function Projects() {
  const projects = [
    {
      title: "denarii",
      stack: ["Python", "FastAPI", "Docker", "React", "JavaScript"],
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
    <section className="card rounded-2xl border col-span-2 flex gap-2">
      <div className="w-full px-5 pt-3 pb-4">
        <p className="text-lg">projects</p>
        <hr className="mt-2" />
        <div className="">
          {projects.map((project) => (
            <Project
              key={project.title}
              title={project.title}
              source={project.source}
              description={project.description}
              year={project.year}
              stack={project.stack}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
