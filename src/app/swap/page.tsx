import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SwapForm } from "@/components/SwapForm";

export const metadata: Metadata = {
  title: "Swap",
  description:
    "Connect a wallet and swap $ELITE or $ELTZ on Base without leaving Elitez.",
};

export default function SwapPage() {
  return (
    <>
      <PageHero
        kicker="Base swap"
        title="Swap $ELITE or $ELTZ in the app."
        lede="Connect a wallet in the top right, then trade ETH, $ELITE, and $ELTZ on Base. Quotes use live on-chain liquidity."
      />
      <section className="mx-auto max-w-6xl px-5 pb-16">
        <SwapForm />
      </section>
    </>
  );
}
