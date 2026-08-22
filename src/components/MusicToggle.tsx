"use client";

import { useMusic } from "@/components/MusicProvider";

export function MusicToggle({ compact = false }: { compact?: boolean }) {
  const { on, toggle } = useMusic();
  const size = compact
    ? "h-9 w-[99px]"
    : "h-10 w-[110px] sm:h-11 sm:w-[121px]";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      aria-label={on ? "Turn Elitez music off" : "Turn Elitez music on"}
      onClick={toggle}
      className={`relative block rounded-md ${size} ${
        on ? "music-toggle-live" : "music-toggle-invite"
      } focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1ad4c8]`}
    >
      <span className="relative block h-full w-full overflow-hidden rounded-md">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand/elite-music-button.jpg"
        alt=""
        className={`absolute inset-0 h-full w-full scale-[1.02] object-cover object-center transition duration-300 ${
          on
            ? "brightness-125 saturate-125"
            : "brightness-[0.82] saturate-90 opacity-95"
        }`}
      />
      <span
        className={`absolute right-0.5 bottom-0.5 z-10 inline-flex h-3 w-5 items-center rounded-full border shadow-sm transition ${
          on
            ? "border-[#7af5ee] bg-[#1ad4c8]"
            : "border-[rgba(243,234,216,0.35)] bg-black/70"
        }`}
      >
        <span
          className={`absolute top-[1px] h-2.5 w-2.5 rounded-full bg-white shadow transition-all ${
            on ? "left-[9px]" : "left-[1px]"
          }`}
        />
      </span>
      </span>
    </button>
  );
}
