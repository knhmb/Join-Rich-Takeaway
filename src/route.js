import { createRouter, createWebHistory } from "vue-router";

import Home from "@/pages/Home";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import Restaurant from "@/pages/Restaurant";
import Cart from "@/pages/Cart";
import Cart2 from "@/pages/Cart2";
import Order from "@/pages/Order";
import UserProfile from "@/pages/UserProfile";
import PersonalInformation from "@/pages/PersonalInformation";
import ChangePassword from "@/pages/ChangePassword";
import DeliveryAddress from "@/pages/DeliveryAddress";
import Ewallet from "@/pages/Ewallet";
import Favorites from "@/pages/Favorites";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: Home },
    { path: "/privacy-policy", component: PrivacyPolicy },
    { path: "/restaurant", component: Restaurant },
    { path: "/cart", component: Cart },
    { path: "/cart-2", component: Cart2 },
    { path: "/order", component: Order },
    {
      path: "/user-profile",
      component: UserProfile,
      children: [
        {
          path: "personal-information",
          component: PersonalInformation,
          name: "personal-information",
        },
        {
          path: "change-password",
          component: ChangePassword,
          name: "change-password",
        },
        {
          path: "delivery-address",
          component: DeliveryAddress,
          name: "delivery-address",
        },
        {
          path: "e-wallet",
          component: Ewallet,
          name: "e-wallet",
        },
        {
          path: "favorites",
          component: Favorites,
          name: "favorites",
        },
      ],
    },
  ],
});

export default router;
