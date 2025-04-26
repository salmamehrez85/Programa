import { createRouter, createWebHistory } from "vue-router";
import Home from "../Pages/Home.vue";
import Specification from "../Pages/Specification.vue";
import ClientApprovals from "../Pages/ClientApprovals.vue";
import Blog from "@/Pages/Blog.vue";
import Pricing from "../Pages/Pricing.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/specification", component: Specification },
  { path: "/clientApprovals", component: ClientApprovals },
  { path: "/blog", component: Blog },
  { path: "/clientApprovals", component: ClientApprovals },
  { path: "/Pricing", component: Pricing },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
