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
          <p className="kicker rise">Music · Token · Arcade</p>
          <h1 className="font-display rise-2 mt-5 max-w-4xl text-[2.35rem] leading-[1.02] font-semibold tracking-tight break-words sm:text-5xl md:text-7xl">
            A creator-driven world
            <span className="gold-text"> on Base.</span>
          </h1>
          <p className="rise-3 mt-6 max-w-2xl text-base leading-8 text-[#d7d1c4] sm:text-lg md:text-xl">
            Elitez brings original music, $ELITE, Elitez Chip ($ELTZ), and
            Dream Crafter into one ecosystem — built from real creative work,
            not speculation as a product.
          </p>
          <div className="rise-3 mt-8 flex flex-wrap gap-3">
            <Button href={links.app} external>
              Launch Dream Crafter
            </Button>
            <Button href="/music" variant="ghost">
              Listen to Elitez
            </Button>
            <Button href="/token" variant="ghost">
              $ELITE and $ELTZ
            </Button>
          </div>
          <p className="mt-8 max-w-xl font-serif text-xl text-[#c8b88a] italic">
            Only the ELITE will find the treasure.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-8">
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
          {dreamFeatures.slice(0, 8).map((feature) => (
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
                className="h-20 w-full object-cover"
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
              <p className="kicker">$ELITE · $ELTZ</p>
              <h2 className="font-display mt-4 text-3xl md:text-4xl">
                Built to back the work.
              </h2>
              <p className="mt-5 leading-8 text-[#b7bfc8]">
                $ELITE is the creator token, with planned burns from a 1
                trillion start. $ELTZ — Elitez Chip — is a native B20 token
                with a 1,000,000 supply, used for staking and play. Holding
                either token does not grant ownership, royalties, or profit
                rights.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-[#9aa4af]">Network</p>
                  <p className="mt-1 text-lg text-[#f3dc97]">Base</p>
                </div>
                <div>
                  <p className="text-[#9aa4af]">Playable in</p>
                  <p className="mt-1 text-lg text-[#f3dc97]">Dream Crafter</p>
                </div>
              </div>
              <div className="mt-8">
                <Button href="/token">Both tokens</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
