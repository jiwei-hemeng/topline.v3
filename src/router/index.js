import { createRouter, createWebHistory } from "vue-router";
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
    meta: { transition: "slide-left" },
  },
  {
    path: "/refDom",
    name: "refDom",
    component: () =>
      import(/* webpackChunkName: "group-user" */ "@/views/refDom"),
    meta: { transition: "slide-left" },
  },
  {
    path: "/animationend",
    name: "animationend",
    component: () =>
      import(/* webpackChunkName: "group-user" */ "@/views/animationend"),
    meta: { transition: "slide-left" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

// 允许访问的路由列表
const whiteList = ["/", "/about", "/home", "/refDom", "/animationend"];

router.beforeEach((to) => {
  // ...
  if (whiteList.indexOf(to.path) === -1) {
    return false;
  }
  return true;
});
export default router;
