import { createRouter, createWebHashHistory } from "vue-router";
// const Home = { template: "<div>Home</div>" };
const routes = [
  { path: "/", component: () => import("@/views") },
  { path: "/about", component: () => import("@/views/About") },
];
export default createRouter({
  history: createWebHashHistory(),
  routes,
});
