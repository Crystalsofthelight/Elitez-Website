import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { CopyButton } from "@/components/CopyButton";
import { PageHero } from "@/components/PageHero";
import { contract, links } from "@/lib/content";
import {
  eliteBurnAddress,
  whitepaperFacts,
  whitepaperMeta,
  whitepaperSections,
  type WhitepaperBlock,
} from "@/lib/whitepaper";

export const metadata: Metadata = {
  title: "White Paper",
  description: whitepaperMeta.description,
  alternates: {
    canonical: "https://www.elitez.xyz/whitepaper",
  },
};

function Blocks({ blocks }: { blocks: WhitepaperBlock[] }) {
  return (
    <div className="mt-4 space-y-4 text-[1.05rem] leading-8 text-[#c8c1b2]">
      {blocks.map((block, index) => {
        if (block.kind === "p") {
          return (
            <p key={index} className="break-words">
              {block.text}
            </p>
          );
        }
        if (block.kind === "list") {
          return (
            <ul
              key={index}
              className="list-disc space-y-2 pl-5 text-sm leading-7 text-[#b7bfc8]"
            >
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          );
        }
        if (block.kind === "status") {
          return (
            <div key={index} className="grid gap-4">
              {block.items.map((item) => (
                <div key={item.title} className="panel rounded-3xl p-6">
                  <h3 className="font-display text-xl">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#9aa4af]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          );
        }
        return (
          <div key={index} className="space-y-4">
            {block.items.map((phase) => (
              <div
                key={phase.title}
                className="border-l border-[#d7b35a]/40 pl-5"
              >
                <h3 className="font-display text-xl">{phase.title}</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-[#9aa4af]">
                  {phase.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}

export default function WhitePaperPage() {
  return (
    <>
      <PageHero
        kicker={whitepaperMeta.kicker}
        title={whitepaperMeta.title}
        lede={whitepaperMeta.lede}
      />

      <section className="mx-auto max-w-3xl px-5">
        <div className="flex flex-wrap gap-3">
          <Button href="/elite">$ELITE tokenomics</Button>
          <Button href="/eltz" variant="ghost">
            $ELTZ
          </Button>
          <Button href="/legal" variant="ghost">
            Full legal disclaimer
          </Button>
        </div>

        <article className="panel mt-10 rounded-[2rem] p-6 md:p-8">
          <p className="kicker">Official token</p>
          <h2 className="font-display mt-3 text-3xl">$ELITE on Base</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {whitepaperFacts.map(([label, value]) => (
              <div key={label}>
                <p className="text-xs tracking-wide text-[#9aa4af] uppercase">
                  {label}
                </p>
                <p className="mt-2 font-display text-lg text-[#f3dc97]">
                  {value}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs tracking-wide text-[#9aa4af] uppercase">
            Contract address
          </p>
          <p className="mt-2 font-mono text-xs break-all text-[#c8c1b2] md:text-sm">
            {contract.address}
          </p>
          <div className="mt-4 flex min-w-0 flex-wrap gap-2">
            <CopyButton value={contract.address} label="Copy contract" />
            <Button href={links.basescan} variant="ghost" external>
              BaseScan
            </Button>
            <Button href="/" variant="ghost">
              Official website
            </Button>
          </div>
          <p className="mt-6 text-xs tracking-wide text-[#9aa4af] uppercase">
            Burn address
          </p>
          <p className="mt-2 font-mono text-xs break-all text-[#c8c1b2] md:text-sm">
            {eliteBurnAddress}
          </p>
          <div className="mt-4 flex min-w-0 flex-wrap gap-2">
            <CopyButton value={eliteBurnAddress} label="Copy burn address" />
            <Button
              href={`${links.basescan}?a=${eliteBurnAddress}`}
              variant="ghost"
              external
            >
              View burn on BaseScan
            </Button>
          </div>
        </article>

        <nav className="mt-12">
          <h2 className="font-display text-3xl">Contents</h2>
          <ol className="mt-4 space-y-2 text-sm leading-7 text-[#b7bfc8]">
            {whitepaperSections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="text-[#1ad4c8] hover:text-white"
                >
                  {section.number}. {section.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <article className="mt-12 space-y-12 pb-8">
          {whitepaperSections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="scroll-mt-24"
            >
              <p className="kicker">Section {section.number}</p>
              <h2 className="font-display mt-2 text-3xl">{section.title}</h2>
              <Blocks blocks={section.blocks} />
            </section>
          ))}
        </article>
      </section>
    </>
  );
}
