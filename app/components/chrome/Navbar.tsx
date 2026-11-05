import { Eye, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";

import { LangToggle } from "@/components/chrome/LangToggle";
import { ThemeToggle } from "@/components/chrome/ThemeToggle";
import { useCvModal } from "@/components/ui/CvModal";
import { site } from "@/content/site";
import { ui } from "@/content/ui";
import { useFocusTrap } from "@/hooks/useFocusTrap";
import { cx } from "@/lib/cx";
import { useLang } from "@/lib/i18n";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { t } = useLang();
  const { openCvModal } = useCvModal();
  const menuRef = useFocusTrap<HTMLDivElement>(open, () => setOpen(false));

  const nav = [
    { to: "/", label: t(ui.nav.home), end: true },
    { to: "/projects", label: t(ui.nav.projects) },
    { to: "/career", label: t(ui.nav.career) },
    { to: "/certificates", label: t(ui.nav.certificates) },
    { to: "/contact", label: t(ui.nav.contact) },
  ];

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!open) return;

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-line bg-ink/75 backdrop-blur-xl">
        <div className="mx-auto flex h-[72px] w-full max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
          <div className="flex items-center gap-3 sm:gap-5">
            <Link
              to="/"
              className="flex items-center gap-1 font-display text-xl font-black tracking-tight text-paper transition-opacity hover:opacity-80"
              aria-label={t(ui.chrome.home)}
            >
              <span>Dr</span>
              <span className="size-1 rounded-full bg-paper" aria-hidden="true" />
            </Link>

            <LangToggle className="md:hidden" />
            <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
              {nav.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    cx(
                      "relative rounded-full px-4 py-3 text-sm transition-colors duration-200",
                      isActive ? "bg-paper text-ink" : "text-muted hover:text-paper",
                    )
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.label}
                      {isActive && (
                        <span
                          className="absolute bottom-1.5 left-1/2 size-[3px] -translate-x-1/2 rounded-full bg-ink"
                          aria-hidden="true"
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={openCvModal}
              className="hidden min-h-11 items-center gap-1.5 rounded-full border border-line bg-paper/5 px-4 font-mono text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-paper transition-colors duration-200 hover:border-paper/50 hover:bg-paper hover:text-ink sm:inline-flex"
              aria-label={t(ui.chrome.viewCv)}
            >
              <Eye className="size-3.5" aria-hidden="true" />
              <span>CV</span>
            </button>
            <LangToggle className="hidden md:flex" />
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={t(open ? ui.chrome.closeMenu : ui.chrome.openMenu)}
              className="flex size-11 items-center justify-center rounded-full border border-line md:hidden"
            >
              {open ? (
                <X className="size-4" aria-hidden="true" />
              ) : (
                <Menu className="size-4" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div
          ref={menuRef}
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label={t(ui.chrome.menuTitle)}
          className="fixed inset-x-0 bottom-0 top-[72px] z-40 overflow-y-auto bg-ink/95 backdrop-blur-xl md:hidden"
        >
          <nav aria-label="Mobile" className="mx-auto w-full max-w-6xl px-6 py-6">
            <ul>
              {nav.map((item, index) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.end}
                    onClick={() => setOpen(false)}
                    className="flex min-h-[64px] items-center justify-between border-b border-line py-4"
                  >
                    <span className="font-display text-3xl font-extrabold tracking-[-0.04em]">
                      {item.label}
                    </span>
                    <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted">
                      0{index + 1}
                    </span>
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-4">
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  openCvModal();
                }}
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-paper px-4 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-ink transition-opacity hover:opacity-90"
              >
                <Eye className="size-4" aria-hidden="true" />
                <span>{t(ui.chrome.viewCv)}</span>
              </button>

              <ul className="flex flex-wrap gap-x-5 gap-y-2 pt-1">
                {site.socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex min-h-11 items-center font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted hover:text-paper"
                    >
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
