import { createRouter, createWebHistory } from "vue-router";

import Home from "@/pages/Home";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: Home },
  ],
});

export default router;
