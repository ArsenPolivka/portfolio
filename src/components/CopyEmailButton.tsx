"use client";

import { Check, Copy } from "lucide-react";
import { useEffect, useState } from "react";

import { labels } from "@/data/site";
import { cn } from "@/lib/cn";

async function copyText(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // Fallback for older browsers / insecure contexts.
    const el = document.createElement("textarea");
    el.value = text;
    el.setAttribute("readonly", "");
    el.style.position = "absolute";
    el.style.left = "-9999px";
    document.body.appendChild(el);
    el.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(el);
    return ok;
  }
}

export function CopyEmailButton({ email, className }: { email: string; className?: string }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const t = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(t);
  }, [copied]);

  return (
    <>
      <button
        type="button"
        onClick={async () => setCopied(await copyText(email))}
        className={cn(
          "inline-flex h-10 items-center gap-2 rounded-lg border border-border-strong px-3 text-sm font-medium text-fg transition-colors hover:bg-bg-subtle",
          className,
        )}
      >
        {copied ? (
          <Check className="h-4 w-4 text-success" aria-hidden="true" />
        ) : (
          <Copy className="h-4 w-4" aria-hidden="true" />
        )}
        {copied ? labels.copied : labels.copyEmail}
      </button>
      <span role="status" aria-live="polite" className="sr-only">
        {copied ? `${email} copied to clipboard` : ""}
      </span>
    </>
  );
}
