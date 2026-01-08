import type { StaticImageData } from "next/image";

export type NavAnchorItem = {
  type: "anchor";
  label: string;
  href: `#${string}`;
  variant?: "primary";
};

export type NavPageItem = {
  type: "page";
  label: string;
  href: string;
  variant?: "primary";
};

export type NavExternalItem = {
  type: "external";
  label: string;
  href: string;
  newTab?: boolean;
  variant?: "primary";
};

export type NavItem = NavAnchorItem | NavPageItem | NavExternalItem;

export type SiteConfig = {
  brand: {
    name: string;
    logoLabel: string;
  };
  siteUrl: string;
  nav: NavItem[];
  socials: Array<{
    label: string;
    href: string;
    icon: string;
  }>;
};

export type HomeSectionKey = "hero" | "logos" | "features" | "product" | "faqs" | "pricing" | "cta";

export type HomeSectionConfig = {
  key: HomeSectionKey;
  enabled: boolean;
  navId: string;
};

export type CompanyConfig = {
  homepage: {
    sections: HomeSectionConfig[];
    hero: {
      badge: string;
      headline: string;
      subheadline: string;
      description: string;
      primaryCta: {
        label: string;
        href: string;
      };
    };
    cta: {
      headline: string;
      description: string;
      inputPlaceholder: string;
      primaryCta: {
        label: string;
        href?: string;
      };
    };
  };
};

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  primaryCta: {
    label: string;
    href: string;
  };
  screenshots: Array<{
    src: StaticImageData;
    alt: string;
  }>;
  sections: ProductSection[];
};

export type ProductSection = {
  title: string;
  description: string;
  bullets?: string[];
  image?: {
    src: StaticImageData;
    alt: string;
  };
};

export type PricingPlan = {
  id: string;
  name: string;
  description: string;
  price: {
    monthly: number;
    yearly: number;
  };
  features: string[];
  ctaLabel: string;
  popular?: boolean;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type Testimonial = {
  name: string;
  title?: string;
  company?: string;
  quote: string;
  avatar?: StaticImageData;
};

export type Logo = {
  src: StaticImageData;
  alt: string;
};
