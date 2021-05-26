<template>
  <div>user: {{ nickName }} --- {{ count }}</div>
  <button @click="add">12313212</button>
</template>

<script>
import { computed, toRefs, reactive } from "vue";
import { useStore } from "vuex";
export default {
  name: "About",
  setup() {
    const store = useStore();
    const state = store.state;
    const count = computed(() => {
      return state.user.age;
    });
    const add = () => {
      return store.dispatch("setAcAge");
    };
    const nickName = computed(() => {
      return state.user.userName;
    });
    let user = reactive({ count, nickName });
    return {
      ...toRefs(user),
      add,
    };
  },
};
</script>
