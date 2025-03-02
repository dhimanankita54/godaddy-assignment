import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import tailwindcss from "tailwindcss";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./setupTests.js",
    include: ["**/__tests__/**/*.{test,spec}.{js,jsx,ts,tsx}", "**/*.{test,spec}.{js,jsx,ts,tsx}"],
  },
})
