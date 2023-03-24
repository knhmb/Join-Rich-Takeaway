import { createRouter, createWebHistory } from "vue-router";

import Home from "@/pages/Home";
import PrivacyPolicy from "@/pages/PrivacyPolicy";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: Home },
    { path: "/privacy-policy", component: PrivacyPolicy },
  ],
});

export default router;
