import { resolve } from "path";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        "quality-assurance": resolve(__dirname, "quality-assurance.html"),
        "ui-ux": resolve(__dirname, "ui-ux.html"),
        "software-engineering": resolve(__dirname, "software-engineering.html"),
      },
      output: {
        sanitizeFileName: true,
      },
    },
    outDir: "docs",
  },
});
