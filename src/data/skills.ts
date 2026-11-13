import type { SkillGroup } from "./types";

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    skills: [
      { name: "TypeScript", years: "3y+" },
      { name: "JavaScript", years: "3y+" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", years: "3y+" },
      { name: "Next.js", years: "3y" },
      { name: "Redux / Redux Toolkit", years: "2–2.5y" },
      { name: "HTML", years: "3y+" },
      { name: "CSS", years: "3y+" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", years: "3y+" },
      { name: "Nest.js", years: "3y" },
      { name: "Express", years: "2–2.5y" },
      { name: "REST API", years: "3y+" },
    ],
  },
  {
    title: "Databases & ORMs",
    skills: [
      { name: "PostgreSQL", years: "3y" },
      { name: "MongoDB", years: "2.5y" },
      { name: "MySQL", years: "1.5–2y" },
      { name: "pgvector" },
      { name: "Prisma / TypeORM", years: "2–2.5y" },
      { name: "Sequelize" },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS", years: "2.5y" },
      { name: "Google Cloud Platform", years: "2y" },
      { name: "Azure", years: "1y" },
      { name: "Firebase", years: "3y" },
      { name: "Supabase", years: "1.5–2y" },
      { name: "Docker", years: "2–2.5y" },
      { name: "CI/CD" },
      { name: "Heroku" },
      { name: "Git", years: "3y+" },
    ],
  },
  {
    title: "Integrations & AI",
    skills: [
      { name: "Stripe", years: "1.5–2y" },
      { name: "OpenAI API / LLM / RAG", years: "1.5–2y" },
      { name: "Google Maps API" },
      { name: "Homey" },
      { name: "Home Assistant" },
    ],
  },
  {
    title: "AI dev tools",
    skills: [
      { name: "Claude Code", years: "1y+" },
      { name: "Cursor", years: "1.5y" },
      { name: "Gemini", years: "2y+" },
      { name: "GitHub Copilot", years: "2y" },
      { name: "Google Antigravity", years: "1y" },
      { name: "Codex", years: "0.5y" },
    ],
  },
];
