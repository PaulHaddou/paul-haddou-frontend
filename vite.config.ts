import { fileURLToPath, URL } from "node:url";
import { resolve, dirname } from "node:path";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite";

import Pages from "vite-plugin-pages";
import generateSitemap from "vite-plugin-pages-sitemap";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Pages({
      onRoutesGenerated: (routes) => generateSitemap({ routes }),
    }),
    VueI18nPlugin({
      compositionOnly: false,
      include: resolve(
        dirname(fileURLToPath(import.meta.url)),
        "./src/locales/**"
      ),
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    host: true,
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "@/assets/styles/grid.scss";
          @import "@/assets/styles/colors.scss";
          @import "@/assets/styles/fonts.scss";
          @import "@/assets/styles/global.scss";
          @import "@/assets/styles/typography.scss";
          @import "@/assets/styles/breakpoints.scss";
          @import "@/assets/styles/animations.scss";`,
      },
    },
  },
});
