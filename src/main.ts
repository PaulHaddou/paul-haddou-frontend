import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import messages from "@intlify/unplugin-vue-i18n/messages";
import "./assets/styles/main.scss";

import App from "./App.vue";
import router from "./router";

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: "en",
  fallbackLocale: "en",
  availableLocales: ["en", "fr"],
  messages: messages,
});

const app = createApp(App);

app.use(router);
app.use(i18n);

if (!import.meta.env.PROD) {
  app.config.errorHandler = (e) => {
    console.log(e);
  };
}

app.mount("#app");
