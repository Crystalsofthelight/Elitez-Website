import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { TokenMark } from "@/components/TokenMark";
import { contract, eltz } from "@/lib/content";

export const metadata: Metadata = {
  title: "Tokens",
  description:
    "Choose $ELITE or $ELTZ. Each token has its own page for contracts, tokenomics, and markets.",
};

export default function TokenHubPage() {
  return (
    <>
      <PageHero
        kicker="Tokens"
        title="Pick a token."
        lede="$ELITE and $ELTZ are different assets. Each has its own contract, supply, and page — so you never have to sort them on the same screen."
      />

      <section className="mx-auto max-w-6xl px-5 pb-16">
        <div className="grid gap-4 lg:grid-cols-2">
          <Link
            href="/elite"
            className="panel lift rounded-[2rem] p-6 md:p-8"
          >
            <TokenMark src={contract.icon} alt="" size={72} />
            <p className="kicker mt-6">ERC-20 · Base</p>
            <h2 className="font-display mt-2 text-4xl">$ELITE</h2>
            <p className="mt-4 text-sm leading-7 text-[#9aa4af]">
              The original creator token. Music, merch, collectibles, and play
              inside Dream Crafter. Full tokenomics, burns, and markets.
            </p>
            <p className="mt-6 text-sm font-semibold text-[#f3dc97]">
              Open $ELITE →
            </p>
          </Link>

          <Link href="/eltz" className="panel lift rounded-[2rem] p-6 md:p-8">
            <TokenMark src={eltz.icon} alt="" size={72} />
            <p className="kicker mt-6">B20 · Base</p>
            <h2 className="font-display mt-2 text-4xl">$ELTZ</h2>
            <p className="mt-4 text-sm leading-7 text-[#9aa4af]">
              Elitez Chip. A native B20 token with a 1,000,000 max supply.
              Buy on Uniswap and use it in Dream Crafter.
            </p>
            <p className="mt-6 text-sm font-semibold text-[#1ad4c8]">
              Open $ELTZ →
            </p>
          </Link>
        </div>
      </section>
    </>
  );
}
