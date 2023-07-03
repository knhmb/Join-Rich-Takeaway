import { createStore } from "vuex";
import actions from "@/store/actions";
import mutations from "@/store/mutations";
import getters from "@/store/getters";
import authModule from "./modules/auth";
import dashboardModule from "./modules/dashboard";
import profileModule from "./modules/profile";
import cartModule from "./modules/cart";

const store = createStore({
  state() {
    return {
      authDialogVisible: false,
      authType: "login",
    };
  },
  getters,
  mutations,
  actions,
  modules: {
    auth: authModule,
    dashboard: dashboardModule,
    profile: profileModule,
    cart: cartModule,
  },
});

export default store;
