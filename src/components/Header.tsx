"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { links, nav } from "@/lib/content";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[rgba(215,179,90,0.12)] bg-[rgba(6,8,11,0.92)] backdrop-blur-xl">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-[#f3dc97] focus:px-4 focus:py-2 focus:text-[#1a1408]"
      >
        Skip to content
      </a>
      <div className="mx-auto flex max-w-6xl min-w-0 items-center justify-between gap-4 px-5 py-3.5">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/brand/duck.png"
            alt="Elite token mark"
            width={40}
            height={40}
            className="h-10 w-10 rounded-full"
            priority
          />
          <span className="font-display text-lg font-semibold tracking-[0.18em]">
            ELITEZ
          </span>
        </Link>

        <nav className="hidden items-center gap-5 xl:gap-7 lg:flex">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm tracking-wide transition ${
                  active ? "text-[#f3dc97]" : "text-[#c8c1b2] hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href={links.flyer}
            download="Elitez-Flyer-Printable.pdf"
            className="text-sm tracking-wide text-[#c8c1b2] transition hover:text-white"
          >
            Flyer
          </a>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={links.app}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[linear-gradient(180deg,#f3dc97,#c9a047)] px-4 py-2 text-sm font-semibold text-[#1a1408]"
          >
            Open Dream Crafter
          </a>
        </div>

        <details key={pathname} className="lg:hidden">
          <summary
            aria-label="Open menu"
            className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-full border border-[rgba(243,234,216,0.22)] bg-black/40 marker:content-none [&::-webkit-details-marker]:hidden"
          >
            <span className="flex flex-col items-center gap-1.5">
              <span className="menu-bar-1 block h-0.5 w-4 bg-[#f3ead8] transition" />
              <span className="menu-bar-2 block h-0.5 w-4 bg-[#f3ead8] transition" />
              <span className="menu-bar-3 block h-0.5 w-3 bg-[#f3ead8] transition" />
            </span>
          </summary>
          <nav className="absolute inset-x-0 top-full z-50 border-b border-[rgba(215,179,90,0.12)] bg-[#06080b] px-5 py-4 shadow-[0_20px_40px_rgba(0,0,0,0.45)]">
            <div className="mx-auto flex max-w-6xl flex-col gap-1">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-xl px-3 py-3 text-base ${
                    pathname === item.href
                      ? "bg-white/5 text-[#f3dc97]"
                      : "text-[#f3ead8]"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={links.flyer}
                download="Elitez-Flyer-Printable.pdf"
                className="rounded-xl px-3 py-3 text-base text-[#f3ead8]"
              >
                Download flyer
              </a>
              <a
                href={links.app}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 rounded-full bg-[linear-gradient(180deg,#f3dc97,#c9a047)] px-4 py-3 text-center text-sm font-semibold text-[#1a1408]"
              >
                Open Dream Crafter
              </a>
            </div>
          </nav>
        </details>
      </div>
    </header>
  );
}
