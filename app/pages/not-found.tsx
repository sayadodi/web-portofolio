import { Link } from "react-router";

import { Container } from "@/components/ui/Container";
import { ui } from "@/content/ui";
import { useLang, useLocalizedTitle } from "@/lib/i18n";

export default function NotFound() {
  const { t } = useLang();
  useLocalizedTitle({
    id: "Halaman tidak ditemukan — Dodi Dwi Riskianto",
    en: "Page not found — Dodi Dwi Riskianto",
  });

  return (
    <Container className="flex min-h-[60vh] max-w-4xl flex-col justify-center py-20">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted">404</p>
      <h1 className="mt-4 font-display text-[clamp(2.25rem,8vw,5rem)] font-extrabold leading-[0.92] tracking-[-0.045em]">
        {t(ui.notFound.title)}
      </h1>
      <p className="mt-4 max-w-md text-muted">{t(ui.notFound.description)}</p>
      <Link
        to="/"
        className="mt-8 w-fit rounded-full bg-paper px-6 py-3 text-sm font-medium text-ink"
      >
        {t(ui.notFound.backHome)}
      </Link>
    </Container>
  );
}
