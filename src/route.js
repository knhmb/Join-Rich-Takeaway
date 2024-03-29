import { createRouter, createWebHistory } from "vue-router";
import store from "./store/store";

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
    { path: "/restaurant/:slug", component: Restaurant, name: "restaurant" },
    { path: "/cart", component: Cart },
    { path: "/cart-2", component: Cart2 },
    { path: "/order", component: Order },
    {
      path: "/user-profile",
      component: UserProfile,
      beforeEnter(_, _2, next) {
        if(store.getters['auth/isLoggedIn']) {
          next()
        } else {
          next('/')
        }
      },
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
