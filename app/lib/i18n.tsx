import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";
import type { ReactNode } from "react";

export type Lang = "id" | "en";

/** Every piece of copy on the site is stored in both languages. */
export interface Localized {
  id: string;
  en: string;
}

export const LANGS: Lang[] = ["id", "en"];
export const LANG_KEY = "lang";
export const DEFAULT_LANG: Lang = "id";

interface LangContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
  /** Resolve a localized string for the active language. */
  t: (value: Localized) => string;
}

const LangContext = createContext<LangContextValue | null>(null);

function readStoredLang(): string | null {
  try {
    return localStorage.getItem(LANG_KEY);
  } catch {
    return null;
  }
}

export function LangProvider({ children }: { children: ReactNode }) {
  // Starts on the default so hydration matches the pre-rendered HTML, then
  // switches in a layout effect — before the browser paints.
  const [lang, setLangState] = useState<Lang>(DEFAULT_LANG);

  useLayoutEffect(() => {
    const stored = readStoredLang();
    if (stored === "en" || stored === "id") setLangState(stored);
  }, []);

  useLayoutEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      localStorage.setItem(LANG_KEY, next);
    } catch {
      // Storage can be unavailable; the choice still applies for this session.
    }
  }, []);

  const toggleLang = useCallback(() => {
    setLang(lang === "id" ? "en" : "id");
  }, [lang, setLang]);

  const value = useMemo<LangContextValue>(
    () => ({ lang, setLang, toggleLang, t: (item) => item[lang] }),
    [lang, setLang, toggleLang],
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside <LangProvider>.");
  return ctx;
}

/** Reads the active language without React (error boundary, one-off reads). */
export function currentLang(): Lang {
  if (typeof document === "undefined") return DEFAULT_LANG;
  return document.documentElement.lang === "en" ? "en" : DEFAULT_LANG;
}

/** Keeps the browser tab title in sync with the active language. */
export function useLocalizedTitle(title: Localized): void {
  const { lang } = useLang();

  useEffect(() => {
    document.title = title[lang];
  }, [lang, title]);
}
