
import { LogoIcon, MenuIcon } from "./icons";
import { Container } from "./layout/Container";
import { siteConfig } from "@/content";

export const Navbar = () => {
  const navItems = siteConfig.nav;

  return (
    <header className="bg-(--ink)">
      <Container>
        <div className="flex items-center justify-between py-4">
          {/* Swap this logo and label with your brand. */}
          <a href="#top" className="relative" aria-label="Brand">
            <div className="absolute bottom-0 top-2 w-full bg-[linear-gradient(to_right,var(--brand-2),var(--brand-1),var(--brand-3))] blur-md" />
            <LogoIcon className="relative mt-1 h-12 w-12" />
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/30 sm:hidden"
            aria-label="Open menu"
          >
            <MenuIcon className="text-white" />
          </button>
          {/* Keep these links aligned with the section ids below. */}
          <nav className="hidden items-center gap-6 text-white sm:flex" aria-label="Primary">
            {navItems.map((item) => {
              const isPrimary = item.variant === "primary";
              const className = isPrimary
                ? "rounded-lg bg-white px-4 py-2 text-black"
                : "text-white/60 transition hover:text-white";
              const href = item.type === "anchor" ? `/${item.href}` : item.href;
              const target = item.type === "external" && item.newTab !== false ? "_blank" : undefined;
              const rel = target ? "noreferrer" : undefined;

              return (
                <a key={`${item.label}-${item.href}`} href={href} className={className} target={target} rel={rel}>
                  {item.label}
                </a>
              );
            })}
          </nav>
        </div>
      </Container>
    </header>
  );
};
