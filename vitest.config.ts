import { InlineConfig, UserConfig, defineConfig } from "vite";
import react from "@vitejs/plugin-react";

interface VitestConfigExport extends UserConfig {
  test: InlineConfig;
}
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./tests/setup.ts"], // MSW 등 공통 셋업
    coverage: {
      reporter: ["text", "html", "lcov"],
      lines: 80,
      branches: 80,
      functions: 80,
      statements: 80,
    },
  },
} as VitestConfigExport);
