import type { SiteConfig } from "./types";

export const siteConfig: SiteConfig = {
  brand: {
    name: "Company Name",
    logoLabel: "Brand",
  },
  siteUrl: "https://example.com",
  nav: [
    { type: "anchor", label: "About", href: "#about" },
    { type: "anchor", label: "App", href: "#app" },
    { type: "anchor", label: "Logos", href: "#customers" },
    { type: "anchor", label: "FAQs", href: "#faqs" },
    { type: "anchor", label: "Pricing", href: "#pricing" },
    { type: "anchor", label: "Primary CTA", href: "#cta", variant: "primary" },
  ],
  socials: [
    { label: "X", href: "https://x.com", icon: "x" },
    { label: "LinkedIn", href: "https://www.linkedin.com", icon: "linkedin" },
    { label: "Instagram", href: "https://www.instagram.com", icon: "instagram" },
    { label: "YouTube", href: "https://www.youtube.com", icon: "youtube" },
  ],
};

export default siteConfig;
