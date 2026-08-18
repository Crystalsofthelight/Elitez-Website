import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import { dreamFeatures, links } from "@/lib/content";

export const metadata: Metadata = {
  title: "Dream Crafter",
  description:
    "Dream Crafter is a wallet-connected Base arcade and creator app. Sign in with a CDP email wallet, and gas fees are sponsored by CrystalsoftheLight via Paymaster.",
};

export default function DreamCrafterPage() {
  return (
    <>
      <PageHero
        kicker="Elitez.app · Google Play"
        title="Dream Crafter is the playable Elitez world."
        lede="A Base-powered arcade, creator, and collectible platform. Connect a wallet or create one with email, play, build, mint, and compete — with $ELITE and $ELTZ in the same session. Gas is sponsored."
      />

      <section className="mx-auto max-w-6xl px-5">
        <div className="overflow-hidden rounded-[2rem] border border-[rgba(215,179,90,0.16)]">
          <Image
            src="/brand/dc-sigil.jpg"
            alt="Dream Crafter sigil with circuit tree, crystal, and Elite coins"
            width={1600}
            height={900}
            className="h-auto w-full"
            priority
          />
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button href={links.app} external>
            Open elitez.app
          </Button>
          <Button href={links.playStore} variant="ghost" external>
            Download on Google Play
          </Button>
          <Button href={links.privacy} variant="ghost" external>
            Privacy policy
          </Button>
        </div>
        <p className="mt-4 text-sm text-[#9aa4af]">
          Adults only, 18+. Cash-rewards style play. Available where legally
          permitted.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Wallet-connected play",
              body: "Base network sessions with deposits, claims, swaps, withdrawals, and demo mode. Create or sign in with a CDP email wallet — no extension required.",
            },
            {
              title: "Creator economy",
              body: "Build custom reel machines, publish them socially, and mint them as Base collectibles.",
            },
            {
              title: "Multi-token utility",
              body: "$ELITE, $ELTZ, and other supported tokens can be used across games, staking, and launchpad surfaces.",
            },
          ].map((item) => (
            <div key={item.title} className="panel rounded-3xl p-6">
              <h2 className="font-display text-2xl">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-[#9aa4af]">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="panel rounded-[2rem] p-7">
            <p className="kicker">Paymaster</p>
            <h2 className="font-display mt-3 text-3xl">Gas is sponsored.</h2>
            <p className="mt-4 text-sm leading-7 text-[#b7bfc8]">
              Onchain actions in Dream Crafter are covered by Paymaster.
              CrystalsoftheLight sponsors gas so you can play, mint, and move
              value on Base without holding ETH just to pay network fees.
            </p>
          </div>
          <div className="panel rounded-[2rem] p-7">
            <p className="kicker">CDP email wallets</p>
            <h2 className="font-display mt-3 text-3xl">Sign in with email.</h2>
            <p className="mt-4 text-sm leading-7 text-[#b7bfc8]">
              New and returning players can create or sign in with a CDP email
              wallet from Coinbase Developer Platform. You still get a Base
              wallet — you just start with an email instead of an extension.
              Regular wallets remain supported.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-8">
        <p className="kicker">Inside the app</p>
        <h2 className="font-display mt-3 text-3xl break-words md:text-4xl">
          Every room on the floor.
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {dreamFeatures.map((feature) => (
            <a
              key={feature.title}
              href={feature.href}
              target="_blank"
              rel="noopener noreferrer"
              className="panel lift grid w-full min-w-0 overflow-hidden rounded-3xl"
            >
              <Image
                src={feature.image}
                alt=""
                width={640}
                height={220}
                className="h-auto w-full bg-black object-contain"
              />
              <div className="p-5">
                <h3 className="font-display text-2xl">{feature.title}</h3>
                <p className="mt-2 text-sm leading-7 text-[#9aa4af]">
                  {feature.body}
                </p>
                <p className="mt-4 text-sm text-[#1ad4c8]">Open in app →</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="panel grid items-center gap-8 rounded-[2rem] p-8 md:grid-cols-2 md:p-12">
          <div>
            <p className="kicker">How it fits Elitez</p>
            <h2 className="font-display mt-4 text-4xl">
              Music in the speakers. Tokens on the table.
            </h2>
            <p className="mt-5 leading-8 text-[#b7bfc8]">
              Dream Crafter is where the Elitez ecosystem becomes interactive.
              The same culture that lives on streaming platforms also plays
              inside the app. $ELITE is a playable token. $ELTZ, the Elitez
              Chip, is a native B20 token used for staking and in-world utility.
            </p>
          </div>
          <div className="relative overflow-hidden rounded-3xl">
            <Image
              src="/brand/play-icon.png"
              alt="Dream Crafter app icon"
              width={1024}
              height={1024}
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>
    </>
  );
}
