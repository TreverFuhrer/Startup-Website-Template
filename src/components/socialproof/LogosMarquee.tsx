"use client";

import Image from "next/image";
import type { StaticImageData } from "next/image";

import acmeLogo from "../../assets/images/acme.png";
import quantumLogo from "../../assets/images/quantum.png";
import echoLogo from "../../assets/images/echo.png";
import celestialLogo from "../../assets/images/celestial.png";
import pulseLogo from "../../assets/images/pulse.png";
import apexLogo from "../../assets/images/apex.png";
import { cn } from "../lib/utils";
import { useReducedMotionPref } from "../../motion/useReducedMotionPref";

type LogoItem = {
  src: StaticImageData;
  alt: string;
};

type LogosMarqueeProps = {
  logos?: LogoItem[];
  className?: string;
};

const defaultLogos: LogoItem[] = [
  { src: acmeLogo, alt: "Acme Logo" },
  { src: quantumLogo, alt: "Quantum Logo" },
  { src: echoLogo, alt: "Echo Logo" },
  { src: celestialLogo, alt: "Celestial Logo" },
  { src: pulseLogo, alt: "Pulse Logo" },
  { src: apexLogo, alt: "Apex Logo" },
];

export const LogosMarquee = ({ logos = defaultLogos, className }: LogosMarqueeProps) => {
  const reducedMotion = useReducedMotionPref();

  if (reducedMotion) {
    return (
      <div className={cn("grid grid-cols-2 items-center justify-center gap-6 sm:grid-cols-3", className)}>
        {logos.map((logo, index) => (
          <div key={`${logo.alt}-${index}`} className="flex items-center justify-center">
            <Image src={logo.src} alt={logo.alt} sizes="120px" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={cn("logo-marquee inline-flex w-full flex-nowrap overflow-hidden mask-[linear-gradient(to_right,transparent_0,black_128px,black_calc(100%-128px),transparent_100%)]", className)}>
      <div className="logo-marquee-track">
        <ul className="flex w-max items-center justify-start [&_li]:mx-8 [&_img]:max-w-none">
          {logos.map((logo, index) => (
            <li key={`${logo.alt}-${index}`}>
              <Image src={logo.src} alt={logo.alt} sizes="120px" />
            </li>
          ))}
        </ul>
        <ul className="flex w-max items-center justify-start [&_li]:mx-8 [&_img]:max-w-none" aria-hidden="true">
          {logos.map((logo, index) => (
            <li key={`${logo.alt}-${index}-repeat`}>
              <Image src={logo.src} alt={logo.alt} sizes="120px" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LogosMarquee;
