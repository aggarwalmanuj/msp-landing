import Image from "next/image";
import { ScorecardCta } from "@/components/scorecard-cta";
import { SoundingLine } from "@/components/visuals/sounding-line";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="grain relative isolate -mt-16 overflow-hidden pt-16">
      {/* Ocean-depth backdrop: light at the surface, navy at depth. The
          photo is the LCP element, so it preloads; the gradients pull it
          into --bg so the next section starts seamlessly. */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <Image
          src="/images/ocean-depth.jpg"
          alt=""
          fill
          preload
          sizes="100vw"
          quality={70}
          className="object-cover object-top opacity-90"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(6_20_31/0.10)_0%,rgb(6_20_31/0.40)_50%,var(--bg)_96%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgb(6_20_31/0.80)_0%,rgb(6_20_31/0.25)_65%,transparent_100%)]" />
      </div>

      <div className="mx-auto grid max-w-6xl gap-12 px-4 pb-20 pt-8 sm:px-6 sm:pt-14 lg:grid-cols-[minmax(0,1fr)_17rem] lg:gap-16 lg:px-8 lg:pb-24 lg:pt-12">
        <div className="min-w-0 max-w-3xl">
          <p className="t-eyebrow rise">The next managed service is intelligence</p>

          <h1 id="hero-title" className="t-display rise mt-5" style={{ "--d": "80ms" } as React.CSSProperties}>
            Are you building your AI business,{" "}
            <span className="t-em block sm:inline">or just reselling someone else&rsquo;s?</span>
          </h1>

          <div className="rise mt-6 max-w-xl space-y-4 sm:mt-8" style={{ "--d": "180ms" } as React.CSSProperties}>
            <p className="t-lead">
              Every vendor is launching AI agents. Your competitors can sell them. Your clients can buy them.
            </p>
            <p className="t-lead">
              The bigger opportunity is building intelligence around each client&rsquo;s unique people, knowledge,
              and business needs.
            </p>
          </div>

          <div id="hero-cta" className="rise mt-8 sm:mt-10" style={{ "--d": "280ms" } as React.CSSProperties}>
            <p className="mb-4 text-[1.0625rem] font-medium text-ink sm:mb-5">
              Discover the opportunity hiding inside your MSP business.
            </p>
            <ScorecardCta location="hero" variant="signal" size="lg" className="w-full sm:w-auto">
              Get My Free AI Opportunity Score
            </ScorecardCta>
            <p className="tabular mt-4 text-sm text-faint">5 questions · About 7 minutes · Personalized results</p>
          </div>
        </div>

        <SoundingLine className="hidden lg:block" />
      </div>
    </section>
  );
}
