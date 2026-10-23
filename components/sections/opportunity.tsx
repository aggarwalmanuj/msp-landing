import { KeyRound, Lock, Server, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHead } from "@/components/section-head";

const THEN = [
  { label: "Firewalls", icon: ShieldCheck },
  { label: "Security", icon: Lock },
  { label: "Access", icon: KeyRound },
  { label: "Infrastructure", icon: Server },
] as const;
const NOW = ["Useful", "Secure", "Personalized"] as const;

export function Opportunity() {
  return (
    <section aria-labelledby="opportunity-title" className="py-(--space-section)">
      <div className="mx-auto grid *:min-w-0 max-w-6xl gap-14 px-4 sm:px-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-20 lg:px-8">
        <Reveal>
          <SectionHead index="01" eyebrow="The opportunity" id="opportunity-title">
            We&rsquo;ve seen this <span className="t-em">before.</span>
          </SectionHead>
          <p className="t-lead mt-8 max-w-md">
            When the internet made information abundant, MSPs built businesses managing its flow.
          </p>
          <p className="t-lead mt-4 max-w-md">Now AI is making intelligence abundant.</p>
        </Reveal>

        <Reveal delay={120}>
          <ol className="card relative overflow-hidden p-2">
            <li className="rounded-[calc(var(--radius-lg)-0.25rem)] p-6 sm:p-8">
              <p className="flex items-baseline justify-between gap-4">
                <span className="text-sm font-semibold text-ink">The internet era</span>
                <span className="text-xs uppercase tracking-[0.08em] text-faint">Information, abundant</span>
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {THEN.map(({ label, icon: Icon }) => (
                  <li
                    key={label}
                    className="inline-flex items-center gap-2 rounded-full border border-line-strong px-3.5 py-1.5 text-sm text-fg"
                  >
                    <Icon aria-hidden className="h-3.5 w-3.5 text-depth-1" strokeWidth={1.8} />
                    {label}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm text-faint">MSPs managed the flow. That became the business.</p>
            </li>

            <li aria-hidden className="mx-8 flex items-center gap-3 py-1">
              <span className="h-px flex-1 bg-line" />
              <svg width="12" height="12" viewBox="0 0 12 12" className="text-faint">
                <path d="M6 1v10M2 7l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              </svg>
              <span className="h-px flex-1 bg-line" />
            </li>

            <li className="rounded-[calc(var(--radius-lg)-0.25rem)] bg-[linear-gradient(160deg,rgb(79_209_197/0.10),transparent_70%)] p-6 ring-1 ring-signal/25 sm:p-8">
              <p className="flex items-baseline justify-between gap-4">
                <span className="text-sm font-semibold text-ink">The AI era</span>
                <span className="text-xs uppercase tracking-[0.08em] text-signal">Intelligence, abundant</span>
              </p>
              <p className="t-title mt-5">
                Who&rsquo;s going to make it useful, secure, and personalized for every business?
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {NOW.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-dashed border-signal/45 px-3.5 py-1.5 text-sm text-ink"
                  >
                    {t}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-[0.9375rem] font-medium text-signal">
                That&rsquo;s the next managed-service opportunity.
              </p>
            </li>
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
