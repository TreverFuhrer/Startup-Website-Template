import type { CompanyConfig } from "./types";

export const companyConfig: CompanyConfig = {
  homepage: {
    sections: [
      { key: "hero", enabled: true, navId: "top" },
      { key: "logos", enabled: true, navId: "customers" },
      { key: "features", enabled: true, navId: "about" },
      { key: "product", enabled: true, navId: "app" },
      { key: "faqs", enabled: true, navId: "faqs" },
      { key: "pricing", enabled: true, navId: "pricing" },
      { key: "cta", enabled: true, navId: "cta" },
    ],
    hero: {
      badge: "Badge Text",
      headline: "Title",
      subheadline: "Subtitle",
      description: "Body copy that explains the core value in one punchy paragraph.",
      primaryCta: {
        label: "Primary CTA",
        href: "#cta",
      },
    },
    cta: {
      headline: "Subscription",
      description: "Body copy goes here.",
      inputPlaceholder: "email@company.com",
      primaryCta: {
        label: "Primary CTA",
      },
    },
  },
};

export default companyConfig;
