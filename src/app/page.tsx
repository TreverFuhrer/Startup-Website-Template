import { Banner } from "@/components/Banner";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { LogoTicker } from "@/components/LogoTicker";
import { Features } from "@/components/Features";
import { ProductShowcase } from "@/components/ProductShowcase";
import { FAQs } from "@/components/FAQs";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";
import { Pricing } from "@/components/Pricingdemo";
import { companyConfig, type HomeSectionKey } from "@/content";
import type { ReactElement } from "react";

const sectionComponents: Record<HomeSectionKey, () => ReactElement> = {
  hero: Hero,
  logos: LogoTicker,
  features: Features,
  product: ProductShowcase,
  faqs: FAQs,
  pricing: Pricing,
  cta: CallToAction,
};

export default function Home() {
  const { order, sections } = companyConfig.homepage;

  return (
    <>
      <div className="overflow-x-hidden">
        <Banner />
        <Navbar />
        <main>
          {/* Reorder sections in content/company.ts to reshape the page flow. */}
          {order.map((sectionKey) => {
            if (!sections[sectionKey].enabled) {
              return null;
            }

            const SectionComponent = sectionComponents[sectionKey];
            return <SectionComponent key={sectionKey} />;
          })}
        </main>
        <Footer />
      </div>
    </>
  );
}
