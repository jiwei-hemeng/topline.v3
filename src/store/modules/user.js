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
  setAcAge({ state, commit }, num) {
    console.log("年龄", state.age);
    commit("setAge", num);
  },
};
export default { state, mutations, actions };
