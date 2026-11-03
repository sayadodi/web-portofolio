import { useState } from "react";
import { ArrowUpRight, Check, Copy, Mail, MessageCircle } from "lucide-react";

import type { Route } from "./+types/contact";
import { Container } from "@/components/ui/Container";
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

export default function Contact() {
  const { t } = useLang();
  useLocalizedTitle({
    id: "Kontak — Dodi Dwi Riskianto",
    en: "Contact — Dodi Dwi Riskianto",
  });

  const [copied, setCopied] = useState(false);

  function copyEmail() {
    navigator.clipboard.writeText(site.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  const whatsappMessage = encodeURIComponent(
    "Halo Dodi, saya melihat website portofolio Anda dan tertarik untuk berdiskusi."
  );
  const waShortcutUrl = `https://wa.me/6282230862810?text=${whatsappMessage}`;

  return (
    <div className="py-16 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={t(ui.contact.eyebrow)}
            title={t(ui.contact.title)}
            description="Terbuka untuk diskusi proyek pengembangan aplikasi web, produksi multimedia kreatif, kerja sama profesional, atau sekadar bertukar ide."
          />
        </Reveal>

        {/* ---------------- Primary Contact Channels ---------------- */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card 1: WhatsApp (Recommended Shortcut) */}
          <Reveal delay={60}>
            <div className="group relative flex h-full flex-col justify-between rounded-2xl border border-emerald-500/30 bg-surface p-7 transition-all duration-300 hover:border-emerald-400 hover:shadow-xl hover:shadow-emerald-950/20 sm:p-8">
              <div>
                <div className="flex items-center justify-between">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                    <MessageCircle className="size-5" />
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[0.6rem] font-medium uppercase tracking-wider text-emerald-400">
                    <span className="size-1.5 animate-pulse rounded-full bg-emerald-400" />
                    Respons Cepat
                  </span>
                </div>

                <h2 className="mt-6 font-display text-xl font-bold tracking-[-0.02em] text-paper">
                  WhatsApp
                </h2>
                <p className="mt-1 font-mono text-base font-semibold text-emerald-400">
                  +62 822-3086-2810
                </p>

                <p className="mt-3 text-xs leading-relaxed text-muted">
                  Jalur tercepat untuk berdiskusi santai, konsultasi kebutuhan proyek, atau koordinasi langsung via chat.
                </p>
              </div>

              <div className="mt-8 border-t border-line/60 pt-5">
                <a
                  href={waShortcutUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group/btn inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 font-mono text-xs font-semibold text-ink shadow-md transition duration-200 hover:bg-emerald-400 hover:scale-[1.01]"
                >
                  <span>Buka Chat WhatsApp</span>
                  <ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                </a>
              </div>
            </div>
          </Reveal>

          {/* Card 2: Email */}
          <Reveal delay={120}>
            <div className="group relative flex h-full flex-col justify-between rounded-2xl border border-line bg-surface p-7 transition-all duration-300 hover:border-paper/40 hover:shadow-xl sm:p-8">
              <div>
                <div className="flex items-center justify-between">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-paper/5 text-paper">
                    <Mail className="size-5" />
                  </span>
                  <span className="rounded-full border border-line bg-elevated px-2.5 py-0.5 font-mono text-[0.6rem] uppercase tracking-wider text-muted">
                    Email Resmi
                  </span>
                </div>

                <h2 className="mt-6 font-display text-xl font-bold tracking-[-0.02em] text-paper">
                  Email
                </h2>
                <p className="mt-1 font-mono text-sm font-semibold text-paper break-all">
                  {site.email}
                </p>

                <p className="mt-3 text-xs leading-relaxed text-muted">
                  Tersedia untuk pengiriman berkas, proposal resmi, kerja sama formal institusi, dan surat menyurat.
                </p>
              </div>

              <div className="mt-8 flex items-center gap-2 border-t border-line/60 pt-5">
                <a
                  href={`mailto:${site.email}`}
                  className="group/btn inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-paper px-4 py-3 font-mono text-xs font-semibold text-ink transition duration-200 hover:opacity-90"
                >
                  <span>Kirim Email</span>
                  <ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                </a>

                <button
                  type="button"
                  onClick={copyEmail}
                  className="inline-flex items-center justify-center rounded-xl border border-line bg-elevated p-3 text-muted transition hover:border-paper/40 hover:text-paper cursor-pointer"
                  title="Salin alamat email"
                  aria-label="Salin alamat email"
                >
                  {copied ? (
                    <Check className="size-4 text-emerald-400" />
                  ) : (
                    <Copy className="size-4" />
                  )}
                </button>
              </div>
            </div>
          </Reveal>

          {/* Card 3: GitHub */}
          <Reveal delay={180}>
            <div className="group relative flex h-full flex-col justify-between rounded-2xl border border-line bg-surface p-7 transition-all duration-300 hover:border-paper/40 hover:shadow-xl sm:p-8">
              <div>
                <div className="flex items-center justify-between">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-paper/5 text-paper">
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
                  <span className="rounded-full border border-line bg-elevated px-2.5 py-0.5 font-mono text-[0.6rem] uppercase tracking-wider text-muted">
                    Kode & Proyek
                  </span>
                </div>

                <h2 className="mt-6 font-display text-xl font-bold tracking-[-0.02em] text-paper">
                  GitHub
                </h2>
                <p className="mt-1 font-mono text-sm font-semibold text-paper">
                  github.com/sayadodi
                </p>

                <p className="mt-3 text-xs leading-relaxed text-muted">
                  Lihat repositori kode sumber, riwayat commit, eksplorasi kecerdasan buatan, dan proyek open source saya.
                </p>
              </div>

              <div className="mt-8 border-t border-line/60 pt-5">
                <a
                  href="https://github.com/sayadodi"
                  target="_blank"
                  rel="noreferrer"
                  className="group/btn inline-flex w-full items-center justify-center gap-2 rounded-xl border border-line bg-elevated px-5 py-3 font-mono text-xs font-semibold text-paper transition duration-200 hover:border-paper/50 hover:bg-surface"
                >
                  <span>Kunjungi @sayadodi</span>
                  <ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        {/* ---------------- Direct Shortcut Links ---------------- */}
        <Reveal delay={240}>
          <div className="mt-16 rounded-2xl border border-line bg-surface/60 p-6 sm:p-8">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
              Tautan Cepat Kontak
            </h3>
            <ul className="mt-4 flex flex-wrap gap-3">
              <li>
                <a
                  href={waShortcutUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 font-mono text-xs font-medium text-emerald-400 transition hover:bg-emerald-500 hover:text-ink"
                >
                  <span>WhatsApp: 082230862810</span>
                  <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="group inline-flex items-center gap-2 rounded-full border border-line bg-elevated px-4 py-2 font-mono text-xs text-paper transition hover:border-paper/40"
                >
                  <span>Email: {site.email}</span>
                  <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/sayadodi"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full border border-line bg-elevated px-4 py-2 font-mono text-xs text-paper transition hover:border-paper/40"
                >
                  <span>GitHub: @sayadodi</span>
                  <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </li>
            </ul>
          </div>
        </Reveal>
      </Container>
    </div>
  );
}
