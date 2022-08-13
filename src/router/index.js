import { createRouter, createWebHistory } from "vue-router";
import LogView from "../views/LogView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Login page",
      component: LogView,
    },
    {
      path: "/store",
      name: "Store page",
      component: () => import("../views/StoreView.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  document.title = to.name;
  next();
});

export default router;
