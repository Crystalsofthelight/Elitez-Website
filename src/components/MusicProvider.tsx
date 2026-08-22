"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { youtubeChannels } from "@/lib/content";

const STORAGE_KEY = "elitez-music-on";

type Controller = {
  play: () => void;
  pause: () => void;
};

type YTPlayer = {
  loadPlaylist: (
    playlist: string[] | Record<string, unknown>,
    index?: number,
    startSeconds?: number,
  ) => void;
  playVideo: () => void;
  pauseVideo: () => void;
};

type MusicContextValue = {
  on: boolean;
  toggle: () => void;
  setOn: (next: boolean) => void;
  register: (controller: Controller | null) => void;
};

const MusicContext = createContext<MusicContextValue | null>(null);

export function useMusic() {
  const value = useContext(MusicContext);
  if (!value) {
    throw new Error("useMusic must be used within MusicProvider");
  }
  return value;
}

function youtubeHost() {
  return window as typeof window & {
    YT?: {
      Player: new (
        el: string | HTMLElement,
        opts: Record<string, unknown>,
      ) => YTPlayer;
    };
    onYouTubeIframeAPIReady?: () => void;
  };
}

function loadApi() {
  const host = youtubeHost();
  if (host.YT?.Player) return Promise.resolve();
  return new Promise<void>((resolve) => {
    const previous = host.onYouTubeIframeAPIReady;
    host.onYouTubeIframeAPIReady = () => {
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

export function MusicProvider({ children }: { children: React.ReactNode }) {
  const [on, setOnState] = useState(true);
  const onRef = useRef(true);
  const controllerRef = useRef<Controller | null>(null);
  const globalRef = useRef<YTPlayer | null>(null);

  const pauseGlobal = () => {
    try {
      globalRef.current?.pauseVideo?.();
    } catch {
      /* ignore */
    }
  };

  const ensureGlobal = useCallback(() => {
    if (controllerRef.current) return;
    if (globalRef.current) {
      globalRef.current.playVideo?.();
      return;
    }

    loadApi().then(() => {
      const YT = youtubeHost().YT;
      if (!YT?.Player || controllerRef.current) return;
      const mount = document.getElementById("global-music-player");
      if (!mount) return;

      const dreamer = youtubeChannels[0];
      globalRef.current = new YT.Player("global-music-player", {
        width: "1",
        height: "1",
        host: "https://www.youtube-nocookie.com",
        playerVars: {
          rel: 0,
          modestbranding: 1,
          playsinline: 1,
          origin: window.location.origin,
        },
        events: {
          onReady: (event: { target: YTPlayer }) => {
            const player = event.target;
            if ("videos" in dreamer && dreamer.videos?.length) {
              player.loadPlaylist(dreamer.videos, 0, 0);
            }
            if (onRef.current && !controllerRef.current) {
              player.playVideo();
            } else {
              player.pauseVideo();
            }
          },
        },
      }) as YTPlayer;
    });
  }, []);

  useEffect(() => {
    let saved = true;
    try {
      saved = localStorage.getItem(STORAGE_KEY) !== "0";
    } catch {
      /* ignore */
    }
    setOnState(saved);
    onRef.current = saved;
    if (!saved) return;
    if (controllerRef.current) controllerRef.current.play();
    else ensureGlobal();
  }, [ensureGlobal]);

  const apply = useCallback(
    (next: boolean) => {
      setOnState(next);
      onRef.current = next;
      try {
        localStorage.setItem(STORAGE_KEY, next ? "1" : "0");
      } catch {
        /* ignore */
      }
      if (next) {
        if (controllerRef.current) controllerRef.current.play();
        else ensureGlobal();
      } else {
        controllerRef.current?.pause();
        pauseGlobal();
      }
    },
    [ensureGlobal],
  );

  const register = useCallback(
    (controller: Controller | null) => {
      controllerRef.current = controller;
      if (controller) {
        pauseGlobal();
        if (onRef.current) controller.play();
        else controller.pause();
        return;
      }
      if (onRef.current) ensureGlobal();
    },
    [ensureGlobal],
  );

  return (
    <MusicContext.Provider
      value={{
        on,
        toggle: () => apply(!onRef.current),
        setOn: apply,
        register,
      }}
    >
      {children}
      <div
        id="global-music-player"
        className="pointer-events-none fixed top-0 left-0 h-px w-px overflow-hidden opacity-0"
        aria-hidden
      />
    </MusicContext.Provider>
  );
}
