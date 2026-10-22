import Image from "next/image";
import { BrandLockup } from "@/components/brand";
import { CONTACT_EMAIL, PRIVACY_URL, PUBLISHER, TERMS_URL } from "@/lib/site";

export function SiteFooter() {
  const year = process.env.BUILD_YEAR;
  return (
    <footer className="border-t border-line pb-28 pt-14 md:pb-14">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <BrandLockup />
          <p className="inline-flex items-center gap-2.5 text-sm text-faint">
            Powered by
            <Image
              src="/brand/aimerge-wordmark.png"
              alt="AI Merge"
              width={1274}
              height={179}
              className="h-3 w-auto opacity-80"
            />
          </p>
        </div>
        <div className="hairline" />
        <div className="flex flex-col gap-4 text-sm text-faint sm:flex-row sm:items-center sm:justify-between">
          <p className="tabular">
            © {year} {PUBLISHER}
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li>
              <a className="transition-colors hover:text-ink" href={PRIVACY_URL}>
                Privacy
              </a>
            </li>
            <li>
              <a className="transition-colors hover:text-ink" href={TERMS_URL}>
                Terms
              </a>
            </li>
            <li>
              <a className="transition-colors hover:text-ink" href={`mailto:${CONTACT_EMAIL}`}>
                {CONTACT_EMAIL}
              </a>
            </li>
          </ul>
        </div>
        <p className="max-w-3xl text-xs leading-relaxed text-faint">
          The MSP AI Opportunity Score is an exploratory self-assessment built from your own answers. It is not an
          independent audit, a validated industry benchmark, or a prediction of revenue. AI Merge is proprietary
          intellectual property created by Manuj Aggarwal.
        </p>
      </div>
    </footer>
  );
}
