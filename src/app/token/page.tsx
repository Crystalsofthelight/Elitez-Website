import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { CopyButton } from "@/components/CopyButton";
import { PageHero } from "@/components/PageHero";
import {
  allocation,
  contract,
  links,
  markets,
  tokenomics,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "$ELITE Token",
  description:
    "Elite is a creator-led token on Base. Review tokenomics, the official contract, and where to follow or trade $ELITE.",
};

function Bar({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone: "gold" | "teal" | "sky";
}) {
  const width = value;
  const color = {
    gold: "bg-[#d7b35a]",
    teal: "bg-[#1ad4c8]",
    sky: "bg-[#7eb6ff]",
  }[tone];

  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-sm">
        <span>{label}</span>
        <span className="text-[#9aa4af]">{value}</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-white/6">
        <div className={`h-full ${color}`} style={{ width }} />
      </div>
    </div>
  );
}

export default function TokenPage() {
  return (
    <>
      <PageHero
        kicker="Base / $ELITE"
        title="The token behind the catalog and the arcade."
        lede="Elite Token is a creator-led asset on Base. It is not an investment, security, or claim on royalties. It exists so people can participate in the Elitez world — including play inside Dream Crafter."
      />

      <section className="mx-auto max-w-6xl px-5">
        <div className="panel rounded-[2rem] p-6 md:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="kicker">Official contract</p>
              <p className="mt-3 font-mono text-sm break-all md:text-base">
                {contract.address}
              </p>
              <p className="mt-2 text-sm text-[#9aa4af]">
                {contract.chain} · {contract.symbol} · {contract.decimals} decimals
                · {contract.holders} holders
              </p>
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
        </div>
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
              <p className="mt-3 font-display text-xl break-all text-[#f3dc97] sm:text-2xl">{value}</p>
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
                <Bar key={row.label} {...row} />
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
                <Bar key={row.label} {...row} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 panel rounded-[2rem] p-7 text-sm leading-7 text-[#b7bfc8]">
          <p>
            Burns: {tokenomics.year1Burn} in year 1 and {tokenomics.year2Burn}{" "}
            in year 2. Of the locked tranche, {tokenomics.year2Burn} is
            scheduled to be burnt and {tokenomics.lockedRelease} is scheduled
            for release in year two. Figures are published project targets from
            the official tokenomics page.
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
        <p className="kicker">Markets and data</p>
        <h2 className="font-display mt-3 text-4xl">Follow the pair.</h2>
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
    </>
  );
}
