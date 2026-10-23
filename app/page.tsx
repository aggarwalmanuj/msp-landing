import { LandingAnalytics } from "@/components/landing-analytics";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { Choice } from "@/components/sections/choice";
import { Hero } from "@/components/sections/hero";
import { MspWorld } from "@/components/sections/msp-world";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Opportunity } from "@/components/sections/opportunity";
import { FinalCta, Trust } from "@/components/sections/trust";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

// Five sections, per the homepage copy doc. The same assessment CTA appears
// three times (hero, how it works, final); everything else is argument.
export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="flex-1">
        <Hero />
        <Opportunity />
        <MspWorld />
        <Choice />
        <HowItWorks />
        <Trust />
        <FinalCta />
      </main>
      <SiteFooter />
      <MobileStickyCta />
      <LandingAnalytics />
    </>
  );
}
