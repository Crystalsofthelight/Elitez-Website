import { NextResponse } from "next/server";

const KYBER = "https://aggregator-api.kyberswap.com/base/api/v1/route/build";

export async function POST(request: Request) {
  const body = await request.json();
  const response = await fetch(KYBER, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-client-id": "elitez",
    },
    body: JSON.stringify({
      routeSummary: body.routeSummary,
      sender: body.sender,
      recipient: body.recipient,
      slippageTolerance: body.slippageTolerance ?? 100,
    }),
  });
  const payload = await response.json();

  if (!response.ok || payload.code !== 0) {
    return NextResponse.json(
      { error: payload.message || "Could not build the swap." },
      { status: 400 },
    );
  }

  return NextResponse.json(payload.data);
}
