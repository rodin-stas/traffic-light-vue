import {createWebHistory, createRouter} from "vue-router";
import Home from "@/views/Home.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/red",
    name: "red",
    component: Home,
  },
  {
    path: "/yellow",
    name: "yellow",
    component: Home,
  },
  {
    path: "/green",
    name: "green",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
