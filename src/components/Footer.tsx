import { profile } from "@/data/profile";
import { labels } from "@/data/site";

export function Footer() {
  // Rendered at build time (static export), so the year reflects the latest deploy.
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-[1100px] flex-col gap-2 px-5 py-8 text-sm text-fg-subtle sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          © {year} {profile.name}
        </p>
        <p className="flex flex-wrap items-center gap-x-2">
          <span>{labels.builtWith}</span>
          <span aria-hidden="true">·</span>
          <a
            href={profile.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-[var(--border-strong)] underline-offset-4 transition-colors hover:text-fg"
          >
            {labels.viewSource}
          </a>
        </p>
      </div>
    </footer>
  );
}
