// Builds the outbound link that hands a visitor off to the AI Merge scorecard
// funnel, carrying our stored acquisition data as URL query params. The funnel
// reads these on page load. No API call, no other integration. Our only job is
// to build the URL correctly.

import { getStoredFirstTouch } from "./attribution";

/** The funnel entry point. Shared with the other AI Merge doorways; the `lp`
 *  param below is what routes this visitor into the MSP vertical. */
export const SCORECARD_BASE_URL =
  // Overridable so LOCAL testing of this page hands off to a LOCAL funnel.
  // Without it every dev click creates a real lead row in the live database.
  // Leave unset in production.
  process.env.NEXT_PUBLIC_SCORECARD_BASE_URL ??
  "https://www.aimerge.live/challenge/audience";

/**
 * Short slug identifying THIS landing page. The funnel maps it to its `msp`
 * vertical in lib/verticals.ts (VERTICAL_ALIASES). If the two ever drift, paid
 * traffic silently runs the consumer funnel with consumer copy - change both
 * together or not at all.
 */
export const LP_SLUG = "msp";

/** Organic/direct default campaign. Real ad clicks override it. */
export const CAMPAIGN_ID = "MSP_AI_OPPORTUNITY_SCORE";

const DEFAULT_UTMS: Record<string, string> = {
  utm_source: "msp",
  utm_medium: "organic",
  utm_campaign: CAMPAIGN_ID,
};

const REF_STORAGE_KEY = "aimerge-ref";

function newRef(): string {
  try {
    if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
      return `${LP_SLUG}_${crypto.randomUUID()}`;
    }
  } catch {
    // fall through to the best-effort fallback
  }
  return `${LP_SLUG}_${Math.random().toString(36).slice(2)}${Date.now().toString(36)}`;
}

/**
 * Stable first-party visitor id sent as `ref`: the join key the funnel echoes
 * back so a completed assessment reconciles to this visitor. First write wins.
 */
export function getOrCreateVisitorRef(): string {
  if (typeof window === "undefined") return "";
  try {
    const existing = window.localStorage.getItem(REF_STORAGE_KEY);
    if (existing) return existing;
    const id = newRef();
    window.localStorage.setItem(REF_STORAGE_KEY, id);
    return id;
  } catch {
    // Private mode: still send a ref for this click so attribution flows.
    return newRef();
  }
}

function readCookie(name: string): string | undefined {
  if (typeof document === "undefined") return undefined;
  const match = document.cookie.match(
    new RegExp(`(?:^|; )${name.replace(/[.$?*|{}()[\]\\/+^]/g, "\\$&")}=([^;]*)`)
  );
  return match ? decodeURIComponent(match[1]) : undefined;
}

/**
 * Full funnel URL with every value we have. Params we lack are omitted, never
 * sent empty.
 */
export function buildScorecardUrl(): string {
  const dest = new URL(SCORECARD_BASE_URL);
  const ft = getStoredFirstTouch();

  const params: Record<string, string | undefined> = {
    utm_source: ft.utmSource ?? DEFAULT_UTMS.utm_source,
    utm_medium: ft.utmMedium ?? DEFAULT_UTMS.utm_medium,
    utm_campaign: ft.utmCampaign ?? DEFAULT_UTMS.utm_campaign,
    utm_term: ft.utmTerm,
    utm_content: ft.utmContent,
    // fbclid lets the funnel's pixel attribute the eventual Lead to this click.
    fbclid: ft.fbclid,
    gclid: ft.gclid,
    ttclid: ft.ttclid,
    msclkid: ft.msclkid,
    fbp: readCookie("_fbp"),
    fbc: readCookie("_fbc"),
    ref: getOrCreateVisitorRef(),
    lp: LP_SLUG,
  };

  for (const [key, value] of Object.entries(params)) {
    if (value) dest.searchParams.set(key, value);
  }

  return dest.toString();
}
