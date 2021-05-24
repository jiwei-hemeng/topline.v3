import { createStore } from "vuex";
export default createStore({
  state() {
    return {
      count: 20,
    };
  },
  mutations: {
    increment(state, n) {
      state.count += n;
    },
  },
  actions: {
    ac_increment({ state, commit }) {
      console.log("context", state.count);
      commit("increment", 2);
    },
  },
});
