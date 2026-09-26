import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// Builds client/src/prerender/entry.tsx for Node so server/seo.ts can render
// the real page components to HTML for crawlers that do not run JavaScript.
// Output goes to dist/ssr and never touches the client bundle in dist/public.
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: /^@\/components\/ui\/service-area-map$/,
        replacement: path.resolve(
          import.meta.dirname,
          "client/src/prerender/service-area-map-stub.tsx",
        ),
      },
      { find: "@", replacement: path.resolve(import.meta.dirname, "client", "src") },
      { find: "@shared", replacement: path.resolve(import.meta.dirname, "shared") },
      { find: "@assets", replacement: path.resolve(import.meta.dirname, "attached_assets") },
    ],
  },
  root: path.resolve(import.meta.dirname, "client"),
  ssr: {
    noExternal: true,
  },
  build: {
    ssr: path.resolve(import.meta.dirname, "client/src/prerender/entry.tsx"),
    outDir: path.resolve(import.meta.dirname, "dist/ssr"),
    emptyOutDir: true,
    ssrEmitAssets: false,
    rollupOptions: {
      output: { entryFileNames: "prerender.js", format: "esm" },
    },
  },
});
