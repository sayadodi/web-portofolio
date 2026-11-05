import { useState } from "react";
import {
  ArrowUpRight,
  Check,
  Copy,
  Eye,
  Mail,
  MessageCircle,
} from "lucide-react";

import type { Route } from "./+types/contact";
import { Container } from "@/components/ui/Container";
import { useCvModal } from "@/components/ui/CvModal";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/content/site";
import { ui } from "@/content/ui";
import { useLang, useLocalizedTitle } from "@/lib/i18n";

export const meta: Route.MetaFunction = () => [
  { title: "Kontak — Dodi Dwi Riskianto" },
  {
    name: "description",
    content: "Hubungi Dodi Dwi Riskianto melalui WhatsApp, Email resmi, atau profil GitHub.",
  },
];

type CopyStatus = "idle" | "copied" | "error";

export default function Contact() {
  const { t, lang } = useLang();
  const { openCvModal } = useCvModal();
  useLocalizedTitle({
    id: "Kontak — Dodi Dwi Riskianto",
    en: "Contact — Dodi Dwi Riskianto",
  });

  const [copyStatus, setCopyStatus] = useState<CopyStatus>("idle");

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopyStatus("copied");
    } catch {
      setCopyStatus("error");
    }
    window.setTimeout(() => setCopyStatus("idle"), 2200);
  }

  const whatsappMessage = encodeURIComponent(
    lang === "id"
      ? "Halo Dodi, saya melihat website portofolio Anda dan tertarik untuk berdiskusi."
      : "Hello Dodi, I saw your portfolio website and would like to talk.",
  );
  const waShortcutUrl = `https://wa.me/6282230862810?text=${whatsappMessage}`;

  return (
    <div className="py-16 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={t(ui.contact.eyebrow)}
            title={t(ui.contact.title)}
            description={t(ui.contact.description)}
          />
        </Reveal>

        <p role="status" aria-live="polite" className="sr-only">
          {copyStatus === "copied"
            ? t(ui.contact.copied)
            : copyStatus === "error"
              ? t(ui.contact.copyFailed)
              : ""}
        </p>

        {/* ---------------- Primary Contact Channels ---------------- */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* WhatsApp */}
          <Reveal delay={60}>
            <div className="group relative flex h-full flex-col justify-between rounded-2xl border border-paper/25 bg-surface p-7 transition-colors duration-300 hover:border-paper/50 sm:p-8">
              <div>
                <div className="flex items-center justify-between gap-3">
                  <span className="flex size-11 items-center justify-center rounded-xl border border-line bg-paper/5 text-paper">
                    <MessageCircle className="size-5" aria-hidden="true" />
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-elevated px-2.5 py-1 font-mono text-[0.7rem] font-medium uppercase tracking-wider text-muted">
                    <span className="size-1.5 rounded-full bg-paper" aria-hidden="true" />
                    {t(ui.contact.quickResponse)}
                  </span>
                </div>

                <h2 className="mt-6 font-display text-xl font-bold tracking-[-0.02em] text-paper">
                  WhatsApp
                </h2>
                <p className="mt-1 font-mono text-base font-semibold text-paper">
                  +62 822-3086-2810
                </p>

                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {t(ui.contact.whatsappDescription)}
                </p>
              </div>

              <div className="mt-8 border-t border-line pt-5">
                <a
                  href={waShortcutUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group/btn inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-paper px-5 font-mono text-xs font-semibold text-ink transition-opacity hover:opacity-90"
                >
                  <span>{t(ui.contact.whatsappCta)}</span>
                  <ArrowUpRight
                    className="size-3.5 transition-transform duration-200 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
          </Reveal>

          {/* Email */}
          <Reveal delay={120}>
            <div className="group relative flex h-full flex-col justify-between rounded-2xl border border-line bg-surface p-7 transition-colors duration-300 hover:border-paper/40 sm:p-8">
              <div>
                <div className="flex items-center justify-between gap-3">
                  <span className="flex size-11 items-center justify-center rounded-xl border border-line bg-paper/5 text-paper">
                    <Mail className="size-5" aria-hidden="true" />
                  </span>
                  <span className="rounded-full border border-line bg-elevated px-2.5 py-1 font-mono text-[0.7rem] uppercase tracking-wider text-muted">
                    {t(ui.contact.officialEmail)}
                  </span>
                </div>

                <h2 className="mt-6 font-display text-xl font-bold tracking-[-0.02em] text-paper">
                  Email
                </h2>
                <p className="mt-1 break-all font-mono text-sm font-semibold text-paper">
                  {site.email}
                </p>

                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {t(ui.contact.emailDescription)}
                </p>
              </div>

              <div className="mt-8 flex items-center gap-2 border-t border-line pt-5">
                <a
                  href={`mailto:${site.email}`}
                  className="group/btn inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-full bg-paper px-4 font-mono text-xs font-semibold text-ink transition-opacity hover:opacity-90"
                >
                  <span>{t(ui.contact.emailCta)}</span>
                  <ArrowUpRight
                    className="size-3.5 transition-transform duration-200 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5"
                    aria-hidden="true"
                  />
                </a>

                <button
                  type="button"
                  onClick={copyEmail}
                  className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-line bg-elevated text-muted transition-colors hover:border-paper/40 hover:text-paper"
                  title={t(ui.contact.copyEmail)}
                  aria-label={t(ui.contact.copyEmail)}
                >
                  {copyStatus === "copied" ? (
                    <Check className="size-4" aria-hidden="true" />
                  ) : (
                    <Copy className="size-4" aria-hidden="true" />
                  )}
                </button>
              </div>
            </div>
          </Reveal>

          {/* GitHub */}
          <Reveal delay={180}>
            <div className="group relative flex h-full flex-col justify-between rounded-2xl border border-line bg-surface p-7 transition-colors duration-300 hover:border-paper/40 sm:p-8">
              <div>
                <div className="flex items-center justify-between gap-3">
                  <span className="flex size-11 items-center justify-center rounded-xl border border-line bg-paper/5 text-paper">
                    <svg
                      className="size-5 fill-current"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      />
                    </svg>
                  </span>
                  <span className="rounded-full border border-line bg-elevated px-2.5 py-1 font-mono text-[0.7rem] uppercase tracking-wider text-muted">
                    {t(ui.contact.codeProjects)}
                  </span>
                </div>

                <h2 className="mt-6 font-display text-xl font-bold tracking-[-0.02em] text-paper">
                  GitHub
                </h2>
                <p className="mt-1 font-mono text-sm font-semibold text-paper">
                  github.com/sayadodi
                </p>

                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {t(ui.contact.githubDescription)}
                </p>
              </div>

              <div className="mt-8 border-t border-line pt-5">
                <a
                  href="https://github.com/sayadodi"
                  target="_blank"
                  rel="noreferrer"
                  className="group/btn inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-line bg-elevated px-5 font-mono text-xs font-semibold text-paper transition-colors hover:border-paper/50 hover:bg-surface"
                >
                  <span>{t(ui.contact.githubCta)}</span>
                  <ArrowUpRight
                    className="size-3.5 transition-transform duration-200 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        {/* ---------------- Direct Shortcut Links ---------------- */}
        <Reveal delay={240}>
          <div className="mt-16 rounded-2xl border border-line bg-surface/60 p-6 sm:p-8">
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
              {t(ui.contact.quickLinks)}
            </h2>
            <ul className="mt-4 flex flex-wrap gap-3">
              <li>
                <a
                  href={waShortcutUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex min-h-11 items-center gap-2 rounded-full border border-line bg-paper/5 px-4 font-mono text-xs font-medium text-paper transition-colors hover:border-paper/50 hover:bg-paper/10"
                >
                  <span>WhatsApp: 082230862810</span>
                  <ArrowUpRight
                    className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="group inline-flex min-h-11 items-center gap-2 rounded-full border border-line bg-elevated px-4 font-mono text-xs text-paper transition-colors hover:border-paper/40"
                >
                  <span>Email: {site.email}</span>
                  <ArrowUpRight
                    className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={openCvModal}
                  className="group inline-flex min-h-11 items-center gap-2 rounded-full border border-line bg-paper/5 px-4 font-mono text-xs font-semibold text-paper transition-colors hover:border-paper/50 hover:bg-paper/10"
                >
                  <Eye className="size-3.5" aria-hidden="true" />
                  <span>{t(ui.chrome.viewCv)}</span>
                </button>
              </li>
              <li>
                <a
                  href="https://github.com/sayadodi"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex min-h-11 items-center gap-2 rounded-full border border-line bg-elevated px-4 font-mono text-xs text-paper transition-colors hover:border-paper/40"
                >
                  <span>GitHub: @sayadodi</span>
                  <ArrowUpRight
                    className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </a>
              </li>
            </ul>
          </div>
        </Reveal>
      </Container>
    </div>
  );
}
