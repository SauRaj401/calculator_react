/* eslint-disable no-undef */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@assets": `${path.resolve(__dirname, "./src/assets/")}`,
      "@components": `${path.resolve(__dirname, "./src/components/")}`,
      "@containers": `${path.resolve(__dirname, "./src/containers/")}`,
      "@garden": `${path.resolve(__dirname, "./src/garden-infra/")}`,
      "@samples": `${path.resolve(__dirname, "./src/samples/")}`,
    },
  },
});
