import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";

import { site } from "@/content/site";
import { ui } from "@/content/ui";
import { useLang } from "@/lib/i18n";

export function Footer() {
  const { t } = useLang();

  const links = [
    { to: "/projects", label: t(ui.nav.projects) },
    { to: "/career", label: t(ui.nav.career) },
    { to: "/certificates", label: t(ui.nav.certificates) },
    { to: "/contact", label: t(ui.nav.contact) },
  ];

  return (
    <footer className="relative z-10 border-t border-line">
      <div className="mx-auto w-full max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-display text-base font-bold tracking-[-0.02em] text-paper">
              {site.name}
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
              {t(site.tagline)}
            </p>
          </div>

          <nav aria-label={t(ui.footer.navLabel)}>
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.24em] text-muted">
              {t(ui.footer.navigate)}
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {links.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="inline-flex min-h-6 items-center text-muted transition-colors hover:text-paper"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.24em] text-muted">
              {t(ui.footer.elsewhere)}
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {site.socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex min-h-6 items-center gap-1 text-muted transition-colors hover:text-paper"
                  >
                    {social.label}
                    <ArrowUpRight
                      className="size-3 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}
          </p>
          <p>{t(ui.footer.built)}</p>
        </div>
      </div>
    </footer>
  );
}
