import { GraduationCap, Languages } from "lucide-react";

import { education, languages } from "@/data/education";
import { labels, sections } from "@/data/site";

import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Education() {
  return (
    <Section id="education" copy={sections.education}>
      <div className="grid gap-4 md:grid-cols-[1.4fr_1fr]">
        <Reveal className="rounded-xl border border-border bg-surface p-6">
          <h3 className="flex items-center gap-2 text-sm font-semibold text-fg">
            <GraduationCap className="h-4 w-4 text-accent-text" aria-hidden="true" />
            {labels.education}
          </h3>
          <ul className="mt-5 space-y-5">
            {education.map((item) => (
              <li
                key={`${item.degree}-${item.period}`}
                className="flex flex-col gap-1 sm:flex-row sm:justify-between sm:gap-6"
              >
                <div>
                  <p className="font-medium text-fg">
                    {item.degree}, {item.field}
                  </p>
                  <p className="text-sm text-fg-muted">{item.institution}</p>
                </div>
                <p className="shrink-0 font-mono text-xs text-fg-subtle sm:pt-1">{item.period}</p>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.06} className="rounded-xl border border-border bg-surface p-6">
          <h3 className="flex items-center gap-2 text-sm font-semibold text-fg">
            <Languages className="h-4 w-4 text-accent-text" aria-hidden="true" />
            {labels.languages}
          </h3>
          <dl className="mt-5 space-y-4">
            {languages.map((lang) => (
              <div key={lang.name} className="flex items-baseline justify-between gap-4">
                <dt className="font-medium text-fg">{lang.name}</dt>
                <dd className="text-sm text-fg-muted">{lang.level}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
