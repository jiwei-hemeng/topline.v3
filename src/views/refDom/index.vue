<template>
  <div>获取多个DOM元素</div>
  <!-- 获取多个Dom -->
  <ul>
    <li v-for="(item, index) in arr" :key="index" :ref="setRef">
      {{ item }}
    </li>
  </ul>
  <input type="number" name="userName" id="" ref="dom" />
</template>

<script>
import { ref, nextTick } from "vue";
export default {
  name: "refDom",
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
