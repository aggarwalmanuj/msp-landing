import { Check } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { ScorecardCta } from "@/components/scorecard-cta";
import { SectionHead } from "@/components/section-head";

// Stage labels are verbatim from the assessment spec (02-assessment-questions),
// so what a visitor previews here is exactly what the funnel shows them.
const STAGES = [
  { n: "01", label: "The Client Problem", q: "A recent client who needed more than another IT tool." },
  { n: "02", label: "Your Current Approach", q: "How your MSP usually responds to problems like that." },
  { n: "03", label: "The Opportunity Cost", q: "What that approach might be leaving on the table." },
  { n: "04", label: "The Real Constraint", q: "The hardest part of launching your own offering." },
  { n: "05", label: "Your Future Business", q: "What would be different twelve months from now." },
] as const;

const RECEIVE = [
  "Your personalized AI Opportunity Score",
  "Insight into potential differentiation",
  "One practical Managed Intelligence opportunity to explore",
] as const;

// Definitions from the scoring spec (04-opportunity-scoring).
const DIMENSIONS = [
  { name: "Opportunity Clarity", body: "A concrete client problem and a useful future outcome." },
  { name: "Differentiation Potential", body: "Value beyond standard product resale." },
  { name: "Delivery Readiness", body: "The capabilities, constraints, and safeguards involved." },
  { name: "Human + AI Understanding", body: "People, knowledge, trust, adoption, and oversight." },
] as const;

export function HowItWorks() {
  return (
    <section id="how" aria-labelledby="how-title" className="py-(--space-section)">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid *:min-w-0 gap-14 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-20">
          <Reveal>
            <SectionHead index="03" eyebrow="How it works" id="how-title">
              Five questions. <span className="t-em">One clearer opportunity.</span>
            </SectionHead>
            <p className="t-lead mt-8 max-w-md">
              Tell us about your clients, your current services, and the business you want to build.
            </p>

            <p className="mt-10 text-sm font-semibold text-ink">You&rsquo;ll receive</p>
            <ul className="mt-4 space-y-3">
              {RECEIVE.map((r) => (
                <li key={r} className="flex gap-3 text-[0.9375rem] text-fg">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-signal/15 text-signal">
                    <Check aria-hidden className="h-3 w-3" strokeWidth={2.5} />
                  </span>
                  {r}
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <ScorecardCta location="how_it_works" variant="signal" size="lg" className="w-full sm:w-auto">
                Discover My AI Opportunity
              </ScorecardCta>
              <p className="mt-4 text-sm text-faint">No credit card. No technical exam.</p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <ol className="relative">
              <span aria-hidden className="absolute bottom-8 left-[1.375rem] top-8 w-px bg-line-strong" />
              {STAGES.map((s) => (
                <li key={s.n} className="relative flex gap-5 py-4">
                  <span className="tabular relative z-10 grid h-11 w-11 shrink-0 place-items-center rounded-full border border-line-strong bg-bg text-sm font-semibold text-signal">
                    {s.n}
                  </span>
                  <span className="pt-1.5">
                    <span className="block text-[0.9375rem] font-semibold text-ink">{s.label}</span>
                    <span className="mt-1 block text-[0.9375rem] text-faint">{s.q}</span>
                  </span>
                </li>
              ))}
            </ol>
            <p className="ml-16 mt-2 text-sm text-faint">
              One question per screen, answered in your own words. After each one, a short reflection checks that
              we understood you, and you can correct it.
            </p>
          </Reveal>
        </div>

        <Reveal className="mt-20 lg:mt-28">
          <div className="card p-6 sm:p-10">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="t-eyebrow">Your score, in four dimensions</p>
                <p className="t-title mt-3 max-w-xl">
                  Each one is explained from your answers, so no number arrives without a reason.
                </p>
              </div>
            </div>
            <dl className="mt-8 grid gap-px overflow-hidden rounded-(--radius) border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
              {DIMENSIONS.map((d, i) => (
                <div key={d.name} className="bg-surface p-5">
                  <dt className="flex items-center gap-2.5 text-[0.9375rem] font-semibold text-ink">
                    <span className="tabular text-xs font-medium text-faint">{`0${i + 1}`}</span>
                    {d.name}
                  </dt>
                  <dd className="mt-2 text-sm text-faint">{d.body}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 text-sm text-faint">
              A starting-point self-assessment based on what you share. Not an audit, and not an industry
              benchmark.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
