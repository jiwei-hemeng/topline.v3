<template>
  <div>姓名: {{ user.userName }} 年龄 {{ user.age }}</div>
  <button @click="add">12313212</button>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "About",
  setup() {
    const store = useStore();
    const state = store.state;
    const add = () => {
      return store.dispatch("setAcAge", 1);
    };
    const user = computed(() => {
      return {
        userName: state.user.userName,
        age: state.user.age,
      };
    });
    return {
      add,
      user,
    };
  },
};
</script>
