import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base debe coincidir con el nombre del repo en GitHub
// (usuario.github.io/nombre-repo)
export default defineConfig({
  plugins: [react()],
  base: "/index/",
});
