import { cn } from "@/lib/cn";

interface TagProps {
  children: string;
  /** Optional secondary label, e.g. years of experience. */
  meta?: string;
  metaLabel?: string;
  className?: string;
}

/** Small monospace pill used for tech stack and skills. */
export function Tag({ children, meta, metaLabel, className }: TagProps) {
  return (
    <span
      title={metaLabel}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-border bg-bg-subtle px-2.5 py-1 font-mono text-[0.75rem] leading-none whitespace-nowrap text-fg-muted",
        className,
      )}
    >
      <span className="text-fg">{children}</span>
      {meta ? (
        <>
          <span aria-hidden="true" className="h-3 w-px bg-border-strong" />
          <span aria-hidden="true" className="text-fg-subtle">
            {meta}
          </span>
          {metaLabel ? <span className="sr-only">, {metaLabel}</span> : null}
        </>
      ) : null}
    </span>
  );
}
