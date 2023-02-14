import { createRouter, createWebHistory } from "vue-router";
import type { App } from "vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/intro/traffic",
    name: "Traffic",
    component: () => import("@/views/info/Traffic.vue"),
  },
  {
    path: "/intro/film",
    name: "Film",
    component: () => import("@/views/info/Film.vue"),
  },
  {
    path: "/intro/point",
    name: "Point",
    component: () => import("@/views/info/Point.vue"),
  },
  {
    path: "/work/game",
    name: "Game",
    component: () => import("@/views/work/Game.vue"),
  },
  {
    path: "/work/interact",
    name: "Interact",
    component: () => import("@/views/work/Interact.vue"),
  },
  {
    path: "/work/animation",
    name: "Animation",
    component: () => import("@/views/work/Animation.vue"),
  },
  {
    path: "/work/animations/1",
    name: "animation1",
    component: () => import("@/views/work/animations/1.vue"),
  },
  {
    path: "/work/market",
    name: "Market",
    component: () => import("@/views/work/Market.vue"),
  },
  {
    path: "/news",
    name: "New",
    component: () => import("@/views/new/New.vue"),
  },
  {
    path: "/activity",
    name: "Activity",
    component: () => import("@/views/new/Activity.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/views/About.vue"),
  },
  {
    path: "/about/:name",
    name: "List",
    component: () => import("@/components/List.vue"),
  },
  {
    path: "/:path(.*)*",
    name: "error-page",
    redirect: "/",
  },
];

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { left: 0, top: 0 };
  },
});

export const setupRouter = (app: App) => {
  app.use(router);
};
