"use client";

import { useEffect, useMemo, useRef, useState } from "react";
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
const percents = [25, 50, 100] as const;

function formatTokenAmount(value: bigint, decimals: number) {
  const asNumber = Number(formatUnits(value, decimals));
  if (!Number.isFinite(asNumber)) return formatUnits(value, decimals);
  return asNumber.toLocaleString(undefined, {
    maximumFractionDigits: asNumber >= 1000 ? 2 : 6,
  });
}

function formatUsd(value?: string | number) {
  const amount = typeof value === "string" ? Number(value) : value;
  if (amount === undefined || !Number.isFinite(amount) || amount <= 0) {
    return "$0.00";
  }
  return amount.toLocaleString(undefined, {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: amount < 1 ? 4 : 2,
  });
}

function trimAmount(value: string) {
  if (!value.includes(".")) return value;
  return value.replace(/(\.\d*?[1-9])0+$/u, "$1").replace(/\.0+$/u, "");
}

function TokenIcon({ id, size = 28 }: { id: SwapTokenId; size?: number }) {
  const token = swapTokens[id];
  if (token.isNative) {
    return (
      <span
        className="inline-flex items-center justify-center rounded-full bg-[#627eea] font-bold text-white"
        style={{ width: size, height: size, fontSize: size * 0.42 }}
      >
        Ξ
      </span>
    );
  }
  return <TokenMark src={token.icon} alt="" size={size} />;
}

