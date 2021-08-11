import { createApp } from "vue";
import store from "@/store/";
import App from "./App.vue";
import router from "@/router";
import "@/narmalize.css";
import Vant, { Lazyload } from "vant";
const app = createApp(App);
app.use(router);
app.use(store);
app.use(Vant);
app.use(Lazyload);
app.config.globalProperties.$title = "vue3.0 测试";
app.provide("$message", "哈喽，我是测试");
app.directive("focus", {
  // 当被绑定的元素挂载到 DOM 中时……
  mounted(el) {
    // 聚焦元素
    el.focus();
  },
});
app.mount("#app");
