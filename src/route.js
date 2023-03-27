import { createRouter, createWebHistory } from "vue-router";

import Home from "@/pages/Home";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import Restaurant from "@/pages/Restaurant";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: Home },
    { path: "/privacy-policy", component: PrivacyPolicy },
    { path: "/restaurant", component: Restaurant },
  ],
});

export default router;
