import type { ExperienceEntry } from "./types";

export const experience: ExperienceEntry[] = [
  {
    id: "outsourcing",
    role: "Full Stack Engineer",
    company: "Outsourcing company",
    companyNote: "name under NDA",
    location: "Lviv, Ukraine",
    period: "2023 – Present",
    progression: [
      { title: "Trainee", period: "2023" },
      { title: "Junior", period: "2024 – 2025" },
      { title: "Middle", period: "since late 2025" },
    ],
    points: [
      "Teams from solo to 6 engineers",
      "Delivered 5 client projects end-to-end across healthcare, logistics, edtech, proptech and IoT",
      "Review teammates' code, estimate tasks and take part in architecture decisions",
      "Communicate directly with clients in English: calls, requirements clarification, demos",
    ],
  },
  {
    id: "freelance",
    role: "Full Stack Developer",
    company: "Freelance",
    companyNote: "alongside full-time role",
    // TODO: add the freelance period if you want it shown, e.g. period: "<start year> – Present",
    points: ["Direct work with clients, from requirements to production"],
  },
];
