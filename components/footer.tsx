interface Props {
  children?: React.ReactNode;
}

export default function Footer({ children }: Props) {
  return (
    <div className="text-sm text-secondary w-full mt-5 mb-10">
      <div className="flex flex-col justify-center w-full mt-4">{children}</div>
      <div className="w-full mt-10">
        <hr />
        <div className="flex items-center">
          <p className="mt-3 inline-block mr-auto">
            Built with Next.js & TailwindCSS
          </p>
          <p className="inline-block">© 2024</p>
        </div>
      </div>
    </div>
  );
}
