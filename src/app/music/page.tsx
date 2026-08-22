import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import { albums, links, platforms, tracks, youtubeChannels } from "@/lib/content";

export const metadata: Metadata = {
  title: "Elitez Music",
  description:
    "Elitez brings together hip hop, R&B, soul, and indie. Stream the catalog worldwide and hear it inside Dream Crafter.",
};

export default function MusicPage() {
  const dreamer = youtubeChannels.find((channel) => channel.shortLabel === "Dreamer");
  const dreamerVideos: string[] =
    dreamer && "videos" in dreamer ? (dreamer.videos ?? []) : [];

  return (
    <>
      <PageHero
        kicker="Elitez Music"
        title="Raw. Emotional. Built to connect."
        lede="Hip hop, R&B, soul, and indie — blended into a sound that is hard-hitting and human. Elitez is more than a catalog. A portion of royalties may be contributed back into the Base / $ELITE ecosystem each month."
      />

      <section className="mx-auto max-w-6xl px-5">
        <div className="overflow-hidden rounded-[2rem] border border-[rgba(215,179,90,0.16)]">
          <Image
            src="/brand/artist.jpg"
            alt="Elitez band silhouettes against a mountain sunset"
            width={1400}
            height={1400}
            className="h-[420px] w-full object-cover object-[50%_35%] md:h-[520px]"
            priority
          />
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          {platforms.map((platform) => (
            <Button key={platform.label} href={platform.href} variant="ghost" external>
              {platform.label}
            </Button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="kicker">Now playing</p>
            <h2 className="font-display mt-3 text-4xl">Listen on Spotify</h2>
            <p className="mt-4 leading-8 text-[#b7bfc8]">
              The official Elitez artist page carries the full streaming
              catalog, including albums, singles, and new releases.
            </p>
            <div className="mt-6 overflow-hidden rounded-3xl border border-[rgba(215,179,90,0.16)]">
              <iframe
                title="Elitez on Spotify"
                src="https://open.spotify.com/embed/artist/2vKgjhjw9P5VFf1PxPYyzw?utm_source=generator&theme=0"
                width="100%"
                height="420"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="block"
              />
            </div>

            <p className="kicker mt-10">Elite Dreamer</p>
            <h2 className="font-display mt-3 text-4xl">Also on Spotify</h2>
            <p className="mt-4 leading-8 text-[#b7bfc8]">
              Elite Dreamer is on Spotify and YouTube — One Hit Wonder and Raw
              proof.
            </p>
            <div className="mt-6 overflow-hidden rounded-3xl border border-[rgba(215,179,90,0.16)]">
              <iframe
                title="Elite Dreamer on Spotify"
                src="https://open.spotify.com/embed/artist/4BL0oYWPORruCrIuxI4DZO?utm_source=generator&theme=0"
                width="100%"
                height="352"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="block"
              />
            </div>
            {dreamer && dreamerVideos.length > 0 ? (
              <div className="mt-6 overflow-hidden rounded-3xl border border-[rgba(215,179,90,0.16)]">
                <iframe
                  title="Elite Dreamer on YouTube"
                  src={`https://www.youtube-nocookie.com/embed/${dreamerVideos[0]}?playlist=${dreamerVideos.join(",")}&rel=0&modestbranding=1`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                  className="aspect-video w-full"
                />
              </div>
            ) : null}
            <div className="mt-4 flex flex-wrap gap-3">
              <Button href={links.spotifyDreamer} variant="ghost" external>
                Open on Spotify
              </Button>
              {dreamer ? (
                <Button href={dreamer.href} variant="ghost" external>
                  Open on YouTube
                </Button>
              ) : null}
            </div>
          </div>
          <div className="panel rounded-[2rem] p-8">
            <p className="kicker">The movement</p>
            <p className="mt-4 font-serif text-2xl leading-9 text-[#f3ead8]">
              We give back to our listeners by contributing a portion of our
              royalties each month into our Base / $ELITE ecosystem, building a
              community where creativity and support go hand in hand.
            </p>
            <p className="mt-6 text-sm leading-7 text-[#9aa4af]">
              Music is also licensed into Facebook, TikTok, YouTube, and
              Instagram content libraries so creators can feature Elitez in
              short-form and long-form work.
            </p>
            <div className="mt-8">
              <Button href={links.app} external>
                Hear it in Dream Crafter
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5">
        <p className="kicker">Releases</p>
        <h2 className="font-display mt-3 text-4xl">Albums and headline records</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {albums.map((album) => (
            <a
              key={album.title}
              href={album.href}
              target="_blank"
              rel="noopener noreferrer"
              className="panel lift overflow-hidden rounded-3xl"
            >
              <Image
                src={album.image}
                alt={album.title}
                width={800}
                height={800}
                className="h-auto w-full"
              />
              <div className="p-5">
                <p className="text-xs tracking-[0.18em] text-[#1ad4c8] uppercase">
                  {album.type}
                </p>
                <h3 className="font-display mt-2 text-2xl">{album.title}</h3>
                <p className="mt-1 text-sm text-[#9aa4af]">{album.year}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <p className="kicker">Selected tracks</p>
        <h2 className="font-display mt-3 text-4xl">From the official catalog</h2>
        <div className="mt-8 grid gap-2 sm:grid-cols-2">
          {tracks.map((track, index) => (
            <a
              key={track.href}
              href={track.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-2xl border border-transparent px-4 py-3 transition hover:border-[rgba(215,179,90,0.2)] hover:bg-white/5"
            >
              <span className="flex items-center gap-4">
                <span className="w-6 text-xs text-[#9aa4af]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{track.title}</span>
              </span>
              <span className="text-xs text-[#1ad4c8]">Spotify</span>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
