import { BeforeAfterGallery } from "@/components/primeglass/before-after";
import { Coverage } from "@/components/primeglass/coverage";
import { CtaForm } from "@/components/primeglass/cta-form";
import { FAQ } from "@/components/primeglass/faq";
import { Footer } from "@/components/primeglass/footer";
import { WindowTypes } from "@/components/primeglass/window-types";
import { Hero } from "@/components/primeglass/hero";
import { HowItWorks } from "@/components/primeglass/how-it-works";
import { Navbar } from "@/components/primeglass/navbar";
import { Pricing } from "@/components/primeglass/pricing";
import { Problem } from "@/components/primeglass/problem";
import { Services } from "@/components/primeglass/services";
import { StickyCta } from "@/components/primeglass/sticky-cta";
import { TrustBadges } from "@/components/primeglass/trust-badges";
import { TrustBar } from "@/components/primeglass/trust-bar";

export default function Page() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <TrustBar />
        <Problem />
        <BeforeAfterGallery />
        <TrustBadges />
        <Services />
        <WindowTypes />
        <HowItWorks />
        <Pricing />
        <Coverage />
        <FAQ />
        <CtaForm />
      </main>
      <Footer />
      <StickyCta />
    </>
  );
}
