import { createRouter, createWebHistory } from "vue-router";
import Home from "../Pages/Home.vue";
import Specification from "../Pages/Specification.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/specification", component: Specification },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
