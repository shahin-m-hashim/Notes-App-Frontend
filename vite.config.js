import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  base: "/",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      api: "/src/api",
      utils: "/src/utils",
      store: "/src/store",
      pages: "/src/pages",
      config: "/src/config",
      routes: "/src/routes",
      layouts: "/src/layouts",
      schemas: "/src/schemas",
      providers: "/src/providers",
      components: "/src/components",
    },
  },
  server: {
    port: 3000,
  },
  preview: {
    port: 3000,
  },
  build: {
    outDir: "build",
  },
});
