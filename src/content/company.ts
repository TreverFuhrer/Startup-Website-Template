import type { CompanyConfig } from "./types";

export const companyConfig: CompanyConfig = {
  homepage: {
    order: ["hero", "logos", "features", "product", "faqs", "pricing", "cta"],
    sections: {
      hero: {
        id: "top",
        enabled: true,
        badge: "Badge Text",
        headline: "Title",
        subheadline: "Subtitle",
        description: "Body copy that explains the core value in one punchy paragraph.",
        primaryCta: {
          label: "Primary CTA",
          href: "#cta",
        },
      },
      logos: {
        id: "customers",
        enabled: true,
      },
      features: {
        id: "about",
        enabled: true,
      },
      product: {
        id: "app",
        enabled: true,
      },
      faqs: {
        id: "faqs",
        enabled: true,
      },
      pricing: {
        id: "pricing",
        enabled: true,
      },
      cta: {
        id: "cta",
        enabled: true,
        headline: "Subscription",
        description: "Body copy goes here.",
        inputPlaceholder: "email@company.com",
        primaryCta: {
          label: "Primary CTA",
        },
      },
    },
  },
};

export default companyConfig;
