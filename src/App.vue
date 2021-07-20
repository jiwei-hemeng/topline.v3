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
    <router-view v-slot="{ Component, route }">
      <template v-if="Component">
        <!-- 使用任何自定义过渡和回退到 `fade` -->
        <transition :name="route.meta.transition || 'fade'">
          <suspense>
            <template #default>
              <component :is="Component"></component>
            </template>
            <template #fallback>
              <Lodding />
            </template>
          </suspense>
        </transition>
      </template>
    </router-view>
  </div>
</template>
<script>
import { getCurrentInstance, inject } from "vue";
import Lodding from "@/components/Lodding"
export default {
  name: "App",
  setup() {
    const { proxy, vnode } = getCurrentInstance();
    console.log("$title", proxy, proxy.$title);
    console.log("vnode", vnode);
    const $message = inject("$message");
    console.log("message", $message);
  },
  components: {
    Lodding
  }
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
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 2s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
}
</style>
