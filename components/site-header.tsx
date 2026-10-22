"use client";

import { useEffect, useState } from "react";
import { BrandLockup } from "@/components/brand";
import { ScorecardCta } from "@/components/scorecard-cta";
import { BOOKING_URL } from "@/lib/site";

// Nav per the copy doc: Logo | How It Works | Get My Score, optional Book a
// Call. Transparent over the hero photo, frosted once the page moves.
export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
        scrolled ? "border-b border-line bg-bg/80 backdrop-blur-lg" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a href="#main" aria-label="TetraNoodle, MSP AI Opportunity Score home" className="rounded-md">
          <BrandLockup />
        </a>
        <nav aria-label="Primary" className="flex items-center gap-1 sm:gap-2">
          <a
            href="#how"
            className="hidden min-h-11 items-center rounded-full px-3.5 text-sm font-medium text-fg transition-colors hover:text-ink sm:inline-flex"
          >
            How it works
          </a>
          {BOOKING_URL ? (
            <a
              href={BOOKING_URL}
              className="hidden min-h-11 items-center rounded-full px-3.5 text-sm font-medium text-fg transition-colors hover:text-ink md:inline-flex"
            >
              Book a call
            </a>
          ) : null}
          <ScorecardCta location="header" variant="signal" className="!min-h-10 !px-4 !py-2 text-sm">
            Get My Score
          </ScorecardCta>
        </nav>
      </div>
    </header>
  );
}
