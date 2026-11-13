import type { NavItem, SectionCopy } from "./types";

/** UI copy: navigation, section headings and small labels. */

export const nav: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const sections = {
  about: { eyebrow: "01 · About", title: "About" },
  experience: { eyebrow: "02 · Experience", title: "Experience" },
  projects: {
    eyebrow: "03 · Projects",
    title: "Selected projects",
    intro:
      "Commercial work for clients and freelance customers. Projects are under NDA, so there are no public links or screenshots — details are available on request.",
  },
  skills: {
    eyebrow: "04 · Skills",
    title: "Skills",
    intro: "Years of commercial experience shown where relevant.",
  },
  education: { eyebrow: "05 · Education", title: "Education & Languages" },
  contact: {
    eyebrow: "06 · Contact",
    title: "Let's work together",
    intro: "The fastest way to reach me is email — or message me on any of the channels below.",
  },
} satisfies Record<string, SectionCopy>;

export const labels = {
  skipToContent: "Skip to content",
  downloadCv: "Download CV",
  contactMe: "Contact me",
  ndaNote: "NDA · details available on request",
  companyProject: "Company project",
  freelanceProject: "Freelance",
  featured: "Featured",
  showMore: "Show all highlights",
  showLess: "Show less",
  emailLabel: "Email",
  sendEmail: "Send an email",
  copyEmail: "Copy email",
  copied: "Copied",
  lookingForTitle: "What I'm looking for",
  education: "Education",
  languages: "Languages",
  builtWith: "Built with Next.js & Tailwind",
  viewSource: "Source on GitHub",
  toggleTheme: "Toggle color theme",
  openMenu: "Open menu",
  closeMenu: "Close menu",
} as const;
