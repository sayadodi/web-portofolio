import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router";

import { LangToggle } from "@/components/chrome/LangToggle";
import { ThemeToggle } from "@/components/chrome/ThemeToggle";
import { site } from "@/content/site";
import { ui } from "@/content/ui";
import { cx } from "@/lib/cx";
import { useLang } from "@/lib/i18n";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { t } = useLang();

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
        <div className="mx-auto flex h-[72px] w-full max-w-6xl items-center justify-between gap-3 px-6">
          <div className="flex items-center">
            <LangToggle className="md:hidden" />
            <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
              {nav.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    cx(
                      "relative rounded-full px-4 py-2.5 text-sm transition-colors duration-200",
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
            <LangToggle className="hidden md:flex" />
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={t(open ? ui.chrome.closeMenu : ui.chrome.openMenu)}
              className="flex size-10 items-center justify-center rounded-full border border-line md:hidden"
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
          id="mobile-menu"
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
                    className="flex items-baseline justify-between border-b border-line py-5"
                  >
                    <span className="font-display text-3xl font-extrabold tracking-[-0.04em]">
                      {item.label}
                    </span>
                    <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-muted">
                      0{index + 1}
                    </span>
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3">
              <ul className="flex flex-wrap gap-4">
                {site.socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted"
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
