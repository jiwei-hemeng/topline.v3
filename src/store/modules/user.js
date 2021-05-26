const state = () => ({
  userName: "saa",
  age: 20,
});
const mutations = {
  setAge(state, n) {
    state.age += n;
  },
};
const actions = {
  setAcAge({ commit }, num) {
    commit("setAge", num);
  },
};
export default { state, mutations, actions };
