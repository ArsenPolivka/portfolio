import { highlights, profile } from "@/data/profile";
import { sections } from "@/data/site";

import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function About() {
  return (
    <Section id="about" copy={sections.about}>
      <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
        <Reveal>
          <p className="text-base leading-relaxed text-fg-muted sm:text-lg">{profile.summary}</p>
        </Reveal>
        <ul className="grid grid-cols-1 gap-3 min-[420px]:grid-cols-2">
          {highlights.map((item, i) => (
            <Reveal
              as="li"
              key={item.label}
              delay={i * 0.06}
              className="rounded-xl border border-border bg-surface p-5"
            >
              <p className="text-xl font-semibold tracking-tight text-fg">{item.value}</p>
              <p className="mt-1.5 text-sm leading-snug text-fg-muted">{item.label}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}
