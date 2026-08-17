import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-28 text-center">
      <p className="kicker">404</p>
      <h1 className="font-display mt-4 text-5xl">This page is off the map.</h1>
      <p className="mt-5 text-[#9aa4af]">
        The trail you followed does not exist. Return to the ecosystem.
      </p>
      <div className="mt-8 flex justify-center gap-3">
        <Button href="/">Home</Button>
        <Button href="/dream-crafter" variant="ghost">
          Dream Crafter
        </Button>
      </div>
    </section>
  );
}
