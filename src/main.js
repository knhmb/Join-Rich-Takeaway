import { createApp } from "vue";
import App from "./App.vue";
import store from "./store/store";
import router from "./route";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import BaseContainer from "@/ui/BaseContainer.vue";
import BaseButton from "@/ui/BaseButton.vue";
import BaseInput from "@/ui/BaseInput.vue";

const app = createApp(App);

app.component("base-container", BaseContainer);
app.component("base-button", BaseButton);
app.component("base-input", BaseInput);

app.use(ElementPlus);
app.use(store);
app.use(router);

app.mount("#app");
