import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/Button";
import { CopyButton } from "@/components/CopyButton";
import { PageHero } from "@/components/PageHero";
import { SupplyBar } from "@/components/SupplyBar";
import { TokenMark } from "@/components/TokenMark";
import {
  allocation,
  contract,
  eliteBurnAddress,
  links,
  markets,
  tokenomics,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "$ELITE",
  description:
    "Elite ($ELITE) on Base. Review the official contract, tokenomics, burns, and where to buy or follow the pair.",
};

export default function ElitePage() {
  return (
    <>
      <PageHero
        kicker="Base / $ELITE"
        title="The creator token behind the catalog."
        lede="Elite Token is a creator-led asset on Base. It exists so people can participate in the Elitez world — including play inside Dream Crafter."
      />

      <section className="mx-auto max-w-6xl px-5">
        <article className="panel rounded-[2rem] p-6 md:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="flex items-center gap-4">
              <TokenMark src={contract.icon} alt="$ELITE token" size={72} />
              <div>
                <p className="kicker">ERC-20</p>
                <h2 className="font-display text-3xl">$ELITE</h2>
                <p className="text-sm text-[#9aa4af]">
                  {contract.name} · {contract.chain}
                </p>
              </div>
            </div>
            <div className="flex min-w-0 flex-wrap gap-2">
              <CopyButton value={contract.address} label="Copy contract" />
              <Button href={links.uniswap} variant="gold" external>
                Buy on Uniswap
              </Button>
              <Button href={links.basescan} variant="ghost" external>
                BaseScan
              </Button>
            </div>
          </div>
          <p className="mt-6 max-w-3xl text-sm leading-7 text-[#b7bfc8]">
            The original Elitez token. It backs the music catalog, merch,
            collectibles, and is a playable token in Dream Crafter.
          </p>
          <p className="mt-5 font-mono text-xs break-all text-[#c8c1b2] md:text-sm">
            {contract.address}
          </p>
          <p className="mt-2 text-sm text-[#9aa4af]">
            {contract.decimals} decimals · {contract.holders} holders ·{" "}
            <a
              href={links.basescan}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1ad4c8] hover:text-white"
            >
              View on BaseScan
            </a>
          </p>
        </article>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <p className="kicker">Tokenomics</p>
        <h2 className="font-display mt-3 text-4xl">Supply, burns, and lock.</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {[
            ["Starting supply", tokenomics.startingSupply],
            ["After year 1 burn", tokenomics.afterYear1],
            ["After year 2 burn", tokenomics.afterYear2],
            ["Year 1 circulating", tokenomics.year1Circulating],
          ].map(([label, value]) => (
            <div key={label} className="panel rounded-3xl p-5">
              <p className="text-xs tracking-wide text-[#9aa4af] uppercase">
                {label}
              </p>
              <p className="mt-3 font-display text-xl break-all text-[#f3dc97] sm:text-2xl">
                {value}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="panel rounded-[2rem] p-7">
            <h3 className="font-display text-2xl">End of year 1</h3>
            <p className="mt-2 text-sm text-[#9aa4af]">
              After the 500B burn. Locked remainder {tokenomics.lockedTotal}.
            </p>
            <div className="mt-6 space-y-4">
              {tokenomics.year1.map((row) => (
                <SupplyBar key={row.label} {...row} />
              ))}
            </div>
          </div>
          <div className="panel rounded-[2rem] p-7">
            <h3 className="font-display text-2xl">End of year 2</h3>
            <p className="mt-2 text-sm text-[#9aa4af]">
              Release {tokenomics.lockedRelease}, then the year-two burn.
            </p>
            <div className="mt-6 space-y-4">
              {tokenomics.year2.map((row) => (
                <SupplyBar key={row.label} {...row} />
              ))}
            </div>
          </div>
        </div>

        <div className="panel mt-6 rounded-[2rem] p-7 text-sm leading-7 text-[#b7bfc8]">
          <p className="kicker">Current supply update — 2026</p>
          <h3 className="font-display mt-3 text-2xl text-[#f3ead8]">
            Planned reductions completed.
          </h3>
          <p className="mt-4">
            The original $ELITE tokenomics and burn schedule above was
            established when $ELITE was created in 2024 and is retained as part
            of the project’s historical record.
          </p>
          <p className="mt-4">The planned token reductions have since been completed.</p>
          <ul className="mt-5 list-disc space-y-2 pl-5">
            <li>Original Minted Supply: 1,000,000,000,000 ELITE</li>
            <li>Burned / Permanently Inaccessible: 750,000,000,000 ELITE</li>
            <li>Percentage Burned: 75%</li>
            <li>Non-Burned Supply: 250,000,000,000 ELITE</li>
          </ul>
          <p className="mt-5 text-xs tracking-wide text-[#9aa4af] uppercase">
            Burn address
          </p>
          <p className="mt-2 font-mono text-xs break-all text-[#c8c1b2] md:text-sm">
            {eliteBurnAddress}
          </p>
          <p className="mt-5 text-xs tracking-wide text-[#9aa4af] uppercase">
            Official $ELITE contract
          </p>
          <p className="mt-2 font-mono text-xs break-all text-[#c8c1b2] md:text-sm">
            {contract.address}
          </p>
          <div className="mt-4 flex min-w-0 flex-wrap gap-2">
            <CopyButton value={eliteBurnAddress} label="Copy burn address" />
            <CopyButton value={contract.address} label="Copy contract" />
            <Button
              href={`${links.basescan}?a=${eliteBurnAddress}`}
              variant="ghost"
              external
            >
              View burn on BaseScan
            </Button>
          </div>
          <p className="mt-5">
            Public Base blockchain records show 750 billion ELITE at the zero
            address, representing 75% of the original minted supply. These
            tokens are treated by the project as permanently inaccessible and
            removed from usable circulation.
          </p>
          <p className="mt-4">
            Because the tokens were transferred to the zero address rather than
            necessarily being removed from the ERC-20 contract’s totalSupply()
            value, some blockchain explorers and data providers may continue to
            display the original minted supply of 1 trillion ELITE.
          </p>
          <p className="mt-4">
            All supply and burn information can be independently verified
            through public Base blockchain records.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5">
        <p className="kicker">Creative revenue</p>
        <h2 className="font-display mt-3 text-4xl">Discretionary allocation.</h2>
        <p className="mt-4 max-w-3xl leading-8 text-[#b7bfc8]">
          Revenue from music, merch, and related creative work may be
          voluntarily allocated by the project. These targets can change and
          create no entitlement for token holders.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {allocation.map((item) => (
            <div key={item.title} className="panel rounded-3xl p-6">
              <p className="font-display text-4xl text-[#f3dc97]">{item.pct}</p>
              <h3 className="mt-3 text-lg">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-[#9aa4af]">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <p className="kicker">Markets</p>
        <h2 className="font-display mt-3 text-4xl">Follow the $ELITE pair.</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {markets.map((market) => (
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
            Looking for Elitez Chip instead? $ELTZ has its own page.
          </p>
          <Link
            href="/eltz"
            className="text-sm font-semibold text-[#1ad4c8] hover:text-white"
          >
            Go to $ELTZ →
          </Link>
        </div>
      </section>
    </>
  );
}
