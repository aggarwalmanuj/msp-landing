import Link from "next/link";
import { BrandLockup } from "@/components/brand";
import { ScorecardCta } from "@/components/scorecard-cta";

export default function NotFound() {
  return (
    <main id="main" className="mx-auto flex min-h-[80vh] max-w-xl flex-col items-start justify-center gap-6 px-4 sm:px-6">
      <Link href="/" className="rounded-md">
        <BrandLockup />
      </Link>
      <h1 className="t-section">
        This page isn&rsquo;t here. <span className="t-em">The opportunity still is.</span>
      </h1>
      <p className="t-lead">The link may be old or mistyped. You can start the assessment from here.</p>
      <ScorecardCta location="not_found" variant="signal" size="lg">
        Get My Free AI Opportunity Score
      </ScorecardCta>
    </main>
  );
}
