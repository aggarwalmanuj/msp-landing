/** Section opener: numbered eyebrow + two-tone headline (ink, then a muted
 *  second clause at the same weight - the Apple/Google pattern). Every
 *  section uses it so the page reads as one document. */
export function SectionHead({
  index,
  eyebrow,
  id,
  children,
  className = "",
}: {
  index: string;
  eyebrow: string;
  id: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <p className="t-eyebrow flex items-center gap-3">
        <span className="tabular text-faint">{index}</span>
        <span aria-hidden className="h-px w-6 bg-signal/50" />
        {eyebrow}
      </p>
      <h2 id={id} className="t-section mt-5">
        {children}
      </h2>
    </div>
  );
}
