import { BookOpen, Cpu, ShieldCheck, Users, Workflow } from "lucide-react";

// Generic on purpose: naming real vendors' products would be a claim about
// them. The point is the crowding, not who is in the crowd.
const SURFACE = ["Agent", "Copilot", "Assistant", "Agent", "Chatbot", "Agent", "Copilot", "Agent", "Assistant", "Agent", "Agent", "Copilot"];

const LAYERS = [
  { icon: Users, title: "The right humans", body: "Who decides, reviews, and stays accountable." },
  { icon: Cpu, title: "AI", body: "Chosen for the job, not for the catalog." },
  { icon: BookOpen, title: "Company knowledge", body: "Approved, permissioned, and current." },
  { icon: Workflow, title: "Workflows", body: "Where the work actually happens." },
  { icon: ShieldCheck, title: "Safeguards", body: "Privacy, security, and human oversight." },
] as const;

/**
 * Human + AI architecture as an ocean cross-section. Above the waterline:
 * interchangeable products anyone can resell. Below it: the five layers the
 * copy names, which together are one client's service. Readable as a list
 * for screen readers; the waterline and depth shading are decorative.
 */
export function DepthDiagram() {
  return (
    <figure className="card overflow-hidden">
      <div className="relative px-5 pb-8 pt-6 sm:px-8">
        <figcaption className="flex items-baseline justify-between gap-4">
          <span className="text-xs font-semibold uppercase tracking-[0.08em] text-faint">The surface</span>
          <span className="text-xs text-faint">Vendor catalogs</span>
        </figcaption>
        <ul aria-label="Interchangeable vendor AI products" className="mt-4 flex flex-wrap gap-1.5">
          {SURFACE.map((s, i) => (
            <li
              key={i}
              className="rounded-md border border-white/[0.07] bg-white/[0.03] px-2.5 py-1 text-xs text-faint"
            >
              {s}
            </li>
          ))}
        </ul>
      </div>

      {/* Waterline */}
      <svg aria-hidden viewBox="0 0 600 24" preserveAspectRatio="none" className="block h-6 w-full text-depth-1/50">
        <path
          d="M0 12 C 50 2, 100 22, 150 12 S 250 2, 300 12 S 400 22, 450 12 S 550 2, 600 12"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      <div className="relative bg-[linear-gradient(180deg,rgb(21_96_126/0.18)_0%,rgb(21_96_126/0.06)_55%,rgb(79_209_197/0.10)_100%)] px-5 pb-6 pt-5 sm:px-8 sm:pb-8">
        <p className="flex items-baseline justify-between gap-4">
          <span className="text-xs font-semibold uppercase tracking-[0.08em] text-depth-1">The depth</span>
          <span className="text-xs text-faint">One client&rsquo;s service</span>
        </p>
        <ol className="mt-5 space-y-2">
          {LAYERS.map(({ icon: Icon, title, body }) => (
            <li
              key={title}
              className="flex items-center gap-4 rounded-(--radius) border border-line bg-bg/40 px-4 py-3"
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-depth-3/40 text-depth-1">
                <Icon aria-hidden className="h-[18px] w-[18px]" strokeWidth={1.6} />
              </span>
              <span className="min-w-0">
                <span className="block text-[0.9375rem] font-medium text-ink">{title}</span>
                <span className="block text-sm text-faint">{body}</span>
              </span>
            </li>
          ))}
        </ol>
        <div className="mt-5 flex items-center gap-3 rounded-(--radius) bg-signal px-4 py-3.5 text-signal-ink">
          <span aria-hidden className="h-2 w-2 rounded-full bg-signal-ink/70" />
          <span className="text-[0.9375rem] font-semibold">Managed Intelligence Service</span>
        </div>
      </div>
    </figure>
  );
}
