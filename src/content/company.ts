import acmeLogo from "../assets/images/acme.png";
import quantumLogo from "../assets/images/quantum.png";
import echoLogo from "../assets/images/echo.png";
import celestialLogo from "../assets/images/celestial.png";
import pulseLogo from "../assets/images/pulse.png";
import apexLogo from "../assets/images/apex.png";
import type { CompanyConfig } from "./types";

export const companyConfig: CompanyConfig = {
  trustBar: {
    mode: "integrations",
    heading: "Trusted by modern teams and their tools",
    integrations: [
      { name: "Acme", icon: acmeLogo },
      { name: "Quantum", icon: quantumLogo },
      { name: "Echo", icon: echoLogo },
      { name: "Celestial", icon: celestialLogo },
      { name: "Pulse", icon: pulseLogo },
      { name: "Apex", icon: apexLogo },
    ],
    logos: [
      { name: "Acme", icon: acmeLogo },
      { name: "Quantum", icon: quantumLogo },
      { name: "Echo", icon: echoLogo },
      { name: "Celestial", icon: celestialLogo },
      { name: "Pulse", icon: pulseLogo },
      { name: "Apex", icon: apexLogo },
    ],
    metrics: [
      { label: "Active teams", value: "10k+" },
      { label: "User rating", value: "4.9/5" },
      { label: "Uptime", value: "99.9%" },
    ],
  },
  homepage: {
    sections: [
      { key: "hero", enabled: true, navId: "top" },
      { key: "logos", enabled: true, navId: "customers" },
      { key: "features", enabled: true, navId: "about" },
      { key: "product", enabled: true, navId: "app" },
      { key: "faqs", enabled: true, navId: "faqs" },
      { key: "pricing", enabled: false, navId: "pricing" },
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
