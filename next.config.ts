import type { NextConfig } from "next";

/* Security headers. The CSP ships REPORT-ONLY until PostHog, the Meta Pixel,
   Vercel Analytics and the TetraNoodle beacon are confirmed clean in the
   browser console; set CSP_ENFORCE=true at build time to enforce. Origins
   mirror the sibling AI Merge landing pages. 'unsafe-inline' is required by
   the Meta Pixel and PostHog bootstrap snippets. */
const ENFORCE_CSP = process.env.CSP_ENFORCE === "true";

const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://*.posthog.com https://*.i.posthog.com https://connect.facebook.net https://va.vercel-scripts.com https://growth-os.tetranoodle.workers.dev",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://*.posthog.com https://www.facebook.com https://*.facebook.com",
  "font-src 'self' data:",
  "connect-src 'self' https://*.posthog.com https://*.i.posthog.com https://connect.facebook.net https://www.facebook.com https://*.facebook.com https://va.vercel-scripts.com https://vitals.vercel-insights.com https://growth-os.tetranoodle.workers.dev",
  "worker-src 'self' blob:",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'self'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), browsing-topics=()" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: ENFORCE_CSP ? "Content-Security-Policy" : "Content-Security-Policy-Report-Only", value: csp },
];

const nextConfig: NextConfig = {
  // Inlined at build time. new Date() in a prerendered component fails the
  // build under cacheComponents, and a copyright year needs no request.
  env: { BUILD_YEAR: String(new Date().getFullYear()) },
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  // PostHog endpoints require trailing slashes; Next's redirect breaks them.
  skipTrailingSlashRedirect: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  async rewrites() {
    // Same-origin PostHog proxy: survives ad blockers that drop *.posthog.com.
    return [
      { source: "/ingest/static/:path*", destination: "https://us-assets.i.posthog.com/static/:path*" },
      { source: "/ingest/:path*", destination: "https://us.i.posthog.com/:path*" },
    ];
  },
};

export default nextConfig;
