import Image from "next/image";

export function PageHero({
  kicker,
  title,
  lede,
  image,
}: {
  kicker: string;
  title: string;
  lede: string;
  image?: string;
}) {
  return (
    <section className="relative overflow-hidden">
      {image ? (
        <div className="absolute inset-0">
          <Image
            src={image}
            alt=""
            fill
            priority
            className="object-contain object-center opacity-35 md:object-[88%_center] md:opacity-60"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,8,11,0.78)_0%,rgba(6,8,11,0.4)_38%,rgba(6,8,11,0.08)_68%,transparent_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,transparent_58%,#06080b_100%)]" />
        </div>
      ) : null}
      <div
        className={`relative mx-auto max-w-6xl px-5 pt-16 pb-10 ${
          image ? "md:min-h-[28rem] md:pt-24 md:pb-24" : ""
        }`}
      >
        <p className="kicker rise">{kicker}</p>
        <h1
          className={`font-display rise-2 mt-4 text-[2rem] leading-[1.08] font-semibold tracking-tight break-words sm:text-4xl md:text-6xl ${
            image
              ? "max-w-xl [text-shadow:0_2px_24px_rgba(6,8,11,0.85)] md:max-w-2xl"
              : "max-w-4xl"
          }`}
        >
          {title}
        </h1>
        <p
          className={`rise-3 mt-6 text-base leading-8 text-[#b7bfc8] sm:text-lg ${
            image
              ? "max-w-xl [text-shadow:0_2px_18px_rgba(6,8,11,0.9)]"
              : "max-w-2xl"
          }`}
        >
          {lede}
        </p>
      </div>
    </section>
  );
}
