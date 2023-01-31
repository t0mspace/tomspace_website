import { createApp } from "vue";
import App from "./App.vue";
import Particles from "vue3-particles";

import "./assets/main.scss";

createApp(App).use(Particles).mount("#app");
