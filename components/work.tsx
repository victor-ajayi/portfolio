export default function Work() {
  return (
    <section className="card rounded-2xl border col-span-2 flex gap-2">
      <div className="w-full px-5 pt-3 pb-4">
        <p className="text-base">work</p>
        <hr className="mt-2" />
        <div className="flex mt-6 mb-4 gap-10 md-custom:gap-20">
          <div className="mr-auto">
            <div>amoCRM</div>
            <p className="text-secondary text-sm">Python/QA Developer</p>
          </div>
          <div className="text-sm text-secondary w-fit h-fit">
            July 2025 – Nov 2025
          </div>
        </div>
        <div className="flex mt-6 mb-4 gap-10 md-custom:gap-20">
          <div className="mr-auto">
            <div>HardQode</div>
            <p className="text-secondary text-sm">Python Developer</p>
          </div>
          <div className="text-sm text-secondary w-fit h-fit">
            Apr 2024 – Nov 2024
          </div>
        </div>
      </div>
    </section>
  );
}
