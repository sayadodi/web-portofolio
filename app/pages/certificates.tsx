import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Award,
  BookOpen,
  Download,
  Eye,
  FileText,
  Info,
  Scale,
  ShieldCheck,
  X,
} from "lucide-react";
import type { Route } from "./+types/certificates";
import { Chip } from "@/components/ui/Chip";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { certificates } from "@/content/certificates";
import { hakiList } from "@/content/haki";
import { publications } from "@/content/publications";
import { ui } from "@/content/ui";
import { useFocusTrap } from "@/hooks/useFocusTrap";
import { useLang, useLocalizedTitle } from "@/lib/i18n";

export const meta: Route.MetaFunction = () => [
  { title: "Publikasi, HAKI & Sertifikat — Dodi Dwi Riskianto" },
  {
    name: "description",
    content:
      "Publikasi jurnal ilmiah terakreditasi, Hak Kekayaan Intelektual (HAKI) resmi Kemenkumham RI, dan sertifikasi kompetensi.",
  },
];

export default function Certificates() {
  const { t } = useLang();
  useLocalizedTitle({
    id: "Publikasi, HAKI & Sertifikat — Dodi Dwi Riskianto",
    en: "Publications, IP & Certificates — Dodi Dwi Riskianto",
  });

  const [previewDoc, setPreviewDoc] = useState<{
    title: string;
    pages: string[];
    pdfUrl?: string;
    activePage: number;
    subtitle?: string;
    note?: string;
    isHaki?: boolean;
  } | null>(null);

  // Dialog accessibility: trap focus, close on Escape, restore focus, lock scroll.
  const dialogRef = useFocusTrap<HTMLDivElement>(previewDoc !== null, () =>
    setPreviewDoc(null),
  );

  useEffect(() => {
    if (!previewDoc) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [previewDoc]);

  return (
    <div className="py-16 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={t(ui.certificates.eyebrow)}
            title={t(ui.certificates.title)}
            description={t(ui.certificates.description)}
          />
        </Reveal>

        {/* ---------------- Journal Publications ---------------- */}
        <div className="mt-16">
          <Reveal delay={40}>
            <div className="flex items-center gap-3">
              <span className="flex size-8 items-center justify-center rounded-lg border border-line bg-surface text-paper">
                <BookOpen className="size-4" aria-hidden="true" />
              </span>
              <div>
                <h2 className="font-display text-2xl font-bold tracking-[-0.02em]">
                  {t(ui.certificates.publicationsHeading)}
                </h2>
                <p className="mt-0.5 text-xs text-muted">
                  {t(ui.certificates.publicationsSubtitle)}
                </p>
              </div>
            </div>
          </Reveal>

          <ul className="mt-8 space-y-5">
            {publications.map((pub, index) => (
              <Reveal as="li" key={pub.doi} delay={index * 80}>
                <div className="group relative flex flex-col justify-between gap-6 rounded-2xl border border-line bg-surface p-7 transition-colors duration-300 hover:border-paper/40 sm:p-8">
                  <div>
                    {/* Top Meta Bar */}
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line pb-4">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted">
                          {pub.year}
                        </span>
                        <span className="text-muted/40">·</span>
                        <span className="font-mono text-[0.7rem] font-medium text-paper">
                          {pub.journal}
                        </span>
                        <span className="text-muted/40">·</span>
                        <span className="font-mono text-[0.7rem] text-muted">
                          {pub.volume}
                        </span>
                      </div>

                      <span className="inline-flex items-center gap-1.5 rounded-full border border-paper/20 bg-paper/10 px-3 py-1 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-paper">
                        <span className="size-1.5 rounded-full bg-paper" aria-hidden="true" />
                        {t(pub.role)}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="mt-5 font-display text-xl font-bold leading-snug tracking-[-0.025em] sm:text-2xl">
                      {t(pub.title)}
                    </h3>

                    {/* Authors */}
                    <p className="mt-3 text-xs leading-relaxed text-muted">
                      <span className="font-mono uppercase tracking-[0.16em] text-muted/70">
                        Penulis:{" "}
                      </span>
                      {pub.authors.map((author, i) => (
                        <span key={author}>
                          {author.includes("Dodi") ? (
                            <strong className="font-semibold text-paper underline decoration-paper/40 decoration-1 underline-offset-2">
                              {author}
                            </strong>
                          ) : (
                            <span>{author}</span>
                          )}
                          {i < pub.authors.length - 1 ? ", " : ""}
                        </span>
                      ))}
                    </p>

                    {/* Tags */}
                    <ul className="mt-4 flex flex-wrap gap-1.5">
                      {pub.tags.map((tag) => (
                        <li key={tag}>
                          <Chip>{tag}</Chip>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* DOI Link Action */}
                  <div className="pt-2">
                    <a
                      href={pub.url}
                      target="_blank"
                      rel="noreferrer"
                      className="group/link inline-flex items-center gap-2 rounded-full border border-line bg-elevated px-4 py-2 font-mono text-xs text-muted transition-colors duration-200 hover:border-paper/50 hover:text-paper"
                    >
                      <span className="text-[0.7rem] text-muted">DOI:</span>
                      <span className="underline decoration-line group-hover/link:decoration-paper">
                        {pub.doi}
                      </span>
                      <ArrowUpRight
                        className="size-3.5 transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>

        {/* ---------------- Intellectual Property (HAKI) ---------------- */}
        <div className="mt-20 border-t border-line pt-16">
          <Reveal delay={40}>
            <div className="flex items-center gap-3">
              <span className="flex size-8 items-center justify-center rounded-lg border border-line bg-surface text-paper">
                <ShieldCheck className="size-4 text-paper" aria-hidden="true" />
              </span>
              <div>
                <h2 className="font-display text-2xl font-bold tracking-[-0.02em]">
                  {t(ui.certificates.hakiHeading)}
                </h2>
                <p className="mt-0.5 text-xs text-muted">
                  {t(ui.certificates.hakiSubtitle)}
                </p>
              </div>
            </div>
          </Reveal>

          <ul className="mt-8 space-y-6">
            {hakiList.map((haki, index) => (
              <Reveal as="li" key={haki.id} delay={index * 80}>
                <div className="group relative flex flex-col gap-6 rounded-2xl border border-line bg-surface p-6 sm:p-8 lg:flex-row lg:items-start lg:gap-8 transition-colors duration-300 hover:border-paper/40">
                  {/* Left: Metadata & Details */}
                  <div className="flex-1">
                    {/* Top Meta Bar */}
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line pb-4">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted">
                          {haki.year}
                        </span>
                        <span className="text-muted/40">·</span>
                        <span className="font-mono text-[0.7rem] font-medium text-paper">
                          {t(haki.issuer)}
                        </span>
                        <span className="text-muted/40">·</span>
                        <span className="font-mono text-[0.7rem] text-muted">
                          Jenis: {t(haki.type)}
                        </span>
                      </div>

                      <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-elevated px-3 py-1 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-muted">
                        <span className="size-1.5 rounded-full bg-paper" aria-hidden="true" />
                        Hak Cipta Terdaftar
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="mt-5 font-display text-xl font-bold leading-snug tracking-[-0.025em] sm:text-2xl">
                      {t(haki.title)}
                    </h3>

                    {/* Meta Info Grid */}
                    <dl className="mt-5 grid gap-3 rounded-xl border border-line bg-elevated/60 p-4 sm:grid-cols-2 lg:grid-cols-3">
                      <div>
                        <dt className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted">
                          {t(ui.certificates.registrationNumber)}
                        </dt>
                        <dd className="mt-1 font-mono text-xs font-semibold text-paper">
                          {haki.registrationNumber}
                        </dd>
                      </div>
                      <div>
                        <dt className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted">
                          {t(ui.certificates.applicationNumber)}
                        </dt>
                        <dd className="mt-1 font-mono text-xs font-semibold text-paper">
                          {haki.applicationNumber}
                        </dd>
                      </div>
                      <div className="sm:col-span-2 lg:col-span-1">
                        <dt className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted">
                          {t(ui.certificates.copyrightHolder)}
                        </dt>
                        <dd className="mt-1 text-xs font-semibold text-paper">
                          {t(haki.holder)}
                        </dd>
                      </div>
                    </dl>

                    {/* Authors / Pencipta */}
                    <p className="mt-4 text-xs leading-relaxed text-muted">
                      <span className="font-mono uppercase tracking-[0.16em] text-muted/70">
                        {t(ui.certificates.registeredCreator)}:{" "}
                      </span>
                      {haki.authors.map((author, i) => (
                        <span key={author}>
                          {author.toUpperCase().includes("DODI") ? (
                            <strong className="font-semibold text-paper underline decoration-paper/40 decoration-1 underline-offset-2">
                              {author}
                            </strong>
                          ) : (
                            <span>{author}</span>
                          )}
                          {i < haki.authors.length - 1 ? ", " : ""}
                        </span>
                      ))}
                    </p>

                    <p className="mt-3 flex items-center gap-1.5 font-mono text-[0.7rem] text-muted/80">
                      <Scale className="size-3.5 shrink-0" aria-hidden="true" />
                      {t(haki.protectionPeriod)}
                    </p>

                    {/* Action Buttons */}
                    <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-line pt-5">
                      {haki.fileUrl && (
                        <a
                          href={haki.fileUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="group/btn inline-flex items-center gap-2 rounded-full bg-paper px-5 py-2.5 text-xs font-semibold text-ink shadow-md transition duration-200 hover:scale-[1.02] hover:opacity-95"
                        >
                          <FileText className="size-3.5" aria-hidden="true" />
                          <span>{t(ui.certificates.openOfficialPdf)}</span>
                          <ArrowUpRight
                            className="size-3.5 transition-transform duration-200 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5"
                            aria-hidden="true"
                          />
                        </a>
                      )}

                      {haki.previewImages && haki.previewImages.length > 0 && (
                        <button
                          type="button"
                          onClick={() =>
                            setPreviewDoc({
                              title: t(haki.title),
                              pages: haki.previewImages || [],
                              pdfUrl: haki.fileUrl,
                              activePage: 0,
                            })
                          }
                          className="group/preview inline-flex items-center gap-2 rounded-full border border-line bg-elevated px-4 py-2.5 text-xs font-medium text-paper transition duration-200 hover:border-paper/40 hover:bg-surface"
                        >
                          <Eye className="size-3.5 text-muted transition-colors group-hover/preview:text-paper" aria-hidden="true" />
                          <span>{t(ui.certificates.previewProof)}</span>
                        </button>
                      )}

                      <span className="font-mono text-[0.7rem] text-muted">
                        {t(ui.certificates.legalNote)} · 260 KB
                      </span>
                    </div>
                  </div>

                  {/* Right: Realistic Document Preview Thumbnail */}
                  {haki.previewImage && (
                    <div className="w-full shrink-0 sm:w-64 lg:w-72">
                      <div
                        onClick={() =>
                          setPreviewDoc({
                            title: t(haki.title),
                            pages: haki.previewImages || [haki.previewImage!],
                            pdfUrl: haki.fileUrl,
                            activePage: 0,
                          })
                        }
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            setPreviewDoc({
                              title: t(haki.title),
                              pages: haki.previewImages || [haki.previewImage!],
                              pdfUrl: haki.fileUrl,
                              activePage: 0,
                            });
                          }
                        }}
                        className="group/doc relative cursor-pointer overflow-hidden rounded-xl border border-line bg-elevated p-2 shadow-lg transition-all duration-300 hover:border-paper/50 hover:shadow-2xl"
                        aria-label={t(ui.certificates.openHakiPreview)}
                      >
                        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-paper/5">
                          <img
                            src={haki.previewImage}
                            alt={t(ui.certificates.hakiProofAlt)}
                            className="size-full object-cover object-top transition duration-300 group-hover/doc:scale-105"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent opacity-75 transition duration-300 group-hover/doc:opacity-50" />

                          <div className="absolute inset-x-3 bottom-3 flex items-center justify-between">
                            <span className="flex items-center gap-1.5 rounded-full bg-surface/90 px-2.5 py-1 font-mono text-[0.7rem] font-medium text-paper backdrop-blur-md">
                              <Eye className="size-3" aria-hidden="true" />
                              {t(ui.certificates.viewProof)}
                            </span>
                            <span className="font-mono text-[0.7rem] text-paper/80 bg-ink/70 rounded-full px-2 py-0.5 backdrop-blur-sm">
                              {t(ui.certificates.twoPages)}
                            </span>
                          </div>
                        </div>

                        <div className="mt-2 flex items-center justify-between px-1 text-[0.7rem]">
                          <span className="font-mono text-muted">No. {haki.registrationNumber}</span>
                          <span className="font-mono text-muted">{t(ui.chrome.verified)}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </ul>
        </div>

        {/* ---------------- Certificates & Awards ---------------- */}
        <div className="mt-20 border-t border-line pt-16">
          <Reveal delay={40}>
            <div className="flex items-center gap-3">
              <span className="flex size-8 items-center justify-center rounded-lg border border-line bg-surface text-paper">
                <Award className="size-4" aria-hidden="true" />
              </span>
              <div>
                <h2 className="font-display text-2xl font-bold tracking-[-0.02em]">
                  {t(ui.certificates.certificatesHeading)}
                </h2>
                <p className="mt-0.5 text-xs text-muted">
                  {t(ui.certificates.certificatesSubtitle)}
                </p>
              </div>
            </div>
          </Reveal>

          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {certificates.map((cert, index) => (
              <Reveal as="li" key={cert.id} delay={index * 60}>
                <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-all duration-300 hover:border-paper/40 hover:shadow-xl">
                  {/* Certificate Image Thumbnail */}
                  {cert.previewImage && (
                    <div
                      onClick={() =>
                        setPreviewDoc({
                          title: t(cert.title),
                          pages: [cert.previewImage!],
                          pdfUrl: cert.fileUrl,
                          activePage: 0,
                          subtitle: `${t(cert.issuer)} · ${cert.year}`,
                          note: cert.credentialNumber,
                          isHaki: false,
                        })
                      }
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          setPreviewDoc({
                            title: t(cert.title),
                            pages: [cert.previewImage!],
                            pdfUrl: cert.fileUrl,
                            activePage: 0,
                            subtitle: `${t(cert.issuer)} · ${cert.year}`,
                            note: cert.credentialNumber,
                            isHaki: false,
                          });
                        }
                      }}
                      className="group/img relative aspect-[16/10] w-full cursor-pointer overflow-hidden border-b border-line bg-paper/5"
                      aria-label={`${t(ui.certificates.previewCertificate)} ${t(cert.title)}`}
                    >
                      <img
                        src={cert.previewImage}
                        alt={t(cert.title)}
                        className="size-full object-cover object-top transition duration-500 group-hover/img:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-60 transition duration-300 group-hover/img:opacity-40" />

                      {/* Top Badges */}
                      <div className="absolute top-3 left-3">
                        <span className="rounded-full border border-paper/20 bg-ink/75 px-2.5 py-0.5 font-mono text-[0.7rem] uppercase tracking-wider text-paper backdrop-blur-sm">
                          {cert.year}
                        </span>
                      </div>

                      {cert.badge && (
                        <div className="absolute top-3 right-3 max-w-[65%]">
                          <span className="block truncate rounded-full border border-paper/30 bg-ink/85 px-2.5 py-1 font-mono text-[0.7rem] font-semibold uppercase tracking-wider text-paper shadow-sm backdrop-blur-md">
                            {t(cert.badge)}
                          </span>
                        </div>
                      )}

                      {/* Bottom Overlay Info */}
                      <div className="absolute inset-x-3 bottom-3 flex items-center justify-between">
                        <span className="flex items-center gap-1.5 rounded-full bg-surface/90 px-2.5 py-1 font-mono text-[0.7rem] font-medium text-paper backdrop-blur-md">
                          <Eye className="size-3" aria-hidden="true" />
                          {t(ui.certificates.previewBadge)}
                        </span>
                        {cert.credentialNumber && (
                          <span className="max-w-[60%] truncate rounded-full bg-ink/75 px-2 py-0.5 font-mono text-[0.7rem] text-paper/80 backdrop-blur-sm">
                            {cert.credentialNumber}
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Card Content */}
                  <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
                    <div>
                      <span className="font-mono text-[0.7rem] font-medium uppercase tracking-[0.16em] text-paper/70">
                        {t(cert.category)}
                      </span>

                      <h3 className="mt-2 font-display text-base font-bold leading-snug tracking-[-0.02em] group-hover:text-paper">
                        {t(cert.title)}
                      </h3>

                      <p className="mt-2 text-xs font-medium text-paper/90">
                        {t(cert.issuer)}
                      </p>

                      <p className="mt-3 text-xs leading-relaxed text-muted line-clamp-3">
                        {t(cert.description)}
                      </p>
                    </div>

                    {/* Card Footer Actions */}
                    <div className="mt-5 flex items-center justify-between border-t border-line/60 pt-4">
                      <button
                        type="button"
                        onClick={() =>
                          setPreviewDoc({
                            title: t(cert.title),
                            pages: [cert.previewImage!],
                            pdfUrl: cert.fileUrl,
                            activePage: 0,
                            subtitle: `${t(cert.issuer)} · ${cert.year}`,
                            note: cert.credentialNumber,
                            isHaki: false,
                          })
                        }
                        className="inline-flex items-center gap-1.5 font-mono text-xs text-paper underline decoration-line transition-colors hover:decoration-paper cursor-pointer"
                      >
                        <Eye className="size-3.5" aria-hidden="true" />
                        <span>{t(ui.certificates.viewCertificate)}</span>
                      </button>

                      {cert.fileUrl && (
                        <a
                          href={cert.fileUrl}
                          target="_blank"
                          rel="noreferrer"
                          download
                          className="group/dl inline-flex items-center gap-1 font-mono text-xs text-muted transition-colors hover:text-paper"
                          title={t(ui.certificates.openOfficialFile)}
                        >
                          <span className="text-[0.7rem]">PDF</span>
                          <ArrowUpRight
                            className="size-3 transition-transform group-hover/dl:-translate-y-0.5 group-hover/dl:translate-x-0.5"
                            aria-hidden="true"
                          />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </Container>

      {/* ---------------- Universal Document Preview Modal ---------------- */}
      {previewDoc && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-ink/85 backdrop-blur-md transition-opacity"
            onClick={() => setPreviewDoc(null)}
            aria-hidden="true"
          />

          {/* Modal Card */}
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="doc-preview-title"
            aria-describedby="doc-preview-subtitle"
            tabIndex={-1}
            className="relative flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl outline-none"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between gap-3 border-b border-line px-5 py-4">
              <div className="flex min-w-0 items-center gap-2.5">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-line bg-paper/5 text-paper">
                  <ShieldCheck className="size-4" aria-hidden="true" />
                </span>
                <div className="min-w-0 max-w-md sm:max-w-xl">
                  <h3
                    id="doc-preview-title"
                    className="line-clamp-1 font-display text-sm font-bold text-paper sm:text-base"
                  >
                    {previewDoc.title}
                  </h3>
                  <p
                    id="doc-preview-subtitle"
                    className="line-clamp-1 font-mono text-[0.7rem] text-muted"
                  >
                    {previewDoc.subtitle || t(ui.certificates.officialVerified)}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setPreviewDoc(null)}
                className="flex size-11 shrink-0 items-center justify-center rounded-full border border-line text-muted transition hover:border-paper/40 hover:text-paper"
                aria-label={t(ui.certificates.closePreview)}
              >
                <X className="size-4" aria-hidden="true" />
              </button>
            </div>

            {/* Page Tabs / Info & Action Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line bg-elevated/40 px-5 py-3">
              <div className="flex flex-wrap items-center gap-2">
                {previewDoc.pages.length > 1 ? (
                  previewDoc.pages.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      aria-pressed={previewDoc.activePage === idx}
                      onClick={() =>
                        setPreviewDoc((prev) =>
                          prev ? { ...prev, activePage: idx } : null
                        )
                      }
                      className={`min-h-11 rounded-full px-3 font-mono text-xs transition duration-200 ${
                        previewDoc.activePage === idx
                          ? "bg-paper font-semibold text-ink"
                          : "border border-line bg-surface text-muted hover:text-paper"
                      }`}
                    >
                      {idx === 0 ? (
                        <>
                          <span className="hidden sm:inline">
                            {t(ui.certificates.page1Long)}
                          </span>
                          <span className="sm:hidden">
                            {t(ui.certificates.page1Short)}
                          </span>
                        </>
                      ) : (
                        <>
                          <span className="hidden sm:inline">
                            {t(ui.certificates.page2Long)}
                          </span>
                          <span className="sm:hidden">
                            {t(ui.certificates.page2Short)}
                          </span>
                        </>
                      )}
                    </button>
                  ))
                ) : (
                  <span className="max-w-[200px] truncate font-mono text-[0.7rem] text-muted sm:max-w-none sm:text-xs">
                    {previewDoc.note
                      ? `${t(ui.certificates.documentNumber)}: ${previewDoc.note}`
                      : t(ui.certificates.officialDocument)}
                  </span>
                )}
              </div>

              {previewDoc.pdfUrl && (
                <a
                  href={previewDoc.pdfUrl}
                  target="_blank"
                  rel="noreferrer"
                  download
                  className="inline-flex min-h-11 items-center gap-1.5 rounded-full border border-line bg-surface px-3 font-mono text-[0.7rem] text-muted transition hover:border-paper/40 hover:text-paper sm:text-xs"
                  aria-label={t(ui.certificates.openOfficialPdf)}
                >
                  <Download className="size-3.5" aria-hidden="true" />
                  <span className="hidden sm:inline">
                    {t(ui.certificates.openOfficialPdf)}
                  </span>
                  <span className="sm:hidden">{t(ui.chrome.downloadPdf)}</span>
                </a>
              )}
            </div>

            {/* Document Image Viewer */}
            <div className="flex-1 overflow-y-auto bg-ink/50 p-4 sm:p-6">
              <div className="mx-auto max-w-xl overflow-hidden rounded-xl border border-line/60 bg-paper/5 p-1 shadow-2xl">
                <img
                  src={previewDoc.pages[previewDoc.activePage]}
                  alt={`${previewDoc.title} — ${t(ui.certificates.pageLabel)} ${previewDoc.activePage + 1}`}
                  decoding="async"
                  className="w-full rounded-lg object-contain"
                />
              </div>

              {previewDoc.isHaki && previewDoc.activePage === 1 && (
                <div className="mx-auto mt-4 flex max-w-xl items-start gap-2 rounded-xl border border-line bg-elevated p-3 text-xs leading-relaxed text-muted">
                  <Info className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                  <p>
                    <strong className="text-paper">
                      {t(ui.certificates.noteLabel)}:
                    </strong>{" "}
                    {t(ui.certificates.creatorNote)}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
