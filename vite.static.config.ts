import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { viteSingleFile } from "vite-plugin-singlefile";

/**
 * Builds the standalone static preview (static-preview/) into docs/preview
 * as a SINGLE self-contained index.html (all JS/CSS/images inlined) so it can
 * be downloaded and opened directly in any browser — no server, no hosting.
 */
export default defineConfig({
  root: path.resolve(__dirname, "static-preview"),
  base: "./",
  plugins: [react(), tailwindcss(), viteSingleFile()],
  resolve: {
    alias: { "@": path.resolve(__dirname, "src") },
  },
  build: {
    outDir: path.resolve(__dirname, "docs/preview"),
    emptyOutDir: true,
    // Inline every asset (product photos etc.) as data URIs.
    assetsInlineLimit: 100_000_000,
  },
});
