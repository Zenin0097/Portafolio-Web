import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://Zenin0097.github.io",
  base: "/Portafolio-Web",

  output: "static",
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    assets: "_assets",
  },
});
