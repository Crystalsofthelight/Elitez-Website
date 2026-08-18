import { NextResponse } from "next/server";

const KYBER = "https://aggregator-api.kyberswap.com/base/api/v1/routes";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const tokenIn = searchParams.get("tokenIn");
  const tokenOut = searchParams.get("tokenOut");
  const amountIn = searchParams.get("amountIn");

  if (!tokenIn || !tokenOut || !amountIn) {
    return NextResponse.json(
      { error: "tokenIn, tokenOut, and amountIn are required." },
      { status: 400 },
    );
  }

  const url = `${KYBER}?tokenIn=${tokenIn}&tokenOut=${tokenOut}&amountIn=${amountIn}&gasInclude=true`;
  const response = await fetch(url, {
    headers: { "x-client-id": "elitez" },
    cache: "no-store",
  });
  const payload = await response.json();

  if (!response.ok || payload.code !== 0) {
    return NextResponse.json(
      { error: payload.message || "No swap route found." },
      { status: 400 },
    );
  }

  return NextResponse.json(payload.data);
}
