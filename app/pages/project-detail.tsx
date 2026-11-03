import { ArrowLeft, ArrowUpRight, Lock } from "lucide-react";
import { Link, useParams } from "react-router";

import type { MetaFunction } from "react-router";
import { Chip } from "@/components/ui/Chip";
import { Container } from "@/components/ui/Container";
import { getProject } from "@/content/projects";
import { ui } from "@/content/ui";
import { useLang, useLocalizedTitle } from "@/lib/i18n";

export const meta: MetaFunction = ({ params }) => {
  const project = params.slug ? getProject(params.slug) : undefined;
  return [
    {
      title: project
        ? `${project.title.id} — Dodi Dwi Riskianto`
        : "Project not found",
    },
    { name: "description", content: project?.summary.id ?? "" },
  ];
};

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = slug ? getProject(slug) : undefined;
  const { t, lang } = useLang();

  useLocalizedTitle({
    id: project ? `${project.title.id} — Dodi Dwi Riskianto` : "Proyek tidak ditemukan",
    en: project ? `${project.title.en} — Dodi Dwi Riskianto` : "Project not found",
  });

  if (!project) {
    return (
      <Container className="py-24">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted">404</p>
        <h1 className="mt-4 font-display text-4xl font-extrabold">
          {t(ui.project.notFound)}
        </h1>
        <Link to="/projects" className="mt-6 inline-block text-sm underline">
          {t(ui.project.backToProjects)}
        </Link>
      </Container>
    );
  }

  const category =
    project.category === "it" ? t(ui.project.categoryIt) : t(ui.project.categoryMultimedia);

  return (
    <Container className="max-w-4xl py-16 sm:py-24">
      <Link
        to="/projects"
        className="group inline-flex items-center gap-2 font-mono text-[0.6rem] uppercase tracking-[0.22em] text-muted transition-colors hover:text-paper"
      >
        <ArrowLeft
          className="size-3.5 transition-transform duration-300 group-hover:-translate-x-1"
          aria-hidden="true"
        />
        {t(ui.project.back)}
      </Link>

      <p className="mt-12 font-mono text-[0.65rem] uppercase tracking-[0.26em] text-muted">
        {project.category === "it" ? "IT" : t(ui.project.categoryMultimedia)} ·{" "}
        {project.year} · {t(project.role)}
      </p>

      <h1 className="mt-4 font-display text-[clamp(2.25rem,7vw,4.5rem)] font-extrabold leading-[0.92] tracking-[-0.045em]">
        {t(project.title)}
      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
        {t(project.summary)}
      </p>

      <ul className="mt-8 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <li key={item}>
            <Chip>{item}</Chip>
          </li>
        ))}
      </ul>

      {project.isPrivate && (
        <div className="mt-8 flex items-center gap-3 rounded-2xl border border-line bg-surface p-4 text-sm text-muted">
          <Lock className="size-4 shrink-0 text-muted" aria-hidden="true" />
          <span>
            {lang === "id"
              ? "Proyek ini merupakan arsip internal / privat dan tidak didistribusikan secara umum."
              : "This project is an internal / private archive and is not publicly distributed."}
          </span>
        </div>
      )}

      {project.links.length > 0 && (
        <div className="mt-10 flex flex-wrap gap-3">
          {project.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-paper px-6 py-3 text-sm font-semibold text-ink shadow-lg transition duration-200 hover:opacity-90 hover:scale-[1.02]"
            >
              <span>{link.label}</span>
              <ArrowUpRight
                className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
          ))}
        </div>
      )}

      {project.cover && (
        <div className="mt-12 overflow-hidden rounded-2xl border border-line bg-elevated shadow-2xl">
          <div className="flex items-center justify-between border-b border-line bg-surface/80 px-4 py-3 backdrop-blur">
            <div className="flex items-center gap-2">
              <span className="size-2.5 rounded-full bg-white/20" />
              <span className="size-2.5 rounded-full bg-white/20" />
              <span className="size-2.5 rounded-full bg-white/20" />
              {project.links[0]?.href && (
                <a
                  href={project.links[0].href}
                  target="_blank"
                  rel="noreferrer"
                  className="ml-2 font-mono text-[0.65rem] text-muted transition-colors hover:text-paper"
                >
                  {project.links[0].href}
                </a>
              )}
            </div>
            {project.links[0]?.label && (
              <span className="font-mono text-[0.6rem] uppercase tracking-wider text-muted">
                {project.links[0].label}
              </span>
            )}
          </div>
          <div className="relative group">
            <img
              src={project.cover}
              alt={t(project.title)}
              className="w-full object-cover aspect-[16/10]"
            />
          </div>
        </div>
      )}

      <div className="mt-14 grid gap-4 border-t border-line pt-10 sm:grid-cols-3">
        {[
          { label: t(ui.project.role), value: t(project.role) },
          { label: t(ui.project.year), value: project.year },
          { label: t(ui.project.category), value: category },
        ].map((item) => (
          <div key={item.label}>
            <p className="font-mono text-[0.55rem] uppercase tracking-[0.24em] text-muted">
              {item.label}
            </p>
            <p className="mt-1 text-sm">{item.value}</p>
          </div>
        ))}
      </div>
    </Container>
  );
}
