import type { Metadata } from "next";
import { Banner } from "@/components/Banner";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/socialproof/TrustBar";
import { Features } from "@/components/Features";
import { ProductShowcase } from "@/components/ProductShowcase";
import { FAQs } from "@/components/FAQs";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";
import { Pricing } from "@/components/Pricingdemo";
import { companyConfig, type HomeSectionKey } from "@/content";
import { cloneElement } from "react";
import type { ReactElement } from "react";

export const metadata: Metadata = {
  title: "Home",
  description: "Short description of your startup",
  openGraph: {
    title: "Home",
    description: "Short description of your startup",
    images: [{ url: "/og/default.png" }],
  },
  twitter: {
    title: "Home",
    description: "Short description of your startup",
    images: ["/og/default.png"],
  },
};

const SECTION_COMPONENTS: Record<HomeSectionKey, ReactElement<{ id?: string }>> = {
  hero: <Hero />,
  logos: <TrustBar />,
  features: <Features />,
  product: <ProductShowcase />,
  faqs: <FAQs />,
  pricing: <Pricing />,
  cta: <CallToAction />,
};

export default function Home() {
  const { sections } = companyConfig.homepage;

  return (
    <>
      <div>
        <Banner />
        <Navbar />
        <div className="overflow-x-hidden">
          <main>
            {/* Reorder sections in content/company.ts to reshape the page flow. */}
            {sections.map((section) => {
              if (!section.enabled) {
                return null;
              }

              const sectionElement = SECTION_COMPONENTS[section.key];
              return cloneElement(sectionElement, { id: section.navId, key: section.key });
            })}
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
