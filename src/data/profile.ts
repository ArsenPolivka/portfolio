import type { Highlight, Profile } from "./types";

export const profile: Profile = {
  name: "Arsen Polivka",
  initials: "AP",
  title: "Full Stack Engineer — TypeScript, Next.js, Nest.js",
  role: "Full Stack Engineer",
  stackLine: "TypeScript · Next.js · Nest.js",
  valueProposition:
    "I build web products end-to-end — from database schema and APIs to polished UIs — with TypeScript, React/Next.js and Node.js/Nest.js.",
  location: "Lviv, Ukraine",
  availability: "Open to remote",
  statusBadge: "Open to new opportunities",
  email: "polivka2003@gmail.com",
  socials: {
    github: "https://github.com/ArsenPolivka",
    // TODO: add full LinkedIn profile URL, e.g. "https://www.linkedin.com/in/<handle>"
    linkedin: "",
    // TODO: add Telegram URL once the username is final, e.g. "https://t.me/<username>"
    telegram: "",
  },
  summary:
    "Full Stack Engineer with 3+ years of commercial experience building web products with TypeScript, React/Next.js and Node.js/Nest.js. Grew from Trainee to Middle in an outsourcing company, delivering client projects in healthcare, logistics, edtech, proptech and IoT, plus freelance work in e-commerce and AI (RAG). Owns features end-to-end — from database schema and API design to UI and deployment — and works directly with clients in English. Looking to grow toward Senior level in a product team.",
  lookingFor:
    "Long-term role in a product company or long-running project, growth toward Senior level with a strong team, AI-powered products and a modern TypeScript stack. Open to full-stack as well as frontend- or backend-leaning roles.",
  cvPath: "/CV_Arsen_Polivka_Full_Stack.pdf",
  // TODO: replace with the final production domain after deploying (used for canonical URL, sitemap, OG).
  siteUrl: "https://arsenpolivka.vercel.app",
  sourceUrl: "https://github.com/ArsenPolivka/portfolio",
};

export const highlights: Highlight[] = [
  { value: "3+ years", label: "commercial experience" },
  { value: "7", label: "commercial projects" },
  { value: "Trainee → Middle", label: "in ~2 years" },
  { value: "6 domains", label: "Healthcare · Logistics · AI · PropTech · EdTech · IoT" },
];
