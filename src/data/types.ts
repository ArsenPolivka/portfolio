/** Shared content types. All site copy lives in `src/data/*` and is typed by these interfaces. */

export interface SocialLinks {
  github: string;
  /** Full URL, e.g. https://www.linkedin.com/in/your-handle. Leave empty ("") to hide. */
  linkedin: string;
  /** Full URL, e.g. https://t.me/your_username. Leave empty ("") to hide. */
  telegram: string;
}

export interface Profile {
  name: string;
  /** Short initials used for the logo mark and favicon. */
  initials: string;
  title: string;
  /** Title split into role + stack for typographic emphasis in the hero. */
  role: string;
  stackLine: string;
  valueProposition: string;
  location: string;
  availability: string;
  statusBadge: string;
  email: string;
  socials: SocialLinks;
  summary: string;
  lookingFor: string;
  /** Path (relative to /public) of the downloadable CV. */
  cvPath: string;
  /** Canonical URL of the deployed site, used for SEO metadata, sitemap and OG tags. */
  siteUrl: string;
  /** Public repository with the source of this site. */
  sourceUrl: string;
}

export interface Highlight {
  value: string;
  label: string;
}

export interface ExperienceEntry {
  id: string;
  role: string;
  company: string;
  /** Optional note displayed next to the company name. */
  companyNote?: string;
  location?: string;
  /** Omit to hide. */
  period?: string;
  /** Career steps inside this company, oldest first. */
  progression?: { title: string; period: string }[];
  points: string[];
}

export type ProjectType = "company" | "freelance";

export interface Project {
  /** Unique, URL-safe id. */
  slug: string;
  name: string;
  domain: string;
  description: string;
  type: ProjectType;
  /** Featured projects are shown first and take more space in the grid. */
  featured: boolean;
  duration: string;
  role: string;
  stack: string[];
  highlights: string[];
  /** Under NDA: no links/screenshots, shows "details available on request". */
  nda: boolean;
}

export interface Skill {
  name: string;
  /** Commercial experience, shown subtly next to the skill (e.g. "3y+"). Omit if not specified. */
  years?: string;
}

export interface SkillGroup {
  title: string;
  skills: Skill[];
}

export interface EducationEntry {
  degree: string;
  field: string;
  institution: string;
  period: string;
}

export interface LanguageEntry {
  name: string;
  level: string;
}

export interface NavItem {
  label: string;
  href: `#${string}`;
}

export interface SectionCopy {
  eyebrow: string;
  title: string;
  intro?: string;
}
