import type { ReactNode } from "react";

import type { SectionCopy } from "@/data/types";
import { cn } from "@/lib/cn";

import { Reveal } from "./Reveal";

interface SectionProps {
  id: string;
  copy: SectionCopy;
  children: ReactNode;
  className?: string;
}

export function Section({ id, copy, children, className }: SectionProps) {
  const headingId = `${id}-heading`;
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn("border-t border-border py-20 sm:py-24", className)}
    >
      <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
        <Reveal className="mb-10 max-w-2xl sm:mb-12">
          <p className="font-mono text-xs tracking-wider text-accent-text uppercase">
            {copy.eyebrow}
          </p>
          <h2
            id={headingId}
            className="mt-3 text-3xl font-semibold tracking-tight text-fg sm:text-4xl"
          >
            {copy.title}
          </h2>
          {copy.intro ? (
            <p className="mt-4 text-base leading-relaxed text-fg-muted">{copy.intro}</p>
          ) : null}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
