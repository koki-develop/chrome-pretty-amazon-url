import { defineConfig } from "vite";
import { crx, defineManifest } from "@crxjs/vite-plugin";

const manifest = defineManifest({
  manifest_version: 3,
  name: "Pretty Amazon URL",
  version: "0.1.0",
  content_scripts: [
    {
      matches: ["*://*.amazon.co.jp/*"],
      js: ["index.ts"],
    },
  ],
});

export default defineConfig({
  plugins: [crx({ manifest })],
});
