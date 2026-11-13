import { sections } from "@/data/site";
import { skillGroups } from "@/data/skills";

import { Reveal } from "./Reveal";
import { Section } from "./Section";
import { Tag } from "./Tag";

/** "3y+" → "3+ years of experience", "1.5–2y" → "1.5–2 years of experience". */
function describeYears(years: string): string {
  const plus = years.endsWith("+");
  const value = years.replace(/y\+?$/, "");
  const unit = value === "1" ? "year" : "years";
  return `${value}${plus ? "+" : ""} ${unit} of experience`;
}

export function Skills() {
  return (
    <Section id="skills" copy={sections.skills}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal
            key={group.title}
            delay={(i % 3) * 0.05}
            className="rounded-xl border border-border bg-surface p-5"
          >
            <h3 className="text-sm font-semibold text-fg">{group.title}</h3>
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {group.skills.map((skill) => (
                <li key={skill.name}>
                  <Tag
                    meta={skill.years}
                    metaLabel={skill.years ? describeYears(skill.years) : undefined}
                  >
                    {skill.name}
                  </Tag>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
