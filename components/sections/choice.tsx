import { Reveal } from "@/components/reveal";
import { SectionHead } from "@/components/section-head";
import { DepthDiagram } from "@/components/visuals/depth-diagram";

export function Choice() {
  return (
    <section
      aria-labelledby="choice-title"
      className="border-y border-line bg-[linear-gradient(180deg,var(--surface)_0%,var(--bg)_100%)] py-(--space-section)"
    >
      <div className="mx-auto grid *:min-w-0 max-w-6xl items-start gap-14 px-4 sm:px-6 lg:grid-cols-[minmax(0,6fr)_minmax(0,5fr)] lg:gap-20 lg:px-8">
        <Reveal className="lg:order-2 lg:sticky lg:top-28">
          <SectionHead index="02" eyebrow="The choice" id="choice-title">
            The surface is getting <span className="t-em">crowded.</span>
          </SectionHead>
          <p className="t-lead mt-8">You can keep adding agents from vendor catalogs.</p>
          <p className="t-lead mt-4">Or build a differentiated service around what your clients actually need.</p>
          <p className="t-lead mt-4">
            The deeper opportunity is <strong className="font-semibold text-ink">Managed Intelligence Services</strong>:
            combining the right humans, AI, company knowledge, workflows, and safeguards.
          </p>
          <blockquote className="mt-10 border-l-2 border-signal pl-5">
            <p className="text-[1.375rem] font-semibold leading-snug tracking-[-0.02em] text-ink">
              Not just another AI license.{" "}
              <span className="t-em">A service clients have a reason to keep.</span>
            </p>
          </blockquote>
        </Reveal>

        <Reveal delay={120} className="lg:order-1">
          <DepthDiagram />
        </Reveal>
      </div>
    </section>
  );
}
