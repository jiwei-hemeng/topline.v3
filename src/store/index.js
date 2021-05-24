import { createStore } from "vuex";
export default createStore({
  state() {
    return {
      count: 20,
    };
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
});
