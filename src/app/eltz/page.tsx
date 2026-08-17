import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/Button";
import { CopyButton } from "@/components/CopyButton";
import { PageHero } from "@/components/PageHero";
import { TokenMark } from "@/components/TokenMark";
import { eltz, eltzMarkets } from "@/lib/content";

export const metadata: Metadata = {
  title: "$ELTZ",
  description:
    "Elitez Chip ($ELTZ) is a native B20 token on Base. Review the official contract, supply, and where to buy it.",
};

export default function EltzPage() {
  return (
    <>
      <PageHero
        kicker="Base / $ELTZ"
        title="Elitez Chip. A native B20 token."
        lede="$ELTZ launched shortly after B20 activated on Base mainnet. It is fully live for transfers, minting, and burning, and is used for play inside Dream Crafter. It is not an investment or a claim on royalties."
      />

      <section className="mx-auto max-w-6xl px-5">
        <article className="panel rounded-[2rem] p-6 md:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="flex items-center gap-4">
              <TokenMark src={eltz.icon} alt="$ELTZ Elitez Chip" size={72} />
              <div>
                <p className="kicker">B20</p>
                <h2 className="font-display text-3xl">$ELTZ</h2>
                <p className="text-sm text-[#9aa4af]">
                  {eltz.name} · {eltz.chain}
                </p>
              </div>
            </div>
            <div className="flex min-w-0 flex-wrap gap-2">
              <CopyButton value={eltz.address} label="Copy contract" />
              <Button href={eltz.uniswap} variant="teal" external>
                Buy on Uniswap
              </Button>
              <Button href={eltz.basescan} variant="ghost" external>
                BaseScan
              </Button>
            </div>
          </div>
          <p className="mt-6 max-w-3xl text-sm leading-7 text-[#b7bfc8]">
            Elitez Chip is a native B20 token — Base’s protocol-level token
            standard — and one of the first B20 assets on mainnet.
          </p>
          <p className="mt-5 font-mono text-xs break-all text-[#c8c1b2] md:text-sm">
            {eltz.address}
          </p>
          <p className="mt-2 text-sm text-[#9aa4af]">
            {eltz.decimals} decimals · {eltz.supply} max supply · {eltz.holders}{" "}
            holders
          </p>
        </article>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <p className="kicker">Tokenomics</p>
        <h2 className="font-display mt-3 text-4xl">Supply and standard.</h2>
        <p className="mt-4 max-w-3xl leading-8 text-[#b7bfc8]">
          B20 is Base’s own token standard — the chain-level counterpart to
          ERC-20. $ELTZ has a fixed max supply of one million chips.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {[
            ["Standard", "B20"],
            ["Max supply", eltz.supply],
            ["Holders", eltz.holders],
            ["Network", eltz.chain],
          ].map(([label, value]) => (
            <div key={label} className="panel rounded-3xl p-5">
              <p className="text-xs tracking-wide text-[#9aa4af] uppercase">
                {label}
              </p>
              <p className="mt-3 font-display text-xl text-[#f3dc97] sm:text-2xl">
                {value}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5">
        <p className="kicker">In the ecosystem</p>
        <h2 className="font-display mt-3 text-4xl">Where $ELTZ is used.</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Play",
              body: "A playable token inside Dream Crafter, alongside $ELITE and other supported assets.",
            },
            {
              title: "B20 native",
              body: "Built on Base’s protocol-level token standard, live for transfers, minting, and burning.",
            },
            {
              title: "Launchpad",
              body: "Featured on Dream Crafter’s B20 launch surface as Elitez Chip.",
            },
          ].map((item) => (
            <div key={item.title} className="panel rounded-3xl p-6">
              <h3 className="font-display text-2xl">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#9aa4af]">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <p className="kicker">Markets</p>
        <h2 className="font-display mt-3 text-4xl">Buy and follow $ELTZ.</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {eltzMarkets.map((market) => (
            <a
              key={market.label}
              href={market.href}
              target="_blank"
              rel="noopener noreferrer"
              className="panel lift rounded-3xl p-6"
            >
              <h3 className="font-display text-2xl">{market.label}</h3>
              <p className="mt-3 text-sm leading-7 text-[#9aa4af]">{market.body}</p>
              <p className="mt-5 text-sm text-[#1ad4c8]">Open →</p>
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-8">
        <div className="panel flex flex-col items-start justify-between gap-4 rounded-[2rem] p-6 md:flex-row md:items-center">
          <p className="text-sm text-[#9aa4af]">
            Looking for the original Elite token? $ELITE has its own page.
          </p>
          <Link
            href="/elite"
            className="text-sm font-semibold text-[#f3dc97] hover:text-white"
          >
            Go to $ELITE →
          </Link>
        </div>
      </section>
    </>
  );
}
