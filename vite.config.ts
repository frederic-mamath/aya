import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        content: "src/content.tsx",
        background: "src/background.ts",
      },
      output: {
        entryFileNames: "[name].js",
      },
    },
    outDir: "dist",
  },
});
