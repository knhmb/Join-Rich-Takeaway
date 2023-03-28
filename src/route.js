import { createRouter, createWebHistory } from "vue-router";

import Home from "@/pages/Home";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import Restaurant from "@/pages/Restaurant";
import Cart from "@/pages/Cart";
import Cart2 from "@/pages/Cart2";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: Home },
    { path: "/privacy-policy", component: PrivacyPolicy },
    { path: "/restaurant", component: Restaurant },
    { path: "/cart", component: Cart },
    { path: "/cart-2", component: Cart2 },
  ],
});

export default router;
