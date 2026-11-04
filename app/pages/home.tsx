import { ArrowRight, ArrowUpRight, Download, Eye } from "lucide-react";
import { Link } from "react-router";

import type { Route } from "./+types/home";
import { Button } from "@/components/ui/Button";
import { Chip } from "@/components/ui/Chip";
import { Container } from "@/components/ui/Container";
import { useCvModal } from "@/components/ui/CvModal";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillIcon } from "@/components/ui/SkillIcon";
import { about } from "@/content/about";
import { projects } from "@/content/projects";
import { site } from "@/content/site";
import { skillGroups } from "@/content/skills";
import { ui } from "@/content/ui";
import { useLang, useLocalizedTitle } from "@/lib/i18n";

export const meta: Route.MetaFunction = () => [
  { title: `${site.shortName} — ${site.role.id}` },
  { name: "description", content: site.tagline.id },
];

const featured = projects.filter((project) => project.featured).slice(0, 3);
const allSkills = skillGroups.flatMap((group) => group.skills.map((skill) => skill.name));

export default function Home() {
  const { t } = useLang();
  const { openCvModal } = useCvModal();
  useLocalizedTitle({
    id: `${site.shortName} — ${site.role.id}`,
    en: `${site.shortName} — ${site.role.en}`,
  });

  return (
    <div className="relative">
      {/* ---------------- Hero ---------------- */}
      <section className="relative flex min-h-[calc(100dvh-72px)] items-center py-14 sm:py-20">
        <Container>
          <div className="grid items-center gap-10 md:grid-cols-[minmax(0,1fr)_320px] md:gap-12 lg:grid-cols-[minmax(0,1fr)_400px] lg:gap-16">
            <div className="order-2 md:order-1">
              <div className="intro flex items-center gap-3">
                <span className="size-1.5 rounded-full bg-paper" aria-hidden="true" />
                <p className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-muted sm:text-[0.65rem] sm:tracking-[0.28em]">
                  {t(ui.home.badge)}
                </p>
              </div>

              <div className="intro" style={{ animationDelay: "80ms" }}>
                <h1 className="mt-6 font-display text-[clamp(2.25rem,6vw,4.5rem)] font-extrabold leading-[1.08] tracking-[-0.035em] text-paper">
                  {t(site.role)}
                </h1>
              </div>

              <p
                className="intro mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl"
                style={{ animationDelay: "160ms" }}
              >
                {t(site.intro)}
              </p>

              <div
                className="intro mt-8 flex flex-wrap items-center gap-3"
                style={{ animationDelay: "220ms" }}
              >
                <Button to="/projects" size="lg">
                  {t(ui.home.viewWork)}
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Button>
                <button
                  type="button"
                  onClick={openCvModal}
                  className="inline-flex h-12 items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-6 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-emerald-400 transition-all duration-200 hover:border-emerald-400 hover:bg-emerald-500 hover:text-ink shadow-sm cursor-pointer"
                >
                  <Eye className="size-4" aria-hidden="true" />
                  <span>{t(ui.home.downloadCv)}</span>
                </button>
                <Button href="#tentang" size="lg" variant="ghost">
                  {t(ui.home.aboutMe)}
                </Button>
              </div>
            </div>

            <div className="intro order-1 mx-auto w-full max-w-[260px] sm:max-w-[300px] md:order-2 md:mx-0 md:max-w-none">
              <figure className="group relative">
                <div
                  className="relative overflow-hidden rounded-[1.75rem] border border-line bg-surface shadow-[0_28px_80px_-40px_rgba(0,0,0,0.9)]"
                  style={{ transform: "translateZ(0)" }}
                >
                  <img
                    src="/portrait.webp"
                    width={840}
                    height={1050}
                    alt={t(ui.home.photoAlt)}
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    className="aspect-[4/5] w-full object-cover object-top transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-[1.015]"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 rounded-[1.75rem] ring-1 ring-inset ring-white/10"
                    aria-hidden="true"
                  />
                </div>

                <figcaption className="mt-4 flex items-center justify-between gap-4 font-mono text-[0.55rem] uppercase tracking-[0.22em] text-muted">
                  <span>{site.name}</span>
                  <span>2026</span>
                </figcaption>
              </figure>
            </div>
          </div>
        </Container>
      </section>

      {/* ---------------- About ---------------- */}
      <section id="tentang" className="relative scroll-mt-24 border-t border-line py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <Reveal>
              <SectionHeading eyebrow={t(about.eyebrow)} title={t(about.title)} />
            </Reveal>

            <Reveal delay={80} className="space-y-6">
              <p className="text-lg leading-relaxed text-muted sm:text-xl">
                {t(about.lead)}
              </p>
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph.id.slice(0, 24)} className="leading-relaxed text-muted">
                  {t(paragraph)}
                </p>
              ))}

              <dl className="mt-10 grid gap-6 border-t border-line pt-8 sm:grid-cols-2">
                {about.facts.map((fact) => (
                  <div key={fact.label.id}>
                    <dt className="font-mono text-[0.55rem] uppercase tracking-[0.24em] text-muted">
                      {t(fact.label)}
                    </dt>
                    <dd className="mt-1 text-sm">{t(fact.value)}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ---------------- Toolkit ---------------- */}
      <section className="relative border-y border-line bg-surface/40">
        <Container className="py-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-2 font-mono text-[0.6rem] uppercase tracking-[0.24em] text-muted">
              {t(ui.home.toolkit)}
            </span>
            {allSkills.map((skill) => (
              <Chip
                key={skill}
                className="gap-2 transition-all duration-200 hover:border-paper/40 hover:text-paper"
              >
                <SkillIcon name={skill} />
                <span>{skill}</span>
              </Chip>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------------- Selected work ---------------- */}
      <section className="relative py-20 sm:py-28">
        <Container>
          <Reveal>
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <SectionHeading
                eyebrow={t(ui.home.workEyebrow)}
                title={
                  <>
                    {t(ui.home.workTitleA)}
                    <br />
                    {t(ui.home.workTitleB)}
                  </>
                }
              />
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-paper"
              >
                {t(ui.home.allProjects)}
                <ArrowRight
                  className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </Reveal>

          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((project, index) => (
              <Reveal as="li" key={project.slug} delay={index * 80}>
                <ProjectCard project={project} index={index} />
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* ---------------- Explore ---------------- */}
      <section className="relative border-t border-line py-20 sm:py-24">
        <Container>
          <Reveal>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  to: "/career",
                  eyebrow: t(ui.home.explore.careerEyebrow),
                  title: t(ui.home.explore.careerTitle),
                  description: t(ui.home.explore.careerDescription),
                },
                {
                  to: "/certificates",
                  eyebrow: t(ui.home.explore.certificatesEyebrow),
                  title: t(ui.home.explore.certificatesTitle),
                  description: t(ui.home.explore.certificatesDescription),
                },
              ].map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="group flex flex-col justify-between gap-10 rounded-3xl border border-line bg-surface p-7 transition-colors duration-300 hover:border-paper/40 sm:p-9"
                >
                  <div>
                    <p className="font-mono text-[0.55rem] uppercase tracking-[0.24em] text-muted">
                      {item.eyebrow}
                    </p>
                    <h2 className="mt-4 font-display text-2xl font-bold tracking-[-0.03em]">
                      {item.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {item.description}
                    </p>
                  </div>
                  <ArrowUpRight
                    className="size-5 text-muted transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-paper"
                    aria-hidden="true"
                  />
                </Link>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}
