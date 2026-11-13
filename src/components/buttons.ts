/** Shared class strings for link-buttons. */

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors duration-150 select-none";

export const buttonPrimary = `${base} bg-accent text-accent-fg hover:bg-accent-hover`;

export const buttonSecondary = `${base} border border-border-strong bg-surface text-fg hover:border-fg-subtle hover:bg-bg-subtle`;

export const iconButton =
  "inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-fg-muted transition-colors duration-150 hover:border-border-strong hover:bg-bg-subtle hover:text-fg";
