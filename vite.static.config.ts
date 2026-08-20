import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

/**
 * Builds the standalone static preview (static-preview/) into docs/preview.
 * Relative base + hash routing means the output works when served from any
 * subfolder (e.g. GitHub raw via raw.githack.com) with no server config.
 */
export default defineConfig({
  root: path.resolve(__dirname, "static-preview"),
  base: "./",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: { "@": path.resolve(__dirname, "src") },
  },
  build: {
    outDir: path.resolve(__dirname, "docs/preview"),
    emptyOutDir: true,
  },
});
