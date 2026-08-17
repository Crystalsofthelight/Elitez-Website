export function PageHero({
  kicker,
  title,
  lede,
}: {
  kicker: string;
  title: string;
  lede: string;
}) {
  return (
    <section className="mx-auto max-w-6xl px-5 pt-16 pb-10">
      <p className="kicker rise">{kicker}</p>
      <h1 className="font-display rise-2 mt-4 max-w-4xl text-[2rem] leading-[1.08] font-semibold tracking-tight break-words sm:text-4xl md:text-6xl">
        {title}
      </h1>
      <p className="rise-3 mt-6 max-w-2xl text-base leading-8 text-[#b7bfc8] sm:text-lg">
        {lede}
      </p>
    </section>
  );
}
