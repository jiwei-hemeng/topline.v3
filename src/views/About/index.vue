<template>
  <div class="About">
    <div>姓名: {{ user.userName }} 年龄 {{ user.age }}</div>
    <div>姓名: {{ name }} 年龄 {{ age }}</div>
    <myButton @click="add" @addchage="addchage">点我+2</myButton>
    <button @click="toHome">refDom</button>
  </div>
</template>

<script>
import { computed, reactive, toRefs, watchEffect, watch } from "vue";
import { useStore } from "vuex";
import router from "@/router/";
import myButton from "@/components/button";
export default {
  name: "About",
  components: {
    myButton,
  },
  setup() {
    const store = useStore();
    const state = store.state;
    const testmr = reactive({
      name: "咿呀咿呀",
      age: 20,
    });
    const add = () => {
      testmr.age++;
      store.dispatch("setAcAge", 2);
    };
    const user = computed(() => {
      return {
        userName: state.user.userName,
        age: state.user.age,
      };
    });
    const toHome = () => {
      router.push({
        path: "/refDom",
      });
    };
    const addchage = (val) => {
      console.log("我是子组件触发的", val);
    };
    watchEffect(() => {
      // 1、watch 是需要传入侦听的数据源，而 watchEffect 是自动收集数据源作为依赖。
      // 2、watch 可以访问侦听状态变化前后的值，而 watchEffect 没有。
      // 3、watch 是属性改变的时候执行，而 watchEffect 是默认会执行一次，然后属性改变也会执行
      console.log("改变了", testmr.age);
    });
    // watch 第一个参数 可以传递参数，也可以传递函数。
    watch(
      () => testmr.age,
      (newVal, oldVal) => {
        console.log("watch监听数据的变化", newVal, oldVal);
      },
      {
        // 深度监听
        deep: true,
        // 马上监听数据的变化
        immediate: true,
      }
    );
    return {
      add,
      user,
      ...toRefs(testmr),
      toHome,
      addchage,
    };
  },
};
</script>
