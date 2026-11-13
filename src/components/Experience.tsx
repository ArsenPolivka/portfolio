import { experience } from "@/data/experience";
import { sections } from "@/data/site";

import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Experience() {
  return (
    <Section id="experience" copy={sections.experience}>
      <ol className="relative ml-1.5 border-l border-border">
        {experience.map((job, i) => (
          <Reveal
            as="li"
            key={job.id}
            delay={i * 0.05}
            className="relative pb-12 pl-8 last:pb-0 sm:pl-10"
          >
            <span
              aria-hidden="true"
              className="absolute top-1.5 -left-[7px] h-3.5 w-3.5 rounded-full border-[3px] border-bg bg-accent"
            />
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
              <h3 className="text-lg font-semibold tracking-tight text-fg sm:text-xl">
                {job.role} <span className="font-normal text-fg-subtle">·</span>{" "}
                <span className="text-fg">{job.company}</span>
              </h3>
              {job.period ? (
                <p className="shrink-0 font-mono text-xs text-fg-subtle sm:text-sm">{job.period}</p>
              ) : null}
            </div>
            <p className="mt-1 text-sm text-fg-subtle">
              {[job.companyNote, job.location].filter(Boolean).join(" · ")}
            </p>

            {job.progression ? (
              <ol aria-label="Role progression" className="mt-5 flex flex-wrap items-center gap-2">
                {job.progression.map((step, idx, steps) => {
                  const isCurrent = idx === steps.length - 1;
                  return (
                    <li key={step.title} className="flex items-center gap-2">
                      <span
                        className={
                          isCurrent
                            ? "rounded-md border border-accent/40 bg-accent-soft px-2.5 py-1 font-mono text-xs text-accent-text"
                            : "rounded-md border border-border bg-bg-subtle px-2.5 py-1 font-mono text-xs text-fg-muted"
                        }
                      >
                        {step.title}
                        <span className="text-fg-subtle"> · {step.period}</span>
                      </span>
                      {!isCurrent ? (
                        <span aria-hidden="true" className="text-xs text-fg-subtle">
                          →
                        </span>
                      ) : null}
                    </li>
                  );
                })}
              </ol>
            ) : null}

            <ul className="mt-5 space-y-2.5">
              {job.points.map((point) => (
                <li key={point} className="flex gap-3 text-[0.95rem] leading-relaxed text-fg-muted">
                  <span
                    aria-hidden="true"
                    className="mt-[0.6rem] h-1 w-1 shrink-0 rounded-full bg-fg-subtle"
                  />
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
