import { ChevronRight } from "lucide-react";

export function Banner() {
  return (
    <div className="border-b border-white/10 bg-(--ink) py-3 text-white md:py-0">
      <div className="container flex flex-col items-center justify-center gap-4 md:h-12 md:flex-row">
        {/* Update this line to whatever quick announcement you want. */}
        <a
          href="#top"
          className="group inline-flex items-center justify-center text-center text-sm leading-loose"
        >
          ✦
          <span className="font-bold">Announcement</span>
          <ChevronRight className="ml-1 size-4 transition-all duration-300 ease-out group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
}
