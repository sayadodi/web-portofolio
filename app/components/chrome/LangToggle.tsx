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
        "flex h-10 items-center rounded-full border border-line p-1",
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
            className={cx(
              "rounded-full px-2.5 py-1 font-mono text-[0.6rem] uppercase leading-none tracking-[0.14em] transition-colors duration-200",
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
