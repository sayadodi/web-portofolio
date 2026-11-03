import type { Config } from "@react-router/dev/config";

import { projects } from "./app/content/projects";

export default {
  // Static build: no runtime server. Every route is written to HTML at build time.
  ssr: false,
  async prerender({ getStaticPaths }) {
    return [...getStaticPaths(), ...projects.map((project) => `/projects/${project.slug}`)];
  },
} satisfies Config;
