import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { albums, dreamFeatures, links, pillars } from "@/lib/content";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/brand/hero.jpg"
            alt=""
            fill
            priority
            className="object-cover object-[50%_40%] opacity-55"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,8,11,0.15)_0%,rgba(6,8,11,0.55)_52%,#06080b_100%)]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-5 pt-24 pb-20 md:pt-32 md:pb-28">
          <p className="kicker rise">Music · Tokens · Arcade</p>
          <h1 className="font-display rise-2 mt-5 max-w-4xl text-[2.35rem] leading-[1.02] font-semibold tracking-tight break-words sm:text-5xl md:text-7xl">
            A creator-driven world
            <span className="gold-text"> on Base.</span>
          </h1>
          <p className="rise-3 mt-6 max-w-2xl text-base leading-8 text-[#d7d1c4] sm:text-lg md:text-xl">
            Elitez is music, two Base tokens, and Dream Crafter in one
            ecosystem: listen, play, and create.
          </p>
          <div className="rise-3 mt-8 flex flex-wrap gap-3">
            <Button href={links.spotifyArtist} external>
              Listen on Spotify
            </Button>
            <Button href={links.app} variant="teal" external>
              Launch Dream Crafter
            </Button>
            <Button href={links.uniswap} variant="ghost" external>
              Buy $ELITE
            </Button>
            <Button href={links.telegram} variant="ghost" external>
              Join Telegram
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-6">
        <div className="grid gap-3 md:grid-cols-3">
          {[
            {
              step: "01",
              title: "Listen, play, create",
              body: "Stream Elitez Music, open Dream Crafter, or mint a custom reel.",
            },
            {
              step: "02",
              title: "That activity supports the tokens",
              body: "Music royalties may be allocated to liquidity. Play uses $ELITE and $ELTZ on Base.",
            },
            {
              step: "03",
              title: "The ecosystem stays in motion",
              body: "$ELITE is the creator token. $ELTZ is Elitez Chip, a native B20 token for in-app utility.",
            },
          ].map((item) => (
            <div key={item.step} className="panel rounded-3xl p-5">
              <p className="kicker">{item.step}</p>
              <h2 className="font-display mt-3 text-xl">{item.title}</h2>
              <p className="mt-2 text-sm leading-7 text-[#9aa4af]">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-8">
        <p className="kicker">Three pillars</p>
        <h2 className="font-display mt-3 mb-6 text-3xl md:text-4xl">
          Music. Tokens. Arcade.
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {pillars.map((pillar) => (
            <Link
              key={pillar.href}
              href={pillar.href}
              className="panel lift min-w-0 overflow-hidden rounded-3xl"
            >
              <div className="relative h-48">
                <Image
                  src={pillar.image}
                  alt=""
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06080b] to-transparent" />
              </div>
              <div className="p-6">
                <p className="kicker">{pillar.kicker}</p>
                <h2 className="font-display mt-3 text-2xl">{pillar.title}</h2>
                <p className="mt-3 text-sm leading-7 text-[#9aa4af]">
                  {pillar.body}
                </p>
                <p className="mt-5 text-sm font-semibold text-[#f3dc97]">
                  {pillar.cta} →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="kicker">Featured product</p>
            <h2 className="font-display mt-4 text-3xl md:text-5xl">
              Dream Crafter
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#b7bfc8]">
              A Web3 arcade and creator economy on Base. Connect a wallet, play
              themed experiences, earn session rewards, build custom reel
              machines, mint them as collectibles, and compete on leaderboards.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-[#c8c1b2]">
              <li>Live slots, blackjack, Texas Hold-Em, pinball</li>
              <li>Reel Builder, gallery, and onchain minting</li>
              <li>$ELITE and $ELTZ as playable tokens</li>
              <li>Demo mode to learn the floor before you play with tokens</li>
              <li>Available on the web and Google Play · 18+</li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/dream-crafter" variant="teal">
                See the full app
              </Button>
              <Button href={links.playStore} variant="ghost" external>
                Get it on Google Play
              </Button>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[2rem] border border-[rgba(215,179,90,0.16)]">
            <Image
              src="/brand/dc-hero.jpg"
              alt="Dream Crafter circuit tree and onchain play world"
              width={1600}
              height={900}
              className="h-auto w-full"
            />
          </div>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {dreamFeatures.slice(0, 10).map((feature) => (
            <a
              key={feature.title}
              href={feature.href}
              target="_blank"
              rel="noopener noreferrer"
              className="panel lift overflow-hidden rounded-2xl"
            >
              <Image
                src={feature.image}
                alt={feature.title}
                width={640}
                height={220}
                className="h-auto w-full bg-black object-contain"
              />
              <div className="p-4">
                <h3 className="font-display text-lg">{feature.title}</h3>
                <p className="mt-2 text-xs leading-5 text-[#9aa4af]">
                  {feature.body}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-8">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="kicker">Elitez Music</p>
            <h2 className="font-display mt-3 text-3xl md:text-4xl">The catalog</h2>
          </div>
          <Button href="/music" variant="ghost">
            All music
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {albums.map((album) => (
            <a
              key={album.title}
              href={album.href}
              target="_blank"
              rel="noopener noreferrer"
              className="lift group"
            >
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src={album.image}
                  alt={album.title}
                  width={640}
                  height={640}
                  className="h-auto w-full transition duration-500 group-hover:scale-105"
                />
              </div>
              <p className="mt-3 font-medium">{album.title}</p>
              <p className="text-xs text-[#9aa4af]">
                {album.type} · {album.year}
              </p>
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-10">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="panel rounded-[2rem] p-8">
            <p className="kicker">Getting started</p>
            <h2 className="font-display mt-3 text-3xl">New here?</h2>
            <ol className="mt-5 space-y-3 text-sm leading-7 text-[#b7bfc8]">
              <li>
                <strong className="text-[#f3ead8]">1. Listen.</strong> Open
                Elitez on Spotify or any major platform.
              </li>
              <li>
                <strong className="text-[#f3ead8]">2. Get on Base.</strong> Use
                Coinbase Wallet, MetaMask, or a CDP email wallet in Dream
                Crafter.
              </li>
              <li>
                <strong className="text-[#f3ead8]">3. Buy or play.</strong> Get
                $ELITE or $ELTZ on Uniswap, or launch Dream Crafter in demo
                mode first.
              </li>
            </ol>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/swap">Swap in site</Button>
              <Button href="/faq" variant="ghost">
                FAQ
              </Button>
            </div>
          </div>
          <div className="panel flex flex-col gap-6 rounded-[2rem] p-8 sm:flex-row sm:items-center">
            <div className="min-w-0 flex-1">
              <p className="kicker">Stay connected</p>
              <h2 className="font-display mt-3 text-3xl">Community</h2>
              <p className="mt-4 text-sm leading-7 text-[#b7bfc8]">
                Follow Elitez on Facebook, X, Telegram, and YouTube. Dream
                Crafter is listed on Google Play.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button href={links.telegram} variant="ghost" external>
                  Telegram
                </Button>
                <Button href={links.xTeam} variant="ghost" external>
                  X @elitebasetoken
                </Button>
                <Button href={links.xFounder} variant="ghost" external>
                  X @DerekOMalley3
                </Button>
                <Button href="/community" variant="ghost">
                  Community
                </Button>
              </div>
            </div>
            <Image
              src="/brand/crystals-of-the-light.jpg"
              alt="Crystals of the Light"
              width={176}
              height={176}
              className="h-36 w-36 shrink-0 self-center rounded-2xl sm:h-40 sm:w-40"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="panel overflow-hidden rounded-[2rem]">
          <div className="grid lg:grid-cols-2">
            <div className="relative min-h-72">
              <Image
                src="/brand/texture.jpg"
                alt=""
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8 md:p-12">
              <p className="kicker">Tokens</p>
              <h2 className="font-display mt-4 text-3xl md:text-4xl">
                Built to back the work.
              </h2>
              <p className="mt-5 leading-8 text-[#b7bfc8]">
                $ELITE and $ELTZ are separate assets. Each has its own
                contract, supply, and page.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/elite">$ELITE</Button>
                <Button href="/eltz" variant="teal">
                  $ELTZ
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
