import Image from "next/image";

/** TetraNoodle lockup. The source mark is brand purple; it is rendered as a
 *  white silhouette so the page keeps one accent colour (teal). */
export function BrandLockup({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Image
        src="/brand/tetranoodle-mark.png"
        alt=""
        width={22}
        height={24}
        className="h-[22px] w-auto brightness-0 invert"
      />
      <span className="text-[15px] font-semibold tracking-[-0.01em] text-ink">TetraNoodle</span>
    </span>
  );
}
