import { LANGS, useLang } from "@/lib/i18n";
import { ui } from "@/content/ui";
import { cx } from "@/lib/cx";

/**
 * Two-segment language switch. Both options are always visible so the current
 * language is never ambiguous.
 */
export function LangToggle({ className }: { className?: string }) {
  const { lang, setLang, t } = useLang();

  return (
    <div
      role="group"
      aria-label={t(ui.chrome.toggleLang)}
      className={cx(
        "flex h-11 items-center gap-1 rounded-full border border-line p-1",
        className,
      )}
    >
      {LANGS.map((code) => {
        const active = lang === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLang(code)}
            aria-pressed={active}
            aria-label={code === "id" ? "Bahasa Indonesia" : "English"}
            className={cx(
              "min-h-8 rounded-full px-3 font-mono text-[0.7rem] uppercase leading-none tracking-[0.14em] transition-colors duration-200",
              active
                ? "bg-paper text-ink"
                : "text-muted hover:text-paper",
            )}
          >
            {code}
          </button>
        );
      })}
    </div>
  );
}
