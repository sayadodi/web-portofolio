import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { Download, ExternalLink, FileText, X } from "lucide-react";

interface CvModalContextType {
  isOpen: boolean;
  openCvModal: () => void;
  closeCvModal: () => void;
}

const CvModalContext = createContext<CvModalContextType>({
  isOpen: false,
  openCvModal: () => {},
  closeCvModal: () => {},
});

export function useCvModal() {
  return useContext(CvModalContext);
}

export function CvModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openCvModal = () => setIsOpen(true);
  const closeCvModal = () => setIsOpen(false);

  useEffect(() => {
    if (!isOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeCvModal();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = original;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <CvModalContext.Provider value={{ isOpen, openCvModal, closeCvModal }}>
      {children}
      {isOpen && <CvModalView onClose={closeCvModal} />}
    </CvModalContext.Provider>
  );
}

function CvModalView({ onClose }: { onClose: () => void }) {
  const pdfUrl = "/documents/cv-dodi-dwi-riskianto.pdf";
  const previewImg = "/documents/cv-preview.webp";

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[110] flex items-center justify-center p-3 sm:p-6"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-ink/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl">
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-line px-5 py-4">
          <div className="flex items-center gap-3">
            <span className="flex size-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
              <FileText className="size-4" />
            </span>
            <div>
              <h3 className="line-clamp-1 font-display text-sm font-bold text-paper sm:text-base">
                Curriculum Vitae (CV) — Dodi Dwi Riskianto
              </h3>
              <p className="line-clamp-1 font-mono text-[0.65rem] text-muted">
                S1 Teknik Informatika · Software Engineer & Multimedia Creative
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex size-8 items-center justify-center rounded-lg border border-line text-muted transition hover:border-paper/40 hover:text-paper cursor-pointer"
            aria-label="Tutup pratinjau CV"
          >
            <X className="size-4" />
          </button>
        </div>

        {/* Action Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line bg-elevated/40 px-5 py-3">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[0.6rem] font-medium uppercase tracking-wider text-emerald-400">
              <span className="size-1.5 rounded-full bg-emerald-400" />
              CV Resmi Terverifikasi
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={pdfUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-3 py-1 font-mono text-xs text-muted transition hover:border-paper/40 hover:text-paper"
              title="Buka PDF di tab baru"
            >
              <ExternalLink className="size-3" />
              <span className="hidden sm:inline">Buka Tab Baru</span>
              <span className="sm:hidden">Tab Baru</span>
            </a>

            <a
              href={pdfUrl}
              download="CV_Dodi_Dwi_Riskianto.pdf"
              className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500 px-3.5 py-1 font-mono text-xs font-semibold text-ink transition hover:bg-emerald-400 shadow-sm"
            >
              <Download className="size-3" />
              <span>Unduh PDF</span>
            </a>
          </div>
        </div>

        {/* CV Document Viewer */}
        <div className="flex-1 overflow-y-auto bg-ink/50 p-4 sm:p-6">
          <div className="mx-auto max-w-xl overflow-hidden rounded-xl border border-line/60 bg-paper/5 p-1 shadow-2xl">
            <img
              src={previewImg}
              alt="Pratinjau CV Dodi Dwi Riskianto"
              className="w-full rounded-lg object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
