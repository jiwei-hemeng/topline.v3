<template>
  <div>姓名: {{ user.userName }} 年龄 {{ user.age }}</div>
  <div>姓名: {{ name }} 年龄 {{ age }}</div>
  <button @click="add">12313212</button>
</template>

<script>
import { computed, reactive, toRefs } from "vue";
import { useStore } from "vuex";
export default {
  name: "About",
  setup() {
    const store = useStore();
    const state = store.state;
    const add = () => {
      return store.dispatch("setAcAge", 1);
    };
    const testmr = reactive({
      name: "咿呀咿呀",
      age: 20,
    });
    const user = computed(() => {
      return {
        userName: state.user.userName,
        age: state.user.age,
      };
    });
    return {
      add,
      user,
      ...toRefs(testmr),
    };
  },
};
</script>
