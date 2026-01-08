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
  },
];

export default products;
