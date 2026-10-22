"use client";

// GDPR cookie banner. Renders only for visitors with no stored decision;
// analytics (PostHog, Meta Pixel) stay off until "Accept" is pressed.
// Consent is an external store (localStorage + change event), so
// useSyncExternalStore keeps server and client renders consistent.

import { useSyncExternalStore } from "react";
import {
  getConsent,
  getServerConsentSnapshot,
  setConsent,
  subscribeConsent,
} from "@/lib/consent";
import { PRIVACY_URL } from "@/lib/site";

export function CookieConsent() {
  const consent = useSyncExternalStore(
    subscribeConsent,
    getConsent,
    getServerConsentSnapshot
  );

  // "unknown" = still hydrating; null = no decision yet (show the banner).
  if (consent !== null) return null;

  return (
    <section
      aria-label="Cookie consent"
      className="anim-dialog-in fixed inset-x-0 bottom-0 z-45 p-3 sm:bottom-5 sm:left-auto sm:right-5 sm:max-w-xs sm:p-0"
    >
      {/* Consent is required, not persuasive. On phones it is one compact
          row so it never covers the hero CTA on first view; on desktop it
          sits bottom-right, away from the left-aligned CTAs. */}
      <div className="flex items-center gap-3 rounded-(--radius) border border-line-strong bg-surface/90 p-3 shadow-(--shadow-2) backdrop-blur-lg sm:block sm:p-4">
        <p className="min-w-0 flex-1 text-xs leading-snug text-faint">
          <span className="font-semibold text-ink sm:block">Cookies, briefly.</span>{" "}
          <span className="hidden sm:inline">
            We use cookies for analytics and to measure our ads. Accept to help us improve the site, or decline and
            we&apos;ll only use what&apos;s strictly necessary.
          </span>
          <span className="sm:hidden">Analytics and ad measurement.</span>{" "}
          <a href={PRIVACY_URL} className="font-medium text-fg underline underline-offset-2">
            Privacy
          </a>
        </p>
        <div className="flex shrink-0 gap-2 sm:mt-3.5">
          <button
            type="button"
            onClick={() => setConsent("granted")}
            className="inline-flex min-h-11 items-center justify-center rounded-lg bg-signal px-4 text-sm font-semibold text-signal-ink transition-colors hover:bg-[#6fe0d5] sm:flex-1"
          >
            Accept
          </button>
          <button
            type="button"
            onClick={() => setConsent("denied")}
            className="inline-flex min-h-11 items-center justify-center rounded-lg border border-line-strong px-4 text-sm font-medium text-ink transition-colors hover:bg-surface-2 sm:flex-1"
          >
            Decline
          </button>
        </div>
      </div>
    </section>
  );
}
