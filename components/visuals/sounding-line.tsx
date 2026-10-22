/**
 * The hero's ocean-depth illustration: a sounding line dropped from the
 * surface. The surface is crowded with vendor agents; each mark below it is
 * one layer of what a Managed Intelligence service is actually made of, and
 * the lead weight rests on the service itself. It is the page's argument in
 * one vertical gesture, and it is decorative to assistive tech because the
 * same content is stated in prose in "The surface is getting crowded".
 */

const MARKS = [
  { label: "Client workflows", y: 30 },
  { label: "Company knowledge", y: 52 },
  { label: "People and judgment", y: 74 },
] as const;

export function SoundingLine({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`relative select-none ${className}`}>
      <div className="relative h-full min-h-[30rem]">
        {/* Surface */}
        <div className="absolute inset-x-0 top-[6%]">
          <div className="flex items-center gap-3">
            <span className="h-px flex-1 bg-gradient-to-r from-depth-1/70 to-depth-1/0" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-depth-1">Surface</span>
          </div>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {Array.from({ length: 9 }).map((_, i) => (
              <span
                key={i}
                className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[10px] font-medium text-faint"
              >
                AI agent
              </span>
            ))}
          </div>
        </div>

        {/* The line itself */}
        <span
          className="sound-line absolute bottom-[8%] left-[7px] top-[24%] w-px bg-gradient-to-b from-depth-1/60 via-depth-2/50 to-signal"
        />

        {MARKS.map((m) => (
          <div
            key={m.label}
            className="absolute left-0 flex items-center gap-4"
            style={{ top: `${m.y}%` }}
          >
            <span className="relative z-10 ml-[3px] h-[9px] w-[9px] rounded-full border border-depth-1/70 bg-bg" />
            <span className="text-sm text-fg/90">{m.label}</span>
          </div>
        ))}

        {/* Lead weight - the service */}
        <div className="absolute bottom-[4%] left-0 flex items-center gap-4">
          <span className="relative z-10 grid h-[17px] w-[17px] place-items-center">
            <span className="ping absolute inset-0 rounded-full bg-signal/50" />
            <span className="relative h-[17px] w-[17px] rounded-full bg-signal shadow-[0_0_24px_rgb(79_209_197/0.7)]" />
          </span>
          <span>
            <span className="block text-[11px] font-semibold uppercase tracking-[0.08em] text-signal">Depth</span>
            <span className="block text-lg font-semibold leading-tight tracking-[-0.015em] text-ink">Managed Intelligence</span>
          </span>
        </div>
      </div>
    </div>
  );
}
