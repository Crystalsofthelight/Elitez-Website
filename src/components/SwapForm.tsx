"use client";

import { useEffect, useMemo, useState } from "react";
import {
  useAccount,
  useBalance,
  useReadContract,
  useSendTransaction,
  useSwitchChain,
  useWaitForTransactionReceipt,
  useWriteContract,
} from "wagmi";
import { base } from "wagmi/chains";
import {
  erc20Abi,
  formatUnits,
  maxUint256,
  parseUnits,
  type Address,
} from "viem";
import { ConnectWallet } from "@/components/ConnectWallet";
import { TokenMark } from "@/components/TokenMark";
import { type SwapTokenId, swapTokens } from "@/lib/web3";

type Quote = {
  routeSummary: {
    tokenIn: string;
    tokenOut: string;
    amountIn: string;
    amountOut: string;
    amountInUsd?: string;
    amountOutUsd?: string;
    routerAddress?: string;
  };
  routerAddress?: string;
};

const tokenIds = Object.keys(swapTokens) as SwapTokenId[];

function TokenSelect({
  value,
  exclude,
  onChange,
}: {
  value: SwapTokenId;
  exclude: SwapTokenId;
  onChange: (id: SwapTokenId) => void;
}) {
  return (
    <div className="flex gap-2">
      {tokenIds
        .filter((id) => id !== exclude)
        .map((id) => {
          const token = swapTokens[id];
          const active = value === id;
          return (
            <button
              key={id}
              type="button"
              onClick={() => onChange(id)}
              className={`flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm ${
                active
                  ? "border-[#1ad4c8] bg-white/5 text-[#f3ead8]"
                  : "border-[rgba(243,234,216,0.12)] text-[#9aa4af]"
              }`}
            >
              {token.isNative ? (
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#627eea] text-[10px] font-bold text-white">
                  Ξ
                </span>
              ) : (
                <TokenMark src={token.icon} alt="" size={20} />
              )}
              {token.symbol}
            </button>
          );
        })}
    </div>
  );
}

