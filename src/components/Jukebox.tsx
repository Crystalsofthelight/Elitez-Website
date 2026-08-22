"use client";

import { useEffect, useRef, useState } from "react";
import { youtubeChannels } from "@/lib/content";

const STORAGE_KEY = "elitez-jukebox";

type Channel = (typeof youtubeChannels)[number];
type Progress = {
  playlistIndex: number;
  time: number;
};
type Store = {
  activeId: string;
  progress: Record<string, Progress>;
};

type YTPlayer = {
  loadPlaylist: (args: Record<string, unknown>) => void;
  playVideo: () => void;
  nextVideo: () => void;
  previousVideo: () => void;
  getCurrentTime: () => number;
  getPlaylist: () => string[] | undefined;
  getPlaylistIndex: () => number;
  destroy: () => void;
};

declare global {
  interface Window {
    YT?: {
      Player: new (
        el: string | HTMLElement,
        opts: Record<string, unknown>,
      ) => YTPlayer;
      PlayerState: { ENDED: number; PLAYING: number; PAUSED: number };
    };
    onYouTubeIframeAPIReady?: () => void;
  }
}

function readStore(): Store | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Store) : null;
  } catch {
    return null;
  }
}

function writeStore(store: Store) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
  } catch {
    /* ignore quota / private mode */
  }
}

function loadApi() {
  if (window.YT?.Player) return Promise.resolve();

  return new Promise<void>((resolve) => {
    const previous = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      previous?.();
      resolve();
    };
    if (!document.querySelector("script[src='https://www.youtube.com/iframe_api']")) {
      const script = document.createElement("script");
      script.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(script);
    }
  });
}

function loadChannel(
  player: YTPlayer,
  channel: Channel,
  resume?: Progress,
) {
  const index = resume?.playlistIndex ?? 0;
  const startSeconds = resume?.time ?? 0;

  if ("videos" in channel && channel.videos?.length) {
    player.loadPlaylist({
      playlist: channel.videos,
      index,
      startSeconds,
    });
    return;
  }

  player.loadPlaylist({
    listType: "playlist",
    list: channel.id.replace(/^UC/, "UU"),
    index,
    startSeconds,
  });
}

function isLastItem(player: YTPlayer, channel: Channel) {
  const index = Math.max(0, player.getPlaylistIndex?.() ?? 0);
  const list = player.getPlaylist?.();
  if (list?.length) return index >= list.length - 1;
  if ("videos" in channel && channel.videos?.length) {
    return index >= channel.videos.length - 1;
  }
  return false;
}

