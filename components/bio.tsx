export default function Bio() {
  return (
    <section className="card col-span-2 group rounded-2xl border px-5 py-3 transition-all duration-300 ease-in-out md:h-fit md:w-full">
      <p className="text-justify text-lg font-normal leading-[22px]">
        Howdy 👋🏽, I&apos;m Victor. Nice to meet you!{" "}
        <span className="text-secondary">
          I&apos;m a Python developer and I love building things. Currently
          looking for <span className="text-primary">backend developer</span>{" "}
          position.
          <br />
          <br />
          I&apos;m an explorer by nature so I have lots of interests both in
          tech and otherwise. I&apos;m a musician; I play the guitar, bass
          guitar and a little bit of piano. I love chess, football and tennis.
        </span>
      </p>
    </section>
  );
}
