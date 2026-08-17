import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "White Paper",
  description:
    "Elite Token is a creator-driven ecosystem integrating music, merchandising, NFTs, and community participation.",
};

const sections = [
  {
    title: "Abstract",
    body: [
      "Elite Token is a creator-led blockchain ecosystem designed to explore how real-world creative revenue streams — music, merchandise, and digital collectibles — can support long-term token liquidity and community engagement.",
      "The Elite ecosystem includes Elitez Music, a growing catalog of original tracks distributed globally across Spotify, Apple Music, Amazon Music, YouTube Music, iTunes, iHeartRadio, and others. Elitez Music is also available in the content libraries of Facebook, TikTok, YouTube, and Instagram.",
      "Revenue generated from these creative initiatives may be voluntarily allocated by the project to support ecosystem development, including liquidity provisioning, operational costs, and reinvestment into future content.",
      "Elite Token does not represent ownership, profit rights, or entitlement to royalties. Any contributions made to liquidity or ecosystem initiatives are discretionary and subject to change.",
    ],
  },
  {
    title: "Vision",
    body: [
      "To build a creator-driven blockchain ecosystem where music, art, and community engagement intersect with decentralized technology to support long-term sustainability and cultural relevance.",
    ],
  },
  {
    title: "Mission",
    body: [
      "Elite Token’s mission is to empower creators and supporters through participation, creativity, and shared ecosystem growth. By encouraging streaming, sharing, and engagement with Elite content, the project seeks to organically expand its reach while reinvesting in future development.",
      "Elite is focused on community involvement, not passive income expectations.",
    ],
  },
];

export default function WhitePaperPage() {
  return (
    <>
      <PageHero
        kicker="Official paper"
        title="A creator-driven ecosystem."
        lede="Elite Token integrates music, merchandising, NFTs, and community participation. This page is a clean presentation of the official Elite white paper — written for readers, not as a sales document."
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

        <article className="mt-12 space-y-12">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="font-display text-3xl">{section.title}</h2>
              <div className="mt-4 space-y-4 text-[1.05rem] leading-8 text-[#c8c1b2]">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}

          <section>
            <h2 className="font-display text-3xl">Technology and ecosystem</h2>
            <div className="mt-6 grid gap-4">
              {[
                [
                  "Blockchain",
                  "Elite Token is deployed on Base, using low-cost, scalable infrastructure. Liquidity pools operate on decentralized exchanges with transparent smart contracts. Liquidity contributions are voluntary and not guaranteed on a fixed schedule.",
                ],
                [
                  "Music",
                  "Elitez Music is distributed globally and licensed for creator use on major social platforms. Revenue may be allocated to liquidity, production, and expansion.",
                ],
                [
                  "Merchandising",
                  "Branded Elite merchandise is offered through platforms such as Amazon. Royalties may support ecosystem initiatives.",
                ],
                [
                  "NFTs",
                  "A limited collection of digital collectibles featuring Elite characters. NFTs are creative and community artifacts, not financial instruments.",
                ],
                [
                  "Social",
                  "Monetized social platforms under the Elitez brand may contribute proceeds toward ecosystem development.",
                ],
                [
                  "Dream Crafter",
                  "The live product layer of the ecosystem: a wallet-connected Base app for games, custom reels, collectibles, staking, and multi-token play, including $ELITE.",
                ],
              ].map(([title, body]) => (
                <div key={title} className="panel rounded-3xl p-6">
                  <h3 className="font-display text-xl">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#9aa4af]">{body}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display text-3xl">Roadmap</h2>
            <div className="mt-6 space-y-4">
              {[
                [
                  "Phase 1 — Foundation",
                  "Deploy Elite Token on Base. Release the Elitez Music catalog. Launch merchandise. Activate monetized social channels.",
                ],
                [
                  "Phase 2 — Engagement",
                  "Release the first NFT collection. Expand creator collaborations. Increase music output and content licensing.",
                ],
                [
                  "Phase 3 — Growth",
                  "Expand the catalog and partnerships. Explore community engagement tools. Continue scaling creative and social initiatives. Dream Crafter extends this phase into playable, onchain entertainment.",
                ],
              ].map(([title, body]) => (
                <div key={title} className="border-l border-[#d7b35a]/40 pl-5">
                  <h3 className="font-display text-xl">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-[#9aa4af]">{body}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display text-3xl">Key disclosures</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-[#b7bfc8]">
              <li>Elite Token is not an investment vehicle.</li>
              <li>
                Holding the token does not grant ownership, profit rights,
                dividends, or claims to royalties.
              </li>
              <li>Liquidity contributions are voluntary and subject to change.</li>
              <li>Cryptocurrency markets are volatile and involve risk.</li>
              <li>
                Participation should be based on interest in the ecosystem, not
                financial expectations.
              </li>
            </ul>
          </section>
        </article>
      </section>
    </>
  );
}
