"use client";

import { useState } from "react";

export function CopyButton({
  value,
  label = "Copy",
}: {
  value: string;
  label?: string;
}) {
  const [copied, setCopied] = useState(false);

  async function onCopy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      onClick={onCopy}
      className="rounded-full border border-[rgba(243,234,216,0.16)] px-3 py-1 text-xs font-semibold tracking-wide text-[#f3ead8] transition hover:border-[#1ad4c8]"
    >
      {copied ? "Copied" : label}
    </button>
  );
}
