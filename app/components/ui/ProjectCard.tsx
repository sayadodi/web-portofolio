import { ArrowUpRight, Lock } from "lucide-react";
import { Link } from "react-router";

import { ui } from "@/content/ui";
import type { Project } from "@/content/projects";
import { cx } from "@/lib/cx";
import { useLang } from "@/lib/i18n";

export function ProjectCard({
  project,
  index = 0,
  className,
}: {
  project: Project;
  index?: number;
  className?: string;
}) {
  const { t } = useLang();
  const categoryLabel =
    project.category === "it" ? "IT" : t(ui.project.categoryMultimedia);

  return (
    <Link
      to={`/projects/${project.slug}`}
      className={cx(
        "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-colors duration-300 hover:border-paper/40",
        className,
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-elevated">
        {project.cover ? (
          <img
            src={project.cover}
            alt=""
            loading="lazy"
            decoding="async"
            className="size-full object-cover transition duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div
            className="flex size-full items-end justify-between p-5"
            style={{
              backgroundImage:
                "radial-gradient(var(--dot-color) 0.8px, transparent 1.2px)",
              backgroundSize: "14px 14px",
              opacity: 0.9,
            }}
          >
            <span className="font-display text-5xl font-extrabold tracking-[-0.05em] text-muted/30">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-muted">
              {project.year}
            </span>
          </div>
        )}

        <span className="absolute left-4 top-4 rounded-full border border-line bg-ink/70 px-3 py-1 font-mono text-[0.6rem] uppercase tracking-[0.18em] backdrop-blur">
          {categoryLabel}
        </span>

        {project.isPrivate ? (
          <span className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full border border-line bg-ink/80 px-2.5 py-1 font-mono text-[0.55rem] uppercase tracking-[0.18em] text-muted backdrop-blur">
            <Lock className="size-3 text-muted" aria-hidden="true" />
            Privat
          </span>
        ) : project.links.length > 0 ? (
          <span className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full border border-line bg-ink/80 px-2.5 py-1 font-mono text-[0.55rem] uppercase tracking-[0.18em] text-paper backdrop-blur">
            <span className="size-1.5 rounded-full bg-emerald-400" />
            {project.links[0]?.label}
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-xl font-bold leading-tight tracking-[-0.02em]">
            {t(project.title)}
          </h3>
          <ArrowUpRight
            className="mt-1 size-4 shrink-0 text-muted transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-paper"
            aria-hidden="true"
          />
        </div>

        <p className="line-clamp-2 text-sm leading-relaxed text-muted">
          {t(project.summary)}
        </p>

        <p className="mt-auto pt-2 font-mono text-[0.6rem] uppercase leading-relaxed tracking-[0.16em] text-muted">
          {project.stack.join(" · ")}
        </p>
      </div>
    </Link>
  );
}
