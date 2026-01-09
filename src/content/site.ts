import type { SiteConfig } from "./types";

export const siteConfig: SiteConfig = {
  brand: {
    name: "Company Name",
    logoLabel: "Brand",
  },
  siteUrl: "https://example.com",
  nav: [
    { type: "anchor", label: "About", href: "/#about", sectionId: "about" },
    { type: "anchor", label: "App", href: "/#app", sectionId: "app" },
    { type: "anchor", label: "Logos", href: "/#customers", sectionId: "customers" },
    { type: "anchor", label: "FAQs", href: "/#faqs", sectionId: "faqs" },
    { type: "anchor", label: "Pricing", href: "/#pricing", sectionId: "pricing" },
    { type: "page", label: "Product", href: "/product/app" },
  ],
  navbar: {
    sticky: true,
    activeSectionHighlight: true,
    stickyStyle: "blur-border",
    primaryCta: {
      label: "Primary CTA",
      href: "/#cta",
    },
  },
  socials: [
    { label: "X", href: "https://x.com", icon: "x" },
    { label: "LinkedIn", href: "https://www.linkedin.com", icon: "linkedin" },
    { label: "Instagram", href: "https://www.instagram.com", icon: "instagram" },
    { label: "YouTube", href: "https://www.youtube.com", icon: "youtube" },
  ],
};

export default siteConfig;
