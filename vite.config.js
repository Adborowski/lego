import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import htmlPlugin from "vite-plugin-html-config";

const htmlPluginOpt = {
  title: "Lego Mystery Box",
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), htmlPlugin(htmlPluginOpt)],
  base: "./",
});
