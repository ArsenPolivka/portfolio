import type { ComponentType, SVGProps } from "react";
import { Mail } from "lucide-react";

import { GithubIcon, LinkedinIcon, TelegramIcon } from "@/components/Icons";
import { profile } from "@/data/profile";

export interface ContactChannel {
  id: "email" | "github" | "linkedin" | "telegram";
  label: string;
  href: string;
  /** Human-readable value, e.g. the handle or address. */
  display: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  external: boolean;
}

function handleFromUrl(url: string): string {
  try {
    const path = new URL(url).pathname.replace(/\/+$/, "");
    return path.split("/").filter(Boolean).pop() ?? url;
  } catch {
    return url;
  }
}

/** All contact channels with a value set in `profile.ts`. Empty (TODO) channels are hidden. */
export const contactChannels: ContactChannel[] = [
  {
    id: "email" as const,
    label: "Email",
    href: `mailto:${profile.email}`,
    display: profile.email,
    Icon: Mail,
    external: false,
  },
  {
    id: "linkedin" as const,
    label: "LinkedIn",
    href: profile.socials.linkedin,
    display: handleFromUrl(profile.socials.linkedin),
    Icon: LinkedinIcon,
    external: true,
  },
  {
    id: "github" as const,
    label: "GitHub",
    href: profile.socials.github,
    display: handleFromUrl(profile.socials.github),
    Icon: GithubIcon,
    external: true,
  },
  {
    id: "telegram" as const,
    label: "Telegram",
    href: profile.socials.telegram,
    display: `@${handleFromUrl(profile.socials.telegram)}`,
    Icon: TelegramIcon,
    external: true,
  },
].filter((channel) => channel.href.trim() !== "" && channel.href !== "mailto:");
