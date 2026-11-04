import {
  isRouteErrorResponse,
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import { Cursor } from "@/components/chrome/Cursor";
import { DotGrid } from "@/components/chrome/DotGrid";
import { Footer } from "@/components/chrome/Footer";
import { Navbar } from "@/components/chrome/Navbar";
import { ScrollProgress } from "@/components/chrome/ScrollProgress";
import { CvModalProvider } from "@/components/ui/CvModal";
import { site } from "@/content/site";
import { ui } from "@/content/ui";
import { currentLang, LangProvider, useLang } from "@/lib/i18n";
import { themeScript } from "@/lib/theme";
import "./app.css";

export const links: Route.LinksFunction = () => [
  { rel: "icon", href: "/favicon.svg?v=dr", type: "image/svg+xml" },
  { rel: "alternate icon", href: "/favicon.ico?v=dr" },
  { rel: "apple-touch-icon", href: "/apple-touch-icon.png?v=dr" },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700;800;900&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap",
  },
];

export const meta: Route.MetaFunction = () => [
  { title: `${site.shortName} — ${site.role.id}` },
  { name: "description", content: site.tagline.id },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" data-theme="dark">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#08080a" />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <LangProvider>
      <CvModalProvider>
        <Shell />
      </CvModalProvider>
    </LangProvider>
  );
}

function Shell() {
  const { t } = useLang();

  return (
    <>
      <DotGrid />
      <ScrollProgress />
      <Cursor />
      <div className="relative z-10 flex min-h-dvh flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[120] focus:rounded-md focus:bg-paper focus:px-4 focus:py-2 focus:text-ink"
        >
          {t(ui.chrome.skipToContent)}
        </a>
        <Navbar />
        <main id="main" className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export function HydrateFallback() {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-ink">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted">
        Loading…
      </p>
    </div>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  const lang = currentLang();
  let title = ui.error.title[lang];
  let details = ui.error.details[lang];

  if (isRouteErrorResponse(error)) {
    title = error.status === 404 ? "404" : `Error ${error.status}`;
    details =
      error.status === 404
        ? lang === "id"
          ? "Halaman yang kamu cari tidak ada."
          : "The page you are looking for does not exist."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error instanceof Error) {
    details = error.message;
  }

  return (
    <div className="relative z-10 flex min-h-dvh flex-col items-center justify-center gap-4 bg-ink px-6 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted">{title}</p>
      <p className="max-w-md text-muted">{details}</p>
      <Link
        to="/"
        className="mt-2 rounded-full bg-paper px-5 py-2.5 text-sm font-medium text-ink"
      >
        {ui.error.backHome[lang]}
      </Link>
    </div>
  );
}
