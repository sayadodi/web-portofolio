import { useState } from "react";

import type { Route } from "./+types/projects";
import { Container } from "@/components/ui/Container";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projectCategories, projects } from "@/content/projects";
import type { ProjectCategory } from "@/content/projects";
import { ui } from "@/content/ui";
import { cx } from "@/lib/cx";
import { useLang, useLocalizedTitle } from "@/lib/i18n";

export const meta: Route.MetaFunction = () => [
  { title: "Projects — Dodi Dwi Riskianto" },
  {
    name: "description",
    content:
      "Selected IT and multimedia work: mobile apps, web systems, machine learning, video, and photography.",
  },
];

type Filter = ProjectCategory | "all";

export default function Projects() {
  const [active, setActive] = useState<Filter>("all");
  const { t } = useLang();
  useLocalizedTitle({
    id: "Proyek — Dodi Dwi Riskianto",
    en: "Projects — Dodi Dwi Riskianto",
  });

  const filtered =
    active === "all" ? projects : projects.filter((project) => project.category === active);

  return (
    <div className="py-16 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={`${t(ui.projects.eyebrow)} · ${projects.length} ${t(ui.projects.unit)}`}
            title={t(ui.projects.title)}
            description={t(ui.projects.description)}
          />
        </Reveal>

        <Reveal delay={60}>
          <div
            className="mt-10 flex flex-wrap items-center gap-2"
            role="tablist"
            aria-label={t(ui.projects.filterLabel)}
          >
            {projectCategories.map((category) => {
              const isActive = category.id === active;
              return (
                <button
                  key={category.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(category.id)}
                  className={cx(
                    "rounded-full border px-4 py-2 text-sm transition-colors duration-200",
                    isActive
                      ? "border-paper bg-paper text-ink"
                      : "border-line text-muted hover:border-paper/40 hover:text-paper",
                  )}
                >
                  {t(category.label)}
                </button>
              );
            })}
          </div>
        </Reveal>

        <p className="mt-6 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-muted">
          {filtered.length} {t(ui.projects.shown)}
        </p>

        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, index) => (
            <Reveal as="li" key={project.slug} delay={Math.min(index * 60, 240)}>
              <ProjectCard project={project} index={index} />
            </Reveal>
          ))}
        </ul>
      </Container>
    </div>
  );
}
