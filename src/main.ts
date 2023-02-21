import { createApp } from "vue";
import App from "./App.vue";
import { setupRouter, router } from "./router";
import { setupRouterGuard } from "@/router/guard/index";
import { setupStore } from "@/stores";

import "@/assets/css/style.css";
import "@/assets/css/normalize.css";
import "@/assets/css/tailwind.css";
import "vant/lib/index.css";


const bootstarap = async () => {
  const app = createApp(App);
  setupRouter(app);
  setupRouterGuard(router);
  setupStore(app);
  app.mount("#app");
};

bootstarap();
