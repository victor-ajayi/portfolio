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
      <div className="text-sm text-secondary w-fit h-fit relative top-[1px]">
        {year}
      </div>
      <div className="relative bottom-[2px]">
        <a
          href={source}
          className="group cursor-pointer transition-all ease-in-out hover:text-primary"
        >
          <span>{title}</span>
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="inline-block group-hover:rotate-45 group-hover:text-primary transition-all duration-300 ml-1"
          >
            <path
              fill="currentColor"
              stroke="currentColor"
              strokeWidth={0.4}
              d="M3.293,20.707a1,1,0,0,1,0-1.414L17.586,5H12a1,1,0,0,1,0-2h8a1,1,0,0,1,1,1v8a1,1,0,0,1-2,0V6.414L4.707,20.707a1,1,0,0,1-1.414,0Z"
            />
          </svg>
        </a>
        <p className="text-secondary text-sm">{description}</p>
        <p className="flex flex-wrap gap-1 text-secondary text-xs mt-3">
          {stack.map((item) => (
            <span key={item} className="rounded-lg border px-2">
              {item}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}
