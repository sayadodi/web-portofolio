import { Moon, Sun } from "lucide-react";

import { ui } from "@/content/ui";
import { useLang } from "@/lib/i18n";
import { toggleTheme } from "@/lib/theme";

export function ThemeToggle() {
  const { t } = useLang();

  return (
    <button
      type="button"
      onClick={() => toggleTheme()}
      aria-label={t(ui.chrome.toggleTheme)}
      title={t(ui.chrome.toggleTheme)}
      className="flex size-11 items-center justify-center rounded-full border border-line text-paper transition-colors duration-200 hover:border-paper/50 hover:bg-paper/5"
    >
      <Moon className="theme-icon-moon size-4" aria-hidden="true" />
      <Sun className="theme-icon-sun size-4" aria-hidden="true" />
    </button>
  );
}
