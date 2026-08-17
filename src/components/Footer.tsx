import Image from "next/image";
import Link from "next/link";
import { contract, links, nav } from "@/lib/content";
import { CopyButton } from "./CopyButton";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-[rgba(215,179,90,0.12)]">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <Image
              src="/brand/duck.png"
              alt=""
              width={36}
              height={36}
              className="h-9 w-9 rounded-full"
            />
            <span className="font-display tracking-[0.2em]">ELITEZ</span>
          </div>
          <p className="mt-4 max-w-md text-sm leading-7 text-[#9aa4af]">
            A creator-led ecosystem on Base. Music, merchandising, collectibles,
            and Dream Crafter — built around participation, not promises of
            return.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-2 text-xs text-[#9aa4af]">
            <span className="rounded-full border border-[rgba(215,179,90,0.2)] px-3 py-1">
              Base / $ELITE
            </span>
            <code className="max-w-full truncate rounded-full bg-black/30 px-3 py-1">
              {contract.address}
            </code>
            <CopyButton value={contract.address} />
          </div>
        </div>

        <div>
          <p className="kicker">Explore</p>
          <div className="mt-4 flex flex-col gap-2 text-sm text-[#c8c1b2]">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            ))}
            <Link href="/legal" className="hover:text-white">
              Legal
            </Link>
          </div>
        </div>

        <div>
          <p className="kicker">Connect</p>
          <div className="mt-4 flex flex-col gap-2 text-sm text-[#c8c1b2]">
            <a href={links.app} target="_blank" rel="noopener noreferrer">
              Dream Crafter
            </a>
            <a href={links.playStore} target="_blank" rel="noopener noreferrer">
              Google Play
            </a>
            <a href={links.spotifyArtist} target="_blank" rel="noopener noreferrer">
              Spotify
            </a>
            <a href={links.facebook} target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
            <a href={links.xTeam} target="_blank" rel="noopener noreferrer">
              X
            </a>
            <a href={links.telegram} target="_blank" rel="noopener noreferrer">
              Telegram
            </a>
            <a href={links.privacy} target="_blank" rel="noopener noreferrer">
              App privacy policy
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-[rgba(215,179,90,0.1)]">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-6 text-xs leading-6 text-[#7f8892] md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Elitez. All rights reserved.</p>
          <p>
            $ELITE is not an investment. Dream Crafter is intended for adults
            18+ where legally permitted.
          </p>
        </div>
      </div>
    </footer>
  );
}
