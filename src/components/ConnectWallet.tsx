"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useAccount, useConnect, useDisconnect, useSwitchChain } from "wagmi";
import { base } from "wagmi/chains";
import { shortAddress } from "@/lib/web3";

export function ConnectWallet({ compact = false }: { compact?: boolean }) {
  const { address, isConnected, chainId } = useAccount();
  const { connectors, connect, isPending, error } = useConnect();
  const { disconnect } = useDisconnect();
  const { switchChain, isPending: isSwitching } = useSwitchChain();
  const [open, setOpen] = useState(false);
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

  const uniqueConnectors = connectors.filter(
    (connector, index, list) =>
      list.findIndex((item) => item.id === connector.id) === index,
  );

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
                Use a Base-ready wallet to swap $ELITE and $ELTZ on this site.
              </p>
              <div className="mt-3 flex flex-col gap-2">
                {uniqueConnectors.map((connector) => (
                  <button
                    key={connector.uid}
                    type="button"
                    disabled={isPending}
                    onClick={() => connect({ connector, chainId: base.id })}
                    className="rounded-xl border border-[rgba(243,234,216,0.12)] px-3 py-2.5 text-left text-sm text-[#f3ead8] transition hover:border-[#1ad4c8]"
                  >
                    {connector.name === "Injected"
                      ? "Browser wallet"
                      : connector.name}
                  </button>
                ))}
              </div>
              {error ? (
                <p className="mt-2 px-2 text-xs text-[#e8b07a]">{error.message}</p>
              ) : null}
            </>
          )}
        </div>
      ) : null}
    </div>
  );
}
