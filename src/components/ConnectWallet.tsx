"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useAccount, useConnect, useDisconnect, useSwitchChain } from "wagmi";
import { base } from "wagmi/chains";
import { shortAddress } from "@/lib/web3";

function connectorLabel(name: string) {
  if (name === "Injected" || name === "Browser wallet") return "Browser wallet";
  return name;
}

export function ConnectWallet({ compact = false }: { compact?: boolean }) {
  const { address, isConnected, chainId } = useAccount();
  const { connectors, connectAsync, isPending, error, reset } = useConnect();
  const { disconnect } = useDisconnect();
  const { switchChain, isPending: isSwitching } = useSwitchChain();
  const [open, setOpen] = useState(false);
  const [readyIds, setReadyIds] = useState<string[]>([]);
  const [localError, setLocalError] = useState("");
  const rootRef = useRef<HTMLDivElement>(null);
  const wrongNetwork = isConnected && chainId !== base.id;

  useEffect(() => {
    function onPointer(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onPointer);
    return () => document.removeEventListener("mousedown", onPointer);
  }, []);

  useEffect(() => {
    let cancelled = false;

    async function detect() {
      const ready: string[] = [];
      for (const connector of connectors) {
        try {
          const provider = await connector.getProvider();
          if (provider) ready.push(connector.uid);
        } catch {
          // Skip wallets that are listed but not actually injected.
        }
      }
      if (!cancelled) setReadyIds(ready);
    }

    void detect();
    const first = window.setTimeout(() => void detect(), 400);
    const second = window.setTimeout(() => void detect(), 1500);
    return () => {
      cancelled = true;
      window.clearTimeout(first);
      window.clearTimeout(second);
    };
  }, [connectors]);

  const visibleConnectors = connectors.filter((connector, index, list) => {
    const first = list.findIndex((item) => item.id === connector.id) === index;
    if (!first) return false;
    if (connector.id === "coinbaseWalletSDK" || connector.type === "coinbaseWallet") {
      return true;
    }
    return readyIds.includes(connector.uid);
  });

  async function onConnect(connector: (typeof connectors)[number]) {
    setLocalError("");
    reset();
    try {
      await connectAsync({ connector, chainId: base.id });
      setOpen(false);
    } catch (caught) {
      const message =
        caught instanceof Error ? caught.message : "Could not connect wallet.";
      if (message.includes("Provider not found")) {
        setLocalError(
          "No browser wallet was found. Install MetaMask or Coinbase Wallet, then refresh.",
        );
        return;
      }
      if (message.toLowerCase().includes("rejected") || message.toLowerCase().includes("denied")) {
        setLocalError("Connection was cancelled.");
        return;
      }
      setLocalError(message.replace(/\s*Version:.*$/u, ""));
    }
  }

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-label={isConnected ? "Wallet connected" : "Connect wallet"}
        className="block rounded-md transition hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1ad4c8]"
      >
        {/* Custom brand art already includes the label. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={
            isConnected
              ? "/brand/connected-button.png"
              : "/brand/connect-button.png"
          }
          alt={isConnected ? "Connected" : "Connect wallet"}
          className={`w-auto object-contain ${compact ? "h-9 max-w-[148px]" : "h-10 max-w-[176px] sm:h-11 sm:max-w-[200px]"}`}
        />
      </button>

      {open ? (
        <div className="absolute top-[calc(100%+10px)] right-0 z-[60] w-72 rounded-2xl border border-[rgba(215,179,90,0.18)] bg-[#0b1016] p-3 shadow-[0_20px_50px_rgba(0,0,0,0.55)]">
          {isConnected && address ? (
            <>
              <p className="px-2 pt-1 text-xs tracking-[0.18em] text-[#1ad4c8] uppercase">
                Wallet
              </p>
              <p className="mt-2 px-2 font-mono text-sm text-[#f3ead8]">
                {shortAddress(address)}
              </p>
              <p className="mt-1 px-2 text-xs text-[#9aa4af]">
                {wrongNetwork ? "Wrong network" : "Base"}
              </p>
              {wrongNetwork ? (
                <button
                  type="button"
                  onClick={() => switchChain({ chainId: base.id })}
                  className="mt-3 w-full rounded-full bg-[#1ad4c8] px-4 py-2 text-sm font-semibold text-[#05211f]"
                >
                  {isSwitching ? "Switching…" : "Switch to Base"}
                </button>
              ) : (
                <Link
                  href="/swap"
                  onClick={() => setOpen(false)}
                  className="mt-3 flex w-full items-center justify-center rounded-full bg-[linear-gradient(180deg,#f3dc97,#c9a047)] px-4 py-2 text-sm font-semibold text-[#1a1408]"
                >
                  Swap $ELITE / $ELTZ
                </Link>
              )}
              <button
                type="button"
                onClick={() => {
                  disconnect();
                  setOpen(false);
                }}
                className="mt-2 w-full rounded-full border border-[rgba(243,234,216,0.16)] px-4 py-2 text-sm text-[#f3ead8]"
              >
                Disconnect
              </button>
            </>
          ) : (
            <>
              <p className="px-2 pt-1 text-xs tracking-[0.18em] text-[#1ad4c8] uppercase">
                Connect wallet
              </p>
              <p className="mt-2 px-2 text-xs leading-5 text-[#9aa4af]">
                Use MetaMask, Coinbase Wallet, or another Base-ready wallet.
              </p>
              <div className="mt-3 flex flex-col gap-2">
                {visibleConnectors.map((connector) => (
                  <button
                    key={connector.uid}
                    type="button"
                    disabled={isPending}
                    onClick={() => void onConnect(connector)}
                    className="rounded-xl border border-[rgba(243,234,216,0.12)] px-3 py-2.5 text-left text-sm text-[#f3ead8] transition hover:border-[#1ad4c8]"
                  >
                    {connectorLabel(connector.name)}
                  </button>
                ))}
              </div>
              {visibleConnectors.length === 0 ? (
                <p className="mt-2 px-2 text-xs leading-5 text-[#e8b07a]">
                  No browser wallet detected yet. Install one, then refresh.
                </p>
              ) : null}
              <div className="mt-3 flex flex-col gap-1 px-2 text-xs">
                <a
                  href="https://metamask.io/download"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1ad4c8] hover:text-white"
                >
                  Install MetaMask
                </a>
                <a
                  href="https://www.coinbase.com/wallet/downloads"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1ad4c8] hover:text-white"
                >
                  Install Coinbase Wallet
                </a>
              </div>
              {localError || error ? (
                <p className="mt-2 px-2 text-xs text-[#e8b07a]">
                  {localError ||
                    error?.message.replace(/\s*Version:.*$/u, "")}
                </p>
              ) : null}
            </>
          )}
        </div>
      ) : null}
    </div>
  );
}
