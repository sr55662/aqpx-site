import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/aqpx-site/",   // required for project pages
  plugins: [react()],
});
