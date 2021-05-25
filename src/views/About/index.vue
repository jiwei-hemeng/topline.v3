<template>
  <div>count: {{ count }}</div>
  <button @click="add">12313212</button>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "About",
  computed: {
    ...mapState({
      count: (state) => {
        console.log("state", state);
        return state.user.age;
      },
    }),
  },
  methods: {
    ...mapActions({
      add: "setAcAge",
    }),
  },
};
</script>
