"use client";

import { AnimatePresence, useReducedMotion } from "motion/react";
import * as m from "motion/react-m";
import { ChevronDown, Lock } from "lucide-react";
import { useId, useState } from "react";

import { labels } from "@/data/site";
import type { Project } from "@/data/types";
import { cn } from "@/lib/cn";

import { Tag } from "./Tag";

interface ProjectCardProps {
  project: Project;
  /** Wide layout: description + meta on the left, highlights on the right. */
  wide?: boolean;
  /** How many highlights are visible before the card is expanded. */
  previewCount: number;
}

function Bullet({ text }: { text: string }) {
  return (
    <li className="flex gap-3 text-sm leading-relaxed text-fg-muted">
      <span aria-hidden="true" className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-accent" />
      {text}
    </li>
  );
}

export function ProjectCard({ project, wide = false, previewCount }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);
  const reduce = useReducedMotion();
  const extraId = useId();

  const visible = project.highlights.slice(0, previewCount);
  const extra = project.highlights.slice(previewCount);
  const typeLabel = project.type === "company" ? labels.companyProject : labels.freelanceProject;

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition-colors duration-200 sm:p-7",
        "hover:border-border-strong",
        project.featured && "ring-1 ring-accent/0 hover:ring-accent/15",
      )}
    >
      <div
        className={cn(
          "flex h-full flex-col",
          wide && "lg:grid lg:grid-cols-[1fr_1.15fr] lg:gap-10",
        )}
      >
        {/* Header & meta */}
        <div className="flex flex-col">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-md bg-accent-soft px-2 py-0.5 font-mono text-[0.7rem] tracking-wide text-accent-text uppercase">
              {project.domain}
            </span>
            <span className="rounded-md border border-border px-2 py-0.5 text-[0.7rem] font-medium text-fg-muted">
              {typeLabel}
            </span>
            {project.featured ? (
              <span className="ml-auto font-mono text-[0.7rem] text-fg-subtle uppercase">
                {labels.featured}
              </span>
            ) : null}
          </div>

          <h3
            className={cn(
              "mt-4 font-semibold tracking-tight text-fg",
              wide ? "text-2xl" : "text-xl",
            )}
          >
            {project.name}
          </h3>
          <p className="mt-2 text-[0.95rem] leading-relaxed text-fg-muted">{project.description}</p>

          <dl className="mt-4 flex flex-wrap gap-x-5 gap-y-1 font-mono text-xs text-fg-subtle">
            <div className="flex gap-1.5">
              <dt className="sr-only">Role</dt>
              <dd>{project.role}</dd>
            </div>
            <div className="flex gap-1.5">
              <dt className="sr-only">Duration</dt>
              <dd>{project.duration}</dd>
            </div>
          </dl>

          {wide ? (
            <ul className="mt-6 flex flex-wrap gap-1.5" aria-label="Tech stack">
              {project.stack.map((tech) => (
                <li key={tech}>
                  <Tag>{tech}</Tag>
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        {/* Highlights */}
        <div className={cn("mt-6 flex flex-1 flex-col", wide && "lg:mt-0")}>
          <ul className="space-y-2">
            {visible.map((h) => (
              <Bullet key={h} text={h} />
            ))}
          </ul>

          <AnimatePresence initial={false}>
            {expanded && extra.length > 0 ? (
              <m.div
                id={extraId}
                key="extra"
                initial={reduce ? false : { height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="overflow-hidden"
              >
                <ul className="space-y-2 pt-2">
                  {extra.map((h) => (
                    <Bullet key={h} text={h} />
                  ))}
                </ul>
              </m.div>
            ) : null}
          </AnimatePresence>

          {extra.length > 0 ? (
            <button
              type="button"
              aria-expanded={expanded}
              aria-controls={expanded ? extraId : undefined}
              onClick={() => setExpanded((v) => !v)}
              className="mt-3 inline-flex w-fit items-center gap-1 rounded text-sm font-medium text-accent-text transition-colors hover:text-fg"
            >
              {expanded ? labels.showLess : `${labels.showMore} (+${extra.length})`}
              <ChevronDown
                aria-hidden="true"
                className={cn(
                  "h-4 w-4 transition-transform duration-200",
                  expanded && "rotate-180",
                )}
              />
            </button>
          ) : null}

          {!wide ? (
            <ul className="mt-6 flex flex-wrap gap-1.5" aria-label="Tech stack">
              {project.stack.map((tech) => (
                <li key={tech}>
                  <Tag>{tech}</Tag>
                </li>
              ))}
            </ul>
          ) : null}

          {project.nda ? (
            <div className="mt-auto pt-6">
              <p className="flex items-center gap-1.5 border-t border-border pt-4 text-xs text-fg-subtle">
                <Lock className="h-3.5 w-3.5" aria-hidden="true" />
                {labels.ndaNote}
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </article>
  );
}
