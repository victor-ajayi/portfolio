import Link from "next/link";

interface Props {
  children?: React.ReactNode;
}

export default function Footer({ children }: Props) {
  return (
    <footer className="text-sm text-secondary w-full mt-5 mb-10">
      <div className="flex flex-col justify-center w-full mt-4">{children}</div>
      <div className="w-full mt-10">
        <hr />
        <div className="flex pt-3">
          <p className="inline-block mr-auto">
            Built with Next.js & TailwindCSS (
            <Link
              href={"https://github.com/victor-ajayi/portfolio"}
              target="_blank"
              className="cursor-pointer"
            >
              Source
            </Link>
            )
          </p>
          <p className="inline-block">© 2024</p>
        </div>
      </div>
    </footer>
  );
}
