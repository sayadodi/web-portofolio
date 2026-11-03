import type { RouteConfig } from "@react-router/dev/routes";
import { index, route } from "@react-router/dev/routes";

export default [
  index("pages/home.tsx"),
  route("projects", "pages/projects.tsx"),
  route("projects/:slug", "pages/project-detail.tsx"),
  route("career", "pages/career.tsx"),
  route("certificates", "pages/certificates.tsx"),
  route("contact", "pages/contact.tsx"),
  route("*", "pages/not-found.tsx"),
] satisfies RouteConfig;
