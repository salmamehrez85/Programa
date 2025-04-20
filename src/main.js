import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // Import the router

createApp(App).use(router).mount("#app"); // Make sure to use the router
