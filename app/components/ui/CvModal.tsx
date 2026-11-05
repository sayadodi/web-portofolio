import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { Download, ExternalLink, FileText, X } from "lucide-react";

import { ui } from "@/content/ui";
import { useFocusTrap } from "@/hooks/useFocusTrap";
import { useLang } from "@/lib/i18n";

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

  const openCvModal = useCallback(() => setIsOpen(true), []);
  const closeCvModal = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
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
  const { t } = useLang();
  const dialogRef = useFocusTrap<HTMLDivElement>(true, onClose);

  const pdfUrl = "/documents/cv-dodi-dwi-riskianto.pdf";
  const previewImg = "/documents/cv-preview.webp";

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-3 sm:p-6">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-ink/85 backdrop-blur-md"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cv-modal-title"
        aria-describedby="cv-modal-desc"
        tabIndex={-1}
        className="relative flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl outline-none"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between gap-3 border-b border-line px-5 py-4">
          <div className="flex min-w-0 items-center gap-3">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-line bg-elevated text-paper">
              <FileText className="size-4" aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <h2
                id="cv-modal-title"
                className="line-clamp-1 font-display text-sm font-bold text-paper sm:text-base"
              >
                {t(ui.chrome.cvTitle)}
              </h2>
              <p
                id="cv-modal-desc"
                className="line-clamp-1 font-mono text-[0.7rem] text-muted"
              >
                {t(ui.chrome.cvSubtitle)}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex size-11 shrink-0 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-paper/40 hover:text-paper"
            aria-label={t(ui.chrome.closeCv)}
          >
            <X className="size-4" aria-hidden="true" />
          </button>
        </div>

        {/* Action Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line bg-elevated/40 px-5 py-3">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-2.5 py-1 font-mono text-[0.7rem] uppercase tracking-wider text-muted">
            <span className="size-1.5 rounded-full bg-paper" aria-hidden="true" />
            {t(ui.chrome.verified)}
          </span>

          <div className="flex items-center gap-2">
            <a
              href={pdfUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center gap-1.5 rounded-full border border-line bg-surface px-4 font-mono text-xs text-muted transition-colors hover:border-paper/40 hover:text-paper"
            >
              <ExternalLink className="size-3.5" aria-hidden="true" />
              <span className="hidden sm:inline">{t(ui.chrome.openNewTab)}</span>
              <span className="sm:hidden">PDF</span>
            </a>

            <a
              href={pdfUrl}
              download="CV_Dodi_Dwi_Riskianto.pdf"
              className="inline-flex min-h-11 items-center gap-1.5 rounded-full bg-paper px-4 font-mono text-xs font-semibold text-ink transition-opacity hover:opacity-90"
            >
              <Download className="size-3.5" aria-hidden="true" />
              <span>{t(ui.chrome.downloadPdf)}</span>
            </a>
          </div>
        </div>

        {/* CV Document Viewer */}
        <div className="flex-1 overflow-y-auto bg-ink/50 p-4 sm:p-6">
          <div className="mx-auto max-w-xl overflow-hidden rounded-xl border border-line/60 bg-paper/5 p-1 shadow-2xl">
            <img
              src={previewImg}
              alt={t(ui.chrome.cvTitle)}
              loading="lazy"
              decoding="async"
              className="w-full rounded-lg object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
