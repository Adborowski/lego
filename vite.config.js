import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import htmlPlugin from "vite-plugin-html-config";

const htmlPluginOpt = {
  title: "Lego Mystery Box",
  favicon: "/react.svg",
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), htmlPlugin(htmlPluginOpt)],
});
