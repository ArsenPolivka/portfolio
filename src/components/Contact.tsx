import { ArrowUpRight, Mail } from "lucide-react";

import { profile } from "@/data/profile";
import { labels, sections } from "@/data/site";
import { contactChannels } from "@/lib/contacts";

import { buttonPrimary } from "./buttons";
import { CopyEmailButton } from "./CopyEmailButton";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

const otherChannels = contactChannels.filter((c) => c.id !== "email");

export function Contact() {
  return (
    <Section id="contact" copy={sections.contact}>
      <div className="grid gap-4 lg:grid-cols-[1.4fr_1fr]">
        <Reveal className="relative overflow-hidden rounded-2xl border border-border bg-surface p-6 sm:p-8">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-accent/15 blur-3xl"
          />
          <p className="font-mono text-xs tracking-wider text-fg-subtle uppercase">
            {labels.emailLabel}
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-2 block text-xl font-semibold tracking-tight break-all text-fg transition-colors hover:text-accent-text sm:text-2xl"
          >
            {profile.email}
          </a>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={`mailto:${profile.email}`} className={buttonPrimary}>
              <Mail className="h-4 w-4" aria-hidden="true" />
              {labels.sendEmail}
            </a>
            <CopyEmailButton email={profile.email} />
          </div>

          {otherChannels.length > 0 ? (
            <ul className="mt-8 grid gap-2 border-t border-border pt-6 sm:grid-cols-2">
              {otherChannels.map(({ id, label, href, display, Icon }) => (
                <li key={id}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 rounded-lg border border-border px-3.5 py-3 transition-colors hover:border-border-strong hover:bg-bg-subtle"
                  >
                    <Icon className="h-5 w-5 shrink-0 text-fg-muted transition-colors group-hover:text-fg" />
                    <span className="min-w-0">
                      <span className="block text-sm font-medium text-fg">{label}</span>
                      <span className="block truncate font-mono text-xs text-fg-subtle">
                        {display}
                      </span>
                    </span>
                    <ArrowUpRight
                      aria-hidden="true"
                      className="ml-auto h-4 w-4 shrink-0 text-fg-subtle transition-colors group-hover:text-fg"
                    />
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </Reveal>

        <Reveal delay={0.06} className="rounded-2xl border border-border bg-bg-subtle p-6 sm:p-8">
          <h3 className="text-sm font-semibold text-fg">{labels.lookingForTitle}</h3>
          <p className="mt-3 text-[0.95rem] leading-relaxed text-fg-muted">{profile.lookingFor}</p>
          <p className="mt-6 text-sm text-fg-muted">
            {profile.location} <span className="text-fg-subtle">·</span>{" "}
            <span className="text-fg">{profile.availability}</span>
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
