import { createRouter, createWebHashHistory } from "vue-router";
// const Home = { template: "<div>Home</div>" };
const routes = [
  { path: "/", redirect: { name: "home" } },
  { path: "/home", name: "home", component: () => import("@/views") },
  { path: "/about", name: "about", component: () => import("@/views/About") },
];
export default createRouter({
  history: createWebHashHistory(),
  routes,
});
