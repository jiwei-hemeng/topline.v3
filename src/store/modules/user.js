const state = () => ({
  userName: "saa",
  age: Number(sessionStorage.getItem("user-age")) || 25,
});
const mutations = {
  setAge(state, n) {
    state.age += n;
    sessionStorage.setItem("user-age", state.age);
  },
};
const actions = {
  setAcAge({ commit }, num) {
    commit("setAge", num);
  },
};
export default { state, mutations, actions };
