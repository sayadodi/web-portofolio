import type { Route } from "./+types/career";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { educationList, timeline } from "@/content/career";
import { ui } from "@/content/ui";
import { useLang, useLocalizedTitle } from "@/lib/i18n";
import { Briefcase, GraduationCap } from "lucide-react";

export const meta: Route.MetaFunction = () => [
  { title: "Karier & Pengalaman — Dodi Dwi Riskianto" },
  {
    name: "description",
    content: "Riwayat pengalaman kerja, kepemimpinan kreatif, dan latar belakang pendidikan Dodi Dwi Riskianto.",
  },
];

export default function Career() {
  const { t } = useLang();
  useLocalizedTitle({
    id: "Karier — Dodi Dwi Riskianto",
    en: "Career — Dodi Dwi Riskianto",
  });

  return (
    <div className="py-16 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={t(ui.career.eyebrow)}
            title={t(ui.career.title)}
            description={t(ui.career.description)}
          />
        </Reveal>

        {/* ---------------- Experience Timeline ---------------- */}
        <div className="mt-14">
          <Reveal delay={20}>
            <div className="flex items-center gap-2.5">
              <span className="flex size-7 items-center justify-center rounded-lg border border-line bg-surface text-paper">
                <Briefcase className="size-3.5" aria-hidden="true" />
              </span>
              <h2 className="font-display text-lg font-bold tracking-[-0.02em] text-paper">
                {t(ui.career.experienceHeading)}
              </h2>
            </div>
          </Reveal>

          <ol className="mt-8 space-y-10 border-l border-line/80 pl-6 sm:pl-8">
            {timeline.map((item, index) => (
              <Reveal as="li" key={item.title.id} delay={index * 70} className="group relative">
                {/* Timeline node */}
                <span className="absolute -left-[1.88rem] sm:-left-[2.38rem] top-1.5 size-3 rounded-full border-2 border-line bg-surface transition-colors duration-300 group-hover:border-paper group-hover:bg-paper" />

                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted">
                    {t(item.period)}
                  </span>

                  {item.roleType && (
                    <span className="rounded-full border border-paper/15 bg-paper/5 px-2.5 py-1 font-mono text-[0.7rem] uppercase tracking-wider text-paper/80">
                      {t(item.roleType)}
                    </span>
                  )}
                </div>

                <h3 className="mt-2 font-display text-xl font-bold tracking-[-0.02em] text-paper sm:text-2xl">
                  {t(item.title)}
                </h3>

                <p className="mt-1 font-mono text-xs font-medium text-paper/80">
                  {t(item.org)}
                </p>

                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
                  {t(item.detail)}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>

        {/* ---------------- Formal Education ---------------- */}
        <div className="mt-20 border-t border-line pt-14">
          <Reveal delay={40}>
            <div className="flex items-center gap-2.5">
              <span className="flex size-7 items-center justify-center rounded-lg border border-line bg-surface text-paper">
                <GraduationCap className="size-3.5" aria-hidden="true" />
              </span>
              <h2 className="font-display text-lg font-bold tracking-[-0.02em] text-paper">
                {t(ui.career.educationHeading)}
              </h2>
            </div>
          </Reveal>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {educationList.map((edu, index) => (
              <Reveal key={edu.title.id} delay={index * 80}>
                <div className="flex h-full flex-col justify-between rounded-2xl border border-line bg-surface p-6 sm:p-7 transition-colors duration-300 hover:border-paper/40">
                  <div>
                    <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted">
                      {t(edu.period)}
                    </span>

                    <h3 className="mt-3 font-display text-xl font-bold tracking-[-0.02em] text-paper">
                      {t(edu.title)}
                    </h3>

                    <p className="mt-1.5 font-mono text-xs font-medium text-paper/80">
                      {t(edu.org)}
                    </p>

                    {edu.detail && (
                      <p className="mt-3 text-xs leading-relaxed text-muted">
                        {t(edu.detail)}
                      </p>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
