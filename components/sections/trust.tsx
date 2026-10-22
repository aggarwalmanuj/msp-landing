import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { ScorecardCta } from "@/components/scorecard-cta";
import { SectionHead } from "@/components/section-head";
import { BOOKING_URL } from "@/lib/site";

// TODO(launch): confirm approved proof-point wording (handoff doc, decision 4).
// These are the four claims the homepage copy doc makes, split into a grid.
const PROOF = [
  { k: "Two decades", v: "of AI experience" },
  { k: "Four", v: "U.S. patents" },
  { k: "Human-centered", v: "research" },
  { k: "Deployable", v: "solutions" },
] as const;

// Two of these PNGs are opaque RGB (no alpha), so they cannot be inverted to
// white. Grayscale in fixed contained boxes, as on the sibling pages.
const LOGOS = [
  { src: "/logos/ibm.png", alt: "IBM" },
  { src: "/logos/microsoft.png", alt: "Microsoft" },
  { src: "/logos/tmobile.png", alt: "T-Mobile" },
  { src: "/logos/pearson.png", alt: "Pearson" },
] as const;

export function Trust() {
  return (
    <section aria-labelledby="trust-title" className="border-t border-line py-(--space-section)">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid *:min-w-0 items-center gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
          <Reveal>
            <figure className="relative mx-auto max-w-sm lg:mx-0">
              <div className="overflow-hidden rounded-(--radius-lg) border border-line shadow-(--shadow-2)">
                <Image
                  src="/manuj/founder.jpg"
                  alt="Manuj Aggarwal speaking at a technology event"
                  width={675}
                  height={900}
                  sizes="(min-width: 1024px) 384px, 90vw"
                  className="h-auto w-full object-cover"
                />
              </div>
              <figcaption className="mt-4 flex items-baseline justify-between gap-4 text-sm">
                <span className="font-medium text-ink">Manuj Aggarwal</span>
                <span className="text-faint">Founder, TetraNoodle Technologies</span>
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={120}>
            <SectionHead index="04" eyebrow="Who you'd be working with" id="trust-title">
              You know your clients. <span className="t-em">We know Human + AI architecture.</span>
            </SectionHead>
            <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-(--radius) border border-line bg-line">
              {PROOF.map((p) => (
                <div key={p.k} className="bg-bg p-5">
                  <dt className="text-[1.375rem] font-semibold leading-tight tracking-[-0.02em] text-ink">{p.k}</dt>
                  <dd className="mt-1 text-sm text-faint">{p.v}</dd>
                </div>
              ))}
            </dl>
            <p className="t-lead mt-8 max-w-xl">
              We&rsquo;re developing our MSP distribution channel to help IT companies create differentiated
              Managed Intelligence offerings.
            </p>
          </Reveal>
        </div>

        <Reveal className="mt-20">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.08em] text-faint">
            Prior professional work
          </p>
          <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {LOGOS.map((l) => (
              <li
                key={l.alt}
                className="relative h-9 w-24 opacity-60 grayscale transition-[opacity,filter] duration-500 sm:h-10 sm:w-28 [@media(hover:hover)]:hover:opacity-100 [@media(hover:hover)]:hover:grayscale-0"
              >
                <Image src={l.src} alt={l.alt} fill sizes="112px" className="object-contain" />
              </li>
            ))}
          </ul>
          <p className="mx-auto mt-6 max-w-2xl text-center text-xs leading-relaxed text-faint">
            Organizations shown reflect prior professional work by Manuj Aggarwal and do not imply endorsement of the
            MSP AI Opportunity Score, AI Merge, TetraNoodle Technologies, or this offer.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section aria-labelledby="final-title" className="grain relative isolate overflow-hidden py-(--space-section)">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(60%_80%_at_50%_100%,rgb(43_159_191/0.28),transparent_70%)]"
      />
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <Reveal>
          <h2 id="final-title" className="t-section">
            Start with your opportunity. <span className="t-em block">Then let&rsquo;s talk.</span>
          </h2>
          <div id="final-cta" className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <ScorecardCta location="final" variant="signal" size="lg" className="w-full sm:w-auto">
              Get My Free AI Opportunity Score
            </ScorecardCta>
            {BOOKING_URL ? (
              <a href={BOOKING_URL} className="btn btn-ghost btn-lg w-full sm:w-auto">
                Book a Call
              </a>
            ) : null}
          </div>
          <p className="tabular mt-5 text-sm text-faint">5 questions · Personalized results · No credit card</p>
        </Reveal>
      </div>
    </section>
  );
}
