import { createRouter, createWebHashHistory } from "vue-router";
// const Home = { template: "<div>Home</div>" };
const routes = [
  { path: "/", redirect: { name: "home" } },
  {
    path: "/home",
    name: "home",
    component: () => import("@/views"),
    meta: { transition: "fade" },
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/views/About"),
    meta: { transition: "fade" },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// 允许访问的路由列表
const whiteList = ["/", "/about", "/home"];

router.beforeEach((to) => {
  // ...
  if (whiteList.indexOf(to.path) === -1) {
    return false;
  }
  return true;
});
export default router;
