// Single source of truth for site identity. Metadata, footer and structured
// data all read from here.

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://msp.aimerge.live";

export const PRODUCT_NAME = "MSP AI Opportunity Score";
export const PUBLISHER = "TetraNoodle Technologies";
export const BRAND = "AI Merge";
export const CONTACT_EMAIL = "feedback@tetranoodle.com";

/**
 * Privacy policy. The funnel hosts the canonical policy; the assessment data
 * this page leads to is collected there.
 * TODO(launch): confirm URL and retention wording (handoff doc, decision 2).
 */
export const PRIVACY_URL = "https://www.aimerge.live/privacy";
export const TERMS_URL = "https://www.aimerge.live/terms";

/**
 * Optional secondary "Book a Call" link (homepage copy doc, design notes).
 * Rendered only when set, so the page never ships a dead booking link.
 * TODO(launch): set once the live booking URL is confirmed (decision 1).
 */
export const BOOKING_URL = process.env.NEXT_PUBLIC_BOOKING_URL ?? "";
