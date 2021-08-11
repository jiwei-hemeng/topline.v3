import { createRouter, createWebHashHistory } from "vue-router";
// const Home = { template: "<div>Home</div>" };
const routes = [
  { path: "/", redirect: { name: "home" } },
  {
    path: "/home",
    name: "home",
    component: () => import(/* webpackChunkName: "group-home" */ "@/views"),
    meta: { transition: "slide-left" },
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "group-about" */ "@/views/About"),
    meta: { transition: "slide-left" },
  },
  {
    path: "/refDom",
    name: "refDom",
    component: () =>
      import(/* webpackChunkName: "group-refDom" */ "@/views/refDom"),
    meta: { transition: "slide-left", keep: true },
  },
  {
    path: "/animationend",
    name: "animationend",
    component: () =>
      import(
        /* webpackChunkName: "group-animationend" */ "@/views/animationend"
      ),
    meta: { transition: "slide-left" },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition && to.meta.keep) {
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
