import { ArrowRight, Download, MapPin } from "lucide-react";

import { profile } from "@/data/profile";
import { labels } from "@/data/site";
import { contactChannels } from "@/lib/contacts";

import { buttonPrimary, buttonSecondary, iconButton } from "./buttons";

const heroChannels = contactChannels.filter((c) => c.id !== "telegram");

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="relative overflow-hidden">
      {/* Decorative background: faint grid + accent glow. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 [background-image:linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_40%,transparent_100%)] [background-size:56px_56px] opacity-40" />
        <div className="absolute -top-40 left-1/2 h-80 w-[44rem] -translate-x-1/2 rounded-full bg-accent/20 blur-3xl dark:bg-accent/25" />
      </div>

      <div className="mx-auto max-w-[1100px] px-5 pt-16 pb-20 sm:px-8 sm:pt-24 sm:pb-28">
        <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-3 py-1 text-xs font-medium text-fg-muted backdrop-blur">
          <span className="relative flex h-2 w-2" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-60 motion-reduce:hidden" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
          </span>
          {profile.statusBadge}
        </p>

        <h1
          id="hero-heading"
          className="mt-6 text-4xl font-semibold tracking-tight text-fg sm:text-6xl lg:text-7xl"
        >
          {profile.name}
        </h1>
        <p className="mt-4 text-xl font-medium tracking-tight sm:text-2xl">
          <span className="text-fg">{profile.role}</span>
          <span className="text-fg-subtle"> — </span>
          <span className="font-mono text-lg text-accent-text sm:text-xl">{profile.stackLine}</span>
        </p>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-fg-muted sm:text-lg">
          {profile.valueProposition}
        </p>

        <p className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-fg-muted">
          <MapPin className="h-4 w-4" aria-hidden="true" />
          <span>{profile.location}</span>
          <span aria-hidden="true" className="text-fg-subtle">
            ·
          </span>
          <span className="text-fg">{profile.availability}</span>
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a href="#contact" className={buttonPrimary}>
            {labels.contactMe}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <a href={profile.cvPath} download className={buttonSecondary}>
            <Download className="h-4 w-4" aria-hidden="true" />
            {labels.downloadCv}
          </a>
          <ul className="flex items-center gap-2 sm:ml-2" aria-label="Profiles">
            {heroChannels.map(({ id, label, href, Icon, external }) => (
              <li key={id}>
                <a
                  href={href}
                  className={iconButton}
                  aria-label={label}
                  title={label}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
