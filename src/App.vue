<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
  <div>count: {{ count }}</div>
  <button @click="add">12313212</button>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import { mapState, mapActions } from "vuex";
export default {
  name: "App",
  components: {
    HelloWorld,
  },
  computed: {
    ...mapState({
      count: (state) => state.count,
    }),
  },
  methods: {
    ...mapActions({
      add: "ac_increment",
    }),
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
