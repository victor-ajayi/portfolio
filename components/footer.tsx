export default function Footer({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-sm text-secondary w-full my-10">
      <p className="text-center">
        Thanks for stopping by. You can find me on my socials
      </p>
      <div className="flex flex-col justify-center w-full mt-4">{children}</div>
      <div className="w-full mt-20">
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
