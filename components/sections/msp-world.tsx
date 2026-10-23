import Image from "next/image";
import { Reveal } from "@/components/reveal";

// The three things an MSP already owns, shown as the real work rather than
// abstract icons. Each photo is pulled into the page palette by the same
// navy-to-teal overlay, so stock shot under different lighting reads as one
// set. Copy makes no claims: it names what the reader already does.
const TILES = [
  {
    src: "/images/it/networks.jpg",
    alt: "An engineer patching network cables in a server rack",
    label: "Networks and infrastructure",
    line: "The layer you already manage.",
  },
  {
    src: "/images/it/security.jpg",
    alt: "An engineer with a laptop in a data centre aisle",
    label: "Security and data",
    line: "The trust you have already earned.",
  },
  {
    src: "/images/it/clients.jpg",
    alt: "An IT consultant reviewing a laptop with a business owner",
    label: "Client relationships",
    line: "The context no vendor catalog has.",
  },
] as const;

export function MspWorld() {
  return (
    <section aria-labelledby="msp-world-title" className="pb-(--space-section)">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="t-eyebrow">Built for MSPs and IT service providers</p>
          <h2 id="msp-world-title" className="t-section mt-5">
            You already keep your clients running.{" "}
            <span className="t-em">Intelligence is the next layer to manage.</span>
          </h2>
        </Reveal>

        <ul className="mt-12 grid gap-4 sm:grid-cols-3 sm:gap-5">
          {TILES.map((t, i) => (
            <Reveal as="li" key={t.label} delay={i * 80}>
              <figure className="group relative aspect-[16/10] overflow-hidden rounded-(--radius-lg) border border-line shadow-(--shadow-2) sm:aspect-[3/4]">
                <Image
                  src={t.src}
                  alt={t.alt}
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-cover saturate-[0.8] transition-transform duration-700 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                />
                {/* Palette unifier: a teal colour wash, then a navy floor the
                    caption sits on (contrast for the white text). */}
                <div aria-hidden className="absolute inset-0 bg-depth-3/35 mix-blend-color" />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-[linear-gradient(180deg,rgb(6_20_31/0.05)_30%,rgb(6_20_31/0.55)_62%,rgb(6_20_31/0.94)_100%)]"
                />
                <figcaption className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <span className="block text-[1.0625rem] font-semibold tracking-[-0.01em] text-ink">{t.label}</span>
                  <span className="mt-1 block text-sm text-fg">{t.line}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
