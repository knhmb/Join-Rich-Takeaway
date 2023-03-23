import { createStore } from "vuex";
import actions from "@/store/actions";
import mutations from "@/store/mutations";
import getters from "@/store/getters";

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
});

export default store;
