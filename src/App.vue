<template>
  <div class="App">
    <h1>Hello App!</h1>
    <div>
      <router-link to="/">Home(v3生命周期)</router-link>
      <router-link to="/about">About(setup)</router-link>
      <router-link to="/refDom">refDom(ref获取Dom)</router-link>
    </div>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view />
  </div>
</template>
<script>
import { getCurrentInstance, inject } from "vue";
export default {
  name: "App",
  setup() {
    const { proxy } = getCurrentInstance();
    console.log("$title", proxy, proxy.$title);
    const $message = inject("$message");
    console.log("message", $message);
  },
};
</script>
<style lang="scss" scoped>
.App {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  h1 {
    margin: 10px 0;
  }
  a {
    color: skyblue;
  }
}
</style>
