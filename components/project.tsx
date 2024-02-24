interface Project {
  title: string;
  source: string;
  description: string;
  year: string;
  stack: string[];
}

export default function Project({
  title,
  source,
  description,
  year,
  stack,
}: Project) {
  return (
    <div className="flex mt-6 mb-4 gap-10 md-custom:gap-20">
      <div className="text-sm text-secondary w-fit relative top-[2px]">
        {year}
      </div>
      <div className="">
        <a
          href={source}
          className="cursor-pointer transition-all ease-in-out hover:text-primary"
        >
          <span>{title}</span>
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
        <p className="text-secondary text-sm">{description}</p>
        <p className="flex flex-wrap gap-1 text-secondary text-xs mt-3">
          {stack.map((item) => (
            <span key={item} className="rounded-lg border px-2 text-[10px]">
              {item}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}
