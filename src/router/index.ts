import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Start from "../views/Start.vue";
import System from "../views/System.vue";
// import About from "../views/"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "start",
    component: Start,
  },
  {
    path: "/system",
    name: "system",
    component: System,
  },
  /*
  {
    path: "/about",
    name: "about",
    component: About,
  },
  */
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../../src/views/About.vue"),
    // beforeEnter: authGuard,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
