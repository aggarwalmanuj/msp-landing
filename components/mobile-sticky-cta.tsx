"use client";

// Mobile-only sticky CTA. Appears once the hero CTA has left view and steps
// aside while the final CTA is on screen, so the page never shows two
// identical buttons at once (one primary action per screen).

import { useEffect, useState } from "react";
import { ScorecardCta } from "@/components/scorecard-cta";

export function MobileStickyCta() {
  const [pastHero, setPastHero] = useState(false);
  const [finalInView, setFinalInView] = useState(false);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const hero = document.getElementById("hero-cta");
    const final = document.getElementById("final-cta");
    const observers: IntersectionObserver[] = [];
    if (hero) {
      const o = new IntersectionObserver(([e]) =>
        // Only "past" when the CTA has scrolled ABOVE the viewport.
        setPastHero(!e.isIntersecting && e.boundingClientRect.top < 0)
      );
      o.observe(hero);
      observers.push(o);
    }
    if (final) {
      const o = new IntersectionObserver(([e]) => setFinalInView(e.isIntersecting));
      o.observe(final);
      observers.push(o);
    }
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const visible = pastHero && !finalInView;

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-line bg-bg/90 px-4 pt-3 backdrop-blur-md transition-transform duration-300 ease-out md:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <ScorecardCta
        variant="signal"
        location="mobile_sticky"
        // aria-hidden must never wrap a focusable element.
        tabIndex={visible ? undefined : -1}
        className={`w-full ${visible ? "" : "pointer-events-none"}`}
      >
        Get My Free AI Opportunity Score
      </ScorecardCta>
    </div>
  );
}
