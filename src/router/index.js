import { createRouter, createWebHashHistory } from "vue-router";
// const Home = { template: "<div>Home</div>" };
const routes = [
  { path: "/", redirect: { name: "home" } },
  {
    path: "/home",
    name: "home",
    component: () => import(/* webpackChunkName: "group-user" */ "@/views"),
    meta: { transition: "slide-left" },
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "group-user" */ "@/views/About"),
    meta: { transition: "slide-right" },
  },
  {
    path: "/refDom",
    name: "refDom",
    component: () =>
      import(/* webpackChunkName: "group-user" */ "@/views/refDom"),
    meta: { transition: "slide-left" },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// 允许访问的路由列表
const whiteList = ["/", "/about", "/home", "/refDom"];

router.beforeEach((to) => {
  // ...
  if (whiteList.indexOf(to.path) === -1) {
    return false;
  }
  return true;
});
export default router;
