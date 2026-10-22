// Unified funnel-event helper: PostHog and the Meta Pixel see the same event
// names and payloads. Both sinks are consent-gated upstream and no-op safely.

import posthog from "posthog-js";
import { trackCustom } from "./fbpixel";
import { LP_SLUG } from "./scorecard";

/** CTA placements on this page. Keep tight: a location that no longer exists
 *  still type-checks and quietly becomes a dead series in the funnel report. */
export type CtaLocation = "header" | "hero" | "how_it_works" | "final" | "mobile_sticky" | "not_found";

export function trackEvent(name: string, props?: Record<string, unknown>): void {
  if (typeof window === "undefined") return;
  const payload = { lp: LP_SLUG, ...props };
  try {
    // __loaded is false until posthog.init runs (i.e. before consent).
    if (posthog.__loaded) posthog.capture(name, payload);
  } catch {
    // Analytics must never break the page.
  }
  trackCustom(name, payload);
}
