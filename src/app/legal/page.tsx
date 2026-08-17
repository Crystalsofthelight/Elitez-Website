import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import { links } from "@/lib/content";

export const metadata: Metadata = {
  title: "Legal",
  description:
    "Legal disclaimer, risk disclosure, and privacy notes for Elite Token and Dream Crafter.",
};

export default function LegalPage() {
  return (
    <>
      <PageHero
        kicker="Disclaimer"
        title="Read this before you participate."
        lede="This site presents the official Elitez ecosystem. It is informational. It is not an offer, solicitation, or recommendation to buy or sell any asset."
      />

      <section className="mx-auto max-w-3xl space-y-10 px-5 pb-16 text-[1.02rem] leading-8 text-[#c8c1b2]">
        <div>
          <h2 className="font-display text-3xl text-[#f3ead8]">
            No investment offering
          </h2>
          <p className="mt-4">
            Elite Token (“Elite”) is a digital token created for participation
            within the Elite ecosystem. Elite is not an investment, security,
            share, derivative, or financial instrument of any kind. Ownership or
            holding of Elite Token does not grant holders any right to profits,
            dividends, revenue, royalties, or distributions of any kind.
          </p>
        </div>

        <div>
          <h2 className="font-display text-3xl text-[#f3ead8]">
            No ownership or royalty rights
          </h2>
          <p className="mt-4">
            Elite Token does not represent ownership in Elitez Music; any
            musical recordings, compositions, or royalties; merchandise brands
            or intellectual property; social media accounts or monetization
            programs; or NFTs beyond ownership of an individual digital
            collectible. Any allocation of funds from music, merchandise, NFTs,
            or social media to ecosystem initiatives is entirely discretionary
            and may be modified, paused, or discontinued at any time.
          </p>
        </div>

        <div>
          <h2 className="font-display text-3xl text-[#f3ead8]">
            Liquidity and market risk
          </h2>
          <p className="mt-4">
            Funds contributed to liquidity pools are voluntary, not guaranteed,
            not scheduled, and subject to market conditions. Liquidity provision
            involves risk, including impermanent loss, price volatility, smart
            contract vulnerabilities, and reduced recoverability of contributed
            assets. Token value may fluctuate significantly or become worthless.
          </p>
        </div>

        <div>
          <h2 className="font-display text-3xl text-[#f3ead8]">
            Dream Crafter
          </h2>
          <p className="mt-4">
            Dream Crafter is a wallet-connected entertainment app on Base. It is
            not directed to children and is rated Adults Only 18+ on Google
            Play. Some activity is processed on public blockchains, which are
            transparent by design and cannot be deleted. Gameplay may involve
            tokens of value. Use is at your own risk and only where legally
            permitted.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button href={links.privacy} variant="ghost" external>
              Dream Crafter privacy policy
            </Button>
            <Button href={links.deleteData} variant="ghost" external>
              Request data deletion
            </Button>
          </div>
        </div>

        <div>
          <h2 className="font-display text-3xl text-[#f3ead8]">
            No advice
          </h2>
          <p className="mt-4">
            Nothing on this website is financial, legal, tax, or investment
            advice. Participants should consult qualified professionals and are
            solely responsible for compliance with local law. Forward-looking
            statements about plans or intentions are inherently uncertain and
            may change without notice.
          </p>
        </div>
      </section>
    </>
  );
}
