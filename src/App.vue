<template>
  <div class="App">
    <div class="box">
      <router-link class="nav" to="/">生命周期</router-link>
      <router-link class="nav" to="/about">setup</router-link>
      <router-link class="nav" to="/refDom">ref获取Dom</router-link>
      <router-link class="nav" to="/animationend">动画</router-link>
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
import Lodding from "@/components/Lodding";
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
    Lodding,
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
  a {
    color: skyblue;
  }
}
</style>
<style scoped>
.box {
  display: flex;
  flex-wrap: wrap;
}
.box .nav {
  width: 24%;
  height: 60px;
  line-height: 60px;
}
.box .nav:not(:nth-child(4n)) {
  margin-right: calc(4% / 3);
}
</style>
