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
    path: "/intro/film/:id",
    name: "FilmWork",
    component: () => import("@/components/FilmWork.vue"),
  },
  {
    path: "/intro/point",
    name: "Point",
    component: () => import("@/views/info/Point.vue"),
  },
  {
    path: "/work/game",
    name: "Game",
    meta:{
      group:"game"
    },
    component: () => import("@/views/work/Game.vue"),
  },
  {
    path: "/work/game/:id",
    name: "GameWork",
    component: () => import("@/components/GameWork.vue"),
  },
  {
    path: "/work/interact",
    name: "Interact",
    meta:{
      group:"interact"
    },
    component: () => import("@/views/work/Interact.vue"),
  },
  {
    path: "/work/interact/:id",
    name: "InteractWork",
    component: () => import("@/components/InteractWork.vue"),
  },
  {
    path: "/work/market",
    name: "Market",
    meta:{
      group:"market"
    },
    component: () => import("@/views/work/Market.vue"),
  },
  {
    path: "/work/market/:id",
    name: "MarketWork",
    component: () => import("@/components/MarketWork.vue"),
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