export function SwapForm() {
  const { address, isConnected, chainId } = useAccount();
  const { switchChain } = useSwitchChain();
  const [fromId, setFromId] = useState<SwapTokenId>("ETH");
  const [toId, setToId] = useState<SwapTokenId>("ELITE");
  const [amount, setAmount] = useState("");
  const [quote, setQuote] = useState<Quote | null>(null);
  const [quoteError, setQuoteError] = useState("");
  const [quoting, setQuoting] = useState(false);

  const from = swapTokens[fromId];
  const to = swapTokens[toId];
  const onBase = chainId === base.id;

  const ethBalance = useBalance({
    address,
    query: { enabled: Boolean(address) && from.isNative },
  });
  const tokenBalance = useReadContract({
    address: from.address,
    abi: erc20Abi,
    functionName: "balanceOf",
    args: address ? [address] : undefined,
    query: { enabled: Boolean(address) && !from.isNative && onBase },
  });

  const router = (quote?.routerAddress ||
    quote?.routeSummary.routerAddress) as Address | undefined;
  const allowance = useReadContract({
    address: from.address,
    abi: erc20Abi,
    functionName: "allowance",
    args: address && router ? [address, router] : undefined,
    query: { enabled: Boolean(address && router && !from.isNative && onBase) },
  });

  const parsedAmount = useMemo(() => {
    try {
      if (!amount || Number(amount) <= 0) return null;
      return parseUnits(amount, from.decimals);
    } catch {
      return null;
    }
  }, [amount, from.decimals]);

  const balance = from.isNative
    ? ethBalance.data?.value
    : (tokenBalance.data as bigint | undefined);

  useEffect(() => {
    if (!parsedAmount) {
      setQuote(null);
      setQuoteError("");
      return;
    }

    const handle = window.setTimeout(async () => {
      setQuoting(true);
      setQuoteError("");
      try {
        const response = await fetch(
          `/api/swap/quote?tokenIn=${from.address}&tokenOut=${to.address}&amountIn=${parsedAmount.toString()}`,
        );
        const payload = await response.json();
        if (!response.ok) {
          throw new Error(payload.error || "No route found.");
        }
        setQuote(payload);
      } catch (error) {
        setQuote(null);
        setQuoteError(
          error instanceof Error ? error.message : "Could not fetch a quote.",
        );
      } finally {
        setQuoting(false);
      }
    }, 350);

    return () => window.clearTimeout(handle);
  }, [parsedAmount, from.address, to.address]);

  const {
    writeContract,
    data: approveHash,
    isPending: isApproving,
    error: approveError,
    reset: resetApprove,
  } = useWriteContract();
  const approveWait = useWaitForTransactionReceipt({ hash: approveHash });
  const {
    sendTransaction,
    data: swapHash,
    isPending: isSwapping,
    error: swapError,
    reset: resetSwap,
  } = useSendTransaction();
  const swapWait = useWaitForTransactionReceipt({ hash: swapHash });

  useEffect(() => {
    if (approveWait.isSuccess) {
      void allowance.refetch();
    }
    // refetch identity is stable enough for this success edge
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [approveWait.isSuccess]);

  useEffect(() => {
    if (swapWait.isSuccess) {
      void ethBalance.refetch();
      void tokenBalance.refetch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [swapWait.isSuccess]);

  const needsApprove =
    !from.isNative &&
    parsedAmount !== null &&
    typeof allowance.data === "bigint" &&
    allowance.data < parsedAmount;

  function flip() {
    setFromId(toId);
    setToId(fromId);
    setAmount("");
    setQuote(null);
  }

  async function onSwap() {
    if (!address || !quote || !parsedAmount) return;
    resetSwap();
    resetApprove();

    if (!onBase) {
      switchChain({ chainId: base.id });
      return;
    }

    if (needsApprove && router) {
      writeContract({
        address: from.address,
        abi: erc20Abi,
        functionName: "approve",
        args: [router, maxUint256],
      });
      return;
    }

    const response = await fetch("/api/swap/build", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        routeSummary: quote.routeSummary,
        sender: address,
        recipient: address,
        slippageTolerance: 100,
      }),
    });
    const payload = await response.json();
    if (!response.ok) {
      setQuoteError(payload.error || "Could not build the swap.");
      return;
    }

    sendTransaction({
      to: payload.routerAddress as Address,
      data: payload.data as `0x${string}`,
      value: payload.transactionValue
        ? BigInt(payload.transactionValue)
        : undefined,
    });
  }

  const outDisplay = quote
    ? Number(formatUnits(BigInt(quote.routeSummary.amountOut), to.decimals)).toLocaleString(
        undefined,
        { maximumFractionDigits: 6 },
      )
    : "—";

  const status = approveWait.isLoading
    ? "Waiting for approval…"
    : swapWait.isLoading
      ? "Waiting for swap…"
      : swapWait.isSuccess
        ? "Swap confirmed."
        : approveWait.isSuccess
          ? "Approved. Swap again to complete."
          : "";

  const actionLabel = !isConnected
    ? "Connect to swap"
    : !onBase
      ? "Switch to Base"
      : needsApprove
        ? isApproving
          ? "Approve in wallet…"
          : "Approve token"
        : isSwapping
          ? "Confirm in wallet…"
          : `Swap ${from.symbol} for ${to.symbol}`;

  return (
    <div className="panel mx-auto max-w-xl rounded-[2rem] p-6 md:p-8">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="kicker">In-app swap</p>
          <h2 className="font-display mt-2 text-3xl">Trade on Base.</h2>
        </div>
        <ConnectWallet compact />
      </div>

      <div className="mt-6 rounded-3xl border border-[rgba(215,179,90,0.14)] bg-black/20 p-4">
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs tracking-wide text-[#9aa4af] uppercase">From</p>
          {balance !== undefined ? (
            <button
              type="button"
              className="text-xs text-[#1ad4c8]"
              onClick={() => setAmount(formatUnits(balance, from.decimals))}
            >
              Balance {Number(formatUnits(balance, from.decimals)).toLocaleString(undefined, { maximumFractionDigits: 4 })}
            </button>
          ) : null}
        </div>
        <TokenSelect
          value={fromId}
          exclude={toId}
          onChange={(id) => {
            setFromId(id);
            setQuote(null);
          }}
        />
        <input
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
          inputMode="decimal"
          placeholder="0.0"
          className="mt-3 w-full bg-transparent text-3xl text-[#f3ead8] outline-none placeholder:text-[#4b5560]"
        />
      </div>

      <div className="flex justify-center py-3">
        <button
          type="button"
          onClick={flip}
          className="rounded-full border border-[rgba(243,234,216,0.16)] px-3 py-1 text-sm text-[#f3ead8]"
        >
          ↕
        </button>
      </div>

      <div className="rounded-3xl border border-[rgba(215,179,90,0.14)] bg-black/20 p-4">
        <p className="text-xs tracking-wide text-[#9aa4af] uppercase">To</p>
        <TokenSelect
          value={toId}
          exclude={fromId}
          onChange={(id) => {
            setToId(id);
            setQuote(null);
          }}
        />
        <p className="mt-3 text-3xl text-[#f3ead8]">{quoting ? "…" : outDisplay}</p>
        {quote?.routeSummary.amountOutUsd ? (
          <p className="mt-1 text-xs text-[#9aa4af]">
            ≈ ${Number(quote.routeSummary.amountOutUsd).toFixed(2)}
          </p>
        ) : null}
      </div>

      <button
        type="button"
        disabled={
          !isConnected ||
          !parsedAmount ||
          !quote ||
          quoting ||
          isApproving ||
          isSwapping ||
          approveWait.isLoading ||
          swapWait.isLoading
        }
        onClick={onSwap}
        className="mt-6 w-full rounded-full bg-[linear-gradient(180deg,#f3dc97,#c9a047)] px-5 py-3 text-sm font-semibold text-[#1a1408] disabled:cursor-not-allowed disabled:opacity-50"
      >
        {actionLabel}
      </button>

      <p className="mt-3 text-xs leading-5 text-[#9aa4af]">
        1% slippage. Quotes route through on-chain liquidity on Base. This is
        not financial advice.
      </p>
      {quoteError ? (
        <p className="mt-2 text-sm text-[#e8b07a]">{quoteError}</p>
      ) : null}
      {approveError ? (
        <p className="mt-2 text-sm text-[#e8b07a]">{approveError.message}</p>
      ) : null}
      {swapError ? (
        <p className="mt-2 text-sm text-[#e8b07a]">{swapError.message}</p>
      ) : null}
      {status ? <p className="mt-2 text-sm text-[#1ad4c8]">{status}</p> : null}
    </div>
  );
}