export function Jukebox() {
  const [activeId, setActiveId] = useState(youtubeChannels[0].id);
  const playerRef = useRef<YTPlayer | null>(null);
  const activeIdRef = useRef(activeId);
  const storeRef = useRef<Store>({
    activeId: youtubeChannels[0].id,
    progress: {},
  });
  const advancingRef = useRef(false);

  activeIdRef.current = activeId;

  function saveProgress() {
    const player = playerRef.current;
    if (!player) return;
    const time = player.getCurrentTime?.() ?? 0;
    const playlistIndex = Math.max(0, player.getPlaylistIndex?.() ?? 0);
    if (!Number.isFinite(time)) return;
    storeRef.current = {
      activeId: activeIdRef.current,
      progress: {
        ...storeRef.current.progress,
        [activeIdRef.current]: { playlistIndex, time },
      },
    };
    writeStore(storeRef.current);
  }

  function playChannel(channel: Channel, resume?: Progress) {
    const player = playerRef.current;
    if (!player) return;
    setActiveId(channel.id);
    activeIdRef.current = channel.id;
    storeRef.current = { ...storeRef.current, activeId: channel.id };
    writeStore(storeRef.current);
    loadChannel(player, channel, resume);
    window.setTimeout(() => player.playVideo?.(), 400);
  }

  function shiftChannel(step: number) {
    const index = youtubeChannels.findIndex(
      (channel) => channel.id === activeIdRef.current,
    );
    const next =
      youtubeChannels[
        (index + step + youtubeChannels.length) % youtubeChannels.length
      ];
    advancingRef.current = true;
    playChannel(next, { playlistIndex: 0, time: 0 });
    window.setTimeout(() => {
      advancingRef.current = false;
    }, 1200);
  }

  function nextChannel() {
    shiftChannel(1);
  }

  function previousTrack() {
    playerRef.current?.previousVideo?.();
  }

  function nextTrack() {
    const player = playerRef.current;
    if (!player) return;
    const channel =
      youtubeChannels.find((item) => item.id === activeIdRef.current) ??
      youtubeChannels[0];
    if (isLastItem(player, channel)) {
      nextChannel();
      return;
    }
    player.nextVideo?.();
  }

  useEffect(() => {
    const saved = readStore();
    if (saved?.activeId) {
      storeRef.current = {
        activeId: saved.activeId,
        progress: saved.progress ?? {},
      };
      setActiveId(saved.activeId);
      activeIdRef.current = saved.activeId;
    }

    let cancelled = false;
    let interval = 0;

    loadApi().then(() => {
      if (cancelled || !window.YT?.Player) return;
      const mount = document.getElementById("jukebox-player");
      if (!mount) return;

      const startChannel =
        youtubeChannels.find((channel) => channel.id === storeRef.current.activeId) ??
        youtubeChannels[0];
      const resume = storeRef.current.progress[startChannel.id];

      const player = new window.YT.Player("jukebox-player", {
        width: "100%",
        height: "100%",
        host: "https://www.youtube-nocookie.com",
        playerVars: {
          rel: 0,
          modestbranding: 1,
          playsinline: 1,
          origin: window.location.origin,
        },
        events: {
          onReady: () => {
            loadChannel(player, startChannel, resume);
            window.setTimeout(() => player.playVideo?.(), 400);
            interval = window.setInterval(saveProgress, 4000);
          },
          onStateChange: (event: { data: number }) => {
            const state = window.YT?.PlayerState;
            if (!state) return;
            if (event.data === state.PAUSED || event.data === state.PLAYING) {
              saveProgress();
            }
            if (event.data === state.ENDED && !advancingRef.current) {
              saveProgress();
              const channel =
                youtubeChannels.find(
                  (item) => item.id === activeIdRef.current,
                ) ?? youtubeChannels[0];
              if (isLastItem(player, channel)) nextChannel();
            }
          },
        },
      });
      playerRef.current = player;
    });

    const onLeave = () => saveProgress();
    window.addEventListener("pagehide", onLeave);
    window.addEventListener("beforeunload", onLeave);

    return () => {
      cancelled = true;
      window.clearInterval(interval);
      window.removeEventListener("pagehide", onLeave);
      window.removeEventListener("beforeunload", onLeave);
      saveProgress();
      playerRef.current?.destroy?.();
      playerRef.current = null;
    };
    // Player is created once; channel changes go through playChannel.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const active =
    youtubeChannels.find((channel) => channel.id === activeId) ??
    youtubeChannels[0];

  const chrome =
    "rounded-full border-2 border-[#1ad4c8] py-2.5 text-xs font-bold uppercase transition";

  return (
    <div className="mx-auto w-full max-w-[28rem] rounded-[1.6rem] border-2 border-[#1ad4c8] bg-[#061018] p-3 shadow-[0_0_40px_rgba(26,212,200,0.12)] sm:p-4">
      <div className="relative overflow-hidden rounded-[1.1rem]">
        <video
          className="h-auto w-full"
          src="/brand/jukebox.webm"
          poster="/brand/jukebox.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute z-10 flex items-center justify-center"
          style={{
            left: "27%",
            top: "12.6%",
            width: "46%",
            height: "13.5%",
          }}
        >
          <span className="font-display pl-[0.32em] text-base font-semibold tracking-[0.28em] text-[#eafcff] sm:text-xl [text-shadow:0_0_10px_rgba(122,245,238,0.9),0_0_2px_#fff]">
            ELITEZ
          </span>
        </div>
        <div
          className="absolute z-0 overflow-hidden rounded-[0.35rem] bg-black [&>iframe]:h-full [&>iframe]:w-full"
          style={{
            left: "11.2%",
            top: "31.25%",
            width: "78%",
            height: "30.5%",
          }}
        >
          <div id="jukebox-player" className="h-full w-full" />
        </div>
      </div>
      <div className="relative z-10 mt-4 grid grid-cols-2 gap-3">
        <button
          type="button"
          onClick={previousTrack}
          className={`${chrome} px-5 tracking-[0.22em] text-[#7af5ee] hover:bg-[#1ad4c8]/15`}
        >
          Prev
        </button>
        <button
          type="button"
          onClick={nextTrack}
          className={`${chrome} px-5 tracking-[0.22em] text-[#7af5ee] hover:bg-[#1ad4c8]/15`}
        >
          Next
        </button>
      </div>
      <div className="relative z-10 mt-3 flex flex-nowrap gap-2">
        {youtubeChannels.map((channel) => {
          const selected = channel.id === activeId;
          return (
            <button
              key={channel.id}
              type="button"
              onClick={() => {
                saveProgress();
                playChannel(channel, storeRef.current.progress[channel.id]);
              }}
              className={`${chrome} min-w-0 flex-1 px-2 tracking-[0.12em] ${
                selected
                  ? "bg-[#1ad4c8] text-[#05211f]"
                  : "text-[#7af5ee] hover:bg-[#1ad4c8]/15"
              }`}
            >
              {channel.shortLabel}
            </button>
          );
        })}
      </div>
      <a
        href={active.href}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 block text-center text-sm tracking-wide text-[#7af5ee] underline decoration-[#1ad4c8] underline-offset-4 hover:text-white"
      >
        Open {active.label} on YouTube
      </a>
    </div>
  );
}
