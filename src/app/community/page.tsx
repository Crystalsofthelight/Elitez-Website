import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { CopyButton } from "@/components/CopyButton";
import { PageHero } from "@/components/PageHero";
import { TokenMark } from "@/components/TokenMark";
import { contract, eltz, links, socials } from "@/lib/content";

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
        lede="Elitez is led by William Derek O’Malley (CrystalsoftheLight). The Elite token and Elitez Chip back music, social channels, and Dream Crafter on Base."
      />

      <section className="mx-auto max-w-6xl px-5">
        <div className="panel mb-8 rounded-[2rem] p-8">
          <p className="kicker">Team</p>
          <h2 className="font-display mt-3 text-3xl">CrystalsoftheLight</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-[#b7bfc8]">
            William Derek O’Malley builds Elitez Music, $ELITE, $ELTZ, and
            Dream Crafter. The Google Play developer listing is Crystals of the
            Light, based in Canada.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href={links.xFounder} external>
              X @DerekOMalley3
            </Button>
            <Button href={links.xTeam} variant="ghost" external>
              X @elitebasetoken
            </Button>
            <Button href={links.telegram} variant="ghost" external>
              Telegram
            </Button>
            <Button href={links.supportEmail} variant="ghost" external>
              elite@elitez.xyz
            </Button>
          </div>
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="panel rounded-[2rem] p-6 md:p-8">
            <div className="flex items-center gap-3">
              <TokenMark src={contract.icon} alt="$ELITE" size={40} />
              <p className="kicker">Base / $ELITE</p>
            </div>
            <p className="mt-3 font-mono text-sm break-all">{contract.address}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <CopyButton value={contract.address} label="Copy contract" />
              <Button href="/elite" variant="ghost">
                $ELITE page
              </Button>
              <Button href={links.uniswap} variant="ghost" external>
                Uniswap
              </Button>
            </div>
          </div>
          <div className="panel rounded-[2rem] p-6 md:p-8">
            <div className="flex items-center gap-3">
              <TokenMark src={eltz.icon} alt="$ELTZ" size={40} />
              <p className="kicker">Base / $ELTZ</p>
            </div>
            <p className="mt-3 font-mono text-sm break-all">{eltz.address}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <CopyButton value={eltz.address} label="Copy contract" />
              <Button href="/eltz" variant="ghost">
                $ELTZ page
              </Button>
              <Button href={eltz.uniswap} variant="ghost" external>
                Buy
              </Button>
              <Button href={eltz.basescan} variant="ghost" external>
                BaseScan
              </Button>
            </div>
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
          <p className="kicker">Print</p>
          <h2 className="font-display mt-3 text-3xl">Printable flyer</h2>
          <p className="mt-4 max-w-2xl leading-8 text-[#b7bfc8]">
            Download the Elitez flyer as a PDF and print it for events, shops,
            or the community. It covers $ELITE, $ELTZ, the music, and Dream
            Crafter.
          </p>
          <div className="mt-6">
            <Button href={links.flyer} download="Elitez-Flyer-Printable.pdf">
              Download flyer
            </Button>
          </div>
        </div>

        <div className="mt-10 panel rounded-[2rem] p-8">
          <h2 className="font-display text-3xl">Support</h2>
          <p className="mt-4 max-w-2xl leading-8 text-[#b7bfc8]">
            Dream Crafter includes an in-app support guide for wallets,
            deposits, play flow, and custom reels. For email support, write to
            elite@elitez.xyz. The Google Play developer address is also below.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href={links.facebookChat} external>
              Facebook community chat
            </Button>
            <Button href={`${links.app}`} variant="ghost" external>
              In-app support
            </Button>
            <Button href={links.supportEmail} variant="ghost" external>
              elite@elitez.xyz
            </Button>
            <Button href={links.supportEmailAlt} variant="ghost" external>
              CrystalsoftheLight333@gmail.com
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
