import appScreen from "../assets/images/app-screen.png";
import type { Product } from "./types";

export const products: Product[] = [
  {
    slug: "app",
    name: "Title",
    tagline: "App section body copy goes here.",
    primaryCta: {
      label: "Primary CTA",
      href: "#cta",
    },
    screenshots: [
      {
        src: appScreen,
        alt: "App screen",
      },
    ],
    sections: [
      {
        title: "Section Title",
        description: "Product section copy goes here to highlight a key capability.",
        bullets: ["Benefit one", "Benefit two", "Benefit three"],
      },
      {
        title: "Section Title",
        description: "Use this block to call out another outcome or workflow.",
      },
    ],
  },
];

export default products;
