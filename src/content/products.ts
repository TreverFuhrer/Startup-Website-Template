import appScreen from "../assets/images/app-screen.png";
import messageScreen from "../assets/images/message.png";
import cursorScreen from "../assets/images/cursor.png";
import type { Product } from "./types";

export const products: Product[] = [
  {
    slug: "app",
    name: "Title",
    tagline: "App section body copy goes here.",
    ogImage: "/og/default.png",
    primaryCta: {
      label: "Primary CTA",
      href: "/product/app",
    },
    page: {
      order: ["hero", "screenshots", "howItWorks", "featureGrid", "useCases", "faq", "finalCta"],
      hero: {
        id: "overview",
        eyebrow: "Product",
        title: "Title",
        description: "A clear summary of what the product does for teams.",
        primaryCta: {
          label: "Primary CTA",
          href: "#get-started",
        },
        secondaryCta: {
          label: "View pricing",
          href: "/#pricing",
        },
        image: {
          src: appScreen,
          alt: "App dashboard",
        },
      },
      screenshots: {
        id: "screenshots",
        title: "Screenshots",
        description: "A quick look at the key surfaces people use every day.",
        items: [
          {
            src: appScreen,
            alt: "Main dashboard view",
            caption: "Main dashboard view",
          },
          {
            src: messageScreen,
            alt: "Collaboration view",
            caption: "Collaboration view",
          },
          {
            src: cursorScreen,
            alt: "Review workflow view",
            caption: "Review workflow view",
          },
        ],
      },
      howItWorks: {
        id: "how-it-works",
        title: "How it works",
        description: "A simple flow that keeps work moving without extra handoffs.",
        steps: [
          {
            title: "Connect your data",
            description: "Pull in the sources you already use and keep them in sync.",
          },
          {
            title: "Configure the workflow",
            description: "Define roles, approvals, and triggers in a single place.",
          },
          {
            title: "Track every change",
            description: "Monitor progress and keep everyone aligned in real time.",
          },
        ],
      },
      featureGrid: {
        id: "features",
        title: "Feature grid",
        description: "Foundational capabilities teams rely on for daily work.",
        features: [
          {
            title: "Shared timeline",
            description: "Keep milestones and ownership visible for every project.",
          },
          {
            title: "Audit-ready history",
            description: "Capture decisions and approvals in one searchable log.",
          },
          {
            title: "Team permissions",
            description: "Grant access by role without overexposing sensitive data.",
          },
          {
            title: "Automated alerts",
            description: "Notify the right people when something needs attention.",
          },
          {
            title: "Custom fields",
            description: "Adapt the schema to match how your org works.",
          },
          {
            title: "Export-ready reports",
            description: "Share status updates without manual formatting.",
          },
        ],
      },
      useCases: {
        id: "use-cases",
        title: "Use cases",
        description: "Built for teams that coordinate fast-moving work.",
        items: [
          {
            title: "Launch readiness",
            description: "Align marketing, product, and support on every milestone.",
          },
          {
            title: "Client onboarding",
            description: "Standardize handoffs and keep timelines consistent.",
          },
          {
            title: "Compliance reviews",
            description: "Track approvals and evidence without extra tools.",
          },
        ],
      },
      faq: {
        id: "faq",
        title: "FAQ",
        items: [
          {
            question: "How long does setup take?",
            answer: "Most teams complete the initial setup in under an hour.",
          },
          {
            question: "Can we customize workflows?",
            answer: "Yes. Each workflow is configurable by team and project.",
          },
          {
            question: "What support is available?",
            answer: "Email support is included, with priority options for teams.",
          },
        ],
      },
      finalCta: {
        id: "get-started",
        title: "Ready to get started?",
        description: "Set up your workspace and invite the team when you are ready.",
        primaryCta: {
          label: "Primary CTA",
          href: "/#pricing",
        },
        secondaryCta: {
          label: "Talk to sales",
          href: "mailto:hello@example.com",
        },
      },
    },
  },
];

export default products;
