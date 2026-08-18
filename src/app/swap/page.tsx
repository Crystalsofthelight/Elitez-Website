import type { Metadata } from "next";
import { SwapForm } from "@/components/SwapForm";

export const metadata: Metadata = {
  title: "Swap",
  description:
    "Connect a wallet and swap $ELITE or $ELTZ on Base without leaving Elitez.",
};

export default function SwapPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 pt-10 pb-20">
      <SwapForm />
    </section>
  );
}
