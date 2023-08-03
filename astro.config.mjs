import { defineConfig } from "astro/config";
import { loadEnv } from "vite";
import tailwind from "@astrojs/tailwind";
const { SITE, BASE } = loadEnv(import.meta.env.MODE, process.cwd(), "");

// https://astro.build/config
export default defineConfig({
  // GitLab Pages requires exposed files to be located in a folder called
  // "public". So we're instructing Astro to put the static build output in a
  // folder of that name.
  outDir: "public",
  // The folder name Astro uses for static files (`public`) is already
  // reserved for the build output. So in deviation from the defaults we're
  // using a folder called `static` instead.
  publicDir: "static",
  site: SITE,
  base: BASE,
  build: {
    assets: "_assets",
  },
  experimental: {
    assets: true,
    viewTransitions: true,
  },
  integrations: [tailwind()],
});
