export const PUBLIC_BASE_RPC = "https://mainnet.base.org";

export function getBaseRpcUrl() {
  return (
    process.env.BASE_RPC_URL ||
    process.env.NEXT_PUBLIC_BASE_RPC_URL ||
    PUBLIC_BASE_RPC
  );
}
