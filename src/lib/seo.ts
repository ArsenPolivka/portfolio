import { profile } from "@/data/profile";

export const siteTitle = "Arsen Polivka — Full Stack Engineer (TypeScript, Next.js, Nest.js)";

/** ≤160 chars, derived from the summary. */
export const siteDescription =
  "Full Stack Engineer with 3+ years building web products with TypeScript, React/Next.js and Node.js/Nest.js. Based in Lviv, Ukraine · open to remote.";

export function personJsonLd() {
  const sameAs = [profile.socials.github, profile.socials.linkedin].filter((url) => url !== "");
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    url: profile.siteUrl,
    email: `mailto:${profile.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lviv",
      addressCountry: "UA",
    },
    sameAs,
  };
}
