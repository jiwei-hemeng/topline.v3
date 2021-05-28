<template>
  <div>获取多个DOM元素</div>
  <!-- 获取多个Dom -->
  <ul>
    <li v-for="(item, index) in arr" :key="index" :ref="setRef">
      {{ item }}
    </li>
  </ul>
  <input type="number" name="userName" id="" ref="dom" />
  <!-- Suspense是Vue3.0推出的一个内置特殊组件，用来定义具有异步请求数据的组建的显示。如果使用Suspense，要setup函数中需要返回一个promise. -->
  <!-- Suspense组件内置了两个具名插槽slot,一个是default，用来显示异步组件请求成功的内容；一个是fallback用来显示异步组件请求响应前页面显示的内容 -->
  <!-- default插槽可以有多个组件，但是需要有一个根节点 -->
  <Suspense>
    <template v-slot:default>
      <div>
        <AsyncShow />
      </div>
    </template>
    <template v-slot:fallback>
      <h1>Loading...</h1>
    </template>
  </Suspense>
</template>

<script>
import { ref, nextTick } from "vue";
import AsyncShow from "@/components/AyncShow/index.vue";
export default {
  name: "refDom",
  components: {
    AsyncShow,
  },
  setup() {
    // 单个dom获取
    const dom = ref(null);
    const arr = ref([1, 2, 3]);
    // 存储dom数组
    const myRef = ref([]);
    const setRef = (el) => {
      myRef.value.push(el);
    };
    // 下次Dom树更新时
    nextTick(() => {
      console.dir(myRef.value);
      console.log("单个dom", dom.value);
    });
    return {
      arr,
      setRef,
      dom,
    };
  },
};
</script>
