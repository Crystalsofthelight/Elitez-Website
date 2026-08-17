import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { CopyButton } from "@/components/CopyButton";
import { PageHero } from "@/components/PageHero";
import { contract, links, socials } from "@/lib/content";

export const metadata: Metadata = {
  title: "Community",
  description:
    "Stay connected with the Elitez team across Facebook, X, Telegram, TikTok, and YouTube.",
};

export default function CommunityPage() {
  return (
    <>
      <PageHero
        kicker="Stay connected"
        title="The team is on the open web."
        lede="The Elite token backs multiple projects — tangible NFT work, music on every major streaming platform, social channels, and Dream Crafter on Base."
      />

      <section className="mx-auto max-w-6xl px-5">
        <div className="panel rounded-[2rem] p-6 md:p-8">
          <p className="kicker">Base / $ELITE</p>
          <p className="mt-3 font-mono text-sm break-all">{contract.address}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <CopyButton value={contract.address} label="Copy contract" />
            <Button href={links.app} external>
              Open Dream Crafter
            </Button>
            <Button href={links.uniswap} variant="ghost" external>
              Uniswap
            </Button>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {socials.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="panel lift rounded-3xl p-6"
            >
              <h2 className="font-display text-2xl">{item.label}</h2>
              <p className="mt-2 text-sm text-[#9aa4af]">{item.note}</p>
              <p className="mt-5 text-sm text-[#1ad4c8]">Visit →</p>
            </a>
          ))}
        </div>

        <div className="mt-10 panel rounded-[2rem] p-8">
          <h2 className="font-display text-3xl">Support</h2>
          <p className="mt-4 max-w-2xl leading-8 text-[#b7bfc8]">
            Dream Crafter includes an in-app support guide for wallets,
            deposits, play flow, and custom reels. For email support related to
            the Google Play listing, use the developer address below.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href={`${links.app}`} external>
              In-app support
            </Button>
            <Button href={links.supportEmail} variant="ghost" external>
              CrystalsoftheLight333@gmail.com
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
