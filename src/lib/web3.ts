import { http, createConfig, createStorage, cookieStorage } from "wagmi";
import { base } from "wagmi/chains";
import { coinbaseWallet, injected } from "wagmi/connectors";
import { contract, eltz } from "@/lib/content";

export const NATIVE_ETH = "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE" as const;
export const WETH = "0x4200000000000000000000000000000000000006" as const;

export const wagmiConfig = createConfig({
  chains: [base],
  connectors: [
    injected({ shimDisconnect: true }),
    coinbaseWallet({
      appName: "Elitez",
      preference: { options: "all" },
    }),
  ],
  transports: {
    [base.id]: http(),
  },
  ssr: true,
  storage: createStorage({ storage: cookieStorage }),
});

export type SwapTokenId = "ETH" | "ELITE" | "ELTZ";

export const swapTokens: Record<
  SwapTokenId,
  {
    id: SwapTokenId;
    symbol: string;
    name: string;
    address: `0x${string}`;
    decimals: number;
    icon: string;
    isNative?: boolean;
  }
> = {
  ETH: {
    id: "ETH",
    symbol: "ETH",
    name: "Ether",
    address: NATIVE_ETH,
    decimals: 18,
    icon: "/brand/duck.png",
    isNative: true,
  },
  ELITE: {
    id: "ELITE",
    symbol: "ELITE",
    name: "Elite",
    address: contract.address as `0x${string}`,
    decimals: 18,
    icon: contract.icon,
  },
  ELTZ: {
    id: "ELTZ",
    symbol: "ELTZ",
    name: "Elitez Chip",
    address: eltz.address as `0x${string}`,
    decimals: 18,
    icon: eltz.icon,
  },
};

export function shortAddress(address: string) {
  return `${address.slice(0, 6)}…${address.slice(-4)}`;
}
