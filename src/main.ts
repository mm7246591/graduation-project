import { createApp } from "vue";
import App from "./App.vue";
import { setupRouter, router } from "./router";
import { setupRouterGuard } from "@/router/guard/index";
import { setupStore } from "@/stores";
import VueLazyLoad from 'vue3-lazyload'

import "@/assets/css/style.css";
import "@/assets/css/normalize.css";
import "@/assets/css/tailwind.css";
import "vant/lib/index.css";


const Bootstrap = async () => {
  const app = createApp(App);
  setupRouter(app);
  setupRouterGuard(router);
  setupStore(app);
  app.use(VueLazyLoad, {
  loading: '/img/loading.gif',
  error: '',
})
  app.mount("#app");
};

Bootstrap();
