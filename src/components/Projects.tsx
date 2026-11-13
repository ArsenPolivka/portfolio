import { orderedProjects } from "@/data/projects";
import { sections } from "@/data/site";

import { ProjectCard } from "./ProjectCard";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

const featured = orderedProjects.filter((p) => p.featured);
const others = orderedProjects.filter((p) => !p.featured);

export function Projects() {
  return (
    <Section id="projects" copy={sections.projects}>
      {/* Featured: the first one spans the full width, the rest sit two per row. */}
      <ul className="grid gap-5 md:grid-cols-2">
        {featured.map((project, i) => {
          const wide = i === 0;
          return (
            <Reveal
              as="li"
              key={project.slug}
              delay={wide ? 0 : 0.06}
              className={wide ? "md:col-span-2" : undefined}
            >
              <ProjectCard project={project} wide={wide} previewCount={wide ? 6 : 4} />
            </Reveal>
          );
        })}
      </ul>

      {others.length > 0 ? (
        <ul className="mt-5 grid gap-5 md:grid-cols-2">
          {others.map((project, i) => (
            <Reveal as="li" key={project.slug} delay={(i % 2) * 0.06}>
              <ProjectCard project={project} previewCount={2} />
            </Reveal>
          ))}
        </ul>
      ) : null}
    </Section>
  );
}