function TokenPicker({
  value,
  onChange,
}: {
  value: SwapTokenId;
  onChange: (id: SwapTokenId) => void;
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const token = swapTokens[value];

  useEffect(() => {
    function onPointer(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onPointer);
    return () => document.removeEventListener("mousedown", onPointer);
  }, []);

  return (
    <div ref={rootRef} className="relative shrink-0">
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className="flex items-center gap-2 rounded-full bg-[#1b2330] py-1.5 pr-2.5 pl-1.5 text-sm font-semibold text-white"
      >
        <TokenIcon id={value} size={26} />
        {token.symbol}
        <span className="text-[10px] text-[#9aa4af]">▾</span>
      </button>
      {open ? (
        <div className="absolute top-[calc(100%+8px)] right-0 z-20 w-52 overflow-hidden rounded-2xl border border-[rgba(215,179,90,0.16)] bg-[#101720] py-1 shadow-xl">
          {tokenIds.map((id) => (
            <button
              key={id}
              type="button"
              onClick={() => {
                onChange(id);
                setOpen(false);
              }}
              className="flex w-full items-center gap-3 px-3 py-2.5 text-left text-sm text-[#f3ead8] hover:bg-white/5"
            >
              <TokenIcon id={id} />
              <span>
                <span className="block font-semibold">{swapTokens[id].symbol}</span>
                <span className="block text-xs text-[#9aa4af]">
                  {swapTokens[id].name}
                </span>
              </span>
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export function SwapForm() {
  const { address, isConnected, chainId } = useAccount();
  const { switchChain } = useSwitchChain();
  const [fromId, setFromId] = useState<SwapTokenId>("ETH");
  const [toId, setToId] = useState<SwapTokenId>("ELITE");
  const [amount, setAmount] = useState("");
  const [activePercent, setActivePercent] = useState<number | null>(null);
  const [quote, setQuote] = useState<Quote | null>(null);
  const [quoteError, setQuoteError] = useState("");
  const [quoting, setQuoting] = useState(false);

  const from = swapTokens[fromId];
  const to = swapTokens[toId];
  const onBase = chainId === base.id;

  const ethBalance = useBalance({
    address,
    query: { enabled: Boolean(address) },
  });
  const eliteBalance = useReadContract({
    address: swapTokens.ELITE.address,
    abi: erc20Abi,
    functionName: "balanceOf",
    args: address ? [address] : undefined,
    query: { enabled: Boolean(address) && onBase },
  });
  const eltzBalance = useReadContract({
    address: swapTokens.ELTZ.address,
    abi: erc20Abi,
    functionName: "balanceOf",
    args: address ? [address] : undefined,
    query: { enabled: Boolean(address) && onBase },
  });

  const balances: Record<SwapTokenId, bigint | undefined> = {
    ETH: ethBalance.data?.value,
    ELITE: eliteBalance.data as bigint | undefined,
    ELTZ: eltzBalance.data as bigint | undefined,
  };

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

  const sellBalance = balances[fromId];
  const buyBalance = balances[toId];

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
    if (approveWait.isSuccess) void allowance.refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [approveWait.isSuccess]);

  useEffect(() => {
    if (swapWait.isSuccess) {
      void ethBalance.refetch();
      void eliteBalance.refetch();
      void eltzBalance.refetch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [swapWait.isSuccess]);

  const needsApprove =
    !from.isNative &&
    parsedAmount !== null &&
    typeof allowance.data === "bigint" &&
    allowance.data < parsedAmount;

  function chooseFrom(id: SwapTokenId) {
    if (id === toId) setToId(fromId);
    setFromId(id);
    setActivePercent(null);
    setQuote(null);
  }

  function chooseTo(id: SwapTokenId) {
    if (id === fromId) setFromId(toId);
    setToId(id);
    setQuote(null);
  }

  function flip() {
    setFromId(toId);
    setToId(fromId);
    setAmount("");
    setActivePercent(null);
    setQuote(null);
  }

  function setPercent(percent: number) {
    if (sellBalance === undefined) return;
    let value =
      percent === 100
        ? sellBalance
        : (sellBalance * BigInt(percent)) / BigInt(100);
    if (from.isNative && percent === 100) {
      const gasReserve = parseUnits("0.0002", 18);
      value =
        sellBalance > gasReserve ? sellBalance - gasReserve : BigInt(0);
    }
    setActivePercent(percent);
    setAmount(trimAmount(formatUnits(value, from.decimals)));
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
    ? formatTokenAmount(BigInt(quote.routeSummary.amountOut), to.decimals)
    : quoting
      ? "…"
      : "0";

  const rate =
    quote && parsedAmount && parsedAmount > BigInt(0)
      ? Number(
          formatUnits(BigInt(quote.routeSummary.amountOut), to.decimals),
        ) / Number(formatUnits(parsedAmount, from.decimals))
      : null;

  const status = approveWait.isLoading
    ? "Confirm approval in your wallet…"
    : swapWait.isLoading
      ? "Confirm the swap in your wallet…"
      : swapWait.isSuccess
        ? "Swap complete."
        : approveWait.isSuccess
          ? "Approved. Press Swap again."
          : "";

  const actionLabel = !isConnected
    ? "Connect wallet to swap"
    : !onBase
      ? "Switch to Base"
      : needsApprove
        ? isApproving
          ? "Approve in wallet…"
          : `Approve ${from.symbol}`
        : isSwapping
          ? "Confirm in wallet…"
          : `Swap ${from.symbol} to ${to.symbol}`;

  return (
    <div className="mx-auto w-full max-w-md">
      <h1 className="font-display mb-4 text-2xl">Swap</h1>

      <div className="relative">
        <section className="rounded-[1.6rem] bg-[#121821] p-4">
          <div className="flex items-center justify-between gap-3">
            <p className="text-sm text-[#9aa4af]">Sell</p>
            <div className="flex gap-1.5">
              {percents.map((percent) => (
                <button
                  key={percent}
                  type="button"
                  disabled={sellBalance === undefined}
                  onClick={() => setPercent(percent)}
                  className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                    activePercent === percent
                      ? "bg-[#1ad4c8] text-[#05211f]"
                      : "bg-[#2a3340] text-[#d5dbe3] hover:bg-[#343e4d]"
                  } disabled:opacity-50`}
                >
                  {percent === 100 ? "Max" : `${percent}%`}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-3 flex items-center gap-3">
            <input
              value={amount}
              onChange={(event) => {
                setActivePercent(null);
                setAmount(event.target.value.replace(/[^\d.]/g, ""));
              }}
              inputMode="decimal"
              placeholder="0"
              className="min-w-0 flex-1 bg-transparent text-4xl font-semibold tracking-tight text-white outline-none placeholder:text-[#3d4652]"
            />
            <TokenPicker value={fromId} onChange={chooseFrom} />
          </div>

          <div className="mt-2 flex items-center justify-between text-sm text-[#8b949e]">
            <span>{formatUsd(quote?.routeSummary.amountInUsd)}</span>
            <span>
              {sellBalance !== undefined
                ? `${formatTokenAmount(sellBalance, from.decimals)} ${from.symbol}`
                : isConnected
                  ? "Balance —"
                  : "Connect to see balance"}
            </span>
          </div>
        </section>

        <button
          type="button"
          onClick={flip}
          aria-label="Switch tokens"
          className="absolute top-1/2 left-1/2 z-10 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl border-4 border-[#06080b] bg-[#1b2330] text-lg text-white"
        >
          ↓
        </button>

        <section className="mt-1 rounded-[1.6rem] bg-[#121821] p-4">
          <p className="text-sm text-[#9aa4af]">Buy</p>
          <div className="mt-3 flex items-center gap-3">
            <p className="min-w-0 flex-1 text-4xl font-semibold tracking-tight text-white">
              {outDisplay}
            </p>
            <TokenPicker value={toId} onChange={chooseTo} />
          </div>
          <div className="mt-2 flex items-center justify-between text-sm text-[#8b949e]">
            <span>{formatUsd(quote?.routeSummary.amountOutUsd)}</span>
            <span>
              {buyBalance !== undefined
                ? `${formatTokenAmount(buyBalance, to.decimals)} ${to.symbol}`
                : ""}
            </span>
          </div>
        </section>
      </div>

      {rate ? (
        <p className="mt-3 px-1 text-sm text-[#9aa4af]">
          1 {from.symbol} ≈ {rate.toLocaleString(undefined, { maximumFractionDigits: 4 })}{" "}
          {to.symbol}
        </p>
      ) : null}

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
        className="mt-4 w-full rounded-2xl bg-[#0052ff] px-5 py-4 text-base font-semibold text-white disabled:cursor-not-allowed disabled:bg-[#1b2330] disabled:text-[#6b7280]"
      >
        {actionLabel}
      </button>

      <p className="mt-3 px-1 text-xs leading-5 text-[#6b7280]">
        1% slippage · Base network · Not financial advice
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
