import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import { links } from "@/lib/content";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Common questions about Elitez Music, $ELITE, $ELTZ, and Dream Crafter.",
};

const faqs = [
  {
    q: "What is Elitez?",
    a: "Elitez is a creator-led ecosystem on Base: original music, two tokens ($ELITE and $ELTZ), and Dream Crafter, a wallet-connected arcade and creator app.",
  },
  {
    q: "What is the difference between $ELITE and $ELTZ?",
    a: "$ELITE is the original creator token (ERC-20) tied to the music and brand. $ELTZ is Elitez Chip, a native B20 token used for play and utility inside Dream Crafter. Each has its own contract and page.",
  },
  {
    q: "Is Dream Crafter a casino?",
    a: "Dream Crafter is an 18+ entertainment app with wallet-connected games, custom reels, collectibles, and onchain rewards. It includes a demo mode so you can learn the floor first.",
  },
  {
    q: "Do I need ETH for gas?",
    a: "In Dream Crafter, gas is sponsored by CrystalsoftheLight via Paymaster. On this website’s swap page, network fees still apply as usual.",
  },
  {
    q: "Can I sign in with email?",
    a: "Yes. Dream Crafter supports CDP email wallets from Coinbase Developer Platform, as well as regular wallets like Coinbase Wallet and MetaMask.",
  },
  {
    q: "Where do music royalties go?",
    a: "A portion of royalties may be allocated toward the Base / $ELITE ecosystem, including liquidity support. Those allocations are discretionary and can change.",
  },
  {
    q: "What is B20?",
    a: "B20 is Base’s protocol-level token standard — the chain’s own counterpart to ERC-20. $ELTZ is a native B20 token.",
  },
  {
    q: "Is the app on iOS?",
    a: "Dream Crafter is available on the web at elitez.app and on Google Play for Android. There is not a listed iOS App Store build right now.",
  },
  {
    q: "Where is the white paper?",
    a: "The official Elitez white paper lives at /whitepaper.",
  },
];

export default function FaqPage() {
  return (
    <>
      <PageHero
        kicker="FAQ"
        title="Straight answers."
        lede="The questions people ask first about the music, the tokens, and Dream Crafter."
      />
      <section className="mx-auto max-w-3xl space-y-4 px-5 pb-16">
        {faqs.map((item) => (
          <article key={item.q} className="panel rounded-3xl p-6">
            <h2 className="font-display text-xl">{item.q}</h2>
            <p className="mt-3 text-sm leading-7 text-[#b7bfc8]">{item.a}</p>
          </article>
        ))}
        <div className="flex flex-wrap gap-3 pt-4">
          <Button href="/community">Community</Button>
          <Button href={links.supportEmail} variant="ghost" external>
            elite@elitez.xyz
          </Button>
        </div>
      </section>
    </>
  );
}
