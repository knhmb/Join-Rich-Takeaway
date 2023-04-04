import { createApp } from "vue";
import App from "./App.vue";
import store from "./store/store";
import router from "./route";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import VueGoogleMaps from "@fawmi/vue-google-maps";
import Vue3Geolocation from "vue3-geolocation";

import i18n from "./i18n";

import BaseContainer from "@/ui/BaseContainer.vue";
import BaseButton from "@/ui/BaseButton.vue";
import BaseInput from "@/ui/BaseInput.vue";
import BaseCard from "@/ui/BaseCard.vue";

const app = createApp(App);

app.component("base-container", BaseContainer);
app.component("base-button", BaseButton);
app.component("base-input", BaseInput);
app.component("base-card", BaseCard);

app.use(ElementPlus);
app.use(store);
app.use(router);
app.use(Vue3Geolocation);
app.use(i18n);
app.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyA_C47k8nUTryyy5VSf-ddIIKVPyLrQ0R4",
    libraries: "places",
  },
  autobindAllEvents: true,
});

app.mount("#app");
